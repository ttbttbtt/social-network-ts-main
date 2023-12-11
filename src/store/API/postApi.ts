import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utils/baseURL";

interface PostItem {
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
interface IGetPostListResponse {
  status: number;
  message: PostItem[];
}
interface IGetPostItemByIdResponse {
  status: number;
  message: PostItem;
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
  }),
});

export const {
  useGetPostListQuery,
  useLazyGetPostListQuery,
  useLazyGetPostByIdQuery,
} = postApi;
