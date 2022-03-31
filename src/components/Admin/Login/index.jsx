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
} from "@mui/material";
import "./styles.css";

const AdminLogin = () => {
  return (
    <>
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <Container sx={{ height: "100vh" }}>
          <Grid
            container
            justifyContent="center"
            p={2}
            sx={{ height: "100vh", alignItems: "center" }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Card sx={{ backgroundColor: "#FBF8F1" }}>
                  <CardHeader
                    title="Admin Login"
                    sx={{
                      backgroundColor: "#F7F7F7",
                      textAlign: "center",
                      paddingY: "10%",
                    }}
                  />
                  <CardContent>
                    <Grid
                      sx={{ paddingY: "15%" }}
                      container
                      direction="column"
                      rowSpacing={3}
                    >
                      <Grid item>
                        <TextField fullWidth type="password" label="Password" />
                      </Grid>
                      <Grid item>
                        <Button fullWidth variant="contained" color="primary">
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default AdminLogin;