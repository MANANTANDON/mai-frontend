import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

export const PostUserDeets = (props) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="center"
        columnGap={1}
        my={2}
        display={{ xs: "none", sm: "flex" }}
      >
        <Grid item>
          <Avatar
            src={`${props.image}`}
            alt="Manan Tandon"
            sx={{
              bgcolor: "skyblue",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h1"
            fontWeight="bold"
            fontSize="16px"
            color="black"
          >
            Manan Tandon
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="grey">September 25, 2023</Typography>
        </Grid>
      </Grid>
    </>
  );
};
