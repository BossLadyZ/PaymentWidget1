import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'

export const Opening = () => {
    return (
        <>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "150px"
          }}>
            <img src={logo} width='300px' />
        </div>
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"}}>
        <Typography>
          Welcome to your way out of financial crisis. Only with Renmoney
        </Typography>
        </div>
        
        <div  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px"
            }} >
                 <Link to="/details">
                     
                 <Button variant="contained" color="primary">Pay with Renmoney</Button>

                 </Link>
                </div>
        </>
    )
}
