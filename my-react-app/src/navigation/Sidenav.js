import React, { useState, useRef } from "react";
import "./Sidenav.sass";
import Modal from "@material-ui/core/Modal";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, useAutocomplete } from "@mui/material";

function Sidenav() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />

      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button" onClick={openModal}>
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>

        <Modal
          open={isModalOpen}
          onClose={closeModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box className="create_post">
            <p id="modal-description">Create new post</p>
            {selectedFile ? <img src={selectedFile} /> : null}
            {selectedFile ? (
              <button className="upload-next">Next</button>
            ) : null}
            <div>
              <button
                onClick={() => document.getElementById("fileInput").click()}
              >
                Select from computer
              </button>
              <input
                id="fileInput"
                type="file"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
            </div>
          </Box>
        </Modal>

        <button className="sidenav__button">
          <Avatar></Avatar>
          <span>
            <button className="logout__button">Logout</button>
          </span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
