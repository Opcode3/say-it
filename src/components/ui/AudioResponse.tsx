import { PlayCircle } from "lucide-react";

const AudioResponse = () => {
  return (
    <div className="flex items-center cursor-pointer hover:bg-purple-100 gap-2 bg-gray-100 py-3 px-4 rounded-2xl">
      <div className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-gray-700">
        <PlayCircle stroke="#fff" strokeWidth={1} size={20} />
      </div>
      <div className="flex flex-col">
        <span className=" text-sm truncate">survey response 1</span>
        <p className=" text-xs text-gray-400">00.10.20</p>
      </div>
    </div>
  );
};

export default AudioResponse;
