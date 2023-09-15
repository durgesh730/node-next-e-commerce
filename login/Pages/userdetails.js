import React, { useState } from 'react';
import { Button, TextField, Container, Box, CssBaseline, Paper } from '@mui/material';

const MyProfile = ({ onNext, onChange }) => (
    <Box p={3}>
        <TextField label="First Name" fullWidth margin="normal" variant="outlined" onChange={(e) => onChange('firstName', e.target.value)} />
        <TextField label="Last Name" fullWidth margin="normal" variant="outlined" onChange={(e) => onChange('lastName', e.target.value)} />
        <TextField label="Email" fullWidth margin="normal" variant="outlined" onChange={(e) => onChange('email', e.target.value)} />
        <TextField label="Phone Number" fullWidth margin="normal" variant="outlined" onChange={(e) => onChange('phone', e.target.value)} />
        <Box mt={3}>
            <Button variant="contained" color="primary" onClick={onNext}>
                Next
            </Button>
        </Box>
    </Box>
);

const Address = ({ onSubmit, onChange }) => (
    <Box p={3}>
        <TextField label="Street Address" fullWidth margin="normal" variant="outlined" onChange={(e) => onChange('street', e.target.value)} />
        <TextField label="City" fullWidth margin="normal" variant="outlined" onChange={(e) => onChange('city', e.target.value)} />
        <TextField label="State" fullWidth margin="normal" variant="outlined" onChange={(e) => onChange('state', e.target.value)} />
        <TextField label="Zip" fullWidth margin="normal" variant="outlined" onChange={(e) => onChange('zip', e.target.value)} />
        <TextField label="Country" fullWidth margin="normal" variant="outlined" onChange={(e) => onChange('country', e.target.value)} />
        <Box mt={3}>
            <Button variant="contained" color="primary" onClick={onSubmit}>
                Submit
            </Button>
        </Box>
    </Box>
);

const FormWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleDataChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <Container component="main" sx={{ padding: "8rem" }} maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3} style={{ marginTop: '2rem', borderRadius: '1rem' }}>
                {currentStep === 1 && <MyProfile onNext={() => setCurrentStep(2)} onChange={handleDataChange} />}
                {currentStep === 2 && (
                    <Address onSubmit={() => {
                        console.log('Form Data:', formData);
                        alert('Form Submitted!');
                    }}
                        onChange={handleDataChange}
                    />
                )}
            </Paper>
        </Container>
    );
};

export default FormWizard;
