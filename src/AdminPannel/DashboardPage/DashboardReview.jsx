import {
    Box,
    Button,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import {
    Header,
    StatBox,
    LineChart,
    ProgressCircle,
    BarChart,
    GeographyChart,
  } from "../../components";
  import {
    DownloadOutlined,
    Email,
    PersonAdd,
    PointOfSale,
    Traffic,
  } from "@mui/icons-material";
  import { tokens } from "../../theme";
  import { mockTransactions } from "../../data/mockData";
  
  function DashboardMobile() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isXlDevices = useMediaQuery("(min-width: 1260px)");
    const isMdDevices = useMediaQuery("(min-width: 724px)");
    const isXsDevices = useMediaQuery("(max-width: 436px)");
    return (
      <Box m="20px">
        <Box display="flex" justifyContent="space-between">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
          {!isXsDevices && (
            <Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: colors.blueAccent[700],
                  color: "#fcfcfc",
                  fontSize: isMdDevices ? "14px" : "10px",
                  fontWeight: "bold",
                  p: "10px 20px",
                  mt: "18px",
                  transition: ".3s ease",
                  ":hover": {
                    bgcolor: colors.blueAccent[800],
                  },
                }}
                startIcon={<DownloadOutlined />}
              >
                DOWNLOAD REPORTS
              </Button>
            </Box>
          )}
        </Box>
  
        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns={
            isXlDevices
              ? "repeat(12, 1fr)"
              : isMdDevices
              ? "repeat(6, 1fr)"
              : "repeat(3, 1fr)"
          }
          gridAutoRows="140px"
          gap="20px"
        >
          {/* Statistic Items */}
          <Box
            gridColumn="span 3"
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="11"
              subtitle="Total Occupied Rooms"
              progress="0.75"
              increase="+14%"
              icon={
                <Email
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="43%"
              subtitle="Total Revenue"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSale
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="132"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAdd
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="236"
              subtitle="Total Bookings"
              progress="0.80"
              increase="+43%"
              icon={
                <Traffic
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
  
          {/* ---------------- Row 2 ---------------- */}
  {/* Statistic Items  2 */}
  <Box
            gridColumn="span 3"
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="61"
              subtitle="Total Guests"
              progress="0.75"
              increase="+14%"
              icon={
                <Email
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="431"
              subtitle="Total Staff Members"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSale
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="399"
              subtitle="Total Reservations"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAdd
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="949"
              subtitle="Room Availability"
              progress="0.80"
              increase="+43%"
              icon={
                <Traffic
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
  
          {/* ---------------- Row 2 ----------------2 */}
          {/* Line Chart */}
          <Box
            gridColumn={
              isXlDevices ? "span 8" : isMdDevices ? "span 6" : "span 3"
            }
            gridRow="span 2"
            bgcolor={colors.primary[400]}
          >
            <Box
              mt="25px"
              px="30px"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.gray[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  $59,342.32
                </Typography>
              </Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
            <Box height="250px" mt="-20px">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
  
          {/* Transaction Data */}
          <Box
            gridColumn={isXlDevices ? "span 4" : "span 3"}
            gridRow="span 2"
            bgcolor={colors.primary[400]}
            overflow="auto"
          >
            <Box borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
              <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
                Recent Transactions
              </Typography>
            </Box>
  
            {mockTransactions.map((transaction, index) => (
              <Box
                key={`${transaction.txId}-${index}`}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.gray[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Typography color={colors.gray[100]}>
                  {transaction.date}
                </Typography>
                <Box
                  bgcolor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
  
       
          
        </Box>
      </Box>
    );
  }
  
  export default DashboardMobile;
  