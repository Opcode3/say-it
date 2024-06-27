import React, { ForwardedRef } from "react";

type TextAreaWLabelType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { label: string };

const TextAreaWLabel = React.forwardRef(
  (props: TextAreaWLabelType, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <div className="flex group flex-col w-full">
        <label
          htmlFor={props.label}
          className="font-raleway font-semibold leading-[1.6] max-w-[85%] capitalize text-lg"
        >
          {props.label}
        </label>
        <textarea
          type="text"
          className=" bg-white group-hover:bg-gray-100 font-raleway font-light min-w-[100px] min-h-[150px] px-4 py-3 w-full text-base outline-none border"
          name=""
          id={props.label}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default TextAreaWLabel;
