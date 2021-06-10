import React, { useContext } from "react";
import { ListContext } from "../context";

const List = () => {
  const [tasks] = useContext(ListContext);
  //   const tasks = [];
  return (
    <div className="space-y-6">
      {tasks.map((item, idx) => {
        return (
          <div
            className="flex flex-row space-x-3 justify-center items-center"
            key={idx}
          >
            <div className="flex-non">
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-green-600 rounded-2xl"
                />
              </label>
            </div>
            <div className="flex-grow rounded-2xl p-5 justify-center bg-white bg-opacity-25 px-3">
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-white text-3xl rounded-md text-green-400 justify-self-center">
                  <div className="flex justify-center items-center py-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow py-1">
                  <p className="justify-self-center font-bold">{item}</p>
                </div>
                <div className="flex-none flex items-center justify-center text-gray-100 text-xs">
                  09:00 AM
                </div>
              </div>
              <div className="pt-2 flex">
                <div className="flex-none w-10"></div>
                <div className="flex-grow pl-1">
                  Skype call, kick off with Elena and Andrew from Shrink
                </div>
                <div className="flex-none w-10"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
