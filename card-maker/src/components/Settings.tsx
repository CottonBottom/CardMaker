import React from "react";

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
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
          <div className="input-row">
            <label htmlFor="inputselectexample" className="input-label">
              Select Changable Label
            </label>
            <select
              className="input input--select"
              name=""
              id="inputselectexample"
            >
              <option value="0">Some Option 0</option>
              <option value="1">Some Option 1</option>
              <option value="2">Some Option 2</option>
            </select>
          </div>
        </div>
      </div>
      <button className="button button--full-width">Generate</button>
    </div>
  );
};

export default Settings;
