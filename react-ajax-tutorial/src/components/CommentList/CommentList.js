import React from 'react';
import { Comment } from '../';
import './CommentList.css';

const CommentList = ({ comments }) => {
  // 데이터를 컴포넌트에 매핑
  const commentList = comments.map((comment, index) => (
    <Comment name={comment.email.split('@')[0]} body={comment.body} key={index} />
  ));

  return <ul className="CommentList">{commentList}</ul>;
};

export default CommentList;
