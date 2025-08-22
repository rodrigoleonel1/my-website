import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] });

export default function Logo() {
  return (
    <div className="flex aspect-square size-8 justify-center rounded-md text-white shadow-md bg-black">
      <span
        className={`flex items-center justify-center gap-2 text-xl ${audiowide.className} ml-1`}
      >
        R<span className="text-blue-500 text-4xl -mt-2.5 -ml-2.5">.</span>
      </span>
    </div>
  );
}
