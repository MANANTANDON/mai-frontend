import { CategoryMenu } from "@/components/CategoryMenu";
import { Layout } from "@/components/Layout";
import { breakingNews } from "@/components/TestSubjects";
import { DummyCard } from "@/components/home/Homepage";
import { PostPage } from "@/components/post/PostPage";
import { Box, Divider } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

function post() {
  return (
    <Layout type="post">
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
      <Divider sx={{ display: { xs: "none" } }} />
      <PostPage />
      <Box display={{ xs: "none", sm: "contents" }}>
        <DummyCard />
      </Box>
    </Layout>
  );
}

export default post;
