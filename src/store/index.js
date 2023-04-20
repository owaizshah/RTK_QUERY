import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { userReducer } from "./slices/usersSlice";
import { photosApi } from "./apis/photosApi";

const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export * from "./thunk/fetchUser";
export * from "./thunk/addUser";
export * from "./thunk/removeUser";
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumsApi";
export {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotosMutation,
} from "./apis/photosApi";
