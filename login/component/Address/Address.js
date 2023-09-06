import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Box } from '@mui/material';
import styles from './Address.module.css'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';

function AddressForm() {

  const [selectedAddress, setSelectedAddress] = useState('address1');

  const handleChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <Container component="main"
      maxWidth= "lg"
      sx={{
        boxShadow: "0px 0px 10px -5px black",
        borderRadius: ".5rem", padding: "1rem 1rem",
        marginBottom: "5rem"
      }} >
      <Box sx={{ padding: "2rem 2rem" }} className={styles.addressBox} >

        <Box sx={{ width: "50%", height:"100%" }} >
          <Typography sx={{ paddingTop: "1rem", paddingBottom: "2rem", textAlign: "center" }} variant="h5">Address Form</Typography>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  id="address1"
                  label="Address Line 1"
                  name="address1"
                  autoComplete="address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  id="address2"
                  label="Address Line 2"
                  name="address2"
                  autoComplete="address-line2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  id="state"
                  label="State/Province/Region"
                  name="state"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  id="zip"
                  label="Zip Code"
                  name="zip"
                  autoComplete="postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ backgroundColor: "#E07575 !important" }} >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>

        <Box>
          <Typography>Select Address from Existing</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="address"
              name="address"
              value={selectedAddress}
              onChange={handleChange}
            >
              <FormControlLabel
                value="address1"
                control={<Radio />}
                label="1234 Elm Street, Springfield"
              />
              <FormControlLabel
                value="address2"
                control={<Radio />}
                label="5678 Oak Avenue, Shelbyville"
              />
              <FormControlLabel
                value="address3"
                control={<Radio />}
                label="910 Maple Lane, Capital City"
              />
            </RadioGroup>
          </FormControl>
        </Box>

      </Box>
    </Container>
  );
}

export default AddressForm;
