import React from "react";
import Card from "./Card";
import { useRef } from "react";

function Foreground() {

    const ref = useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vero",
      filesize: "0.8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vero",
      filesize: "0.4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vero",
      filesize: "0.6mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Upload",
        tagColor: "green",
      }
    },
  ];

  return (
    <div ref={ref} className="p-7 fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap">
      {
        data.map((item , idx) => <Card data={item} reference={ref} />)
      }
    </div>
  );
}

export default Foreground;
