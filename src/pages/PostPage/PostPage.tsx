import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/UI/Container/Container.style";
import { useLazyGetPostByIdQuery } from "../../store/API/postApi";
import { Post } from "../../components/Post/Post";

export const PostPage = () => {
  //   const params = useParams();
  const { postId } = useParams();

  const [fetchTrigger, { data, isLoading, isError }] =
    useLazyGetPostByIdQuery();

  //   console.log("params", params);

  useEffect(() => {
    if (postId) {
      // Вызов запроса
      fetchTrigger(postId);
    }
  }, [postId]);

  return (
    <Container>
      {isError && <h1>Произошла ошибка</h1>}
      {isLoading && <h1>Идёт загрузка...</h1>}
      {/* {data && <h1>Здесь находится Пост Номер: {postId}</h1>} */}
      {data && (
        <Post
          postText={data.message.main_text}
          userName={data.message.user_fk.name}
          regDate={data.message.reg_date}
        />
      )}
    </Container>
  );
};
