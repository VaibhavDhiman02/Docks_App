import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="text-xl text-zinc-600 py-8 flex justify-center">
          Documents
        </div>
        <h1 className="text-zinc-900 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vw] leading-none tracking-tighter font-bold">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
