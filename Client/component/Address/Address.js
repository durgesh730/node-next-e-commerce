import React, { useEffect, useState } from 'react'
import { Typography, Box, Button, Grid } from '@mui/material';
import styles from "./Address.module.css";
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDataByToken } from '@/Redux/actions/userActions';

const Address = ({ setActive }) => {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [addressType, setAddressType] = useState('addressType');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const select = useSelector(state => state.user);
  const dispatch = useDispatch()
  const { loading, error, userData } = select

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullAddress = {
      street,
      city,
      state,
      postalCode,
      country
    };
    console.log('Full Address:', fullAddress);
    // Handle the address submission logic here
  };

  const handleChangeAddressType = (event) => {
    setAddressType(event.target.value);
  }

  const handleChange = (event) => {
    setSelectedAddress(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    dispatch(fetchUserDataByToken())
  }, [])

  return (
    <>
      <Box className={styles.gridDix} >
        <div className={styles.addresshead}  >
          <Typography sx={{ fontWeight: 600 }} > DELIVERY ADDRESS</Typography>
        </div>

        {userData.addresses?.map((item, index) => {
          return (
            <Box sx={{ padding: "2rem 2rem" }} className={styles.addressBox} >
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="address"
                  name="address"
                  value={selectedAddress}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={index}
                    control={<Radio />}
                    label={
                      <div className={styles.labelRadio} >
                        <Typography sx={{ display: 'flex', flexDirection: "row", gap: "2rem" }} >
                          {userData.firstName ? (userData.firstName, userData.lastname) : "Not Available"}
                          <Typography> {userData.phone ? userData.phone : "Not Available"}</Typography>
                        </Typography>
                        <Typography sx={{ paddingTop: ".3rem" }}>
                          {item.street} {item.city} {item.country}
                        </Typography>
                      </div>
                    }
                  />
                </RadioGroup>
              </FormControl>

              <div className={styles.DelyEdit} >
                {selectedAddress == index ?
                  <div className={styles.Deliverybtn}>
                    <button variant="contained" onClick={() => { setActive(2) }} >DELIVERY HERE</button>
                  </div>
                  : ""
                }
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }} >
                  <button variant="contained" onClick={() => { setIsDeleteModalOpen(true) }} >EDIT</button>
                </div>
              </div>
            </Box>
          )
        })}
      </Box>

      <Dialog
        fullWidth
        open={isDeleteModalOpen}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(4)} !important`,
            px: theme => [`${theme.spacing(4)} !important`,],
            pt: theme => [`${theme.spacing(4)} !important`,]
          }}
        >

          <DialogTitle id='alert-dialog-title' sx={{ fontSize: '1rem', gap: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                variant="outlined"
                size="small"
                fullWidth
                value={fullname}
                onChange={(e) => setStreet(e.target.value)}
                style={{ marginBottom: '16px' }}
              />
              <TextField
                size="small"
                label="Phone No"
                variant="outlined"
                fullWidth
                value={phone}
                onChange={(e) => setStreet(e.target.value)}
                style={{ marginBottom: '16px' }}
              />
              <TextField
                size="small"
                label="Street"
                variant="outlined"
                fullWidth
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                style={{ marginBottom: '16px' }}
              />
              <TextField
                size="small"
                label="City"
                variant="outlined"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ marginBottom: '16px' }}
              />

              <Grid sx={{ display: "flex", gap: "1rem" }} >
                <TextField
                  size="small"
                  label="State/Province"
                  variant="outlined"
                  fullWidth
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  style={{ marginBottom: '16px' }}
                />
                <TextField
                  size="small"
                  label="Country"
                  variant="outlined"
                  fullWidth
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  style={{ marginBottom: '16px' }}
                />
              </Grid>

              <TextField
                size="small"
                label="Postal Code"
                variant="outlined"
                fullWidth
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                style={{ marginBottom: '16px' }}
              />

              <Grid sx={{ display: "flex", gap: "1rem" }} >
                <Typography>Address Type</Typography>

                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="address"
                    name="address"
                    value={addressType}
                    onChange={handleChangeAddressType}
                  >
                    <FormControlLabel
                      value="addressType"
                      control={<Radio />}
                      label="Home (All day delivery)"
                    />
                    <FormControlLabel
                      value="addressType2"
                      control={<Radio />}
                      label="Work (delivery between (10 AM to 5 PM))"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </form>

            <DialogActions className='dialog-actions-dense' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button color='error' variant='contained'>Delete</Button>
              <Button onClick={() => { setIsDeleteModalOpen(false) }}>Cancel</Button>
            </DialogActions>
          </DialogTitle>

        </DialogContent>
      </Dialog>
    </>
  )
}

export default Address
