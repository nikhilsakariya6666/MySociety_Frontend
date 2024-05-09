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
  getAllDiscussion,
  createDiscussion,
  addEditDiscussion,
  deleteDiscussionById,
} from "service/discussion.service";

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

export default function Discussion() {
  const [discussionId, setDiscussionId] = useState("");
  const [discussionData, setDiscussionData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [isConfirm, setIsConfirm] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [discussionObj, setDiscussionObj] = useState({
    topic: "",
    discussionDate: "",
    societyId: "",
    startDate: "",
    endDate: "",
    comment: "",
  });

  const getAll = async () => {
    try {
      const res = await getAllDiscussion().then((response) => {
        // console.log("response ===>", response);
        if (response && response.status === "success" && response.discussions_operators) {
          // const arr = response.society_operators.map((item) => [item.societyName]);
          setDiscussionData(response.discussions_operators);
        } else {
          setDiscussionData([]);
        }
      });
      // console.log("getAll res", res);
    } catch (err) {
      setDiscussionData([]);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const onResetDiscussionObj = async (obj) => {
    setDiscussionObj({
      topic: (obj && obj.topic) || "",
      discussionDate: (obj && obj.discussionDate) || "",
      societyId: (obj && obj.societyId) || "",
      startDate: (obj && obj.startDate) || "",
      endDate: (obj && obj.endDate) || "",
      comment: (obj && obj.comment) || "",
    });
  };

  const onCancelBtnClick = async () => {
    onResetDiscussionObj({});
    setDiscussionId("");
    handleClose();
  };

  const onModelCancelClick = () => {
    setIsConfirm(false);
    setDiscussionId("");
  };

  const onConfirmDelete = async () => {
    const response = await deleteDiscussionById(discussionId);
    if (response.status === "success") {
      alert(response.message);
      setDiscussionId("");
      setIsConfirm(false);
      getAll();
    } else {
      alert(response.message);
    }
  };

  const onSubmitClick = async () => {
    const response = await addEditDiscussion(discussionObj, discussionId);
    console.log("Response", response);
    if (response.status === "success") {
      alert(response.message);
      onResetDiscussionObj({});
      setDiscussionId("");
      handleClose();
      getAll();
    } else {
      alert(response.message);
    }
  };

  const onEditClick = async (data) => {
    console.log("data", data);
    // eslint-disable-next-line no-underscore-dangle
    setDiscussionId((data && data._id) || "");
    onResetDiscussionObj(data);
    handleOpen();
  };

  const onDeleteClick = async (data) => {
    // eslint-disable-next-line no-underscore-dangle
    console.log("id", data && data._id);
    // eslint-disable-next-line no-underscore-dangle
    setDiscussionId(data._id);
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
                    Discussion Listing
                  </MDTypography>
                  <MDButton variant="gradient" color="dark" onClick={handleOpen}>
                    {/* href="Dashboard" */}
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;add new Discussion
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
                                  {discussionId ? "Update" : "Add"} Discussion
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
                                        label="Topic"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={discussionObj.topic}
                                        onChange={(e) =>
                                          setDiscussionObj({
                                            ...discussionObj,
                                            topic: e.target.value,
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
                                        label="Discussion Date"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={discussionObj.discussionDate}
                                        onChange={(e) =>
                                          setDiscussionObj({
                                            ...discussionObj,
                                            discussionDate: e.target.value,
                                          })
                                        }
                                      />
                                      <MDInput
                                        type="text"
                                        label="Society Id "
                                        variant="standard"
                                        fullWidth
                                        defaultValue={discussionObj.societyId}
                                        onChange={(e) =>
                                          setDiscussionObj({
                                            ...discussionObj,
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
                                        label="Start Date"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={discussionObj.startDate}
                                        onChange={(e) =>
                                          setDiscussionObj({
                                            ...discussionObj,
                                            startDate: e.target.value,
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
                                          label="Start Date"
                                          variant="standard"
                                          fullWidth
                                          value={discussionObj.startDate}
                                          dateFormat="MM/dd/yyyy"
                                          onChange={(newValue) => {
                                            setDiscussionObj({
                                              ...discussionObj,
                                              startDate: newValue,
                                            });
                                          }}
                                          renderInput={(params) => <TextField {...params} />}
                                        />
                                      </LocalizationProvider>
                                      {/* <MDInput
                                        type="text"
                                        label="End Date"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={discussionObj.endDate}
                                        onChange={(e) =>
                                          setDiscussionObj({
                                            ...discussionObj,
                                            endDate: e.target.value,
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
                                          label="End Date"
                                          variant="standard"
                                          fullWidth
                                          value={discussionObj.endDate}
                                          dateFormat="MM/dd/yyyy"
                                          onChange={(newValue) => {
                                            setDiscussionObj({
                                              ...discussionObj,
                                              endDate: newValue,
                                            });
                                          }}
                                          renderInput={(params) => <TextField {...params} />}
                                        />
                                      </LocalizationProvider>
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
                                        label="Comment"
                                        variant="standard"
                                        fullWidth
                                        defaultValue={discussionObj.comment}
                                        onChange={(e) =>
                                          setDiscussionObj({
                                            ...discussionObj,
                                            comment: e.target.value,
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
                        <TableCell>Topic</TableCell>
                        <TableCell align="center">Discussion Date</TableCell>
                        <TableCell align="center">Society Id</TableCell>
                        <TableCell align="center">Start Date</TableCell>
                        <TableCell align="center">End Date</TableCell>
                        <TableCell align="center">Comment</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {discussionData &&
                        discussionData.map((row, i) => (
                          <TableRow
                            // eslint-disable-next-line react/no-array-index-key
                            key={row.topic + i}
                          >
                            <TableCell component="th" scope="row">
                              {row.topic}
                            </TableCell>

                            <TableCell component="th" scope="row" align="center">
                              {row.discussionDate}
                            </TableCell>

                            <TableCell component="th" scope="row" align="center">
                              {row.societyId}
                            </TableCell>

                            <TableCell component="th" scope="row" align="center">
                              {row.startDate}
                            </TableCell>

                            <TableCell component="th" scope="row" align="center">
                              {row.endDate}
                            </TableCell>

                            <TableCell component="th" scope="row" align="center">
                              {row.comment}
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
