import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Video = () => {
  const router = useRouter();
  const { videoID } = router.query;
  const [videoURL, setVideoURL] = useState("");

  //   useEffect(()=>{
  //     getVideoByID({ID:videoID}).then((res)=>{
  //         setVideoURL(res)
  //     })
  //   },[videoID])

  return <p>VideoID: {videoID}</p>;
};

export default Video;
