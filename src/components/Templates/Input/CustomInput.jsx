import React, { useState } from "react";
import "./CustomInput.css";
import InterestCard from "../InterestCard/InterestCard"; // Импорт InterestCard

const CustomInput = ({
  label,
  type = "text",
  name,
  value = "",
  placeholder,
  onChange,
  className = "",
  error,
  required = false,
  options = [],
  width = "100%",
  height = "2rem",
  multiple = false,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleOptionClick = (optionValue) => {
    let updatedValues;
    if (selectedValues.includes(optionValue)) {
      updatedValues = selectedValues.filter((item) => item !== optionValue);
    } else {
      updatedValues = [...selectedValues, optionValue];
    }
    setSelectedValues(updatedValues);
    onChange(updatedValues);
  };

  const handleRemove = (optionValue) => {
    const updatedValues = selectedValues.filter((item) => item !== optionValue);
    setSelectedValues(updatedValues);
    onChange(updatedValues);
  };

  return (
    <div className={`custom-input ${className}`} style={{ width }}>
      {label && (
        <label className="custom-input__label">
          {label}{" "}
          {required && <span className="custom-input__required">*</span>}
        </label>
      )}

      {type === "select" ? (
        <>
          <select
            name={name}
            onChange={(e) => handleOptionClick(e.target.value)}
            className={`custom-input__select ${
              error ? "custom-input__input--error" : ""
            }`}
            style={{ height }}
            required={required}>
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "1rem",
              alignItems: "center",
            }}>
            {selectedValues.map((item) => (
              <InterestCard
                key={item}
                name={options.find((opt) => opt.value === item)?.label || item}
                isDelete
                onDelete={() => handleRemove(item)}
              />
            ))}
          </div>
        </>
      ) : (
        <input
          type={type}
          name={name}
          value={value ?? ""}
          placeholder={placeholder}
          onChange={onChange}
          className={`custom-input__input ${
            error ? "custom-input__input--error" : ""
          }`}
          style={{ height }}
          required={required}
        />
      )}

      {error && <span className="custom-input__error">{error}</span>}
    </div>
  );
};

export default CustomInput;
