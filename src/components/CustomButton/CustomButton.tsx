import React from "react";
import { CustomBtn, LinkBtn } from "../../types/types";

const CustomButton: React.FC<CustomBtn> = ({
  tag,
  value,
  attrBtn,
  attrLink,
}) => {
  switch (tag) {
    case "button":
      return (
        <button
          accessKey={attrBtn?.accesskey}
          autoFocus={attrBtn?.autofocus}
          disabled={attrBtn?.disabled}
          form={attrBtn?.form}
          formAction={attrBtn?.formaction}
          formEncType={attrBtn?.formenctype}
          formMethod={attrBtn?.formmethod}
          formNoValidate={attrBtn?.formnovalidate}
          formTarget={attrBtn?.formtarget}
          name={attrBtn?.name}
          type={attrBtn?.type}
          value={attrBtn?.value}
        >
          {value}
        </button>
      );
    case "submit":
      return <input type="submit" value={value} />;
    case "a":
      return (
        <a
          accessKey={attrLink?.accesskey}
          download={attrLink?.download}
          href={attrLink?.href}
          hrefLang={attrLink?.hreflang}
          rel={attrLink?.rel}
          rev={attrLink?.rev}
          tabIndex={attrLink?.tabindex}
          target={attrLink?.target}
          title={attrLink?.title}
          type={attrLink?.type}
        ></a>
      );
  }
};

export default CustomButton;
