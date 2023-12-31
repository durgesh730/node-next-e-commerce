
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
import { UpdateUserAddress, fetchUserDataByToken } from '@/Redux/actions/userActions';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Avatar from '@mui/material/Avatar';
// import pic from '../image/download.png'
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';

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
    const [value, setValue] = useState('option1');
    const [activeStep, setActiveStep] = useState(0);
    const dispatch = useDispatch();
    const UData = useSelector(state => state.user)
    const { error, isloading, userData } = UData;
    const router = useRouter()
    const [picLoading, setPicLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: '',
        password: '',
        confirmPassword: '',
        street: '',
        state: '',
        country: '',
        zipCode: '',
        city: '',
        pic: userData.pic
    });

    const address = {
        state: formData.state,
        country: formData.country,
        zipCode: formData.zipCode,
        street: formData.street,
        city: formData.city
    }

    const handleNext = () => {
        if (!formData.firstName ||
            !formData.email ||
            !formData.lastName
        ) {
            toast.error('plz fill all details')
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }

        if (activeStep >= 1) {
            dispatch(UpdateUserAddress(address));
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
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone,
            pic: userData.pic
        }));
    }, [userData])

    useEffect(() => {
        dispatch(fetchUserDataByToken());
    }, []);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const postDetails = (pics) => {
        setPicLoading(true);
        if (pics === undefined) {
            toast.error({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "durgesh2022");
            fetch("https://api.cloudinary.com/v1_1/durgesh2022/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setFormData((prev) => ({
                        ...prev,
                        pic: data.url.toString()
                    }))
                    setPicLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setPicLoading(false);
                });
        } else {
            toast.success({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setPicLoading(false);
            return;
        }
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Box sx={{ marginTop: "30px", display: "flex", justifyContent: "start", alignItems: "center", gap: "20px" }} >
                            <Avatar sx={{ width: 100, height: 100 }}><Image width={200} height={200} src={formData.pic} alt='image avtar'></Image></Avatar>
                            <Grid>
                                {!picLoading ?
                                    <Button size='medium' component="label" variant="contained" startIcon={<CloudUploadIcon />}> Upload Image
                                        <VisuallyHiddenInput
                                            type='file'
                                            accept="image/*"
                                            onChange={(e) => postDetails(e.target.files[0])}
                                        />
                                    </Button> :
                                    <CircularProgress />
                                }
                            </Grid>
                        </Box>

                        <Grid sx={{ paddingTop: "1rem", paddingBottom: "2rem" }} container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>First Name</label>
                                <TextField
                                    size="small"
                                    fullWidth
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label>Last Name</label>
                                <TextField
                                    size="small"
                                    fullWidth
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
                    </>
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

