import "./ui/CountrySwitch.css";
import { createElement, useState, useEffect } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export default function CountrySwitch({ enumeration }) {
    const defaultValue = enumeration.value || enumeration.universe[0];
    const [country, setCountry] = useState(defaultValue);

    useEffect(() => {
        if (enumeration.status = "available" && enumeration.value) {
            setCountry(enumeration.value);
        }
    });

    function changeSelection(event) {
        const newCountry = event.target.value;
        saveCountry(newCountry);
        setCountry(newCountry);
    }

    function saveCountry(newCountry) {
        enumeration.setValue(newCountry);
    }

    return <HelloWorldSample selectedCountry={country} countries={enumeration} onChange={changeSelection} />;
}
