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
  

export const PersonalDetails = ({ formData, setForm, navigation }) => {
    const classes = useStyles();
    const {  resStatuses, dateMovedin, maritalStatuses, levelsofEducation} 
    = formData;  
 const [resStatus, setResstatus] = useState('');
 const [maritalStatus, setMaritalstatus] = useState('')  
 const [levelofEduc, setLevelofeduc] = useState('') 
 
 const handleResChange = (event) => {
    setResstatus(event.target.value);
  };
  const handleMariChange = (event) => {
    setMaritalstatus(event.target.value);
  };
  const handleLevelChange = (event) => {
    setLevelofeduc(event.target.value);
  };

 return (
        <Container  component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Typography component="h1" variant="h5">
            Personal Details
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField 
                    select
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    size="small"
                    label="Residential Status"
                    name="resStatuses"
                    onChange={handleResChange}
                    value = {resStatus}
                    >
                    {resStatuses.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs = {12} >
                <TextField
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={setForm}
                    size="small"
                    label="Date Moved In"
                    name="dateMovedin"
                    type="date"
                    defaultValue={dateMovedin}
                    InputLabelProps={{
                    shrink: true,
                    }}
            />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    select
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    size="small"
                    label="Marital Status"
                    name="maritalStatuses"
                    onChange={handleMariChange}
                    value = {maritalStatus}
                    >
                    {maritalStatuses.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    select
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    size="small"
                    label="Level of Education"
                    name="levelsofEducation"
                    onChange={handleLevelChange}
                    value = {levelofEduc}
                    >
                    {levelsofEducation.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
        </Grid>
       <div style={{marginTop:'1rem'}}>
       <Button variant="contained"  style={{marginRight: '1rem' }} onClick={navigation.previous}>Back</Button>
        <Button variant="contained" color="primary" onClick={navigation.next}>Next</Button>
       </div>
                 
        
        
    </form>
</div>
</Container>
  
    )
};

