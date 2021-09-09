import { Component, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export class preview extends Component {
    render() {
        return <HelloWorldSample countries={this.props.enumeration} />;
    }
}

export function getPreviewCss() {
    return require("./ui/CountrySwitch.css");
}
