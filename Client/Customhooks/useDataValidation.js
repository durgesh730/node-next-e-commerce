import toast from 'react-hot-toast';

const useDataValidation = () => {
    const validateData = (value) => {
        // Check if the email is valid using a regular expression
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailPattern.test(email);
        if (!value.email.trim()) {
            toast.error("email is required")
        } else if (value.password.trim()) {
            toast.error("password is required")
        } else if (!value.cpassword.trim()) {
            toast.error("confirm password required")
        } else if (!isValid) {
            toast.error("email is not valid")
        } else if (password !== cpassword) {
            toast.error("password not matched")
        } else {
            return true;
        }
    }

    return { validateData }
}

export default useDataValidation
