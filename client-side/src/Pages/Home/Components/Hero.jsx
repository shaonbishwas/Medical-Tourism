import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

const Hero = () => {



  return (
    <Box
      sx={{
        mt: 9,
        bgcolor: "#F8FFF5",
        color: "#606060",
        textAlign: "center",
        padding: "50px 0",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item lg={6} sx={{ textAlign: "left"}}>
            <Typography variant="h1" sx={{ fontSize: 62, fontWeight: "bold" }} >
            Unveiling the Wonders of <span style={{color: "#829BFF"}}>Medical Tourism</span>
            </Typography>
            <Typography variant="h5" sx={{ fontSize: 20, fontWeight: "bold", mt: 2 }} >
            Your Gateway to Exceptional Medical Care Across Borders.
            </Typography>
            <NavLink to="/">
              <Button sx={{ mt: 3, fontSize: 18, fontWeight: "bold", py: 1.2, px: 2.3, bgcolor: "#829BFF" }} variant="contained" color="primary">
              Explore
              </Button>
            </NavLink>
          </Grid>
          <Grid
            item
            lg={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <img
              src="https://i.postimg.cc/SQCj0WB6/https-lottiefiles-com-animations-medical-shield-f8tk-R8-Ym-Ye.gif"
              alt="Banner"
              style={{ borderRadius: 2, width: '500px' }}
            />
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
