import React, { useState } from "react";
import PartsSelect from "./PartsSelect";

type Props = {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  importCategory: (id: string) => void;
};

export type Category = {
  name: string;
  id: string;
  options: {
    name: string;
    url: string;
  }[];
  selected: string;
  color: string;
};

const Parts: React.FC<Props> = (props: Props) => {
  const getUniqueId = (): string => {
    return new Date().getTime().toString();
  };

  const importCategory = (id: string) => {
    props.importCategory(id);
  };

  const addCategory = () => {
    const newDefault: Category = {
      name: "New Category",
      id: getUniqueId(),
      options: [
        {
          name: "Empty",
          url: "",
        },
      ],
      selected: "Empty",
      color: "Cyan",
    };
    props.setCategories([...props.categories, newDefault]);
  };

  const removeCategory = (id: string) => {
    const newCategories = [...props.categories];
    props.setCategories(newCategories.filter((category) => category.id !== id));
  };

  const updateCategoriesValue = (id: string, selected: string) => {
    return props.categories.map((category) =>
      category.id === id ? { ...category, selected } : category
    );
  };

  const getCategories = () => {
    return props.categories.map((category) => (
      <PartsSelect
        category={category}
        onChangePart={(id: string, selected: string) =>
          props.setCategories(updateCategoriesValue(id, selected))
        }
        onImportCategory={(id: string) => importCategory(id)}
        onRemoveCategory={(id: string) => removeCategory(id)}
      />
    ));
  };

  return (
    <div className="tab-content">
      {getCategories()}
      <div className="input-row input-row--add-button">
        <button className="button button--icon" onClick={() => addCategory()}>
          <span className="material-icons">add_circle</span>
        </button>
      </div>
    </div>
  );
};

export default Parts;
