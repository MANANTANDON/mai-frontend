/* eslint-disable react/jsx-key */
import { StyledListItemButton } from "@/styles/CustomStyles";
import { Home, Newspaper, Person, VideoCameraBack } from "@mui/icons-material";
import { List, ListItem } from "@mui/joy";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Paper,
  styled,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

export const HomeMenu = () => {
  const router = useRouter();
  const [index, setIndex] = React.useState(0);
  const menuOptions = ["Home", "Newsfeed", "Videos", "Profile"];
  const menuIcons = [<Home />, <Newspaper />, <VideoCameraBack />, <Person />];
  const [value, setValue] = React.useState(0);

  const StyledBottomNavigationAction = styled(BottomNavigationAction)({
    color: "grey",
    background: "transparent",
    "&.Mui-selected": {
      color: "red",
    },
  });

  return (
    <>
      <Container maxWidth="xl">
        <Box display={{ xs: "none", sm: "flex" }} mx={4}>
          <List orientation="horizontal" sx={{ p: 2 }}>
            {menuOptions.map((item, key) => (
              <ListItem key={key} sx={{ px: 3 }}>
                <StyledListItemButton
                  selected={index === key}
                  sx={{
                    color: index === key && "transparent",
                  }}
                  onClick={() => setIndex(key)}
                >
                  {item}
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            display: { sm: "none" },
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            {menuIcons.map((item, key) => (
              <StyledBottomNavigationAction
                key={key}
                label={menuOptions[key]}
                icon={item}
              />
            ))}
          </BottomNavigation>
        </Paper>
      </Container>
    </>
  );
};
