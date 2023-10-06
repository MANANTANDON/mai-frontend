import { Box } from "@mui/material";
import React from "react";
import {
  TrendingNews,
  TrendingPage,
  TrendingPageSmall,
} from "@/components/home/TrendingPage";
import { Layout } from "@/components/Layout";
import Marquee from "react-fast-marquee";
import { breakingNews } from "@/components/TestSubjects";
import { CategoryMenu } from "@/components/CategoryMenu";

function Trending() {
  return (
    <Layout type="trending-news">
      <Box
        display={{ xs: "none", sm: "contents" }}
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
        display={{ xs: "none", sm: "block" }}
      >
        <CategoryMenu />
      </Box>
      <Box display={{ xs: "none", sm: "block" }}>
        <TrendingNews />
      </Box>
      <Box display={{ sm: "none" }}>
        <TrendingPageSmall />
      </Box>
    </Layout>
  );
}

export default Trending;
