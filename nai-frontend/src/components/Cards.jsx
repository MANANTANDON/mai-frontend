import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Link,
  Button,
  Grid,
  IconButton,
  ThemeProvider,
  CardMedia,
  Paper,
  Divider,
  Stack,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from "@mui/material";
import { PostUserDeets } from "./PostUserDeets";
import { ImgComponent } from "./ImgComponent";
import React, { Suspense } from "react";
import { useRouter } from "next/router";
import {
  CollectionsBookmarkOutlined,
  EmailOutlined,
  LocationOnOutlined,
  ThumbUp,
} from "@mui/icons-material";
import Slider from "react-slick";
import theme from "@/Theme/customTheme";
import Image from "next/image";
import overlay from "../assets/overlay.svg";
import { Loading } from "./Loading";

export const TopStoriesOrTrending = (props) => {
  const settings = {
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: props.delay,
    dots: true,
    infinite: true,
  };

  const heading =
    "Explore Russia with Ease: Electronic Visa for Indian Passport Holders";
  const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.sdfasfs fas 
                fsadfasfasfsadfsa fs safa s fas dfsa dfsa d fsafsafs sd `;
  return (
    <Suspense fallback={<Loading />}>
      <Box>
        {props.type === "top-stories" && (
          <Typography
            fontSize="25px"
            fontWeight="bold"
            ml={3}
            sx={{ display: { sm: "none" } }}
          >
            Top Stories
          </Typography>
        )}
        <div>
          <Slider {...settings}>
            {[1, 2, 3, 4].map((item, key) => (
              <Box variant="div" key={key}>
                <Box
                  variant="div"
                  sx={{
                    marginLeft: "10px",
                    marginRight:
                      props.type === "top-stories"
                        ? "10px"
                        : { lg: "90px", md: "10px" },
                  }}
                >
                  <Card
                    elevation={0}
                    key={key}
                    sx={{
                      backgroundColor: "transparent",
                    }}
                  >
                    <CardContent sx={{ p: { xs: 0, sm: 2 } }}>
                      {props.type === "top-stories" ? (
                        <Typography
                          variant="h1"
                          fontSize="18px"
                          sx={{
                            border: "2px solid red",
                            width: "fit-content",
                            px: 2,
                            py: 1,
                            mb: 1,
                            borderRadius: "12px",
                            color: "white",
                            backgroundColor: `red`,
                            display: { xs: "none", sm: "flex" },
                          }}
                        >
                          Top Stories
                        </Typography>
                      ) : (
                        <Typography
                          variant="h1"
                          fontSize="64px"
                          fontWeight="bold"
                        >
                          Trending News
                        </Typography>
                      )}
                      <Typography
                        variant="h1"
                        fontSize="32px"
                        my={4}
                        sx={{ pr: 0, display: { xs: "none", sm: "flex" } }}
                      >
                        {heading.length <= 61
                          ? heading
                          : heading.substring(0, 61) + "..."}
                      </Typography>
                      {props.type === "trending-news" && (
                        <PostUserDeets image="" />
                      )}
                      <Typography
                        variant="subtitle2"
                        textAlign="justify"
                        sx={{ display: { xs: "none", sm: "flex" } }}
                        mt={2}
                      >
                        {body.length <= 300
                          ? body
                          : body.substring(0, 300) + "..."}
                      </Typography>
                      <Typography
                        variant="body1"
                        mt={3}
                        sx={{ display: { xs: "none", sm: "flex" } }}
                      >
                        <Link
                          href="/dashboard/post"
                          underline="none"
                          color="red"
                        >
                          see more
                        </Link>
                      </Typography>
                      <Box my={2}>
                        <ImgComponent
                          id={item}
                          image={props.image}
                          h={
                            props.type === "top-stories"
                              ? { xs: "255px", sm: "318px" }
                              : "349px"
                          }
                          w={
                            props.type === "top-stories"
                              ? { xs: "400px", sm: "504px" }
                              : "674px"
                          }
                          type={props.type === "top-stories" && props.type}
                          title={heading}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            ))}
          </Slider>
        </div>
      </Box>
    </Suspense>
  );
};

export const TrendingSmallCard = (props) => {
  const router = useRouter();

  const settings = {
    dots: true,
    speed: 600,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          mx={1}
        >
          <Typography
            variant="h6"
            fontSize="30px"
            fontWeight="bold"
            ml={3}
            mb={2}
          >
            Trending
          </Typography>
          <Button
            variant="text"
            onClick={() => router.push("/dashboard/home/trending")}
          >
            see more
          </Button>
        </Box>
        <Slider {...settings}>
          {[1, 2, 3, 4].map((item) => (
            <Card
              sx={{ maxWidth: 265, borderRadius: "20px", ml: 3 }}
              variant="outlined"
              key={item}
              onClick={() => router.push("/dashboard/post")}
            >
              <CardMedia>
                <ImgComponent
                  image={props.image}
                  h="156px"
                  w="350px"
                  border="0px"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  fontSize="16px"
                  fontWeight="bold"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  industry...
                </Typography>
                <Typography variant="body1" fontSize="14px" fontWeight="500">
                  Manan Tandon
                </Typography>
                <Typography variant="body1" fontSize="12px" color="#686868">
                  2m ago
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </ThemeProvider>
  );
};

export const TrendingMobilePageCard = (props) => {
  const heading =
    "Lorem Ipsum is simply dummy text of the printing and industry.";
  return (
    <Card sx={{ maxWidth: 175, borderRadius: "20px" }} variant="outlined">
      <CardMedia>
        <ImgComponent image={props.image} h="140px" w="175px" border="0px" />
      </CardMedia>
      <CardContent>
        <Box my={-2} mx={-2} p={"10px"}>
          <Typography variant="h6" fontSize="14px" fontWeight="bold">
            {heading.length <= 30 ? heading : heading.substring(0, 30) + "..."}
          </Typography>
          <Typography variant="body1" fontSize="12px" fontWeight="500">
            Manan Tandon
          </Typography>
          <Typography variant="body1" fontSize="10px" color="#686868">
            2m ago
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export const BreakingNewsCard = (props) => {
  const router = useRouter();
  const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`;
  const clickHandler = () => {
    router.push("/dashboard/post");
  };
  return (
    <ThemeProvider theme={theme}>
      <Card elevation={0}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              Breaking News
            </Typography>
            <Button
              variant="text"
              color="primary"
              onClick={() => alert("You have seen it all")}
            >
              See All
            </Button>
          </Box>

          <Card sx={{ backgroundColor: "#F5F5F5", p: 2, my: 1 }} elevation={0}>
            <ImgComponent h="320px" w="900px" image={props.image} />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                18 Instagram Moments You May Have Missed This Week
              </Typography>
              <Box>
                <PostUserDeets image="" />
              </Box>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                {body.length <= 300 ? body : body.substring(0, 300) + "..."}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="text"
                underline="none"
                sx={{ color: "red" }}
                onClick={clickHandler}
              >
                Read more
              </Button>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export const NewsCard = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: "350px" }} variant="outlined">
        <CardContent>
          <ImgComponent h="320px" w="360px" image={props.image} />
          <Typography variant="h1" fontSize="24px" fontWeight="bold" mt={2}>
            Coronavirus : Warning over easing lockdown measures too quickly
          </Typography>
          <PostUserDeets image="" />
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          </Typography>
          <Typography variant="body1" mt={3}>
            <Link href="#" underline="none" color="primary">
              Read more
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export const FooterLinks = (props) => {
  return (
    <>
      <Typography variant="h1" fontSize="18px" color="grey" ml={3} mt={3}>
        {props.heading}
      </Typography>
      <Divider sx={{ background: "grey", my: 3 }} />
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
        mb={5}
      >
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            {Array.from(Array(props.number)).map((_, index) => (
              <Paper
                key={index}
                variant="outlined"
                sx={{ backgroundColor: "transparent", my: -2 }}
              >
                <ul>
                  <li style={{ color: "white" }}>
                    <Link href="#" underline="none" color="white">
                      {props.link !== "" ? props.link : "4d616e616e"}
                    </Link>
                  </li>
                </ul>
              </Paper>
            ))}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export const FooterLinksTwo = (props) => {
  return (
    <Grid container>
      <Grid
        item
        md={4}
        color="grey"
        p={1}
        display={{ xs: "none", sm: "inline" }}
      >
        <Typography variant="h1" fontWeight="bold" fontSize="16px">
          SOCIAL MEDIA
        </Typography>
        <Stack spacing={3} my={4}>
          <Box
            sx={{
              position: "relative",
              height: "53px",
              width: "225px",
            }}
          >
            <Image
              layout="fill"
              src={props.image}
              objectFit="cover"
              objectPosition="center"
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "10px",
            }}
          >
            <LocationOnOutlined />
            <Typography variant="h1" fontSize="16px">
              Chandigarh
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "10px",
            }}
          >
            <EmailOutlined />
            <Typography variant="h1" fontSize="16px">
              manantandon@gmail.com
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Divider sx={{ background: "orange" }} />
      <Grid item md={8} xs={12} color="grey">
        <Box display={{ xs: "none", sm: "contents" }}>
          <Links title="TOP CATEGORIES" number={3} />
        </Box>
        <Box display={{ sm: "none" }}>
          <Links title="QUICK LINKS" number={2} />
        </Box>
      </Grid>
    </Grid>
  );
};

