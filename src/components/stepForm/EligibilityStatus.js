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
  

export const EligibilityStatus = ({ formData, setForm, navigation }) => {
    const classes = useStyles();
    const {  stateoforigin,
            localGovt,
            employmentStatuses,
            monthlyIncome,
            BVN,
            DateofBirth,firstName,
            middleName,
            lastName,
            phoneNumber,
            genders,} = formData;  
 const [employmentStatus, setEmploymentstatus] = useState('');
 const [gender, setGender] = useState('')  
 const handleStatChange = (event) => {
    setEmploymentstatus(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

 return (
        <Container  component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Typography component="h1" variant="h5">
            Eligibility Status
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="State of Origin"
                    name="stateoforigin"
                    value = {stateoforigin}
                    onChange={setForm}
                    margin="normal"
                    size="small"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
                onChange={setForm}
                size="small"
                label="Local Government"
                name="localGovt"
                value = {localGovt}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    select
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    size="small"
                    label="Employment Status"
                    name="employmentStatuses"
                    onChange={handleStatChange}
                    value = {employmentStatus}
                    >
                    {employmentStatuses.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={setForm}
                    size="small"
                    label="Monthly Income"
                    name="monthlyIncome"
                    value = {monthlyIncome}
                    />
            </Grid>
            <Grid item xs={5}> 
                <TextField 
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={setForm}
                    type="number"
                    size="small"
                    label="BVN"
                    name="BVN"
                    value = {BVN}
                />
            </Grid>
            <Grid item xs = {7} >
                <TextField
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={setForm}
                    size="small"
                    label="Date of Birth"
                    name="DateofBirth"
                    type="date"
                    defaultValue={DateofBirth}
                    InputLabelProps={{
                    shrink: true,
                    }}
            />
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
                    <TextField 
                        margin="normal"
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                        onChange={setForm}
                        size="small"
                        label="First Name"
                        name="firstName"
                        value = {firstName}
                    />
        </Grid>
            <Grid item xs>
                    <TextField 
                        margin="normal"
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                        onChange={setForm}
                        size="small"
                        label="Middle Name"
                        name="middleName"
                        value = {middleName}
                    />
            </Grid>
            <Grid item xs>
                <TextField 
                            margin="normal"
                            variant="outlined"
                            autoComplete="off"
                            fullWidth
                            onChange={setForm}
                            size="small"
                            label="Last Name"
                            name="lastName"
                            value = {lastName}
                        />
            </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={5}> 
                <TextField 
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={setForm}
                    size="small"
                    label="Phone Number"
                    name="phoneNumber"
                    value = {phoneNumber}
                />
            </Grid>
            <Grid item xs = {7} >
            <TextField 
                    select
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    size="small"
                    label="Gender"
                    name="genders"
                    onChange={handleGenderChange}
                    value = {gender}
                    >
                    {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
      </Grid>
        <Button variant="contained" fullWidth color="primary" style={{marginTop: '1rem' }} onClick={navigation.next}>Next</Button>
    </form>
</div>
</Container>
        
      
        
       

    
    )
};

