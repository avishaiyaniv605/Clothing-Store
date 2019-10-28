import ShopActionsTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionMap => {
  return {
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
  };
};
export const fetchCollectionsFailure = errorMessage => {
  return {
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  };
};

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
