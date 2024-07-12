import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Chip } from "@mui/material";

export const Task = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "50px",
  backgroundColor: theme.palette.primary.main,
  height: 87,
  width: 241,
}));

export const WhiteTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "medium" && prop !== "large",
})(({ medium, large }) => ({
  color: "#ffffff",
  fontSize: large ? 26 : medium ? 22 : 16,
  fontWeight: "bold",
}));

export const Title = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "medium" && prop !== "large",
})(({ medium, large }) => ({
  borderRadius: "6px",
  backgroundColor: "#F5F5F5",
  fontWeight: "bold",
  padding: large ? "0.6rem" : medium ? "0.5rem" : "0.4rem",
  fontSize: large ? 26 : medium ? 22 : 16,
}));

export const WatchListCardContainer = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: "5px",
  height: 211,
  width: 246,
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#F5F5F5",
    opacity: 0.6,
    color: "#000000",
  },
}));

