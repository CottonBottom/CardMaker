import React from "react";

type Props = {};

const PartsSelect: React.FC<Props> = (props: Props) => {
  return (
    <div className="input-row">
      <label htmlFor="inputselectexample" className="input-label">
        Select Changable Label
      </label>
      <div className="input-row__select">
        <select className="input input--select" name="" id="inputselectexample">
          <option value="0">Some Option 0</option>
          <option value="1">Some Option 1</option>
          <option value="2">Some Option 2</option>
        </select>
        <button className="button button--icon">
          <span className="material-icons">file_upload</span>
        </button>
        <button className="button button--icon">
          <span className="material-icons">delete</span>
        </button>
        <button className="button button--icon">
          <span className="material-icons">remove_circle</span>
        </button>
      </div>
      <div className="input__color-picker"></div>
    </div>
  );
};

export default PartsSelect;
