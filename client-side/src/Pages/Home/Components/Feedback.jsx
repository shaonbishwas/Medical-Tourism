import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const Feedback = () => {
  return (
    <Box sx={{}}>
      <Container>
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
            Feedback
          </Typography>
          <Typography sx={{ width: "900px", textAlign: "center" }} variant="h6">
            There are many variations of passages of Lorem Ipsum available.
          </Typography>
        </Box>
        <Box sx={{ my: 4 }}>
          <Marquee speed={100}>
            <Paper elevation={1}>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid item lg={6}>
                  <img
                    src="https://i.postimg.cc/Dzhr1t0b/peasure-Check.jpg"
                    alt="Logo"
                    style={{ width: 500, height: 200 }}
                  />
                </Grid>
                <Grid item lg={6}>
                  <Grid>
                    <Grid>
                      <Typography variant="h4" color="textPrimary">
                        Blood Pressure Check
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid>
                      <Typography variant="h6" color="textPrimary">
                        Type: Vital Sign
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        color="textSecondary"
                        sx={{ display: "inline-flex", alignItems: "center" }}
                      >
                        A quick check of your blood pressure to monitor
                        cardiovascular health.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Typography variant="body1">Total Booked : 10K+</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Marquee>
        </Box>
        {/* <Avatar alt="Remy Sharp" src={user.photoURL} /> */}
      </Container>
    </Box>
  );
};

export default Feedback;
