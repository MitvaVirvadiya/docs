import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsDownload } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/80 rounded-[40px] p-5 text-white overflow-hidden"
    >
      <LuFileSpreadsheet />
      <p className="mt-5 text-sm font-semibold leading-tight">{data.desc}</p>
      <div className="footer w-full left-0 absolute bottom-0">
        <div className="flex justify-between px-8 mb-5 items-center">
          <h5>{data.fileSize} MB</h5>
          <span className="w-8 h-8 bg-zinc-600 rounded-full flex justify-center items-center">
            {data.downloading ? <MdOutlineCancel /> : <BsDownload />}
          </span>
        </div>
        <div
          className={`tag w-full ${
            data.downloading && "bg-blue-600 py-4"
          } ${data.clickDownload && "bg-green-600 py-3"} flex justify-center items-center`}
        >
          <h4
            className={`font-semibold ${
              data.downloading && "w-[70%] bg-white rounded-md h-2"
            }`}
          >
            {data.clickDownload && "Download now"}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
