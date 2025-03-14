import { Box, Typography } from "@mui/material";
import { styled, Container, margin } from "@mui/system";
import CustomButton from "../../components/CustomButton/CustomButton";
import welcome from "../../assets/Welcome3.png";

function Welcome() {
  const StyledContainer = styled(Container)(({ theme }) => ({
    flex: "1",
    padding: "2rem",
    paddingLeft: "0px",
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#fff",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const WelcomeImg = styled("img")(({ theme }) => ({
    maxWidth: "120%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      marginBottom: "1.5rem",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#fed801", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <StyledContainer>
            <Typography
              variant="h2"
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#687690",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to our store
            </Typography>
            <Title variant="h1">
              Discover a place where you'll love to Eat.
            </Title>

            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Immerse yourself in the elegant ambiance as you savor each bite,
              accompanied by our extensive selection of hand-picked wines and
              carefully curated cocktails.
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              welcomeBtn={true}
            />
          </StyledContainer>

          <Box
            sx={{
              flex: "1.25",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WelcomeImg src={welcome} alt="welcome" />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Welcome;
