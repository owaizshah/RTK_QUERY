import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => {
            return { type: "photo", id: photo.id };
          });
          tags.push({ type: "AlbumPhoto", id: album.id });

          return tags;
        },
        query: (albums) => {
          return {
            url: "/photos",
            params: {
              albumsId: albums.id,
            },
            method: "GET",
          };
        },
      }),
      addPhotos: builder.mutation({
        invalidatesTags: (result, error, album) => {
          console.log(album);
          return [{ type: "AlbumPhoto", id: album.id }];
        },
        query: (albums) => {
          return {
            url: "/photos",
            body: {
              albumsId: albums.id,
              url: faker.image.abstract(150, 150, true),
            },
            method: "POST",
          };
        },
      }),

      removePhotos: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "photo", id: photo.id }];
        },
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotosMutation,
} = photosApi;

export { photosApi };
