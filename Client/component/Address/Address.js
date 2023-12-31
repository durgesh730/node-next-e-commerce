import React, { useEffect, useState } from 'react'
import { Typography, Box, Grid, IconButton } from '@mui/material';
import styles from "./Address.module.css";
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { Dialog, DialogContent } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDataByToken } from '@/Redux/actions/userActions';
import CloseIcon from '@mui/icons-material/Close';

const Address = ({ setActive }) => {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [addressType, setAddressType] = useState('addressType');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  const select = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { loading, error, userData } = select;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the address submission logic here
    const { street, city, state, postalCode, country } = formData;
    const fullAddress = { street, city, state, postalCode, country };
  };

  const handleChange = (event) => {
    setSelectedAddress(parseInt(event.target.value, 10));
  };

  const handleChangeAddressType = (event) => {
    setAddressType(event.target.value);
  };

  const handleEdit = (item) => {
    // Logic for handling edits based on the selected address item
    setFormData({
      street: item.street || '',
      city: item.city || '',
      state: item.state || '',
      postalCode: item.zipCode || '',
      country: item.country || '',
    });
    setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    dispatch(fetchUserDataByToken());
  }, [dispatch]);

  return (
    <>
      <Box className={styles.gridDix} >
        <div className={styles.addresshead}  >
          <Typography sx={{ fontWeight: 600 }} > DELIVERY ADDRESS</Typography>
        </div>

        {userData.address?.map((item, index) => {
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
                  <button variant="contained" onClick={() => { setIsDeleteModalOpen(true); handleEdit(item) }} >EDIT</button>
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
            pb: theme => `${theme.spacing(2)} !important`,
            px: theme => [`${theme.spacing(2)} !important`,],
            pt: theme => [`${theme.spacing(2)} !important`,]
          }}
        >
          <Grid sx={{ paddingBottom: "10px" }} >
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Grid>

          <Grid id='alert-dialog-title'
            sx={{
              fontSize: '1rem', gap: '2',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center'
            }}>
            <form onSubmit={handleSubmit}>
              {/* TextField for Street */}
              <TextField
                size="small"
                label="Street"
                variant="outlined"
                fullWidth
                value={formData.street} // Value taken from state
                onChange={(e) => setFormData({ ...formData, street: e.target.value })} // Update street in state
                style={{ marginBottom: '16px' }}
              />

              {/* TextField for City */}
              <TextField
                size="small"
                label="City"
                variant="outlined"
                fullWidth
                value={formData.city} // Value taken from state
                onChange={(e) => setFormData({ ...formData, city: e.target.value })} // Update city in state
                style={{ marginBottom: '16px' }}
              />

              {/* Grid for State/Province and Country */}
              <Grid sx={{ display: 'flex', gap: '1rem' }}>
                {/* TextField for State/Province */}
                <TextField
                  size="small"
                  label="State/Province"
                  variant="outlined"
                  fullWidth
                  value={formData.state} // Value taken from state
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })} // Update state in state
                  style={{ marginBottom: '16px' }}
                />

                {/* TextField for Country */}
                <TextField
                  size="small"
                  label="Country"
                  variant="outlined"
                  fullWidth
                  value={formData.country} // Value taken from state
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })} // Update country in state
                  style={{ marginBottom: '16px' }}
                />
              </Grid>

              {/* TextField for Postal Code */}
              <TextField
                size="small"
                label="Postal Code"
                variant="outlined"
                fullWidth
                value={formData.postalCode} // Value taken from state
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })} // Update postalCode in state
                style={{ marginBottom: '16px' }}
              />

              {/* Grid for Address Type Radio Buttons */}
              <Grid sx={{ display: 'flex', gap: '1rem' }}>
                <Typography>Address Type</Typography>

                {/* Radio buttons for Address Type */}
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="address"
                    name="address"
                    value={addressType} // Value taken from state
                    onChange={handleChangeAddressType} // Update addressType in state
                  >
                    {/* Radio button for Home */}
                    <FormControlLabel
                      value="addressType"
                      control={<Radio />}
                      label="Home (All day delivery)"
                    />

                    {/* Radio button for Work */}
                    <FormControlLabel
                      value="addressType2"
                      control={<Radio />}
                      label="Work (delivery between (10 AM to 5 PM))"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </form>
          </Grid>

          <Grid sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 10px"
          }} >
            <Grid>
              <button className={styles.savebtn} >Save</button>
            </Grid>
            <Grid>
              <button onClick={() => { setIsDeleteModalOpen(false) }}>Cancel</button>
            </Grid>
          </Grid>

        </DialogContent>
      </Dialog>
    </>
  )
}

export default Address