import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form } from "formik";
import * as yup from "yup";
const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", 
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));
  interface Props {
    handleNext: () => void
  }
 const Signup:React.FC<Props> = ({ handleNext }) => {
    const classes=useStyles();
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Formik
              initialValues={{
                FullName: "",
                email: "",
                password: ""
              }}
              validationSchema={yup.object({
                fullName: yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                email: yup.string()
                .email()
                .required('Required'),
                password: yup.string()
                .min(6, 'too Short')
                .required("Required")
              })}
              onSubmit={(values) => {
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  handleNext();
                }, 400);
              }}
             
            >
              {({ errors, handleChange, touched }) => (
                <Form className={classes.form}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                       
                        autoComplete="fname"
                        name="fullName"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        id="fullName"
                        label="Full Name"
                        autoFocus
                        helperText={
                          errors.FullName && touched.FullName
                            ? errors.FullName
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        helperText={
                          errors.email && touched.email ? errors.email : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                       
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={
                          errors.password && touched.password
                            ? errors.password
                            : null
                        }
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{backgroundColor:"gold"}}
                    className={classes.submit}
                    >
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      );
    };
    export default Signup;