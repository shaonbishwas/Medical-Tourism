import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

const Subscription = () => {
  return (
    <Box sx={{ my: 10 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ fontSize: 45, fontWeight: "bold", textAlign: "center" }}
            variant="h3"
          >
            Get The Latest Update
          </Typography>
          <Typography sx={{ width: "900px", textAlign: "center" }} variant="h6">
            Subscribe to Our Exclusive Email Updates for the Latest News,
            Offers, and More!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}
        >
          
          <TextField
            id="email"
            label="Enter Your Email"
            variant="outlined"
            type="email"
            margin="normal"
            sx={{width: "65%"}}
          />

          <Button
            sx={{
              bgcolor: "#829BFF",
              mt: 0.7,
              ml: 1,
              py: 2,
              px: 3,
            }}
            variant="contained"
            color="primary"
            disableElevation
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscription;
