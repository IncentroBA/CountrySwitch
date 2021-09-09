import "./ui/CountrySwitch.css";
import { createElement, useState } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export default function CountrySwitch({ enumeration }) {
    const defaultValue = enumeration.value || enumeration.universe[0];
    const [country, setCountry] = useState(defaultValue);

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
