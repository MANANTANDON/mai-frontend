import {
  Alert,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import logo from "../assets/logo.svg";
import Image from "next/legacy/image";
import { HeaderButton, HeaderPaper } from "@/styles/CustomStyles";
import { Menu, Search } from "@mui/icons-material";

export const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const drawer = (
    <Box onClick={handleDrawerClose} sx={{ textAlign: "center" }}>
      <HeaderButton
        variant="contained"
        disableElevation
        onClick={() => setOpen(true)}
        style={{ backgroundColor: "#f50022", margin: "10px" }}
      >
        Subscribe
      </HeaderButton>
      <Typography variant="h1" fontSize="17px">
        powered by{" "}
        <Box sx={{ color: "red", display: "inline" }}>4d616e616e</Box>
      </Typography>
    </Box>
  );

  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: { sm: 3 } }}
        >
          {/*logo*/}
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            md={6}
            xs={12}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: "30px", sm: "50px" },
                width: { xs: "128px", sm: "210px" },
              }}
            >
              <Image
                src={logo}
                alt="News Arena"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerClose}
              sx={{
                display: { sm: "none" },
                color: "#5E5873",
              }}
            >
              <Menu />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerClose}
            >
              {drawer}
            </Drawer>
          </Grid>

          {/*Search box and button*/}
          <Grid mt={{ xs: 2, md: 0 }} item md={6} xs={12}>
            <Stack direction="row" gap={2}>
              <HeaderPaper variant="outlined">
                <InputBase
                  sx={{ ml: 2, flex: 1 }}
                  fullWidth
                  placeholder="Search here..."
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px", color: "red" }}
                  aria-label="search"
                >
                  <Search />
                </IconButton>
              </HeaderPaper>
              <HeaderButton
                sx={{ display: { xs: "none", sm: "flex" } }}
                variant="contained"
                disableElevation
                onClick={() => setOpen(true)}
                style={{ backgroundColor: "#f50022" }}
              >
                Subscribe
              </HeaderButton>
              <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={4000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  kudos 🎉🎉 you are a member now
                </Alert>
              </Snackbar>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
