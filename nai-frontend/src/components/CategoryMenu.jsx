import { TabContext } from "@mui/lab";
import { Box, Tab, Tabs, styled } from "@mui/material";
import React, { useState } from "react";

export const CategoryMenu = () => {
  const [value, setValue] = useState("");

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      display: "none",
    },
  });
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontSize: "13px",
      marginRight: theme.spacing(1),
      color: "black",
      borderRadius: "73px",
      backgroundColor: "#ECECEC57",
      "&:hover": {
        backgroundColor: "#F50022",
        color: "white",
        borderRadius: "30px",
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: "#F50022",
      },
      "&.MuiTab-root": {
        textAlign: "center",
        width: "125px",
      },
    })
  );

  const menu = [
    "Politics",
    "Economy",
    "Ground Report",
    "Explainers",
    "Spotlight",
    "FramePolls",
    "Memes",
    "Quizzes",
    "Interviews",
    "BooksArt",
  ];

  const tabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
      }}
    >
      <TabContext value={value}>
        <StyledTabs
          value={value}
          onChange={tabChange}
          aria-label="styled tabs example"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ backgroundColor: "white" }}
        >
          {menu.map((item, key) => (
            <StyledTab key={key} label={item} value={item} />
          ))}
        </StyledTabs>
      </TabContext>
    </Box>
  );
};
