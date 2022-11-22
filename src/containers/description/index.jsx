import { Stack, Typography } from "@mui/material";
import React from "react";
import LocationInformation from "../../components/locationInformation";
import PaperInformation from "../../components/Searcher/paperInformation";

function Description({ userState }) {
  const { bio } = userState;

  return (
    <>
      <Stack sx={{justifyContent: "center"}}>
        {bio !== null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae
            necessitatibus fugiat neque dolore amet dicta ipsum? Sunt harum
            laudantium iure dolore molestias, reprehenderit quia, illo debitis
            quis itaque nobis.
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
}

export default Description;
