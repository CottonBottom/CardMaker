import React from "react";
import PartsSelect from "./PartsSelect";

type Props = {};

const Settings: React.FC<Props> = (props: Props) => {
  return (
    <div className="card card--settings">
      <div className="tab-container">
        <div className="tabs">
          <button className="tab-button">Tab1</button>
          <button className="tab-button">Tab2</button>
          <button className="tab-button">Tab3</button>
        </div>
      </div>
      <div className="tab-content-container">
        <div className="tab-content">
          <div className="input-row">
            <label htmlFor="inputexample" className="input-label">
              Input Changable Label
            </label>
            <input className="input" id="inputexample" type="text" />
          </div>
          <div className="input-row">
            <label htmlFor="inputareaexample" className="input-label">
              Input Area Changable Label
            </label>
            <textarea
              className="input input--area"
              id="inputareaexample"
              rows={3}
            />
          </div>
          <PartsSelect />
          <PartsSelect />
          <PartsSelect />
          <div className="input-row">
            <button className="button button--icon">
              <span className="material-icons">add_circle</span>
            </button>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <div className="buttons">
          <button className="button button--full-width">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
