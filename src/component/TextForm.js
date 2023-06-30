import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const textChangeToUpperCase = () => {
    let convertUpperCaseText = text.toUpperCase();
    setText(convertUpperCaseText);
    convertUpperCaseText.length > 0 &&
      props.showAlert("convert To upper Case", "success");
  };

  const textChangeEvent = (e) => {
    let chnageText = e.target.value;
    setText(chnageText);
  };

  const textChangeToLowerCase = () => {
    setText(text.toLowerCase());
    text.length > 0 && props.showAlert("convert To Lower Case", "success");
  };

  const clearText = () => {
    setText("");
    text.length > 0 && props.showAlert("clear Text", "success");
  };

  const removeExtraSpaces = () => {
    let removeExtraSpaceText = text.replace(/\s+/g, " ").trim();

    setText(removeExtraSpaceText);
    text.length > 0 && props.showAlert("remove Extra spaces", "success");
  };
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(document.querySelector("#myText").value);
    document.getSelection().removeAllRanges();
    text.length > 0 && props.showAlert("copy to clipboard", "success");
  };
  return (
    <>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Analyze The Text Below</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="myText"
            rows="8"
            placeholder="Enter the text"
            value={text}
            onChange={textChangeEvent}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div
          className="btn btn-primary mx-2 my-2"
          onClick={textChangeToUpperCase}
        >
          Convert To UpperCase
        </div>
        <div
          className="btn btn-primary mx-2 my-2"
          onClick={textChangeToLowerCase}
        >
          Convert To LowerCase
        </div>

        <div className="btn btn-primary mx-2 my-2" onClick={copyToClipBoard}>
          Copy To ClipBoard
        </div>
        <div className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>
          Remove Extra spaces
        </div>
        <div className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Clear
        </div>
      </div>

      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          <b>Text Preview -</b> {text.length > 0 ? text : "No Text Found "}
        </p>
        <p>
          <b>word count -</b>{" "}
          {text.split(/\s+/).filter((elem) => elem.length !== 0).length}
        </p>
        <p>
          <b>character count -</b> {text.length}
        </p>
        <p>
          <b>space count -</b>
          {text.split("").filter((elem) => elem === " ").length}
        </p>
      </div>
    </>
  );
}
