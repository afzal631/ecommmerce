import React from "react";
import gif from "./XOsX.gif";

function Loading() {
  return (
    <>
      <div className="container block px-6 py-10 mx-auto mt-7 ">
        {/* <div className="grid grid-cols-1 mx-auto gap-8 mt-8 xl:mt-12 xl:gap-3 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 lg:w-5/6 md:w-5/6 "> */}
        <div
          style={{
            width: "10%",
            margin: "auto",
            // height: "0",
            // paddingBottom: "100%",
            // position: "relative",
          }}
        >
          <img
            src={gif}
            // style={{ position: "absolute" }}
            // frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <br />
          <p style={{ textAlign: "center" }}>
            <div>Loading...</div>
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Loading;
