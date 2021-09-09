import "../ui/flagpack.css";
import { createElement } from "react";

export const HelloWorldSample = ({ selectedCountry, countries, onChange }) => {
    const countryList = [...countries.universe];
    const selectedFlag = `fp ${selectedCountry.toLowerCase()}`;
    console.info("selectedFlag", selectedFlag);

    return (
        <div className="countryswitch form-group mx-radiobuttons">
            <div className="form-control">
                <span className={selectedFlag}></span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M4,6l4,4l4-4H4z" />
                </svg>
            </div>
            <ul className="countryswitch__list">
                {countryList.map(country => {
                    const countryId = `country_${country}`;
                    const flagpack = `fp ${country.toLowerCase()}`;

                    return (
                        <li className={country} key={countryId}>
                            <input
                                id={countryId}
                                type="radio"
                                name="CountrySwitch"
                                value={country}
                                onChange={() => onChange(event)}
                            ></input>
                            <label className="control-label" htmlFor={countryId}>
                                <span className={flagpack}></span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
