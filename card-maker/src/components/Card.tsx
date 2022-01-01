import React from "react";

type Props = {};

const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className="card card--character-card">
      <div className="character-card-container">
        <div className="character-card">
          <div className="character-card__top">
            <span className="character-card__cost">
              <span>20</span>
            </span>
            <span className="material-icons">pets</span>
          </div>
          <div className="character-card__image-container">
            <div className="character-card__name">
              Card Name Very Long To Test
            </div>
          </div>
          <div className="character-card__legend">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </span>
          </div>
          <div className="character-card__abilities">
            <div className="character-card__skills">
              <span>Very Long Skill</span>
              <span>Very Long Skill</span>
              <span>Very Long Skill</span>
            </div>
            <div className="character-card__stats">3/3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
