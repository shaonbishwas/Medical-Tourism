import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Hidden from "@mui/material/Hidden";
import { Grid } from "@mui/material";

const pages = [
  { label: "Home", path: "/" },
  { label: "Apply For Visa", path: "/applyvisa" },
  { label: "Contact us", path: "/contact" },
  { label: "About us", path: "/about" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={1} sx={{ bgcolor: "#829BFF" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container>
            <Grid item lg={6}>
              <Hidden mdDown>
                {/* <img
              src="https://i.postimg.cc/B6WgpTx8/output-onlinepngtools.png"
              alt="Logo"
              style={{ height: 52, marginRight: 6 }}
            /> */}
              </Hidden>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  py: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  fontSize: 25,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Medical Tourism
              </Typography>
            </Grid>
            <Grid item lg={6} sx={{display: "flex", justifyContent: "flex-end"}}>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                      <NavLink
                        to={page.path}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          fontWeight:
                            location.pathname === page.path ? "bold" : "normal",
                        }}
                      >
                        {page.label}
                      </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    component={NavLink}
                    to={page.path}
                    sx={{
                      my: 2,
                      paddingRight: 2,
                      display: "block",
                      textDecoration: "none",
                      fontWeight:
                        location.pathname === page.path ? "bold" : "normal",
                      color:
                        location.pathname === page.path ? "#FFDD65" : "white",
                    }}
                  >
                    {page.label}
                  </Button>
                ))}

                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Button
                    sx={{
                      my: 2,
                      bgcolor: "#657FE6",
                      px: 2,
                      fontWeight:
                        location.pathname === "/login" ? "bold" : "normal",
                    }}
                    color="inherit"
                  >
                    Login Now
                  </Button>
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
