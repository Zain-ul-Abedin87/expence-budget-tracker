import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Form from "./Form/Form"
import List from "./List/List"


const MainCard = (props )=> {
    return (
        <Card>
            <CardHeader title="Expence Tracker" subheader="powered by Allah Almighty"/>
            <CardContent>
                <Typography align="center" variant='h5'>Total Balance $100</Typography>
                <Typography variant="subtitle1" style={{lineHeight:'1.5em',marginTop:"20px"}}>trying to Speak</Typography>
               <Divider/>
               <Form/>
            </CardContent>  
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}


export default MainCard
