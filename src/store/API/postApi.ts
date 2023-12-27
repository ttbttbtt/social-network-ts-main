import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utils/baseURL";

export interface PostItem {
  main_text: string;
  user_id: number;
  id: number;
  reg_date: string;
  user_fk: {
    email: string;
    phone_number: string;
    id: number;
    password: string;
    name: string;
    user_city: string;
    reg_date: string;
  };
  photos: string[];
  comments: string[];
}
export interface IGetPostListResponse {
  status: number;
  message: PostItem[];
}
export interface IGetPostItemByIdResponse {
  status: number;
  message: PostItem;
}
export interface IAddNewPostPayload {
  user_id: number;
  main_text: string;
}
export interface IAddNewPostResponse {
  status: number;
  post_id: number;
}
export interface IEditPostPayload {
  post_id: number;
  new_text: string;
}
export interface IEditPostResponse {
  status: number;
  message: string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getPostList: builder.query<IGetPostListResponse, null>({
      query: () => `/post`,
    }),

    getPostById: builder.query<IGetPostItemByIdResponse, string>({
      query: (postId: string) => `/post?post_id=${postId}`,
    }),

    // добавление поста
    addNewpost: builder.mutation<IAddNewPostResponse, IAddNewPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload,
      }),
    }),

    // редактирование поста
    editPost: builder.mutation<IEditPostResponse, IEditPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "PUT",
        body: payload,
      }),
    }),

    // удаление поста
    deletePost: builder.mutation<any, any>({
      query: (post_id: string) => ({
        url: `/post/?post_id=${post_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostListQuery,
  useLazyGetPostListQuery,
  useLazyGetPostByIdQuery,
  useAddNewpostMutation,
  useDeletePostMutation,
  useEditPostMutation,
} = postApi;
