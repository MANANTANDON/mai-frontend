import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {
  BreakingNewsCard,
  NewsCard,
  TopStoriesOrTrending,
  TrendingSmallCard,
} from "../Cards";

//image imports
import modi from "../../assets/modi.svg";
import rahul from "../../assets/rahul.svg";
import running from "../../assets/running.svg";
import fatd from "../../assets/ForAllTheDogs.png";
import cartoon from "../../assets/cartoon.svg";
import lalu from "../../assets/lalu.svg";
import trilogy from "../../assets/trilogy.JPG";

import { NewsStyledGrid } from "@/styles/CustomStyles";
import { CartoonAndTrending, TrendingSlider } from "../CartoonAndTrending";

const postData = [
  {
    image: modi,
    heading:
      "Explore Russia with Ease: Electronic Visa for Indian Passport Holders...",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
              type="top-stories`,
  },
  {
    image: rahul,
    heading:
      "Explore Russia with Ease: Electronic Visa for Indian Passport Holders...",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
              type="top-stories`,
  },
  {
    image: lalu,
    heading:
      "Explore Russia with Ease: Electronic Visa for Indian Passport Holders...",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
              type="top-stories`,
  },
  {
    image: running,
    heading:
      "Explore Russia with Ease: Electronic Visa for Indian Passport Holders...",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
              type="top-stories`,
  },
];

export const Trending = () => {
  return (
    <Container maxWidth="lg">
      <Box my={3} mx={{ sm: -3, xs: -2 }}>
        <Grid container>
          <Grid item md={5} xs={12}>
            <Box>
              <TopStoriesOrTrending
                type="top-stories"
                image={modi}
                delay={10000}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={7}
            xs={12}
            sx={{ backgroundColor: { xs: "transparent", sm: "#FFEDF0" } }}
            mt={{ xs: 4, md: 0 }}
          >
            <Box display={{ xs: "none", sm: "contents" }}>
              <TopStoriesOrTrending
                type="trending-news"
                image={rahul}
                delay={12000}
              />
            </Box>
            <Box display={{ sm: "none" }} sx={{ py: 2 }}>
              <TrendingSmallCard image={rahul} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export const BreakingNews = () => {
  return (
    <Container maxWidth="lg">
      <Box my={5}>
        <Grid container direction="row">
          <Box display={{ xs: "none", sm: "contents" }}>
            <Grid item md={8} xs={12}>
              <BreakingNewsCard image={running} />
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {[1, 2].map((item, key) => (
                  <NewsStyledGrid item key={key} xs={12} sm={4} md={6}>
                    <NewsCard image={lalu} />
                  </NewsStyledGrid>
                ))}
              </Grid>
            </Grid>
          </Box>
          <Grid item md={4} xs={12} my={2}>
            <CartoonAndTrending
              imageOne={cartoon}
              imageTwo={cartoon}
              imageThree={fatd}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export const DummyCard = () => {
  return (
    <Container maxWidth="lg">
      <Box my={5}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Typography variant="h1" fontSize="50px" fontWeight="bold">
              Dummy Title
            </Typography>
          </Grid>
          <Grid item xs={12} mt={4}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <NewsStyledGrid item xs={12} sm={4} md={4} key={index}>
                  <NewsCard image={trilogy} />
                </NewsStyledGrid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
