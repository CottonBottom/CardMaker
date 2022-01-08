import React, { useState } from "react";
import Card from "./Card";
import { Category } from "./Parts";
import Settings from "./Settings";

type Props = {};

const defaultCategories = [
  {
    name: "New Category",
    id: "1",
    options: [
      {
        name: "Empty",
        url: "",
      },
    ],
    selected: "Empty",
    color: "#ffffff",
  },
];

const Layout: React.FC<Props> = (props: Props) => {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="layout">
      <Card categories={categories} name={name} description={description} />
      <Settings
        categories={categories}
        name={name}
        description={description}
        setCategories={setCategories}
        setName={setName}
        setDescription={setDescription}
      />
    </div>
  );
};

export default Layout;
