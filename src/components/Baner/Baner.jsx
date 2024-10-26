import React from "react";
import Container from "../Container";

import WhatShould from "./WhatShould";
import WhyShould from "./WhyShould";
import Baner2 from "./Baner2";
import { Books } from "../../assets";

const Baner = () => {
  return (
    <div className="w-full bg-white my-24">
      <Container className="flex items-center justify-center flex-col gap-28">
        {/* what we stand for */}
        <WhatShould/>

        {/* why should you study here */}
        <WhyShould/>

        {/* baner2 */}
        <Baner2 title="Sharpen Your Talents with Professional Guidance!!!" image={Books}/>
      </Container>
    </div>
  );
};

export default Baner;
