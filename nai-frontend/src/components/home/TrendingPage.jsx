import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { MobileHeader } from "../MobileHeader";
import { TrendingMobilePageCard } from "../Cards";
import fatd from "../../assets/ForAllTheDogs.png";
import { ImgComponent } from "../ImgComponent";
import politics from "../../assets/politics.svg";
import { PostUserDeets } from "../PostUserDeets";

export const TrendingNews = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box mx={-3}>
          <ImgComponent
            image={politics}
            h="432px"
            w="1440px"
            border="0"
            title="Top Trending News This Week"
            type="top-stories"
          />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box mx={-2} my={3}>
          <Grid
            container
            rowGap={2}
            columnGap={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {Array.from(Array(12)).map((_, index) => (
              <Grid item key={index} xs={12}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { md: "row", sm: "column" },
                        columnGap: "20px",
                      }}
                    >
                      <Box>
                        <ImgComponent image={fatd} h="320px" w="588px" />
                      </Box>
                      <Box>
                        <Typography
                          variant="h1"
                          fontSize="24px"
                          fontWeight="bold"
                          mt={2}
                        >
                          It’s Nearly Impossible To Spend Less Than $10 On Movie
                          Concessions
                        </Typography>
                        <PostUserDeets image="" />
                        <Typography variant="body1" fontSize="16px">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </Typography>
                        <Button
                          variant="text"
                          onClick={() => {
                            alert(index + 1);
                          }}
                          sx={{
                            mx: -1,
                            mt: "5px",
                            fontSize: "10px",
                            padding: "0px",
                            color: "red",
                          }}
                        >
                          see more
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export const TrendingPageSmall = () => {
  return (
    <Container xl="lg">
      <Box
        mx={-2}
        px={2}
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px)",
          zIndex: "2",
        }}
      >
        <MobileHeader text="Trending" />
      </Box>
      <Box mx={-2} my={3}>
        <Grid
          container
          rowGap={2}
          columnGap={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {Array.from(Array(21)).map((_, index) => (
            <Grid item key={index}>
              <TrendingMobilePageCard image={fatd} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
