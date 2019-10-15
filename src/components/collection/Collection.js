import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./Collection.scss";

const Collection = ({ title, items }) => {
  return (
    <div className="collection">
      <h1 className="collection-title">{title.toUpperCase()}</h1>
      <div className="collection-items">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...restOfItemProps }) => (
            <CollectionItem key={id} {...restOfItemProps} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
