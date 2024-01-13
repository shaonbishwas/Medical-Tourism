import {
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Room as LocationIcon,
} from "@mui/icons-material";

import {
  Container,
  Grid,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #4A6AEC, #829BFF)",
        width: "100%",
      }}
    >
      <Container maxWidth="lg" style={{ padding: "2rem 0" }}>
        <Grid container spacing={2} >
          <Grid item xs={12}></Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            
          }}
        >
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item sx={{ my: 2 }} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mr: 3
                }}
              >
                {/* <img
                style={{ width: "100px", marginBottom: "8px" }}
                src="https://i.postimg.cc/B6WgpTx8/output-onlinepngtools.png"
                alt="logo"
              /> */}
                <Typography
                  variant="h4"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Medical Tourism
                </Typography>
                <Typography variant="h6" style={{ color: "white" }}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </Typography>

                <Box sx={{ color: "white", display: "flex", gap: 2, my: 2 }}>
                <Link>
                  <Facebook />
                </Link>
                <Link>
                  <Instagram />
                </Link>
                <Link>
                  <Twitter />
                </Link>
                <Link>
                  <LinkedIn />
                </Link>
                <Link>
                  <YouTube />
                </Link>
                </Box>
                <Typography variant="body1" style={{ color: "white" }}>
                  © 2024 Medical Tourism. All Rights Reserved.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider orientation="vertical" variant="middle" flexItem sx={{bgcolor: "white"}} />

          <Grid container  spacing={2} sx={{ml: 3}}>
            <Grid item xs={12}></Grid>
            <Grid item  xs={12}>
              <Typography
                variant="h5"
                sx={{ fontSize: 30, color: "white", mb: 2, fontWeight: "bold" }}
              >
                Address
              </Typography>
              <Box style={{ display: "flex"}}>
                <Grid container  spacing={2}>
                  <Grid item>
                    <div style={{ display: "flex" }}>
                      <PhoneIcon style={{ color: "white", fontSize: "20px" }} />
                      <Typography style={{ color: "white", fontSize: "20px" }}>
                        +8801741156408
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <div
                      style={{ display: "flex", gap: 6 }}
                    >
                      <EmailIcon style={{ color: "white", fontSize: "20px" }} />
                      <Typography style={{ color: "white", fontSize: "20px" }}>
                        info@gmail.com
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <div style={{ display: "flex" }}>
                      <LocationIcon
                        style={{ color: "white", fontSize: "20px" }}
                      />
                      <Typography style={{ color: "white", fontSize: "20px" }}>
                        72, Wall street, King Road, Dhaka
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
