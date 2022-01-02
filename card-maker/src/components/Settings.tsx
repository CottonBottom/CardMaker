import React, { useState } from "react";
import Parts, { Category } from "./Parts";
import Import from "./Import";

type Props = {};

const defaultCategories = [
  {
    id: "1",
    options: ["option1", "option2", "option3", "option4", "option5"],
    selected: "option1",
    color: "Cyan",
  },
];

const Settings: React.FC<Props> = (props: Props) => {
  const [activeTab, setActiveTab] = useState<"parts" | "data" | "rules">(
    "parts"
  );
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [showImport, setShowImport] = useState<boolean>(false);
  const [showImportWarning, setShowImportWarning] = useState<boolean>(false);
  const [editingCategoryId, setEditingCategoryId] = useState<string>("");

  const importCategory = (id: string) => {
    console.log("The category Id", id);
    setEditingCategoryId(editingCategoryId);
    setShowImport(true);
  };

  const importAlbum = (url: string) => {
    /** Validation */
    var validUrl = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    if (!validUrl.test(url)) {
      setShowImportWarning(true);
      return;
    }

    /** API Call */

    console.log("The valid url", url);
    setShowImportWarning(false);
  };

  const toggledShowImport = (toggled: boolean) => {
    // Reseting category Id on hiding showImport
    if (!toggled) {
      setEditingCategoryId("");
    }
    setShowImport(toggled);
  };

  const tabContent = (tab: "parts" | "data" | "rules") => {
    switch (tab) {
      case "parts":
        return (
          <Parts
            categories={categories}
            setCategories={setCategories}
            importCategory={importCategory}
          />
        );
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
      <Import
        isOpen={showImport}
        importWarning={showImportWarning}
        onToggle={(toggled) => toggledShowImport(toggled)}
        onImportAlbum={importAlbum}
      />
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
