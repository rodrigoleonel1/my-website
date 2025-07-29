import React from "react";

export default function Light() {
  return (
    <div className="absolute overflow-hidden inset-0 select-none -z-10">
      <div
        aria-hidden="true"
        className="h-[75px] w-[850px] rounded-full bg-gradient-to-r from-blue-950 to-blue-950 blur-[130px] absolute top-[1%] left-[90%] -translate-y-1/2 -translate-x-1/2 rotate-45 origin-left z-[1]  md:left-[80%] pointer-events-none"
      ></div>
    </div>
  );
}
