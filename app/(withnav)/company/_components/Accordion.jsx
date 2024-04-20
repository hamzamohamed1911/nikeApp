"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";


const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`overflow-hidden border mb-4  rounded-lg border-gray-300 ${isOpen ? 'bg-[#f5f5f5]': ''}`}>
      <div className="flex justify-between items-center px-8 py-8  cursor-pointer" onClick={toggleAccordion}>
        <h3 className="text-2xl font-medium">{title}</h3>
        {isOpen ? (
                <FaCircleMinus className="w-8 h-8" />
              ) : (
                <FaPlusCircle className="w-8 h-8" />
              )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className=" text-2xl ">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
