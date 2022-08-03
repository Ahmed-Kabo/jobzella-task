import React, { useEffect, useState } from "react";
import { ButtonPrimary, InputStyled } from "../../Helper/Helper";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import { MailOutline, Lock } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import * as yup from "yup";
import { useFormik } from "formik";
import { login, reset } from "../../Redux/AuthSlice/AuthSlice";

/* start valdatoin on login  */
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
    .max(320, " The maximum accepted numbers of characters is 320"),
  password: yup
    .string("Enter your password")
    .required("Password is required")
    .min(8, "Must Contain 8 Characters"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  // ),
});

// const NewErroe = (props) => {
//   return (
//     <Stack sx={{ width: "100%" }} spacing={2}>
//       <Alert variant="filled" severity="error">
//         {props.massage}
//       </Alert>
//     </Stack>
//   );
// };

const LoginForm = () => {
  //GET THE DATAT FROM REDUCER
  const [open, setOpen] = useState(false);
  const [erroeMassage, setErroeMassage] = useState("");
  const dispatch = useDispatch();
  const { isError, isLodaing, massage } = useSelector((state) => state.auth);

  //start forimk valus
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await dispatch(login(values));
    },
  });

  // edit on use effect

  useEffect(() => {
    //if there is error
    if (isError) {
      setOpen(true);
      setErroeMassage(massage);
    }

    //reset the data
    dispatch(reset());
  }, [isError, dispatch, massage]);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {erroeMassage}
        </Alert>
      </Snackbar>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item mb={3} xs={12}>
            <Box className="inputConatiner">
              <MailOutline />
              <InputStyled
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
          </Grid>
          <Grid item mb={1} xs={12}>
            <Box className="inputConatiner">
              <Lock />
              <InputStyled
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remamber me"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex" }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <a href=""> forget password</a>
          </Grid>
        </Grid>
        <ButtonPrimary type="submit" fullWidth variant="contained" m="4rem 0">
          {isLodaing ? "Lodaing..." : "Login"}
        </ButtonPrimary>
      </form>
    </>
  );
};

export default LoginForm;
