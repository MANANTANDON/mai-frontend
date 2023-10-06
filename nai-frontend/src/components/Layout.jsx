import React from "react";
import { Montserrat } from "next/font/google";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { HomeMenu } from "./HomeMenu";
import { Footer } from "./Footer";
import logo from "../assets/logo.svg";

const Mon = Montserrat({ subsets: ["latin"] });

export const Layout = (props) => {
  return (
    <>
      <Box className={`${Mon.className}`} mx={-1}>
        <Box
          display={{
            xs:
              (props.type === "post" && "none") ||
              (props.type === "trending-news" && "none"),
            sm: "block",
          }}
          sx={{
            position: { sm: "sticky", xs: "static" },
            top: 0,
            zIndex: 3,
            backgroundColor: { sm: "white", xs: "transparent" },
          }}
        >
          <Header />
          <Box sx={{ backgroundColor: "#ECECEC57" }}>
            <HomeMenu />
          </Box>
        </Box>
        {props.children}
        <Box sx={{ backgroundColor: "black" }}>
          <Footer image={logo} />
        </Box>
      </Box>
    </>
  );
};
