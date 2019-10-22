import { createSelector } from "reselect";

const COLLECTION_MAP_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = state => state.shop;
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => {
      console.log(collections);
      return collections[COLLECTION_MAP_ID[collectionUrlParam] - 1];
    }
  );
