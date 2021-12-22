import React, { useContext } from "react";
import useStyles from "./ListStyle";
import { v4 as uuidv4 } from 'uuid'
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import { ExpenceTrackerContext } from "../../../../context/context";

const List = () => {
  const classes = useStyles();
  const { deleteTranscation, transcation } = useContext(ExpenceTrackerContext);

  return (
    <MUIList dense={false} className={classes.List}>
      {/* console.log(item.id)   */}
      {transcation.map((item,index) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={index}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  item.type == "Income"
                  ? classes.avatarIncome
                  : classes.avatarExpence
                }
                >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.category}
              secondary={`$${item.amount}- ${item.date}`}
              ></ListItemText>
              <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteTranscation(index)}
              
              >
              
              <Delete />
            </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
