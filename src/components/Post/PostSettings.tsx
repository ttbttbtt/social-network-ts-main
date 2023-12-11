import React from "react";
import { PostSettingsBox } from "./Post.style";

type PostSettingsProps = {
  onEditClick: () => void;
  onDeleteClick: () => void;
};

export const PostSettings = ({
  onEditClick,
  onDeleteClick,
}: PostSettingsProps) => {
  return (
    <PostSettingsBox>
      <span>Изменить</span>
      <span>Удалить</span>
    </PostSettingsBox>
  );
};
