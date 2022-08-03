import { Alert, Box, InputLabel, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonPrimary, InputFormStyle } from "../../Helper/Helper";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  AddNewGroup,
  getAllGroups,
  reset,
} from "../../Redux/GroupSlice/GroupsSlice";
/* start valdatoin on login  */
const validationSchema = yup.object({
  name: yup
    .string("Enter your Gorup name")
    .required("The Group name is required")
    .max(150, "The name can’t exceed 150 character")
    .min(3, "The minimum accepted characters is 3"),
});
const AddGroupForm = () => {
  const [openError, setOpenError] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successMassage, setSuccessMassage] = useState("");

  /*----------------- */
  const dispatch = useDispatch();
  const { isError, isSuccess, isLodaing, massage } = useSelector(
    (state) => state.groups
  );
  //start forimk valus
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(AddNewGroup(values));
    },
  });

  useEffect(() => {
    if (isError) {
      setOpenError(true);
      setErrorMassage(massage);
    }

    if (isSuccess) {
      setOpenSuccess(true);
      setSuccessMassage("Created Succesfully ");
      formik.values.name = "";
      dispatch(getAllGroups());
    }

    dispatch(reset());
  }, [dispatch, isSuccess, isError, massage]);

  return (
    <>
      {/* success massage  */}
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={() => setOpenSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMassage}
        </Alert>
      </Snackbar>

      {/* error  massage  */}
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMassage}
        </Alert>
      </Snackbar>

      <form onSubmit={formik.handleSubmit}>
        <InputLabel className="label">
          Name <span>*</span>
        </InputLabel>
        <InputFormStyle
          fullWidth
          placeholder="Jobzella"
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <ButtonPrimary type="submit" className="taskBtn">
          {isLodaing ? " loading..." : "Add Task"}
        </ButtonPrimary>
      </form>
    </>
  );
};

export default AddGroupForm;
