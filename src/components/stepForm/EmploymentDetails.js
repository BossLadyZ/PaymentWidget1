import React, { useState } from 'react';
import { Button, Container, CssBaseline, Grid, MenuItem, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     paper: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
  }));
  

export const EmploymentDetails = ({ formData, setForm, navigation }) => {
    const classes = useStyles();

    const {  employerName, empSectors, empStart,
    offAdd,
    workEmail }  = formData;  

 const [empSector, setEmpsector] = useState('');
 
 const handleSectorChange = (event) => {
    setEmpsector(event.target.value);
  };

 return (
        <Container  component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Typography component="h1" variant="h5">
            Employment Details
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
        <Grid item xs={12}> 
                <TextField 
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={setForm}
                    size="small"
                    label="Employer Name"
                    name="employerName"
                    value = {employerName}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    select
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    size="small"
                    label="Employment Sector"
                    name="empSectors"
                    onChange={handleSectorChange}
                    value = {empSector}
                    >
                    {empSectors.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
            <TextField
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={setForm}
                    size="small"
                    label="Employment Start Date"
                    name="empStart"
                    type="date"
                    defaultValue={empStart}
                    InputLabelProps={{
                    shrink: true,
                    }}
            />
            </Grid>
            <Grid item xs={12}> 
                <TextField 
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={setForm}
                    size="small"
                    label="Office Address"
                    name="offAdd"
                    value = {offAdd}
                />
            </Grid>
            <Grid item xs={12}> 
                <TextField 
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={setForm}
                    size="small"
                    label="Work Email"
                    name="workEmail"
                    value = {workEmail}
                />
            </Grid>
        </Grid>
       <div style={{marginTop:'1rem'}}>
       <Button variant="contained"  style={{marginRight: '1rem' }} onClick={navigation.previous}>Back</Button>
        <Button variant="contained" color="primary" onClick={navigation.next}>Submit</Button>
       </div>
                 
        
        
    </form>
</div>
</Container>
  
    )
};

