import React from "react";

type Props = {};

const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className="card">
      <div className="character-card-container">
        <div className="character-card">
          <div className="character-card__top">Hello</div>
          <div className="character-card__image-container">
            <div className="character-card__name">
              Card Name Very Long To Test
            </div>
          </div>
          <div className="character-card__legend">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim
          </div>
          <div className="character-card__abilities">
            <div className="character-card__skills">
              <span>Some Very Long Skill Going Two Lines Too</span>
              <span>Some Very Long Skill Going Two Lines Too</span>
              <span>Some Very Long Skill Going Two Lines Too</span>
            </div>
            <div className="character-card__stats">3/3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
