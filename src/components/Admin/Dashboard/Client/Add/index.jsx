import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
const AddClient = () => {
  return (
    <>
      <div
        style={{
          height: "93%",
          backgroundColor: "#EEEEEE",
        }}
      >
        <Container>
          <Grid
            container
            sx={{ padding: "1%" }}
            columnSpacing={4}
            rowSpacing={2}
          >
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
              <Box>
                <InputLabel sx={{ textAlign: "left" }}>First Name</InputLabel>
                <Input type="text" sx={{ width: "100%" }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
              <Box>
                <InputLabel sx={{ textAlign: "left" }}>Last Name</InputLabel>
                <Input type="text" sx={{ width: "100%" }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
              <Box>
                <InputLabel sx={{ textAlign: "left" }}>Event Date</InputLabel>
                <Input type="date" sx={{ width: "100%" }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
              <Box>
                <InputLabel sx={{ textAlign: "left" }}>
                  Video Attached
                </InputLabel>
                <Select
                  variant="standard"
                  defaultValue=""
                  sx={{ width: "100%" }}
                >
                  <MenuItem value="">
                    <em>Select...</em>
                  </MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
              <Box>
                <InputLabel sx={{ textAlign: "left" }}>Form</InputLabel>
                <Select
                  variant="standard"
                  defaultValue=""
                  sx={{ width: "100%" }}
                >
                  <MenuItem value="">
                    <em>Select...</em>
                  </MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
              <Box>
                <InputLabel sx={{ textAlign: "left" }}>Phone Number</InputLabel>
                <Input type="tel" sx={{ width: "100%" }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
              <Box>
                <Button color="primary" fullWidth variant="contained">
                  Add Client
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default AddClient;
