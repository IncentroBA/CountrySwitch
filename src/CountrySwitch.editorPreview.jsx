import { Component, createElement } from "react";

export class preview extends Component {
    render() {
        return (
            <div className="countryswitch mx-radiobuttons">
                <div className="form-control">
                    <span className={`fp nl`}></span>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="countryswitch__chevron"
                    >
                        <path d="M4,6l4,4l4-4H4z" />
                    </svg>
                </div>
            </div>
        );
    }
}

export function getPreviewCss() {
    return require("./ui/CountrySwitch.css");
}
