import React from "react";
import Card from "./Card";
import Settings from "./Settings";

type Props = {};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <div className="layout">
      <Card />
      <Settings />
    </div>
  );
};

export default Layout;
