import React from "react";
import { Category } from "./Parts";

type Props = {
  category: Category;
  onChangePart: (id: string, selected: string) => void;
  onUpload: (id: string) => void;
  onDeleteOption: (id: string) => void;
  onRemoveCategory: (id: string) => void;
};

const PartsSelect: React.FC<Props> = (props: Props) => {
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
      <option value={option}>{option}</option>
    ));
  };

  return (
    <div className="input-row">
      <label htmlFor="inputselectexample" className="input-label">
        Select Changable Label
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
          onClick={() => props.onUpload(props.category.id)}
        >
          <span className="material-icons">file_upload</span>
        </button>
        <button
          className="button button--icon"
          onClick={() => props.onDeleteOption(props.category.id)}
        >
          <span className="material-icons">delete</span>
        </button>
        <button
          className="button button--icon"
          onClick={() => props.onRemoveCategory(props.category.id)}
        >
          <span className="material-icons">remove_circle</span>
        </button>
      </div>
      <div className="input__color-picker"></div>
    </div>
  );
};

export default PartsSelect;
