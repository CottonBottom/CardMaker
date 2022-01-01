import React, { useState } from "react";
import PartsSelect from "./PartsSelect";

type Props = {};

export type Category = {
  id: string;
  options: string[];
  selected: string;
  color: string;
};

const defaultCategories = [
  {
    id: "1",
    options: ["option1", "option2", "option3", "option4", "option5"],
    selected: "option1",
    color: "Cyan",
  },
];

const Parts: React.FC<Props> = (props: Props) => {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);

  const getUniqueId = (): string => {
    return new Date().getTime().toString();
  };

  const addCategory = () => {
    const newDefault: Category = {
      id: getUniqueId(),
      options: [],
      selected: "",
      color: "White",
    };
    setCategories([...categories, newDefault]);
  };

  const removeCategory = (id: string) => {
    const newCategories = [...categories];
    setCategories(newCategories.filter((category) => category.id !== id));
  };

  const updateCategoriesValue = (id: string, selected: string) => {
    return categories.map((category) =>
      category.id === id ? { ...category, selected: selected } : category
    );
  };

  const getCategories = () => {
    return categories.map((category) => (
      <PartsSelect
        category={category}
        onChangePart={(id: string, selected: string) =>
          setCategories(updateCategoriesValue(id, selected))
        }
        onUpload={(id: string) => console.log(id)}
        onDeleteOption={(id: string) => console.log(id)}
        onRemoveCategory={(id: string) => removeCategory(id)}
      />
    ));
  };

  return (
    <div className="tab-content">
      {getCategories()}
      <div className="input-row">
        <button className="button button--icon" onClick={() => addCategory()}>
          <span className="material-icons">add_circle</span>
        </button>
      </div>
    </div>
  );
};

export default Parts;
