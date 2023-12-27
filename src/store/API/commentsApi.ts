import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utils/baseURL";

//--------------------------------------------------
// ответ на запрос - получение комментов (post_id ->)
export interface IGetCommentsResponse {
  status: number;
  message: string[];
}
//--------------------------------------------------
// запрос и ответ - добавление коммента
export interface IAddNewCommentPayload {
  post_id: number;
  user_id: number;
  text: string;
}
export interface IAddNewCommentResponse {
  status: number;
  message: string;
}
//--------------------------------------------------
// запрос и ответ - редактирование коммента
export interface IEditCommentPayload {
  comment_id: number;
  new_comment_text: string;
}
export interface IEditCommentResponse {
  status: number;
  message: string;
}
//--------------------------------------------------
// ответ на запрос - удаление коммента (comment_id ->)
export interface IDelCommentResponse {
  status: number;
  message: string;
}
//--------------------------------------------------

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  // можно было написать сокращённо: baseUrl (но ... 'baseUrl' <> 'baseURL')
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    // получение комментов
    getPostComments: builder.query<IGetCommentsResponse, string>({
      query: (postId) => `/comment?post_id=${postId}`,
    }),
    // добавление коммента
    addCommentToPost: builder.mutation<IAddNewCommentResponse, IAddNewCommentPayload>({
      query: (payload) => ({
        url: "/comment",
        method: "POST",
        body: payload,
      }),
    }),
    // редактирование коммента
    editPostComment: builder.mutation<IEditCommentResponse, IEditCommentPayload>({
      query: (payload) => ({
        url: "/comment",
        method: "PUT",
        body: payload,
      }),
    }),
    // удаление коммента
    deletePostComment: builder.mutation<IDelCommentResponse, string>({
      query: (comment_id) => ({
        url: `/comment/?comment_id=${comment_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
