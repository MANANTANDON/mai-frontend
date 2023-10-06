import HorizontalAd from "@/components/Ads/ads";
import { CategoryMenu } from "@/components/CategoryMenu";
import { Layout } from "@/components/Layout";
import { Box, Divider } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import adBanner from "../../../assets/adBanner.png";
import { BreakingNews, DummyCard, Trending } from "@/components/home/Homepage";
import { breakingNews } from "@/components/TestSubjects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function home() {
  return (
    <>
      <Layout>
        <Box
          mr={0}
          sx={{
            fontSize: { xs: "8px", sm: "12px" },
          }}
          mt={{ xs: 2, sm: 0 }}
        >
          <Marquee
            style={{
              backgroundColor: "#F5002257",
              padding: "5px 0px 5px 0px",
              color: "black",
            }}
          >
            {breakingNews}
          </Marquee>
        </Box>
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <CategoryMenu />
        </Box>
        <Divider />
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <HorizontalAd image={adBanner} />
        </Box>
        <Trending />
        <BreakingNews />
        <Box display={{ xs: "none", sm: "contents" }}>
          <DummyCard />
        </Box>
      </Layout>
    </>
  );
}

export default home;
