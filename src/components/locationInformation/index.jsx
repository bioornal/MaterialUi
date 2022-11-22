import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, Stack, Typography } from "@mui/material";

function LocationInformation({ userState }) {
  const { location, twitter_username, blog, company } = userState;
  return (
    <Grid container spacing={2} sx={{ marginTop: "15px  " }}>
      <Grid item xs={6}>
        <Stack direction={"row"} spacing={2}>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction={"row"} spacing={2}>
          <TwitterIcon />
          {twitter_username ? (
            <Typography>{twitter_username}</Typography>
          ) : (
            <Typography>Not Available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction={"row"} spacing={2}>
          <LocationOnIcon />
          {blog ? (
            <a href={blog} target="_blank"><Typography>{blog}</Typography></a>
          ) : (
            <Typography>Not Available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction={"row"} spacing={2}>
          <LocationOnIcon />
          {company ? (
            <Typography>{company}</Typography>
          ) : (
            <Typography>Not Available</Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default LocationInformation;
