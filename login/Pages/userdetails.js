
import React, { useState } from 'react';
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
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    TextField,
} from '@mui/material';
import styles from '../component/Order/Order.module.css';
import Footer from '@/component/Footer/Footer';

const steps = [
    {
        icon: 'tabler:home',
        title: 'Account Details',
        subtitle: 'Enter your Account Details',
    },
    {
        icon: 'tabler:user',
        title: 'Personal Info',
        subtitle: 'Setup Information',
    },
    {
        icon: 'tabler:link',
        title: 'Social Links',
        subtitle: 'Add Social Links',
    },
];

const userdetails = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        country: '',
        language: [],
        twitter: '',
        facebook: '',
        google: '',
        linkedIn: '',
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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
                                name="Phone number"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                fullWidth
                                type="email"
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                );
            case 1:
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
                            <FormControl size="small" fullWidth variant="outlined">
                                <InputLabel htmlFor="country">Country</InputLabel>
                                <Select
                                    id="country"
                                    label="Country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem value="UK">UK</MenuItem>
                                    <MenuItem value="USA">USA</MenuItem>
                                    <MenuItem value="Australia">Australia</MenuItem>
                                    <MenuItem value="Germany">Germany</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl size="small" fullWidth variant="outlined">
                                <InputLabel htmlFor="language">Language</InputLabel>
                                <Select
                                    id="language"
                                    label="Language"
                                    name="language"
                                    multiple
                                    value={formData.language}
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem value="English">English</MenuItem>
                                    <MenuItem value="French">French</MenuItem>
                                    <MenuItem value="Spanish">Spanish</MenuItem>
                                    <MenuItem value="Portuguese">Portuguese</MenuItem>
                                    <MenuItem value="Italian">Italian</MenuItem>
                                    <MenuItem value="German">German</MenuItem>
                                    <MenuItem value="Arabic">Arabic</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                );
            case 2:
                return (
                    <Grid sx={{ paddingTop: "3rem", paddingBottom: "2rem" }} container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Twitter"
                                name="twitter"
                                value={formData.twitter}
                                onChange={handleChange}
                                placeholder="https://twitter.com/carterLeonard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Facebook"
                                name="facebook"
                                value={formData.facebook}
                                onChange={handleChange}
                                placeholder="https://facebook.com/carterLeonard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Google+"
                                name="google"
                                value={formData.google}
                                onChange={handleChange}
                                placeholder="https://plus.google.com/carterLeonard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                fullWidth
                                label="LinkedIn"
                                name="linkedIn"
                                value={formData.linkedIn}
                                onChange={handleChange}
                                placeholder="https://linkedin.com/carterLeonard"
                            />
                        </Grid>
                    </Grid>
                );
            default:
                return 'Unknown Step';
        }
    };

    return (
        <>
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
        </>
    );
};

export default userdetails;

