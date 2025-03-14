import { Button } from "@mui/material";
import { border, borderColor, styled, width } from "@mui/system";

function CustomButton({
  backgroundColor,
  color,
  buttonText,
  welcomeBtn,
  guideBtn,
  getstartedBtn,
}) {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color ? color : "#fff",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    borderRadius: "7px",
    padding: "0.5rem 1.5rem",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin:
        (welcomeBtn || getstartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (welcomeBtn || getstartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
}

export default CustomButton;
