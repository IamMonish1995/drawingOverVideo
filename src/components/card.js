import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

export default function ActionAreaCard({ video }) {
  return (
    <Link href={`/video/${encodeURIComponent(video.ID)}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={video.thumbnail}
            alt={`camera ${video.ID}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {video.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
