import { Box, styled, Typography } from "@mui/material";
import React from "react";
import likeIcon from "../../assets/like.png";
import heartIcon from "../../assets/heart.png";
import shareIcon from "../../assets/share.png";

const CustomCard = ({ img, price, item, likes, heart, share }) => {
  /* 📌 Styled Component: Dish Card Container */
  const DishBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 400,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
    "&:hover": {
      backgroundColor: "#f5f5f5",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      transform: "scale(1.05)",
      transition: "all 0.3s ease-in-out",
    },
  }));

  /* 📌 Styled Component: Info Section (for likes, hearts, shares) */
  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  /* 📌 Styled Component: Image Container */
  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    /* 🔹 Main Card Container */
    <DishBox>
      {/* 🔹 Image Section */}
      <ImgContainer>
        <img src={img} alt="housePhoto" style={{ maxWidth: "100%" }} />
      </ImgContainer>

      {/* 🔹 Card Content */}
      <Box sx={{ padding: "1rem" }}>
        {/* 🔹 Price */}
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          ${price}
        </Typography>

        {/* 🔹 Dish Name */}
        <Typography variant="body2" sx={{ my: 2 }}>
          {item}
        </Typography>

        {/* 🔹 Like, Heart, Share Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* 🔹 Likes */}
          <InfoBox>
            <img src={likeIcon} alt="likesIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {likes}
            </Typography>
          </InfoBox>

          {/* 🔹 Hearts */}
          <InfoBox>
            <img src={heartIcon} alt="heartsIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {heart}
            </Typography>
          </InfoBox>

          {/* 🔹 Shares */}
          <InfoBox>
            <img src={shareIcon} alt="shareIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {share}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </DishBox>
  );
};

export default CustomCard;
