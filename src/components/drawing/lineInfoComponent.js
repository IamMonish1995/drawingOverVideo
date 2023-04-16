import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "@/pages/_app";

export default function LineInfoComponent() {
  const { finalLinePoints } = React.useContext(AppContext);

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Line Coordinates
      </Typography>

      <List>
        {finalLinePoints &&
          finalLinePoints.map((item, key) => {
            return (
              <ListItem
                key={key}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                {/* <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar> */}
                <ListItemText
                  primary={`${item.name}`}
                  secondary={`Start (${item.start.x},${item.start.y})
                              End (${item.end.x},${item.end.y})`}
                />
              </ListItem>
            );
          })}
      </List>
    </>
  );
}
