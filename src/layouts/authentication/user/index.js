/* eslint-disable import/no-unresolved */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
// import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

// @mui material components
import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Authentication layout components
// import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
// import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  return (
    <MDBox mt={{ xs: 15, lg: 10 }} px={1} width="calc(100% - 2rem)" mx="auto">
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={11} sm={11} md={8} lg={6} xl={6}>
          <Card>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="success"
              mx={2}
              mt={-3}
              p={3}
              mb={1}
              textAlign="center"
            >
              <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                User Registration
              </MDTypography>
              {/* <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography> */}
            </MDBox>
            <MDBox pt={3} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <MDInput type="text" label="User Name" variant="standard" fullWidth />
                    <MDInput type="email" label="User Email" variant="standard" fullWidth />
                  </div>
                </MDBox>
                <MDBox mb={2}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <MDInput type="password" label="Password " variant="standard" fullWidth />
                    <MDInput type="text" label="Contact No" variant="standard" fullWidth />
                  </div>
                </MDBox>

                <MDBox mb={2}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <MDInput type="text" label="Address 1 " variant="standard" fullWidth />
                    <MDInput type="text" label="Address 2" variant="standard" fullWidth />
                  </div>
                </MDBox>

                <MDBox mb={2}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <MDInput type="text" label="city" variant="standard" fullWidth />
                    <MDInput type="text" label="State" variant="standard" fullWidth />
                    <MDInput type="text" label="User Type" variant="standard" fullWidth />
                  </div>
                </MDBox>

                <MDBox display="flex" justifyContent="center">
                  <MDButton variant="gradient" color="info" align="center" type="submit">
                    Submit
                  </MDButton>
                  <MDButton variant="gradient" color="error" align="center" type="reset">
                    cancle
                  </MDButton>
                </MDBox>
                {/* <MDBox mt={3} mb={1} textAlign="center">
                  <MDTypography variant="button" color="text">
                    Already have an account?{" "}
                    <MDTypography
                      component={Link}
                      to="/authentication/sign-in"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Sign In
                    </MDTypography>
                  </MDTypography>
                </MDBox> */}
              </MDBox>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Cover;
