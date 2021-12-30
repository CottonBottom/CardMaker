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
      <div className="tab-content">Tab Content</div>
      <button className="button button--full-width">Generate</button>
    </div>
  );
};

export default Settings;
