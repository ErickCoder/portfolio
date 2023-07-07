import React from "react";
import Presentation from "./Presentation";
import WorkExperience from "./WorkExperience";
import Philosophy from "./Philosophy";
import SkillsSet from "./SkillsSet";
import MyPorjects from "./MyPorjects";
import Behance from "./Behance";

import Languages from "./Languages";
import { ContactLogic } from "./ContactLogic";
import NavBarResponsive from "./NavBarResponsive";
import ButtonWhatsapp from "./ButtonWhatsapp";

const IndexPortfolio = () => {
  return (
    <section className="max-w-[1600px] justify-center mx-auto">
      <NavBarResponsive />
      <ButtonWhatsapp/>
      <Presentation />
      <WorkExperience />
      <Languages />
      <Philosophy />
      <SkillsSet />
      <MyPorjects />
      <Behance />
      <ContactLogic />
    </section>
  );
};

export default IndexPortfolio;
