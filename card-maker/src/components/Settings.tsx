import React, { useEffect, useState } from "react";
import Parts, { Category } from "./Parts";
import Import from "./Import";
import axios from "axios";

type Props = {
  categories: Category[];
  name: string;
  description: string;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

const Settings: React.FC<Props> = (props: Props) => {
  const [activeTab, setActiveTab] = useState<"parts" | "data" | "rules">(
    "parts"
  );
  const [showImport, setShowImport] = useState<boolean>(false);
  const [showImportWarning, setShowImportWarning] = useState<boolean>(false);
  const [editingCategoryId, setEditingCategoryId] = useState<string>("1");

  const maxDescriptionLength = 175;

  useEffect(() => {
    //TODO: Delete Test Album
    // importAlbum("https://imgur.com/a/Eys8GOs");
  }, []);

  const importCategory = (id: string) => {
    setEditingCategoryId(id);
    setShowImport(true);
  };

  const importAlbum = (url: string) => {
    /** Validation */
    var validUrl = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    if (!validUrl.test(url)) {
      setShowImportWarning(true);
      return;
    }

    const albumHash = url.split("/").at(-1);
    if (!albumHash) {
      setShowImportWarning(true);
      return;
    }

    /** API Call */
    const clientId = "034457745cac811";
    //TODO: Hide when Backend is made
    const headers = {
      Authorization: `Client-ID ${clientId}`,
    };
    // Solved issue: https://stackoverflow.com/questions/43912795/imgur-image-not-showing-on-localhost
    // working on: http://imgurtest.localhost:3000/
    const getAlbum = `https://api.imgur.com/3/album/${albumHash}`;
    axios
      .get(getAlbum, { headers })
      .then((response) => {
        const name = response.data.data.title;
        const options = [
          ...response.data.data.images.map(
            (image: { description: string; link: string }) => {
              return {
                name: image.description,
                url: image.link,
              };
            }
          ),
          //Empty Option
          { name: "Empty", url: "" },
        ];
        const selected = options[0].name;

        console.log("THE EDITING CATEGORYID", editingCategoryId);

        const selectedCategory = props.categories.filter(
          (category) => category.id === editingCategoryId
        )[0];

        console.log("THE selectedCategory", selectedCategory);

        const updatedCategory: Category = {
          ...selectedCategory,
          name,
          options,
          selected,
        };

        console.log("THE updatedCategory", updatedCategory);

        const newCategories = props.categories.map((category) => {
          return category.id === editingCategoryId ? updatedCategory : category;
        });

        props.setCategories(newCategories);
        toggledShowImport(false);
        setShowImportWarning(false);
      })
      .catch((error) => {
        setShowImportWarning(true);
        console.error("Import failed:", error);
      });
    /** */
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
            categories={props.categories}
            setCategories={props.setCategories}
            importCategory={importCategory}
          />
        );
      case "data":
        return (
          <div className="tab-content">
            <div className="input-row">
              <label htmlFor="inputexample" className="input-label">
                Name
              </label>
              <input
                className="input"
                id="inputexample"
                type="text"
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
                maxLength={40}
              />
            </div>
            <div className="input-row">
              <label htmlFor="inputareaexample" className="input-label">
                Description
              </label>
              <textarea
                className="input input--area"
                id="inputareaexample"
                rows={3}
                value={props.description}
                onChange={(e) => props.setDescription(e.target.value)}
                maxLength={maxDescriptionLength}
              />
              {maxDescriptionLength - props.description.length <= 30 && (
                <span className="input__alert">
                  {`Remaining Characters: ${
                    maxDescriptionLength - props.description.length
                  }`}
                </span>
              )}
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
