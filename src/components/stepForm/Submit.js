import { Container, CssBaseline, Typography } from '@material-ui/core'
import React from 'react';



export const Submit = () => {
    return (
        <>

        <CssBaseline />
        <Container fixed style={{ marginTop: '4rem'}}>
           <Typography variant="h4"  align='center' style={{fontWeight: 'bold'}}> Thank you for Submitting </Typography> 
           <Typography variant="h6" align='center' >We will be in touch</Typography>
        </Container>
        </>
    )
}

