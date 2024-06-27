import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function InputForm({ label, name, type, textarea, ...rest }) {
  const [show, setShow] = useState(false);
  const inputType = show ? "text" : type || "text";

  return (
    <div className="relative flex flex-col items-start">
      <label
        className="pl-1 text-sm text-color_primary after:text-red-500 after:content-['*']"
        htmlFor={name}
      >
        {label}
      </label>

      <Field
        as={textarea ? "textarea" : ""}
        id={name}
        name={name}
        type={inputType}
        {...rest}
        className={`w-full rounded-md border px-3 py-2 outline-color_primary ${textarea ? "h-24 md:h-32" : ""} `}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-5 top-8 text-color_primary"
      >
        {type === "password" ? (
          show ? (
            <FaRegEyeSlash size={20} />
          ) : (
            <FaRegEye size={20} />
          )
        ) : (
          ""
        )}
      </button>

      <span className="pl-3 text-xs text-red-500">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
}

export default InputForm;
