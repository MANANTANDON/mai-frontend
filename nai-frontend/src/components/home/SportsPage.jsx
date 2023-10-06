import React from "react";
import { MobileHeader } from "../MobileHeader";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ImgComponent } from "../ImgComponent";
import fatd from "../../assets/ForAllTheDogs.png";

export const SportsPage = () => {
  return (
    <Container xl="lg" sx={{ pb: 2 }}>
      <Box
        mx={-2}
        mb={2}
        px={2}
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px)",
          zIndex: "2",
        }}
      >
        <MobileHeader text="Sports" />
      </Box>
      <Box>
        <Grid
          container
          rowGap={3}
          columnGap={3}
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
                      flexDirection: "row",
                      columnGap: "10px",
                    }}
                  >
                    <Box>
                      <ImgComponent image={fatd} h="82px" w="78px" />
                    </Box>
                    <Typography variant="h1" fontSize="14px" fontWeight="bold">
                      <Typography
                        fontWeight="bold"
                        fontSize="14px"
                        color="red"
                        display={{ sm: "none" }}
                      >
                        Drake & The Weeknd
                      </Typography>
                      20 Of The Best Songs Released In February
                      <Typography color="grey" fontSize="12px" mb={1}>
                        Sept 10, 2020
                      </Typography>
                      <Typography variant="div" fontSize="14px">
                        Manan Tandon{" "}
                        <div
                          style={{
                            display: "inline-block",
                            fontWeight: "200",
                            fontSize: "12px",
                          }}
                        >
                          12m ago
                        </div>
                      </Typography>
                      {/* <Button
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
                      </Button> */}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
