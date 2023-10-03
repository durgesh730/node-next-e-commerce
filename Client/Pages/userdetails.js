
import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    Grid,
    Typography,
    Divider,
    Button,
    Stepper,
    Step,
    StepLabel,
    TextField,
} from '@mui/material';
import styles from '../component/Order/Order.module.css';
import Footer from '@/component/Footer/Footer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDataByToken } from '@/Redux/actions/userActions';
import { useRouter } from 'next/router';
const steps = [
    {
        icon: 'tabler:home',
        title: 'Account Details',
        subtitle: 'Enter your Account Details',
    },
    {
        icon: 'tabler:user',
        title: 'Address Details',
        subtitle: 'Enter your Address Details',
    }
];


const userdetails = () => {
    const [value, setValue] = React.useState('option1');
    const [activeStep, setActiveStep] = useState(0);
    const dispatch = useDispatch();
    const UData = useSelector(state => state.user)
    const { error, isloading, userData } = UData;
    const Useremail = userData.email
    const router = useRouter()
    console.log(activeStep, "nkjn")

    const [formData, setFormData] = useState({
        phone: '',
        email: Useremail,
        password: '',
        confirmPassword: '',
        firstName: '',
        street: '',
        lastName: '',
        state: '',
        country: '',
        zipCode: '',
    });

    const handleNext = () => {
        if (!formData.firstName ||
            !formData.email ||
            !formData.lastName
        ) {
            alert("plz fill all details")
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (activeStep > 2) {
            router.push('/')
        }
    }, [activeStep])

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            email: Useremail,
        }));
    }, [userData])

    useEffect(() => {
        dispatch(fetchUserDataByToken());
    }, []);

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Grid sx={{ paddingTop: "3rem", paddingBottom: "2rem" }} container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                fullWidth
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                fullWidth
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <>

                        <Grid sx={{ paddingTop: "3rem", paddingBottom: "2rem" }} container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="Address(area and street)"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="State"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="ZipCode"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="Country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    label="LandMark(optional)"
                                    name="landMark(optional)"
                                    value={formData.landMark}
                                    onChange={handleChange}
                                />
                            </Grid>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <RadioGroup sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }} value={value} onChange={(e) => setValue(e.target.value)}>
                                <FormControlLabel value="option1" control={<Radio />} label="Home (All day delivery)" />
                                <FormControlLabel value="option2" control={<Radio />} label="Work(Delivery Between 10 AM - 5PM)" />
                            </RadioGroup>
                        </Grid>
                    </>
                );
            default:
                return (
                    <Box sx={{ textAlign: "center", paddingTop: "2rem", fontSize: "1.5rem" }} >
                        <span> <CheckCircleIcon /> Your Data Saved Successfully</span>
                    </Box>
                )
        }
    };

    return (
        <>
            <Box sx={{ backgroundColor: "#F1F3F6" }} >
                <Card sx={{ width: "80%", margin: "auto", position: "relative", top: "11rem" }}>
                    <Box p={3} sx={{ padding: "4rem", margin: "auto" }} >
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <StepLabel>
                                        <Typography variant="subtitle1">{step.title}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {step.subtitle}
                                        </Typography>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Divider sx={{ paddingTop: "1rem" }} />
                        <form onSubmit={(e) => e.preventDefault()}>
                            {getStepContent(activeStep)}
                            <Grid container justifyContent="space-between" mt={3}>
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                    >
                                        Back
                                    </Button>
                                </Grid>

                                <Grid item className={styles.Nextbtn}>
                                    <Button
                                        sx={{ backgroundColor: "#E07575", padding: " .8rem 3rem" }}
                                        variant="contained"
                                        onClick={activeStep === steps.length - 1 ? handleNext : handleNext}
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Card>

                <Box sx={{ position: "relative", top: "18rem" }} >
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

export default userdetails;

