import React from "react";

export default function AboutUs(props) {
  // const [myStyle, setStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const setDarkMode = () => {
  //   if (myStyle.color === "black") {
  //     setStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "grey",
    // border: "1px solid",
    // borderRadius: props.mode === "light" ? "black" : "white",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h1>About US</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <b>Analyze your text</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> gives you a way to analyze your text
              quickly and efficientyly.Be it word count ,character count or
              space count
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <b>Free To use</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> is a free character counter tool that
              provides instant character count and word count statistics for a
              given text.<strong>TextUtils</strong> reports the number of words
              and character.thus it is suitable for writing text with
              word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <b>Browser Compatible</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              this word counter software works in any web Browser such as chrome
              ,safari,opera,brave etc.. It suits to count character in
              facebook,blog,books,excel document,pdf document etc.
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-primary my-3" onClick={setDarkMode}>
        {btnText}
      </button> */}
    </div>
  );
}