const Links = (props) => {
  return (
    <>
      <Typography variant="h1" fontWeight="bold" fontSize="16px">
        {props.title}
      </Typography>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} my={3}>
        {Array.from(Array(props.number)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            {Array.from(Array(6)).map((_, index) => (
              <Paper
                key={index}
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  ml: -1,
                }}
              >
                <ul>
                  <li style={{ color: "white" }}>
                    <Link href="#" underline="none" color="white">
                      Quick Links
                    </Link>
                  </li>
                </ul>
              </Paper>
            ))}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export const PostCard = (props) => {
  return (
    <Card elevation={0} sx={{ backgroundColor: "white" }}>
      <CardContent>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Box pr={5}>
            <Typography variant="h1" fontSize="48px">
              5-Minute Meditation You Can Do Anywhere
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ color: "red" }}>
              <CollectionsBookmarkOutlined />
            </IconButton>
          </Box>
        </Box>
        <PostUserDeets image="" />
        <Box>
          <Typography
            variant="body1"
            textAlign="justify"
            fontSize={{ xs: "14px", sm: "16px" }}
            color="#666666"
            mb={4}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur.
          </Typography>
          <Box>
            <ImgComponent
              image={props.image}
              h={{ xs: "200px", sm: "356px" }}
              w="813px"
            />
          </Box>
          <Typography
            mt={4}
            variant="body1"
            textAlign="justify"
            fontSize={{ xs: "14px", sm: "16px" }}
            color="#666666"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </Typography>
        </Box>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          icon={<ThumbUp />}
        >
          {/* {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))} */}
        </SpeedDial>
        {/* <Box
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 3 }}
        >
          <ImgComponent image={overlay} w="800px" h="116px" />
        </Box> */}
      </CardContent>
    </Card>
  );
};
