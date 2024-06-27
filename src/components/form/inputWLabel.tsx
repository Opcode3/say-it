import React, { ForwardedRef } from "react";

type InputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

const InputWLabel = React.forwardRef(
  (props: InputType, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="flex group flex-col w-full">
        <label
          htmlFor={props.label}
          className="font-raleway font-semibold leading-[1.6] max-w-[85%] capitalize text-lg"
        >
          {props.label}
        </label>
        <input
          type="text"
          className=" bg-white group-hover:bg-gray-100 font-raleway font-light min-w-[100px] min-h-[50px] px-3 py-2 w-full text-base outline-none border"
          name=""
          id={props.label}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default InputWLabel;
