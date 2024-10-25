import React from "react";
import Container from "../Container";

import WhatShould from "./WhatShould";
import WhyShould from "./WhyShould";

const Baner = () => {
  return (
    <div className="w-full bg-white mt-20 mb-10">
      <Container className="flex items-center justify-center flex-col gap-20">
        {/* what we stand for */}
        <WhatShould/>

        {/* why should you study here */}
        <WhyShould/>


      </Container>
    </div>
  );
};

export default Baner;
