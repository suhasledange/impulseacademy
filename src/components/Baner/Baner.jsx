import React from "react";
import Container from "../Container";

import WhatShould from "./WhatShould";
import WhyShould from "./WhyShould";
import Baner2 from "./Baner2";

const Baner = () => {
  return (
    <div className="w-full bg-white my-24">
      <Container className="flex items-center justify-center flex-col gap-28">
        {/* what we stand for */}
        <WhatShould/>

        {/* why should you study here */}
        <WhyShould/>

        {/* baner2 */}
        <Baner2/>
      </Container>
    </div>
  );
};

export default Baner;
