import React from "react";
import Layout from "./Layout";
import "./style.css";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="container"style={{height:545}}>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_ghfpce1h.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </Layout>
  );
};

export default PageNotFound;
