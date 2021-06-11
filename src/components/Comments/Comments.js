import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsByVideoId,
} from "../../redux/actions/comments.action";
import "./_comments.scss";
const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsByVideoId(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentsList.comments);
  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );
  const [comment, setComment] = useState("");
  const handleComment = (e) => {
    e.preventDefault();
    if (comment.length === 0) return;
    console.log("This is Comment from Comments JS ", comment);
    dispatch(addComment(videoId, comment));
    setComment("");
  };

  const { photoURL } = useSelector((state) => state.auth?.user);

  return (
    <div className="comments">
      <p>{totalComments} comments</p>
      <div className="my-2 comments__form d-flex w-100">
        <img src={photoURL} alt="" className="mr-3 rounded-circle" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {_comments?.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
