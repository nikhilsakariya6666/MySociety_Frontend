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
  DialogActions,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
import Modal from "@mui/material/Modal";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React, { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
import {
  getAllNotice,
  createNotice,
  addEditNotice,
  deleteNoticeById,
} from "service/notice.service";

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

export default function Notice() {
  const [noticeId, setNoticeId] = useState("");
  const [noticeData, setNoticeData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [isConfirm, setIsConfirm] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [noticeObj, setNoticeObj] = useState({
    note: "",
    societyId: "",
    date: "",
    noticeType: "",
  });

  const getAll = async () => {
    try {
      const res = await getAllNotice().then((response) => {
        // console.log("response ===>", response);
        if (response && response.status === "success" && response.notices_operators) {
          // const arr = response.society_operators.map((item) => [item.societyName]);
          setNoticeData(response.notices_operators);
        } else {
          setNoticeData([]);
        }
      });
      // console.log("getAll res", res);
    } catch (err) {
      setNoticeData([]);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const onResetNoticeObj = async (obj) => {
    setNoticeObj({
      note: (obj && obj.note) || "",
      societyId: (obj && obj.societyId) || "",
      date: (obj && obj.date) || "",
      noticeType: (obj && obj.noticeType) || "",
    });
  };

  const onCancelBtnClick = async () => {
    onResetNoticeObj({});
    setNoticeId("");
    handleClose();
  };

  const onModelCancelClick = () => {
    setIsConfirm(false);
    setNoticeId("");
  };

  const onConfirmDelete = async () => {
    const response = await deleteNoticeById(noticeId);
    if (response.status === "success") {
      alert(response.message);
      setNoticeId("");
      setIsConfirm(false);
      getAll();
    } else {
      alert(response.message);
    }
  };

  const onSubmitClick = async () => {
    const response = await addEditNotice(noticeObj, noticeId);
    console.log("Response", response);
    if (response.status === "success") {
      alert(response.message);
      onResetNoticeObj({});
      setNoticeId("");
      handleClose();
      getAll();
    } else {
      alert(response.message);
    }
  };

  const onEditClick = async (data) => {
    console.log("data", data);
    // eslint-disable-next-line no-underscore-dangle
    setNoticeId((data && data._id) || "");
    onResetNoticeObj(data);
    handleOpen();
  };

  const onDeleteClick = async (data) => {
    // eslint-disable-next-line no-underscore-dangle
    console.log("id", data && data._id);
    // eslint-disable-next-line no-underscore-dangle
    setNoticeId(data._id);
    // onResetFaqObj(id);
    setIsConfirm(true);
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
                    Notice Listing
                  </MDTypography>
                  <MDButton variant="gradient" color="dark" onClick={handleOpen}>
                    {/* href="Dashboard" */}
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;add new Notice
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
                                  {noticeId ? "Update" : "Add"} Notice
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
                                        label="Note"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={noticeObj.note}
                                        onChange={(e) =>
                                          setNoticeObj({
                                            ...noticeObj,
                                            note: e.target.value,
                                          })
                                        }
                                      />
                                      <MDInput
                                        type="text"
                                        label="Society Id"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={noticeObj.societyId}
                                        onChange={(e) =>
                                          setNoticeObj({
                                            ...noticeObj,
                                            societyId: e.target.value,
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
                                      {/* <MDInput
                                        type="text"
                                        label="Date "
                                        variant="standard"
                                        fullWidth
                                        defaultValue={noticeObj.date}
                                        onChange={(e) =>
                                          setNoticeObj({
                                            ...noticeObj,
                                            date: e.target.value,
                                          })
                                        }
                                      /> */}
                                      <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                        variant="standard"
                                        fullWidth
                                      >
                                        <DatePicker
                                          views={["year", "month", "day"]}
                                          label="Date"
                                          variant="standard"
                                          fullWidth
                                          value={noticeObj.date}
                                          dateFormat="MM/dd/yyyy"
                                          onChange={(newValue) => {
                                            setNoticeObj({
                                              ...noticeObj,
                                              date: newValue,
                                            });
                                          }}
                                          renderInput={(params) => <TextField {...params} />}
                                        />
                                      </LocalizationProvider>
                                      <MDInput
                                        type="text"
                                        label="Notice Type"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={noticeObj.noticeType}
                                        onChange={(e) =>
                                          setNoticeObj({
                                            ...noticeObj,
                                            noticeType: e.target.value,
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
                        <TableCell>Note</TableCell>
                        <TableCell align="center">Society Id</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Notice Type</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {noticeData &&
                        noticeData.map((row, i) => (
                          <TableRow
                            // eslint-disable-next-line react/no-array-index-key
                            key={row.note + i}
                          >
                            <TableCell component="th" scope="row">
                              {row.note}
                            </TableCell>

                            <TableCell component="th" scope="row" align="center">
                              {row.societyId}
                            </TableCell>

                            <TableCell component="th" scope="row" align="center">
                              {row.date}
                            </TableCell>

                            <TableCell component="th" scope="row" align="center">
                              {row.noticeType}
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
