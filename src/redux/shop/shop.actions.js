import ShopActionsTypes from "./shop.types";

export const updateCollections = collectionMap => {
  return {
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
  };
};
