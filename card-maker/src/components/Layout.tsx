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
    color: "Cyan",
  },
];

const Layout: React.FC<Props> = (props: Props) => {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);

  return (
    <div className="layout">
      <Card categories={categories} />
      <Settings categories={categories} setCategories={setCategories} />
    </div>
  );
};

export default Layout;
