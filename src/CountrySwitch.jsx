import "./ui/CountrySwitch.css";
import "./ui/flagpack.css";
import { createElement, useState, useEffect } from "react";

export const CountrySwitch = ({ enumeration, ...rest }) => {
    const id = rest.id || "";
    const style = rest.class || "";
    const widgetName = rest.name || "";
    const tIndex = rest.TabIndex || "";
    const countryList = [...enumeration.universe];
    const [selectedCountry, setselectedCountry] = useState(null);
    const [countryLabels, setCountryLabels] = useState({});

    useEffect(() => {
        if ((enumeration.status = "available" && selectedCountry == null)) {
            const labels = {};
            enumeration.universe.forEach(value => {
                const caption = enumeration.formatter.format(value);
                labels[value] = caption;
            });
            setCountryLabels(labels);
            setselectedCountry(enumeration.value);
        }
    }, [enumeration, selectedCountry]);

    function changeSelection(event) {
        const newCountry = event.target.value;
        saveCountry(newCountry);
        setselectedCountry(newCountry);
    }

    function saveCountry(newCountry) {
        enumeration.setValue(newCountry);
    }

    return (
        <div id={id} className={`countryswitch mx-radiobuttons ${widgetName} ${style}`}>
            <div className="form-control" tabIndex={tIndex}>
                <span className={`fp ${selectedCountry && selectedCountry.toLowerCase()}`}></span>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="countryswitch__chevron"
                >
                    <path d="M4,6l4,4l4-4H4z" />
                </svg>
            </div>
            <ul className="countryswitch__list">
                {countryList.map(country => {
                    const countryId = `country_${country}`;
                    const flagpack = `fp ${country.toLowerCase()}`;

                    return (
                        <li className={countryId} key={countryId}>
                            <input
                                id={countryId}
                                type="radio"
                                name="CountrySwitch"
                                value={country}
                                onChange={() => changeSelection(event)}
                            ></input>
                            <label className="control-label" htmlFor={countryId}>
                                <span className={flagpack}></span>
                                <span className="control-label-name">{countryLabels[country] || country}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
