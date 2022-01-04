import React, { useState } from "react";
import { Category } from "./Parts";
import { HexColorPicker } from "react-colorful";

type Props = {
  category: Category;
  onChangePart: (id: string, selected: string) => void;
  onImportCategory: (id: string) => void;
  onRemoveCategory: (id: string) => void;
};

const PartsSelect: React.FC<Props> = (props: Props) => {
  const [color, setColor] = useState<string>("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const getOptions = () => {
    if (props.category.options.length === 0) {
      return [
        <option value="" disabled hidden>
          Please upload pictures
        </option>,
        <option value="0" disabled>
          No options available
        </option>,
      ];
    }

    return props.category.options.map((option) => (
      <option value={option.name}>{option.name}</option>
    ));
  };

  return (
    <div className="input-row">
      <label htmlFor="inputselectexample" className="input-label">
        {props.category.name}
      </label>
      <div className="input-row__select">
        <select
          className="input input--select"
          name=""
          id="inputselectexample"
          value={props.category.selected}
          onChange={(e) => {
            props.onChangePart(props.category.id, e.target.value);
          }}
        >
          {getOptions()}
        </select>
        <button
          className="button button--icon"
          onClick={() => props.onImportCategory(props.category.id)}
        >
          <span className="material-icons">file_upload</span>
        </button>
        <button
          className="button button--icon"
          onClick={() => props.onRemoveCategory(props.category.id)}
        >
          <span className="material-icons">remove_circle</span>
        </button>
      </div>
      <button
        className="input__color-picker"
        style={{ backgroundColor: color }}
        onClick={() => setShowColorPicker(true)}
      ></button>
      <div className="color-picker-component">
        {showColorPicker && (
          <>
            <div
              className="color-picker-component__cover"
              onClick={() => setShowColorPicker(false)}
            ></div>
            <HexColorPicker color={color} onChange={setColor} />
          </>
        )}
      </div>
    </div>
  );
};

export default PartsSelect;
