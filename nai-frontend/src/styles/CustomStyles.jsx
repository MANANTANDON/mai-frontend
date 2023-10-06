import { ListItemButton } from "@mui/joy";
import { Button, Grid, Paper, styled } from "@mui/material";

/* HEADER STYLES */
export const HeaderPaper = styled(Paper)({
  display: "flex",
  width: "100%",
  borderRadius: "73px",
});

export const HeaderButton = styled(Button)({
  width: "300px",
  borderRadius: "8px",
});
/* HEADER STYLES END */

export const StyledGrid = styled(Grid)({
  //border: "2px solid red",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const NewsStyledGrid = styled(Grid)({
  // border: "2px solid red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledListItemButton = styled(ListItemButton)(({ selected }) => ({
  borderRadius: 5,
  backgroundColor: "transparent",
  color: "#5E5873",
  "&:hover": {
    color: "#f50022 !important",
    backgroundColor: "transparent !important",
  },
  ...(selected && {
    fontWeight: "bold",
    backgroundColor: "transparent !important",
    color: "#f50022 !important",
  }),
}));
