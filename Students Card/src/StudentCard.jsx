import { useEffect, useState } from "react";
// import data from "./Data";
import axios from "axios";
const StudentCard = ({ onClose, visible, selectedStudentId }) => {

  // const details = student.find((item) => item.id === selectedStudentId);

  const marks = Object.keys(selectedStudentId)
  .filter((key) => !isNaN(selectedStudentId[key]))
  .map((key) => parseInt(selectedStudentId[key]));

  const totalMark = marks.reduce((acc, mark) => acc + mark, 0);
  const averageMark = totalMark / marks.length;
  const highestMark = Math.max(...marks);
  const lowestMark = Math.min(...marks);






  if (!visible) return null;





  

  return (
    <div
      id="container"
      className=" fixed inset-0 backdrop-blur-xl w-screen h-screen  flex justify-center items-center z-50 transition ease-in-out duration-700"
    >
      <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <button onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">{selectedStudentId.name}</h2>
          <h2 className="text-2xl font-semibold">Class : {selectedStudentId.classD}</h2>
        </div>

        <div className="pt-4 space-y-2">
          <div>
            <div className="flex justify-between">
              <span>Total mark</span>
              <span>{totalMark}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span>Avarage Mark</span>
            <span>{averageMark}</span>
          </div>
        </div>

        <div className="pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Highest Mark</span>
            <span>{highestMark}</span>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span>Lowest mark</span>
              <span>{lowestMark}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
