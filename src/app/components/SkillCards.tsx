import React from "react";
import Image from "next/image";

const SkillCards = ({ image, percent, title }: SkillCards) => {
  return (
    <>
      <div className="skillCards-wrapper">
        <Image
          src={image}
          width={80}
          height={80}
          alt="React"
          className="skillCards-images"
        />
        <h1 className="skillCards-title">{title}</h1>
        <div className="skillCards-percent">{percent}</div>
        <button className="skillCards-button">Explore More</button>
      </div>
    </>
  );
};

export default SkillCards;
