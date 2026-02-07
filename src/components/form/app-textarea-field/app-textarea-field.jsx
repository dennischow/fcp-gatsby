import React from "react";
import PropTypes from "prop-types";

const AppInputField = ({ label, name, placeholder, rows, maxLength, helperText, autoFocus, ...otherProps }) => {
    const { form } = otherProps;
    const isInvalid = form?.touched[name] && form?.errors[name];

    const getWrapperClassNames = () => {
        const classNames = ["app-textarea-field"];

        if (isInvalid) {
            classNames.push("app-textarea-field--invalid");
        }

        return classNames.join(" ");
    };

    return (
        <div className={getWrapperClassNames()}>
            <div className="app-textarea-field__form-group">
                {label ? (
                    <label className="app-textarea-field__label form-label" htmlFor={name}>
                        {label}
                    </label>
                ) : null}
                <textarea
                    className="app-textarea-field__input form-control"
                    placeholder={placeholder}
                    name={name}
                    rows={rows}
                    maxLength={maxLength}
                    value={form?.values[name]}
                    onChange={form?.handleChange}
                    onBlur={form?.handleBlur}
                    autoFocus={autoFocus ? true : null}
                />
                {isInvalid ? (
                    <div className="app-textarea-field__error-message invalid-feedback">{form?.errors[name]}</div>
                ) : null}
            </div>
        </div>
    );
};

AppTextareaField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    maxLength: PropTypes.number,
    helperText: PropTypes.string,
    autoFocus: PropTypes.bool,
    form: PropTypes.object,
};

export default AppTextareaField;
