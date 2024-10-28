import React from "react";
import Container from "../Container";

import WhatShould from "./WhatShould";
import WhyShould from "./WhyShould";
import Baner2 from "./Baner2";
import { Books } from "../../assets";

const Baner = () => {
  return (
    <div className="w-full bg-white lg:my-24 md:my-20 my-16">
      <Container className="flex items-center justify-center flex-col lg:gap-28 md:gap-20 gap-16">
        {/* what we stand for */}
        <WhatShould/>

        {/* why should you study here */}
        <WhyShould/>

        {/* baner2 */}
        <Baner2 title="Sharpen Your Talents with Professional Guidance!!!" image={Books} className1="justify-between bg-text-head max-w-screen-lg lg:py-2 py-0" className="w-[100%] lg:w-[30%] md:w-[60%]" imageWidth="w-28 h-24"/>
      </Container>
    </div>
  );
};

export default Baner;
