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

import { Container, Grid, Typography, Button, Divider } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #4A6AEC, #829BFF)",
        width: "100%",
      }}
    >
      <Container maxWidth="lg" style={{ padding: "2rem 0" }}>
        <Grid container textAlign="center" spacing={2}>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
            </div>
          </Grid>
        </Grid>

        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item sx={{ my: 2 }} xs={12}>
            <Typography
              variant="h5"
              textAlign="center"
              style={{ fontSize: 30, color: "white" }}
            >
              Address
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon style={{ color: "white", fontSize: "20px" }} />
                    <Typography style={{ color: "white", fontSize: "20px" }}>
                      +8801741156408
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <EmailIcon style={{ color: "white", fontSize: "20px",}} />
                    <Typography style={{ color: "white", fontSize: "20px" }}>
                      info@gmail.com
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LocationIcon
                      style={{ color: "white", fontSize: "20px" }}
                    />
                    <Typography style={{ color: "white", fontSize: "20px" }}>
                      72, Wall street, King Road, Dhaka
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>

        <Divider
          variant="middle"
          style={{ backgroundColor: "white", margin: "1rem 0" }}
        />

        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 13,
              }}
            >
              <Button
              >
                <Facebook sx={{ color: "white" }} />
              </Button>
              <Button>
                <Instagram sx={{ color: "white" }} />
              </Button>
              <Button>
                <Twitter sx={{ color: "white"}} />
              </Button>
              <Button>
                <LinkedIn sx={{ color: "white"}} />
              </Button>
              <Button>
                <YouTube sx={{ color: "white"}} />
              </Button>
            </div>
          </Grid>
          <Grid item style={{ textAlign: "center" }} xs={12}>
            <Typography variant="body1" style={{ color: "white" }}>
              © 2024 Medical Tourism. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
