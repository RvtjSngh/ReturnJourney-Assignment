import React from "react";

const Item = ({ item }) => {
  return <li>{item.name}</li>;
};

export default React.memo(Item);
