import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/selectors/shopSelector";
import CollectionItem from "../../components/collection-item/CollectionItem";
import "./Collection.scss";
//import SHOP_DATA from "../../redux/shop-data";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  //const { title, items } = SHOP_DATA["hats"];
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};

export default connect(mapStateToProps)(CollectionPage);
