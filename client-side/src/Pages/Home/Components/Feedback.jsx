import { Box, Container, Typography } from "@mui/material";


const Feedback = () => {
    return (
        <Box>
            <Container>
            <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: 45, fontWeight: "bold", textAlign: "center" }} variant="h3">
            Feedback
          </Typography>
          <Typography sx={{ width: "900px", textAlign: "center" }} variant="h6">
            There are many variations of passages of Lorem Ipsum available.
          </Typography>
        </Box>
            </Container>
        </Box>
    );
};

export default Feedback;