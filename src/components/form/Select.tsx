import React from "react";

type SelectType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { label: string };
const Select = (props: SelectType) => {
  return (
    <div className="flex flex-col w-full group">
      <label
        htmlFor={props.label}
        className="font-raleway font-semibold leading-[1.6] max-w-[85%] capitalize text-lg"
      >
        {props.label}
      </label>

      <select
        name=""
        className=" bg-white group-hover:bg-gray-100 font-raleway font-light min-w-[100px] min-h-[50px] px-3 py-2 w-full text-base outline-none border"
        id={props.label}
        {...props}
      />
    </div>
  );
};

export default Select;
