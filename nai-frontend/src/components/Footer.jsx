import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { FooterLinks, FooterLinksTwo } from "./Cards";
import { ImgComponent } from "./ImgComponent";
import tifLogo from "../assets/tifLogo.svg";

export const Footer = (props) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "black",
        py: 3,
        color: "white",
        mb: -1,
      }}
    >
      <Box sx={{ backgroundColor: "transparent" }}>
        <Box
        //display={{ xs: "none", sm: "contents" }}
        >
          <FooterLinks heading="TOP CATEGORIES" number={6} link="" />
          <FooterLinks heading="TOP TRENDING NEWS" number={4} link="" />
          <FooterLinks
            heading="TOP TRENDING NEWS"
            number={4}
            link="25-Year-Old Man From Bihar Breaks Record For Creating World’s Smallest Wooden Spoon"
          />
          <Divider sx={{ background: "grey", my: 3 }} />
        </Box>
        <FooterLinksTwo image={props.image} />
        <Box display={{ sm: "none" }} mb={5}>
          <Divider color="grey" />
          <Typography fontSize="14px" variant="div" mt={2}>
            © 2010 – 2023 News Arena India | All rights reserved | Powered by{" "}
            <ImgComponent h="20px" w="40px" image={tifLogo} alt="tiflogo" />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
