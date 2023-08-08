import React, { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState("");

    const upperCaseText = () => {
        if (text.length === 0) {
            props.showAlert("Please enter some text.", "warning");
        } else {
            let txt = text.toUpperCase();
            setText(txt);
            props.showAlert(
                "Your text has been converted to uppercase successfully.",
                "success"
            );
        }
    };
    const lowerCaseText = () => {
        if (text.length === 0) {
            props.showAlert("Please enter some text.", "warning");
        } else {
            let txt = text.toLowerCase();
            setText(txt);
            props.showAlert(
                "Your text has been converted to lowercase successfully.",
                "success"
            );
        }
    };

    const updateText = (event) => {
        setText(event.target.value);
    };

    const clearField = () => {
        if (text.length === 0) {
            props.showAlert("Text field is already empty.", "warning");
        } else {
            setText("");
            props.showAlert(
                "Your text field has been cleared successfully.",
                "success"
            );
        }
    };

    const copyText = () => {
        if (text.length === 0) {
            props.showAlert("Please enter some text to copy.", "warning");
        } else {
            navigator.clipboard.writeText(text);
            props.showAlert("Your text has been copied successfully.", "success");
        }
    };

    const RemoveExtraSpaces = () => {
        if (text.length === 0) {
            props.showAlert("Please enter some text.", "warning");
        } else {
            const trimmedText = text.replace(/\s+/g, " ").trim();
            if (trimmedText === text) {
                props.showAlert("There are no extra spaces.", "warning");
            } else {
                setText(trimmedText);
                props.showAlert("Extra spaces have been removed successfully.", "success");
            }
        }
    };


    return (
        <>
            <div
                className="container-fluid"
                style={{ color: props.Mode === "dark" ? "white" : "#042743" }}
            >
                <div className="mb-3">
                    <label htmlFor="textbox" className="form-label my-3">
                        <b>{props.heading}</b>
                    </label>
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={updateText}
                        id="textbox"
                        rows="10"
                        style={{
                            resize: "none",
                            backgroundColor: props.Mode === "dark" ? "#092145" : "white",
                            color: props.Mode === "dark" ? "white" : "black",
                        }}
                    ></textarea>
                    <p className="my-1">
                        {text.split(" ") === ""
                            ? 0
                            : text.split(/\s+/).filter((word) => word !== "").length}{" "}
                        {text.split(/\s+/).filter((word) => word !== "").length >= 0 &&
                            text.split(/\s+/).filter((word) => word !== "").length <= 1
                            ? "word"
                            : "words"}{" "}
                        and {text.length}{" "}
                        {text.length >= 0 && text.length <= 1 ? "character" : "characters"}
                    </p>
                </div>
                <button
                    type="button"
                    className="btn btn-primary m-1"
                    onClick={upperCaseText}
                    disabled={text.length === 0}
                >
                    UpperCase
                </button>
                <button
                    type="button"
                    className="btn btn-primary m-1"
                    onClick={lowerCaseText}
                    disabled={text.length === 0}
                >
                    LowerCase
                </button>
                <button type="button" className="btn btn-primary m-1" onClick={clearField} disabled={text.length === 0}>
                    ClearText
                </button>
                <button
                    type="button"
                    className="btn btn-primary m-1"
                    onClick={copyText}
                    disabled={text.length === 0}
                >
                    CopyText
                </button>
                <button
                    type="button"
                    className="btn btn-primary m-1"
                    onClick={RemoveExtraSpaces}
                    disabled={text.length === 0}
                >
                    RemoveExtraSpaces
                </button>
            </div>
            <div
                className="container-fluid m-3"
                style={{ color: props.Mode === "dark" ? "white" : "#042743" }}
            >
                <h3>Preview</h3>
                <p className="w-80">
                    {text.length === 0 ? "Your text will be shown here" : text}
                </p>
            </div>
        </>
    );
}
