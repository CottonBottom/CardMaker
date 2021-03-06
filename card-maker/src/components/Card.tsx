import React from "react";
import { Category } from "./Parts";

type Props = {
  categories: Category[];
  name: string;
  description: string;
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
      return (
        <>
          <img
            className="character-card__image-layer"
            style={{ zIndex: index + 1 }}
            src={selectedOption.url}
            alt={selectedOption.url ? selectedOption.name : ""}
          />
          <div
            className="character-card__color-layer"
            style={{
              zIndex: index + 1,
              backgroundColor: category.color,
              mask: `url(${selectedOption.url}) 0% 0% / 100% 100%`,
              WebkitMask: `url(${selectedOption.url}) 0% 0% / 100% 100%`,
            }}
          />
        </>
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
            <div className="character-card__name-area">
              <div className="character-card__name-text">
                {props.name || "Name"}
              </div>
            </div>
          </div>
          <div className="character-card__legend-area">
            <div className="character-card__legend-text">
              {props.description || "Description"}
            </div>
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
