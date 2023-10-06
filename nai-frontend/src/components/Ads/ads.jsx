import Image from "next/legacy/image";
import sherley from "../../assets/sheep.png";
import { Box } from "@mui/material";

const HorizontalAd = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "1200px",
        height: "100px",
        overflow: "hidden",
        borderRadius: "15px",
      }}
    >
      <Image
        src={sherley}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </Box>
  );
};

export default HorizontalAd;
