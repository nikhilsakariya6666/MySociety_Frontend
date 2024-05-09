/* eslint-disable import/no-unresolved */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";

import React, { useEffect, useState } from "react";

// Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
// import MDButton from "components/MDButton";
import { getAllSociety } from "../../../service/society.service";

function RenderValue() {
  return <MDBox lineHeight={1} textAlign="left" />;
}

function SocietyTable() {
  // const Author = ({ image, name, email }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" />
  //     <MDBox ml={2} lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {name}
  //       </MDTypography>
  //       <MDTypography variant="caption">{email}</MDTypography>
  //     </MDBox>
  //   </MDBox>
  // );

  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  const [societyData, setSocietyData] = useState();
  const columns = [
    { Header: "Society Name", accessor: "societyName", align: "left" },
    { Header: "Society Email", accessor: "societyEmail", align: "left" },
  ];

  const getAll = async () => {
    try {
      await getAllSociety().then((response) => {
        // console.log("response ===>", response);
        if (response && response.status === "success" && response.society_operators) {
          const arr = [];
          response.society_operators.forEach((element) => {
            arr.push({
              societyName: (
                <MDBox lineHeight={1} textAlign="left">
                  {element.societyName}
                </MDBox>
              ),
              societyEmail: <RenderValue title={element.societyEmail} />,
            });
          });
          setSocietyData(arr);
          console.log("societyData", societyData);
        } else {
          setSocietyData([]);
        }
      });
      // console.log("getAll res", res);
    } catch (err) {
      console.log(err);
      setSocietyData([]);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

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
                {/* <MDTypography variant="h6" color="white">
                  Society Table
                </MDTypography>
                <MDButton variant="gradient" color="dark">
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;add new card
                </MDButton> */}
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
                  <MDButton variant="gradient" color="dark">
                    {/* href="Dashboard" */}
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;add new Society
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, societyData }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );

  // return {
  //   title: "Society Listing",
  //   columns: [
  //     { Header: "Society Name", accessor: "societyName", align: "left" },
  //     { Header: "Society Email", accessor: "societyEmail", align: "left" },
  //     // { Header: "Contact No", accessor: "status", align: "center" },
  //     // { Header: "City", accessor: "employed", align: "center" },
  //     // { Header: "State", accessor: "action", align: "center" },
  //   ],

  //   rows: [
  //     ...societyData,
  //     // {
  //     //   societyName: <SocietyName title="Society Name" description="SocietyName" />,
  //     // },
  //     // {
  //     //   societyName: <Job title="Programator" description="Developer" />,
  //     // },
  //     // {
  //     //   author: <Author image={team2} name="Nikhil Sakariya" email="john@creative-tim.com" />,
  //     //   function: <Job title="Manager" description="Organization" />,
  //     //   status: (
  //     //     <MDBox ml={-1}>
  //     //       <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
  //     //     </MDBox>
  //     //   ),
  //     //   employed: (
  //     //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //     //       23/04/18
  //     //     </MDTypography>
  //     //   ),
  //     //   action: (
  //     //     <MDBox display="flex" alignItems="center" mt={{ xs: 0, sm: 0 }} ml={{ xs: 0, sm: 0 }}>
  //     //       <MDBox mr={-4}>
  //     //         <MDButton variant="text" color="dark">
  //     //           <Icon>edit</Icon>&nbsp;
  //     //         </MDButton>
  //     //       </MDBox>
  //     //       <MDButton variant="text" color="error">
  //     //         <Icon>delete</Icon>&nbsp;
  //     //       </MDButton>
  //     //     </MDBox>
  //     //   ),
  //     // },
  //     // {
  //     //   author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
  //     //   function: <Job title="Programator" description="Developer" />,
  //     //   status: (
  //     //     <MDBox ml={-1}>
  //     //       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
  //     //     </MDBox>
  //     //   ),
  //     //   employed: (
  //     //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //     //       11/01/19
  //     //     </MDTypography>
  //     //   ),
  //     //   action: (
  //     //     <MDBox display="flex" alignItems="center" mt={{ xs: 0, sm: 0 }} ml={{ xs: 0, sm: 0 }}>
  //     //       <MDBox mr={-4}>
  //     //         <MDButton variant="text" color="dark">
  //     //           <Icon>edit</Icon>&nbsp;
  //     //         </MDButton>
  //     //       </MDBox>
  //     //       <MDButton variant="text" color="error">
  //     //         <Icon>delete</Icon>&nbsp;
  //     //       </MDButton>
  //     //     </MDBox>
  //     //   ),
  //     // },
  //     // {
  //     //   author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
  //     //   function: <Job title="Executive" description="Projects" />,
  //     //   status: (
  //     //     <MDBox ml={-1}>
  //     //       <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
  //     //     </MDBox>
  //     //   ),
  //     //   employed: (
  //     //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //     //       19/09/17
  //     //     </MDTypography>
  //     //   ),
  //     //   action: (
  //     //     <MDBox display="flex" alignItems="center" mt={{ xs: 0, sm: 0 }} ml={{ xs: 0, sm: 0 }}>
  //     //       <MDBox mr={-4}>
  //     //         <MDButton variant="text" color="dark">
  //     //           <Icon>edit</Icon>&nbsp;
  //     //         </MDButton>
  //     //       </MDBox>
  //     //       <MDButton variant="text" color="error">
  //     //         <Icon>delete</Icon>&nbsp;
  //     //       </MDButton>
  //     //     </MDBox>
  //     //   ),
  //     // },
  //   ],
  // };
}

export default SocietyTable;
