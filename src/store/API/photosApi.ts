import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utils/baseURL";

//--------------------------------------------------
// ответ на запрос - получение фото (photo_id ->)
export interface IGetPhotoResponse {
  status: number;
  message: {
    status: number;
    message: {
      post_id: string;
      photo_path: string;
      id: number;
      post_fk: string;
    };
  };
}
//--------------------------------------------------
// запрос и ответ - добавление фото
export interface IAddNewPhotoPayload {
  post_id: number;
  photo_file: object; // ??
}
export interface IAddNewPhotoResponse {
  status: number;
  message: string;
}
//--------------------------------------------------
// запрос и ответ - редактирование фото
export interface IEditPhotoPayload {
  photo_id : number;
  photo_file: object; // ?? замена старого на новое
}
export interface IEditPhotoResponse {
  status: number;
  message: string;
}
//--------------------------------------------------
// ответ на запрос - удаление фото (photo_id ->)
export interface IDelPhotoResponse {
  status: number;
  message: string;
}
//--------------------------------------------------

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    // получение фоток
    getPostPhotosList: builder.query<IGetPhotoResponse, string>({
      query: (photo_id) => `/photo?photo_id=${photo_id}`,
    }),

    // добавление фотки
    addPhotoToPost: builder.mutation<IAddNewPhotoResponse, IAddNewPhotoPayload>({
      query: (payload) => ({
        url: "/add-photo",
        method: "POST",
        body: payload,
      }),
    }),
    // редактирование фотки
    editPostPhoto: builder.mutation<IEditPhotoResponse, IEditPhotoPayload>({
      query: (payload) => ({
        url: "/photo",
        method: "PUT",
        body: payload,
      }),
    }),
    // удаление фотки
    deletePostPhoto: builder.mutation<IDelPhotoResponse, string>({
      query: (photo_id) => ({
        url: `/photo/?photo_id=${photo_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
