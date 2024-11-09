import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const iconMapping: Record<string, React.ElementType> = {
  "01": CommandLineIcon,
  "02": ServerIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon,
};

const ServicesCards = ({ num, title, description }: ServicesCards) => {
  const IconComponent = iconMapping[num] || iconMapping["01"];

  return (
    <>
      <div className="servicesCards-wrapper">
        <IconComponent className="servicesCards-icon-comp" />
        <h1 className="servicesCards-title">{title}</h1>
        <p className="servicesCards-des">{description}</p>
        <p className="servicesCards-number">{num}</p>
      </div>
    </>
  );
};

export default ServicesCards;
