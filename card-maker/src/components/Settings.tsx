import React, { useState } from "react";
import Parts from "./Parts";

type Props = {};

const Settings: React.FC<Props> = (props: Props) => {
  const [activeTab, setActiveTab] = useState<"parts" | "data" | "rules">(
    "parts"
  );

  const tabContent = (tab: "parts" | "data" | "rules") => {
    switch (tab) {
      case "parts":
        return <Parts />;
      case "data":
        return (
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
          </div>
        );
      case "rules":
        return (
          <div className="tab-content">
            <div className="input-row">Soon</div>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="card card--settings">
      <div className="tab-container">
        <div className="tabs">
          <button
            className={`tab-button${
              activeTab === "parts" ? " tab-button--selected" : ""
            }`}
            onClick={() => setActiveTab("parts")}
          >
            Parts
          </button>
          <button
            className={`tab-button${
              activeTab === "data" ? " tab-button--selected" : ""
            }`}
            onClick={() => setActiveTab("data")}
          >
            Data
          </button>
          <button
            className={`tab-button${
              activeTab === "rules" ? " tab-button--selected" : ""
            }`}
            onClick={() => setActiveTab("rules")}
          >
            Rules
          </button>
        </div>
      </div>
      <div className="tab-content-container">{tabContent(activeTab)}</div>
      <div className="buttons-container">
        <div className="buttons">
          <button className="button button--full-width">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
