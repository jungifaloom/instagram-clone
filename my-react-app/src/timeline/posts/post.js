import React, { useState, useEffect } from "react";
import "./Post.sass";
import { Avatar } from "@mui/material";
import Modal from "@material-ui/core/Modal";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = ({ user, caption, link, likes, time }) => {
  const [liked, setLiked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [commentsec, setCommentsec] = useState(false);
  const [open, setOpen] = useState(false);
  const [showComment, setshowComments] = useState(false);
  const toggler = () => {
    setLiked(true);
  };

  const test = () => {
    setLiked(!liked);
  };

  const comment = () => {
    setCommentsec(!commentsec);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const [comment1, setComment1] = useState("");
  const [comments, setComments] = useState([]);

  const showComments = () => {
    setshowComments(!showComment);
  };

  useEffect(() => {
    // Retrieve comments from localStorage when the component mounts
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    // Save comments to localStorage whenever comments change
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment1.trim() !== "") {
      setComments([...comments, comment1]);
    }
    setComment1("");
  };
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar className="avatar">{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span>{time}</span>
        </div>
        <MoreHorizIcon className="horiz__icon" onClick={handleOpen} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              margin: 10,
              width: 400,
              bgcolor: "grey",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <h2 id="modal-title">Modal Title</h2>
            <p id="modal-description">Modal content goes here.</p>
            <button onClick={handleClose}>Close</button>
          </Box>
        </Modal>
      </div>
      <div className="post__image">
        <img src={link} onDoubleClick={toggler} />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          {liked ? (
            <FavoriteBorderIcon className="post_icon liked" onClick={test} />
          ) : (
            <FavoriteBorderIcon className="post_icon" onClick={test} />
          )}
          <ChatBubbleOutlineIcon className="post_icon" onClick={comment} />
        </div>
        <div className="liked-tab">
          {liked ? (
            <p>Liked by {likes + 1} people.</p>
          ) : (
            <p>Liked by {likes} people.</p>
          )}
        </div>
        <div className="caption">
          <h6>fahitosup </h6> {caption}
        </div>
        <div className="comment_section">
          <div className="comment-list">
            {comments.length > 1 ? (
              <div>
                <div onClick={showComments}>
                  View all {comments.length} comments..
                </div>

                {showComment &&
                  comments.map((comment, index) => (
                    <div key={index}>
                      <h6>fahitosup</h6> {comment}
                    </div>
                  ))}
              </div>
            ) : (
              comments.map((comment, index) => (
                <div key={index}>
                  <h6>fahitosup</h6> {comment}
                </div>
              ))
            )}
          </div>
          {commentsec && (
            <div className="comment_bar">
              <input
                className="comment"
                placeholder="Add comment..."
                onChange={(e) => setComment1(e.target.value)}
                value={comment1}
              />

              {comment1.trim() ? ( // Check if the comment input is not empty or only consists of white spaces
                <div className="post_button" onClick={handleSubmit}>
                  Post
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
