import Canvas from "@/components/drawing/Canvas";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import LineInfoComponent from "@/components/drawing/lineInfoComponent";
import { AppContext } from "../_app";
const Video = () => {
  const { finalLinePoints, setFinalLinePoints, clearCanvas } =
    useContext(AppContext);
  const router = useRouter();
  const { videoID } = router.query;
  const [videoURL, setVideoURL] = useState("");

  //   useEffect(()=>{
  //     getVideoByID({ID:videoID}).then((res)=>{
  //         setVideoURL(res)
  //     })
  //   },[videoID])

  const handleSave = () => {
    let finalData = {
      videoID,
      lineCoordinates: finalLinePoints,
    };
    console.log(finalData);
  };
  const handleClear = () => {
    setFinalLinePoints([]);
    clearCanvas();
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <LineInfoComponent />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Canvas
            width={700}
            height={500}
            videoID={videoID}
            videoURL={videoURL}
          />
          <Button
            onClick={handleSave}
            variant="contained"
            style={{ marginTop: 10 }}
            disabled={finalLinePoints.length === 0}
          >
            Save
          </Button>
          <Button
            onClick={handleClear}
            variant="outlined"
            style={{ marginLeft: 50, marginTop: 10 }}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Video;
