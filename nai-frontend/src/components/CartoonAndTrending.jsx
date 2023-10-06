import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ImgComponent } from "./ImgComponent";
import Slider from "react-slick";
import cartoon from "../assets/cartoon.svg";
import { useRouter } from "next/router";

export const CartoonAndTrending = (props) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState();
  const router = useRouter();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToggle(false);
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          justifyContent: "space-between",
          mx: 1,
        }}
      >
        <Typography variant="h1" fontSize="30px" fontWeight="bold">
          Breaking News
        </Typography>
        <Button
          variant="text"
          sx={{ color: "red" }}
          onClick={() => router.push("/dashboard/home/sports")}
        >
          see all
        </Button>
      </Box>
      <Card elevation={0} sx={{ backgroundColor: "transparent" }}>
        <CardContent>
          <Box display={{ xs: "none", sm: "contents" }}>
            <ImgComponent
              image={cartoon}
              h="360px"
              w={{ md: "360px", sm: "900px" }}
            />
          </Box>
          <Typography
            variant="h1"
            fontSize="24px"
            fontWeight="bold"
            mt={3}
            display={{ xs: "none", sm: "flex" }}
          >
            Trending Now
          </Typography>
          <Box
            sx={{
              my: 2,
              mx: { xs: -2, sm: 0 },
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          >
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
                <Box variant="div" key={key}>
                  <Box
                    variant="div"
                    sx={{
                      marginRight: "3px",
                      marginTop: "5px",
                    }}
                  >
                    <Card variant="outlined" sx={{ borderRadius: "12px" }}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            columnGap: "10px",
                          }}
                        >
                          <Box>
                            <ImgComponent
                              image={props.imageThree}
                              h={{ md: "90px", xs: "100px" }}
                              w={{ md: "90px", xs: "100px" }}
                            />
                          </Box>

                          <Typography
                            variant="h1"
                            fontSize={{ md: "16px", sm: "18px", xs: "16px" }}
                            fontWeight="bold"
                          >
                            <Typography
                              fontWeight="bold"
                              fontSize="16px"
                              color="red"
                              mb={1}
                              display={{ sm: "none" }}
                            >
                              Drake & The Weeknd
                            </Typography>
                            {item}. 20 Of The Best Songs Released In February
                            <Typography
                              mt={1}
                              color="grey"
                              fontSize={{
                                md: "12px",
                                sm: "16px",
                                xs: "12px",
                              }}
                            >
                              Sept 10, 2020
                            </Typography>
                            {/* <Button
                              variant="text"
                              onClick={() => {
                                setToggle(true);
                                setValue(item);
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
                            </Button> */}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
          <Box display={{ xs: "none", sm: "contents" }}>
            <ImgComponent
              image={cartoon}
              h="360px"
              w={{ md: "360px", sm: "900px" }}
            />
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        open={toggle}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          kudos 🎉🎉 you are a member now {value}
        </Alert>
      </Snackbar>
    </Box>
  );
};
