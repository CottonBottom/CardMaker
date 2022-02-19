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
        url: "/images/3e.png",
      },
    ],
    selected: "Base",
    color: "#DF746D",
  },
  {
    name: "Right",
    id: "2",
    options: [
      {
        name: "Right",
        url: "/images/2e.png",
      },
    ],
    selected: "Right",
    color: "#DF746D",
  },
  {
    name: "Left",
    id: "3",
    options: [
      {
        name: "Left",
        url: "/images/1e.png",
      },
    ],
    selected: "Left",
    color: "#DF746D",
  },
  {
    name: "Cloth",
    id: "4",
    options: [
      {
        name: "Cloth",
        url: "/images/ee.png",
      },
    ],
    selected: "Cloth",
    color: "#F770A6",
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
