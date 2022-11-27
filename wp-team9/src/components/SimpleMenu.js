import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography,
} from "@material-ui/core";
import restaurant from "../dummy/restaurant.json";
import userList from "../dummy/user.json";
import { useLocation, Link } from 'react-router-dom';

const SimpleMenu = (props) => {
  return(
    <div style={{width:"280px", height:"200px", textAlign:"center", fontSize:"30px"}}>
      <Card elevation={5}>
        <CardHeader title={props.name}></CardHeader>
        <CardContent>
            {props.price}
            <Typography variant="body1" component="p">
                <img src={process.env.PUBLIC_URL+props.img} style={{width:"200px", height:"150px", marginLeft:"5px"}}/> <br />
            </Typography>
        </CardContent>
      </Card>
  </div>
  );
}

export default SimpleMenu;