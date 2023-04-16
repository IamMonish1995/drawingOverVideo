import Canvas from "@/components/drawing/Canvas";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import LineInfoComponent from "@/components/drawing/lineInfoComponent";
const Video = () => {
  const router = useRouter();
  const { videoID } = router.query;
  const [videoURL, setVideoURL] = useState("");

  //   useEffect(()=>{
  //     getVideoByID({ID:videoID}).then((res)=>{
  //         setVideoURL(res)
  //     })
  //   },[videoID])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LineInfoComponent />
        </Grid>
        <Grid item xs>
          <Canvas
            width={700}
            height={500}
            videoID={videoID}
            videoURL={videoURL}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Video;
