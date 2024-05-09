/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Icon from "@mui/material/Icon";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// eslint-disable-next-line no-unused-vars
import { getAllUser, registerUser, addEditUser, deleteUserById } from "service/user.service";
import { Margin, Pix } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function User() {
  // const [city, setCity] = React.useState("");
  // const [state, setState] = React.useState("");
  // const [userType, setUserType] = React.useState("");

  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [isConfirm, setIsConfirm] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userObj, setUserObj] = useState({
    userName: "",
    userEmail: "",
    password: "",
    contactNo: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    userType: "",
  });

  const getAll = async () => {
    try {
      const res = await getAllUser().then((response) => {
        // console.log("response ===>", response);
        if (response && response.status === "success" && response.user_operators) {
          // const arr = response.society_operators.map((item) => [item.societyName]);
          setUserData(response.user_operators);
        } else {
          setUserData([]);
        }
      });
      // console.log("getAll res", res);
    } catch (err) {
      setUserData([]);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const onResetUserObj = async (obj) => {
    setUserObj({
      userName: (obj && obj.userName) || "",
      userEmail: (obj && obj.userEmail) || "",
      password: (obj && obj.password) || "",
      contactNo: (obj && obj.contactNo) || "",
      address_1: (obj && obj.address_1) || "",
      address_2: (obj && obj.address_2) || "",
      city: (obj && obj.city) || "",
      state: (obj && obj.state) || "",
      userType: (obj && obj.userType) || "",
    });
  };

  const onCancelBtnClick = async () => {
    onResetUserObj({});
    setUserId("");
    handleClose();
  };

  const onModelCancelClick = () => {
    setIsConfirm(false);
    setUserId("");
  };

  const onConfirmDelete = async () => {
    const response = await deleteUserById(userId);
    if (response.status === "success") {
      alert(response.message);
      setUserId("");
      setIsConfirm(false);
      getAll();
    } else {
      alert(response.message);
    }
  };

  const onSubmitClick = async () => {
    const response = await addEditUser(userObj, userId);
    console.log("Response", response);
    if (response.status === "success") {
      alert(response.message);
      onResetUserObj({});
      setUserId("");
      handleClose();
      getAll();
    } else {
      alert(response.message);
    }
  };

  const onEditClick = async (data) => {
    console.log("data", data);
    // eslint-disable-next-line no-underscore-dangle
    setUserId((data && data._id) || "");
    onResetUserObj(data);
    handleOpen();
  };

  const onDeleteClick = async (data) => {
    // eslint-disable-next-line no-underscore-dangle
    console.log("id", data && data._id);
    // eslint-disable-next-line no-underscore-dangle
    setUserId(data._id);
    // onResetFaqObj(id);
    setIsConfirm(true);
  };

  const handleClosed = () => {
    setIsConfirm(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name);
    console.log("value", value);
    setUserObj({ ...userObj, [name]: value });
  };

  // const handleChangeState = (event) => {
  //   setUserObj({ ...userObj, state: event.target.value });
  //   setState(event.target.value);
  // };

  // const handleChangeUserType = (event) => {
  //   setUserObj({ ...userObj, userType: event.target.value });
  //   setUserType(event.target.value);
  // };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDBox
                  pt={0}
                  px={0}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <MDTypography variant="h6" fontWeight="medium" color="white">
                    User Listing
                  </MDTypography>
                  <MDButton
                    variant="gradient"
                    color="dark"
                    // component={Link}
                    // to="/authentication/user"
                    onClick={handleOpen}
                  >
                    {/* href="Dashboard" */}
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;add new User
                  </MDButton>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box>
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
                                  {userId ? "Update" : "Add"} User
                                </MDTypography>
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
                                      <MDInput
                                        type="text"
                                        label="User Name"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={userObj.userName}
                                        onChange={(e) =>
                                          setUserObj({
                                            ...userObj,
                                            userName: e.target.value,
                                          })
                                        }
                                      />
                                      <MDInput
                                        type="email"
                                        label="User Email"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={userObj.userEmail}
                                        onChange={(e) =>
                                          setUserObj({
                                            ...userObj,
                                            userEmail: e.target.value,
                                          })
                                        }
                                      />
                                    </div>
                                  </MDBox>
                                  <MDBox mb={2}>
                                    <div
                                      style={{
                                        display: "flex",
                                        width: "100%",
                                      }}
                                    >
                                      <MDInput
                                        type="password"
                                        label="Password "
                                        variant="standard"
                                        fullWidth
                                        defaultValue={userObj.password}
                                        onChange={(e) =>
                                          setUserObj({
                                            ...userObj,
                                            password: e.target.value,
                                          })
                                        }
                                      />
                                      <MDInput
                                        type="text"
                                        label="Contact No"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={userObj.contactNo}
                                        onChange={(e) =>
                                          setUserObj({
                                            ...userObj,
                                            contactNo: e.target.value,
                                          })
                                        }
                                      />
                                    </div>
                                  </MDBox>

                                  <MDBox mb={2}>
                                    <div
                                      style={{
                                        display: "flex",
                                        width: "100%",
                                      }}
                                    >
                                      <MDInput
                                        type="text"
                                        label="Address 1 "
                                        variant="standard"
                                        fullWidth
                                        defaultValue={userObj.address_1}
                                        onChange={(e) =>
                                          setUserObj({
                                            ...userObj,
                                            address_1: e.target.value,
                                          })
                                        }
                                      />
                                      <MDInput
                                        type="text"
                                        label="Address 2"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={userObj.address_2}
                                        onChange={(e) =>
                                          setUserObj({
                                            ...userObj,
                                            address_2: e.target.value,
                                          })
                                        }
                                      />
                                    </div>
                                  </MDBox>

                                  <MDBox mb={2} display="flex" justifyContent="space-between">
                                    <div
                                      style={{
                                        display: "flex",
                                        width: "100%",
                                      }}
                                    >
                                      <FormControl
                                        variant="standard"
                                        sx={{ m: 1, minWidth: 120 }}
                                        fullWidth
                                        defaultValue={userObj.city}
                                        onChange={(e) =>
                                          setUserObj({
                                            ...userObj,
                                            city: e.target.value,
                                          })
                                        }
                                      >
                                        <InputLabel id="demo-simple-select-standard-label">
                                          City
                                        </InputLabel>
                                        <Select
                                          labelId="demo-simple-select-standard-label"
                                          id="demo-simple-select-standard"
                                          value={userObj.city}
                                          onChange={handleChange}
                                          label="City"
                                          name="city"
                                        >
                                          <MenuItem value="">
                                            <em>None</em>
                                          </MenuItem>
                                          <MenuItem value="Surat">Surat</MenuItem>
                                          <MenuItem value="Vadodara">Vadodara</MenuItem>
                                          <MenuItem value="Anand">Anand</MenuItem>
                                        </Select>
                                      </FormControl>

                                      <FormControl
                                        variant="standard"
                                        sx={{ m: 1, minWidth: 120 }}
                                        fullWidth
                                        defaultValue={userObj.state}
                                        onChange={(e) =>
                                          setUserObj({
                                            ...userObj,
                                            state: e.target.value,
                                          })
                                        }
                                      >
                                        <InputLabel id="demo-simple-select-standard-label">
                                          State
                                        </InputLabel>
                                        <Select
                                          labelId="demo-simple-select-standard-label"
                                          id="demo-simple-select-standard"
                                          value={userObj.state}
                                          onChange={handleChange}
                                          label="State"
                                          name="state"
                                          // inputProps={{ readOnly: true }}
                                        >
                                          <MenuItem value="">
                                            <em>None</em>
                                          </MenuItem>
                                          <MenuItem value="Gujarat">Gujarat</MenuItem>
                                        </Select>
                                      </FormControl>

                                      <FormControl
                                        variant="standard"
                                        sx={{ m: 1, minWidth: 120 }}
                                        fullWidth
                                        defaultValue={userObj.userType}
                                        onChange={(e) =>
                                          setUserObj({
                                            ...userObj,
                                            userType: e.target.value,
                                          })
                                        }
                                      >
                                        <InputLabel id="demo-simple-select-standard-label">
                                          User Type
                                        </InputLabel>
                                        <Select
                                          labelId="demo-simple-select-standard-label"
                                          id="demo-simple-select-standard"
                                          value={userObj.userType}
                                          onChange={handleChange}
                                          label="User Type"
                                          name="userType"
                                          // inputProps={{ readOnly: true }}
                                        >
                                          <MenuItem value="">
                                            <em>None</em>
                                          </MenuItem>
                                          <MenuItem value="Super Admin">Super Admin</MenuItem>
                                          <MenuItem value="Manager">Manager</MenuItem>
                                          <MenuItem value="Member">Member</MenuItem>
                                        </Select>
                                      </FormControl>
                                    </div>
                                  </MDBox>

                                  <MDBox display="flex" justifyContent="space-between">
                                    {/* <span style={{ marginRight: "10px" }}> */}
                                    <MDButton
                                      variant="gradient"
                                      color="info"
                                      align="center"
                                      type="button"
                                      onClick={() => onSubmitClick()}
                                    >
                                      Submit
                                    </MDButton>
                                    {/* </span> */}
                                    <MDButton
                                      variant="gradient"
                                      color="error"
                                      align="center"
                                      type="reset"
                                      onClick={() => onCancelBtnClick()}
                                    >
                                      cancle
                                    </MDButton>
                                  </MDBox>
                                </MDBox>
                              </MDBox>
                            </Card>
                          </Grid>
                        </Grid>
                      </MDBox>
                    </Box>
                  </Modal>
                </MDBox>
              </MDBox>
              <MDBox pt={3}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ display: "table-header-group" }}>
                      <TableRow>
                        <TableCell> User Name</TableCell>
                        <TableCell> User Email</TableCell>
                        <TableCell align="center">Contact No</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">City</TableCell>
                        <TableCell align="center">State</TableCell>
                        <TableCell align="center">User Type</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {userData &&
                        userData.map((row, i) => {
                          console.log("row", row);
                          return (
                            // eslint-disable-next-line react/no-array-index-key
                            <TableRow key={i}>
                              <TableCell>{row.userName}</TableCell>

                              <TableCell>{row.userEmail}</TableCell>

                              <TableCell align="center">{row.contactNo}</TableCell>

                              <TableCell align="center">{row.address_1}</TableCell>

                              <TableCell align="center">{row.city}</TableCell>

                              <TableCell align="center">{row.state}</TableCell>

                              <TableCell align="center">{row.userType}</TableCell>

                              <TableCell align="center">
                                <MDBox
                                  display="flex"
                                  alignItems="center"
                                  mt={{ xs: 0, sm: 0 }}
                                  ml={{ xs: 0, sm: 0 }}
                                >
                                  <MDBox mr={-4}>
                                    <MDButton
                                      variant="text"
                                      color="dark"
                                      onClick={() => onEditClick(row)}
                                    >
                                      <Icon>edit</Icon>&nbsp;
                                    </MDButton>
                                  </MDBox>
                                  <MDButton
                                    variant="text"
                                    color="error"
                                    onClick={() => onDeleteClick(row)}
                                  >
                                    <Icon>delete</Icon>&nbsp;
                                  </MDButton>
                                </MDBox>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                    <Dialog open={isConfirm} onClose={() => onModelCancelClick()} maxWidth="sm">
                      <DialogTitle align="center">Are you Sure ..?</DialogTitle>
                      <DialogActions>
                        <MDButton
                          color="error"
                          variant="gradient"
                          align="center"
                          onClick={() => onModelCancelClick()}
                        >
                          Cancel
                        </MDButton>
                        <MDButton
                          color="info"
                          variant="gradient"
                          align="center"
                          onClick={() => onConfirmDelete()}
                        >
                          Confirm
                        </MDButton>
                      </DialogActions>
                    </Dialog>
                  </Table>
                </TableContainer>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Stack spacing={2} align="center">
        <Pagination count={20} color="info" />
      </Stack> */}
      <Footer />
    </DashboardLayout>
  );
}
