import toast from 'react-hot-toast';

const useDataValidation = () => {
  const validateData = (value) => {
    const { email, password, cpassword } = value; // Destructure values

    // Check if the email is valid using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);

    if (!email.trim()) {
      toast.error("Email is required");
    } else if (!password.trim()) {
      toast.error("Password is required");
    } else if (!cpassword.trim()) {
      toast.error("Confirm password required");
    } else if (!isValid) {
      toast.error("Email is not valid");
    } else if (password !== cpassword) {
      toast.error("Passwords do not match");
    } else {
      return true;
    }
  };

  return { validateData };
};

export { useDataValidation };
