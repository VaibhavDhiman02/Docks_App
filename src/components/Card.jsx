import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data , reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} dragTransition={{bounceStiffness: 600 , bounceDamping: 10}} className="overflow-hidden flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-7 py-9">
      <FaRegFileAlt />
      <p className="mt-6 text-sm leading-tight">{data.desc}</p>
      <div className=" absolute left-0 bottom-0 w-full">
        <div className="px-3 py-2 my-2 flex items-center justify-around">
          <h5 className="text-sm font-extralight">{data.filesize}</h5>
          {data.close ? (
            <IoClose size="1.2em" />
          ) : (
            <MdOutlineFileDownload size="1.2em" />
          )}
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
