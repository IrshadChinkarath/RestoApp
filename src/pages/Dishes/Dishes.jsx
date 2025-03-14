import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { Data } from "../../StaticData/Data";
import CustomCard from "../../components/CustomCard/CustomCard";

const Dishes = () => {
  /* 📌 Grid container for displaying dishes */
  const DishesBox = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 cards per row by default
    gap: theme.spacing(5), // Spacing between both rows & columns
    marginTop: theme.spacing(5),

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)", // 2 cards per row on medium screens
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)", // 1 card per row on small screens
    },
  }));

  /* 📌 Container for heading and subheading */
  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center", // Center align text on smaller screens
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        {/* 🔹 Section Title */}
        <PropertiesTextBox>
          <Typography
            sx={{
              color: "#000339",
              fontSize: "35px",
              fontWeight: "bold",
              ml: "13px",
            }}
          >
            Featured Dishes
          </Typography>
          <Typography
            sx={{ color: "#5A6473", fontSize: "16px", mt: 1, ml: "13px" }}
          >
            Explore Variety of South Indian Dishes!!
          </Typography>
        </PropertiesTextBox>

        {/* 🔹 Grid of Dish Cards */}
        <DishesBox>
          {Data.map((foodItem) => (
            <CustomCard
              key={foodItem.id}
              img={foodItem.img}
              price={foodItem.price}
              item={foodItem.item}
              likes={foodItem.likes}
              heart={foodItem.heart}
              share={foodItem.share}
            />
          ))}
        </DishesBox>
      </Container>
    </Box>
  );
};

export default Dishes;
