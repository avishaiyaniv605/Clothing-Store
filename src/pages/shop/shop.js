import React from "react";
import { SHOP_DATA } from "./shop-data";
import Collection from "../../components/collection/Collection";

class ShopPage extends React.Component {
  state = { collections: SHOP_DATA };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...restOfCollectionProps }) => (
          <Collection key={id} {...restOfCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;