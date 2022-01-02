import React from "react";
import { Category } from "./Parts";

type Props = {
  categories: Category[];
};

const Card: React.FC<Props> = (props: Props) => {
  const getSelectedOption = (category: Category) => {
    return category.options.filter(
      (option) => category.selected === option.name
    )[0];
  };

  const makeLayers = (categories: Category[]) => {
    return categories.map((category, index) => {
      const selectedOption = getSelectedOption(category);
      console.log("THE selected option", selectedOption);
      return (
        <img
          className="character-card__image-layer"
          style={{ zIndex: index + 1 }}
          src={selectedOption.url}
          alt={selectedOption.name}
        />
      );
    });
  };

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
            {makeLayers(props.categories)}
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
