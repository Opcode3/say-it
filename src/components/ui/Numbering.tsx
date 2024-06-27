const Numbering = ({ num }: { num: number }) => {
  return (
    <div className=" relative h-[260px] bg-yellow-300 block w-[260px] rounded-full overflow-hidden">
      <span className="leading-none absolute top-0 font-extrabold text-gray-200 text-[300px] font-montez">
        {num}
      </span>
      <span className=" absolute top-2 leading-none left-2 font-extrabold text-gray-300 text-[300px] font-montez">
        {num}
      </span>
      <span className=" absolute top-4 leading-none left-4 font-extrabold text-gray-400 text-[300px] font-montez">
        {num}
      </span>
    </div>
  );
};

export default Numbering;
