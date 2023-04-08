import React from "react";
import { Detector } from "react-detect-offline";
import img from "../img/404 Page.png";
const NotFound = (props) => {
  return (
    <div classNameName="h-[100%]">
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div className="bg-[#000] relative overflow-hidden h-screen flex justify-center items-center flex-col">
              <div className="flex justify-center items-center">
                <img src={img} alt=""  className="w-[400px]"/>
              </div>
              <div className="text-center">
                <p className="text-[#6a6a6a]">You Are All Alone Here</p>
              </div>
            </div>
          )
        }
      />
    </div>
  );
};

export default NotFound;
