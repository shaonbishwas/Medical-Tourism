import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Search = () => {
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
          <Typography sx={{ fontSize: 45, fontWeight: "bold" }}>
            Explore Destination
          </Typography>
          <Paper
            elevation={2}
            sx={{
              borderRadius: { lg: 50 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
              width: "75%",
            }}
          >
            <Box>
              <FormControl  required sx={{ m: 2 }}>
                <InputLabel id="demo-simple-select-standard">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Country *"
                  //   onChange={}
                  //   value={country}
                  sx={{ width: 200, borderBottom: "1px solid #829BFF" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Bangladesh</MenuItem>
                  <MenuItem value={20}>Thailand</MenuItem>
                  <MenuItem value={30}>Malaysia</MenuItem>
                  <MenuItem value={40}>India</MenuItem>
                </Select>
              </FormControl>
              <FormControl  required sx={{ m: 2 }}>
                <InputLabel id="demo-simple-select">City</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-required"
                  label="City *"
                  //   onChange={}
                  //   value={city}
                  sx={{ width: 200, borderBottom: "1px solid #829BFF" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Dhaka</MenuItem>
                  <MenuItem value={20}>Kolkata</MenuItem>
                  <MenuItem value={30}>Kuala Lumpur</MenuItem>
                  <MenuItem value={40}>Bangkok</MenuItem>
                </Select>
              </FormControl>
              <FormControl  required sx={{ m: 2 }}>
                <InputLabel id="demo-simple-select-required-label">
                  Address
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="Address *"
                  //   onChange={}
                  //   value={address}
                  sx={{ width: 200, borderBottom: "1px solid #829BFF" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>9/2 Dhaka</MenuItem>
                  <MenuItem value={20}>10 Street</MenuItem>
                  <MenuItem value={30}>Street Bangkok</MenuItem>
                  <MenuItem value={40}>93/d Kolkata</MenuItem>
                </Select>
              </FormControl>
              <Button
                sx={{
                  bgcolor: "#829BFF",
                  m: 2.5,
                  py: 1.5,
                  px: 3,
                  borderRadius: 100,
                }}
                variant="contained"
                color="primary"
                disableElevation
              >
                Search
              </Button>
            </Box>
          </Paper>
        </Box>

        {/* Tab Sections */}
        <Box sx={{mt: 6}}>
          <Tabs>
            <TabList className="space-y-1 lg:flex gap-6 items-center mb-6">
              <Tab className=" rounded-md bg-[#829BFF] text-white px-4 py-2">
                <Link>New</Link>
              </Tab>
              <Tab className=" rounded-md bg-[#829BFF] text-white px-4 py-2">
                <Link>All</Link>
              </Tab>
              <Tab className="rounded-md bg-[#829BFF] text-white px-4 py-2">
                <Link>Trending Now</Link>
              </Tab>
            </TabList>

            <TabPanel>
              <h2>New</h2>
            </TabPanel>
            <TabPanel>
              <h2>1</h2>
            </TabPanel>
            <TabPanel>
              <h2>2</h2>
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default Search;
