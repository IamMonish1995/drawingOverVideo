import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "@/components/card";

export default function Dashboard() {
  const videos = [
    { title: "Video1", thumbnail:"https://source.unsplash.com/random/690x280/?surveillance", ID: 1 },
    { title: "Video2",thumbnail:"https://source.unsplash.com/random/691x280/?surveillance", ID: 2 },
    { title: "Video3",thumbnail:"https://source.unsplash.com/random/692x280/?surveillance", ID: 3 },
    { title: "Video4",thumbnail:"https://source.unsplash.com/random/693x280/?surveillance", ID: 4 },
    { title: "Video5",thumbnail:"https://source.unsplash.com/random/694x280/?surveillance", ID: 5 },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {videos.map((video, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <ActionAreaCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
