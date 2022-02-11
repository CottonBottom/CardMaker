import React, { useState } from "react";
import Card from "./Card";
import { Category } from "./Parts";
import Sandbox from "./Sandbox";
import Settings from "./Settings";

type Props = {};

// const defaultCategories = [
//   {
//     name: "New Category",
//     id: "1",
//     options: [
//       {
//         name: "Empty",
//         url: "",
//       },
//     ],
//     selected: "Empty",
//     color: "#808080",
//   },
// ];
const defaultCategories = [
  {
    name: "Base",
    id: "1",
    options: [
      {
        name: "Base",
        url: "/images/1.png",
      },
    ],
    selected: "Base",
    color: "#808080",
  },
  {
    name: "Cloth",
    id: "2",
    options: [
      {
        name: "Cloth",
        url: "/images/2.png",
      },
    ],
    selected: "Cloth",
    color: "#808080",
  },
];

const Layout: React.FC<Props> = (props: Props) => {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="layout">
      {/* <Card categories={categories} name={name} description={description} /> */}
      <Sandbox categories={categories} name={name} description={description} />
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
