import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";
import useTransactions from "../../useTranscation"
const Details = ({title,subtitle}) => {
  const classes = useStyles();
  const {total,chartData} = useTransactions(title)
  return (
    <Card className={title==="Expence" ? classes.expence : classes.income}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5" subtitle={subtitle} >${total}</Typography>
        <Doughnut data={chartData}/>
      </CardContent>
    </Card>
  );
};


export default Details;
