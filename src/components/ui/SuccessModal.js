'use client';

import { motion } from 'framer-motion';

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
      <motion.div
        className="bg-white text-black rounded-lg p-8 w-full max-w-md text-center shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <svg className="w-16 h-16 mx-auto mb-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h2 className="text-3xl font-bold font-bitcount mb-4">Message Sent!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for reaching out. I'll get back to you shortly.
        </p>
        <button 
          onClick={onClose}
          className="bg-black text-white text-lg font-medium py-3 px-8 rounded-full transition-transform hover:scale-105"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessModal;
