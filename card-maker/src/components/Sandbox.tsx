import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Category } from "./Parts";

type Props = {
  categories: Category[];
  name: string;
  description: string;
};

const Sandbox: React.FC<Props> = (props: Props) => {
  const [smack, setSmack] = useState<string>("");

  useEffect(() => {
    // const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    // const ctx = canvas.getContext("2d");
    // if (!ctx) {
    //   return;
    // }
    // let baseImage = new Image();
    // baseImage.src = "/images/1.png";
    // let clothImage = new Image();
    // clothImage.src = "/images/2.png";
    // baseImage.onload = () => {
    //   ctx.drawImage(baseImage, 0, 0, 350, 350);
    // };
    // clothImage.onload = () => {
    //   ctx.drawImage(clothImage, 0, 0, 350, 350);
    // };
  }, []);

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
            className="character-card__image-layer character-card__image-layer--smack"
            style={{ zIndex: index + 1 }}
            src={selectedOption.url}
            alt={selectedOption.url ? selectedOption.name : ""}
            id={`image-${index}`}
          />
          <div
            className="character-card__color-layer character-card__color-layer--smack"
            style={{
              zIndex: index + 1,
              backgroundColor: category.color,
              mask: `url(${selectedOption.url}) 0% 0% / 100% 100%`,
              WebkitMask: `url(${selectedOption.url}) 0% 0% / 100% 100%`,
            }}
          >
            <div className="ripple"></div>
            <div className="ripple-two"></div>
            <div className="ripple-three"></div>
            <div className="blush"></div>
          </div>
        </>
      );
    });
  };

  const smackImage = () => {
    setSmack("smack");

    //code before the pause
    setTimeout(function () {
      setSmack("");
    }, 2000);
  };

  //   var c=document.getElementById("myCanvas");
  // var ctx=c.getContext("2d");
  // var imageObj1 = new Image();
  // var imageObj2 = new Image();
  // imageObj1.src = "1.png"
  // imageObj1.onload = function() {
  //    ctx.drawImage(imageObj1, 0, 0, 328, 526);
  //    imageObj2.src = "2.png";
  //    imageObj2.onload = function() {
  //       ctx.drawImage(imageObj2, 15, 85, 300, 300);
  //       var img = c.toDataURL("image/png");
  //       document.write('<img src="' + img + '" width="328" height="526"/>');
  //    }
  // };

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
            {/* <canvas id="canvas" width="400" height="400"></canvas> */}
            <div className="animating-background"></div>
            <div className={`animating-class ${smack}`}>
              {makeLayers(props.categories)}
            </div>
            <div className={`animating-class ${smack}`}>
              {makeLayers(props.categories)}
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
            <button onClick={() => smackImage()}>Smack</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
