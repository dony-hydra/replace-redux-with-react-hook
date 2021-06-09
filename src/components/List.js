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
                  className="h-5 w-5 text-green-600 rounded-xl"
                />
              </label>
            </div>

            <div className="flex-grow rounded-2xl p-5 justify-center bg-white bg-opacity-25 px-3">
              <div className="flex justify-center space-x-3 s">
                <div className="w-8 h-8 bg-white text-3xl rounded-md text-red-600 justify-self-center">
                  <div className="flex justify-center items-center py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
