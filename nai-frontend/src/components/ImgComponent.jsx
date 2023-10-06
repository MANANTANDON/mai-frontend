import { Box, Skeleton, Typography } from "@mui/material";
import Image from "next/legacy/image";
import React, { Suspense } from "react";
import { useRouter } from "next/router";

export const ImgComponent = ({ title, w, h, image, type, border, id }) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: w,
          height: h,
          overflow: "hidden",
          borderRadius: border ? border : "15px",
          borderBottomLeftRadius: border,
          borderBottomRightRadius: border,
        }}
      >
        <Suspense
          fallback={<Skeleton variant="rounded" height={h} width={w} />}
        >
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={image}
            onClick={() => router.push("/dashboard/post")}
          />
        </Suspense>

        {type === "top-stories" && (
          <Box
            px={2}
            sx={{
              bottom: "-20vh",
              color: "white",
              zIndex: "100",
              position: "relative",
            }}
            display={{ sm: "none" }}
          >
            <Typography
              mb={1}
              variant="h1"
              fontSize="12px"
              fontWeight="bold"
              sx={{
                width: "fit-content",
                px: 2,
                py: 1,
                borderRadius: "12px",
                color: "white",
                backgroundColor: "red",
              }}
            >
              Top Stories
            </Typography>
            <Typography variant="h1" fontSize="18px" fontWeight="bold">
              {title}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
