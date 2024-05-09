/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
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

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";

// eslint-disable-next-line no-unused-vars
import {
  getAllSociety,
  registerSociety,
  addEditSociety,
  deleteSocietyById,
} from "service/society.service";

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

export default function Society() {
  const [societyId, setSocietyId] = useState("");
  const [societyData, setSocietyData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [isConfirm, setIsConfirm] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [societyObj, setSocietyObj] = useState({
    societyName: "",
    societyEmail: "",
    password: "",
    address: "",
    contactUserId: "",
    contactUserContactNo: "",
    initialCapital: "",
    totalBalance: "",
  });

  const getAll = async () => {
    try {
      const res = await getAllSociety().then((response) => {
        // console.log("response ===>", response);
        if (response && response.status === "success" && response.society_operators) {
          // const arr = response.society_operators.map((item) => [item.societyName]);
          setSocietyData(response.society_operators);
        } else {
          setSocietyData([]);
        }
      });
      // console.log("getAll res", res);
    } catch (err) {
      setSocietyData([]);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const onResetSocietyObj = async (obj) => {
    setSocietyObj({
      societyName: (obj && obj.societyName) || "",
      societyEmail: (obj && obj.societyEmail) || "",
      password: (obj && obj.password) || "",
      address: (obj && obj.address) || "",
      contactUserId: (obj && obj.contactUserId) || "",
      contactUserContactNo: (obj && obj.contactUserContactNo) || "",
      initialCapital: (obj && obj.initialCapital) || "",
      totalBalance: (obj && obj.totalBalance) || "",
    });
  };

  const onCancelBtnClick = async () => {
    onResetSocietyObj({});
    setSocietyId("");
    handleClose();
  };

  const onModelCancelClick = () => {
    setIsConfirm(false);
    setSocietyId("");
  };

  const onConfirmDelete = async () => {
    const response = await deleteSocietyById(societyId);
    if (response.status === "success") {
      alert(response.message);
      setSocietyId("");
      setIsConfirm(false);
      getAll();
    } else {
      alert(response.message);
    }
  };

  const onSubmitClick = async () => {
    const response = await addEditSociety(societyObj, societyId);
    console.log("Response", response);
    if (response.status === "success") {
      alert(response.message);
      onResetSocietyObj({});
      setSocietyId("");
      handleClose();
      getAll();
    } else {
      alert(response.message);
    }
  };

  const onEditClick = async (data) => {
    console.log("data", data);
    // eslint-disable-next-line no-underscore-dangle
    setSocietyId((data && data._id) || "");
    onResetSocietyObj(data);
    handleOpen();
  };

  const onDeleteClick = async (data) => {
    // eslint-disable-next-line no-underscore-dangle
    console.log("id", data && data._id);
    // eslint-disable-next-line no-underscore-dangle
    setSocietyId(data._id);
    // onResetFaqObj(id);
    setIsConfirm(true);
  };

  const handleClosed = () => {
    setIsConfirm(false);
  };

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
                    Society Listing
                  </MDTypography>
                  <MDButton variant="gradient" color="dark" onClick={handleOpen}>
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;add new Society
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
                                  {societyId ? "Update" : "Registration"} Society
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
                                        label="Society Name"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={societyObj.societyName}
                                        onChange={(e) =>
                                          setSocietyObj({
                                            ...societyObj,
                                            societyName: e.target.value,
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
                                        type="email"
                                        label="Society Email"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={societyObj.societyEmail}
                                        onChange={(e) =>
                                          setSocietyObj({
                                            ...societyObj,
                                            societyEmail: e.target.value,
                                          })
                                        }
                                      />
                                      <MDInput
                                        type="password"
                                        label="Password "
                                        variant="standard"
                                        fullWidth
                                        defaultValue={societyObj.password}
                                        onChange={(e) =>
                                          setSocietyObj({
                                            ...societyObj,
                                            password: e.target.value,
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
                                        label="Address"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={societyObj.address}
                                        onChange={(e) =>
                                          setSocietyObj({
                                            ...societyObj,
                                            address: e.target.value,
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
                                        label="Contact User Id"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={societyObj.contactUserId}
                                        onChange={(e) =>
                                          setSocietyObj({
                                            ...societyObj,
                                            contactUserId: e.target.value,
                                          })
                                        }
                                      />
                                      <MDInput
                                        type="text"
                                        label="Contact User Contact No"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={societyObj.contactUserContactNo}
                                        onChange={(e) =>
                                          setSocietyObj({
                                            ...societyObj,
                                            contactUserContactNo: e.target.value,
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
                                      <MDInput
                                        type="text"
                                        label="Initial Capital"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={societyObj.initialCapital}
                                        onChange={(e) =>
                                          setSocietyObj({
                                            ...societyObj,
                                            initialCapital: e.target.value,
                                          })
                                        }
                                      />
                                      <MDInput
                                        type="text"
                                        label="Total Balance"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={societyObj.totalBalance}
                                        onChange={(e) =>
                                          setSocietyObj({
                                            ...societyObj,
                                            totalBalance: e.target.value,
                                          })
                                        }
                                      />
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
                        <TableCell>Society Name</TableCell>
                        <TableCell align="center">Society Email</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Contact User Id</TableCell>
                        <TableCell align="center">Contact User Contact No</TableCell>
                        <TableCell align="center">Initial Capital</TableCell>
                        <TableCell align="center">Total Balance</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {societyData &&
                        societyData.map((row, i) => (
                          <TableRow
                            // eslint-disable-next-line react/no-array-index-key
                            key={row.societyName + i}
                          >
                            <TableCell component="th" scope="row">
                              {row.societyName}
                            </TableCell>

                            <TableCell component="th" scope="row">
                              {row.societyEmail}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                              {row.address}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                              {row.contactUserId}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                              {row.contactUserContactNo}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                              {row.initialCapital}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                              {row.totalBalance}
                            </TableCell>

                            <TableCell>
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
                        ))}
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
