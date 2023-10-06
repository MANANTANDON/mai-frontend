import { ArrowBackIos } from "@mui/icons-material";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

export const MobileHeader = (props) => {
  const router = useRouter();
  return (
    <Stack>
      <Grid container alignItems="center" justifyContent="space-between" my={2}>
        <Grid item xs={1}>
          <IconButton onClick={() => router.push("/dashboard/home")}>
            <ArrowBackIos />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" fontSize="22px" fontWeight="bold">
            {props.text}
          </Typography>
        </Grid>
        <Grid item xs={1} color="transparent">
          .
        </Grid>
      </Grid>
    </Stack>
  );
};
