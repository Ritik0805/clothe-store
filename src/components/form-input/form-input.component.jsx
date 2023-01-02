import React from "react";
import "./form-input.styles.scss";

export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            otherProps.value.length > 0 ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}

      <input
        className="form-input"
        {...otherProps}
        //   type="text"
        //   required
        //   onChange={handleChange}
        //   name="displayName"
        //   value={displayName}
      />
    </div>
  );
}
