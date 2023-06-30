import React from "react";

export default function Alert(props) {
  // const capitalFirstChar = (word) => {
  //   let txtConvertToLowerCase = word.toLowerCase();
  //   return (
  //     txtConvertToLowerCase.charAt(0).toUpperCase() +
  //     txtConvertToLowerCase.slice(1)
  //   );
  // };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {/* <strong>{capitalFirstChar(props.alert.type)}</strong>:{" "} */}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
