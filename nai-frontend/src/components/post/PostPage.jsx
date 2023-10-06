import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { PostCard } from "../Cards";
import running from "../../assets/running.svg";
import { CartoonAndTrending } from "../CartoonAndTrending";
import { ImgComponent } from "../ImgComponent";
import {
  ArrowBackIos,
  BookmarkAddOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { MobileHeader } from "../MobileHeader";

export const PostPage = () => {
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <Box my={3}>
        <Stack sx={{ display: { sm: "none" } }} gap={1} mb={2}>
          <MobileHeader text="News of the Day" />
          <Typography variant="h1" fontSize="22px" fontWeight="bold">
            Explore Russia with Ease: Electronic Visa for Indian Passport
            Holders....
          </Typography>
          <Typography variant="h2" fontSize="14px">
            Manan Tandon
          </Typography>
          <Typography fontSize="12px" variant="h3" color="#686868">
            2m ago
          </Typography>
        </Stack>
        <Box mx={-2}>
          <ImgComponent
            image={running}
            h={{ xs: "217px", sm: "488px" }}
            w="1232px"
            border={{ xs: 0, sm: "15px" }}
          />
        </Box>
        <Box display={{ sm: "none" }} sx={{ backgroundColor: "white", mx: -2 }}>
          <IconButton>
            <ThumbUpAltOutlined />
          </IconButton>
          <IconButton>
            <BookmarkAddOutlined />
          </IconButton>
          <IconButton>
            <ShareOutlined />
          </IconButton>
        </Box>
        <Box sx={{ backgroundColor: "white", mx: -2 }}>
          <Grid container direction="row" sx={{ backgroundColor: "white" }}>
            <Grid item md={8} xs={12}>
              <PostCard image={running} />
            </Grid>
            <Grid item md={4} xs={12} my={{ xs: 2, sm: 0 }}>
              <Box mx={2}>
                <CartoonAndTrending
                  imageOne={running}
                  imageTwo={running}
                  imageThree={running}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
