import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const massage = form.massage.value;

    const brand = {
      name,
      email,
      massage,
    };
    console.log(brand);

   
      Swal.fire({
        title: "Successfully",
        text: "Your Massage has been successfully",
        icon: "success",
        confirmButtonText: "oky",
      });
      form.reset();

  };

  return (
    <Box sx={{ mt: 16, mb: 9 }}>
      <Container maxWidth="lg" my={16} px={5}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Box container
              sx={{
                bgcolor: "#FCFCFC",
                mt: "1.5rem",
                p: "2rem",
                borderRadius: "0.5rem",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "400px",
                  margin: "auto",
                }}
              >
                <Typography variant="h4" sx={{mb: 3.5, fontWeight: "bold"}} gutterBottom>
                  Write A Massage
                </Typography>
              </div>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Your Name"
                      name="name"
                      placeholder="Enter name"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="You Email"
                      name="email"
                      placeholder="Enter Your Email"
                      fullWidth
                      required
                    />
                  </Grid>
                  {/* <Grid item xs={12} >
                    <Select label="Type" name="type" fullWidth required>
                      <MenuItem value="select">Select type</MenuItem>
                      <MenuItem value="car">Car</MenuItem>
                      <MenuItem value="bus">Bus</MenuItem>
                      <MenuItem value="mini">Mini Bus</MenuItem>
                      <MenuItem value="truck">Truck</MenuItem>
                    </Select>
                  </Grid> */}
                  <Grid item xs={12}>
                    <TextField
                      label="You Massage"
                      name="massage"
                      placeholder="Enter Your Massage"
                      fullWidth
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      style={{ marginTop: "1rem", paddingTop: 14, paddingBottom: 11, backgroundColor: "#829BFF" }}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
