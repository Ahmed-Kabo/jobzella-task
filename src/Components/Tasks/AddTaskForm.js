import {
  Alert,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Snackbar,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonPrimary, InputFormStyle } from "../../Helper/Helper";
import * as yup from "yup";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddNewTask,
  getAllTasks,
  reset,
} from "../../Redux/TasksSlice/TasksSlice";

/* start valdatoin on login  */
const validationSchema = yup.object({
  name: yup
    .string("Enter your Gorup name")
    .min(3, "The minimum accepted characters is 3")
    .required("The Task name is required ")
    .max(100, " The name can’t exceed 100 character "),
  description: yup
    .string("Enter your password")
    .required("The description  is required ")
    .max(500, " The name can’t exceed 500 character ")
    .min(3, "The minimum accepted characters is 3"),
  status: yup.string("Enter your password").required("Password is required"),
});

const AddTaskForm = () => {
  const [openError, setOpenError] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [successMassage, setSuccessMassage] = useState("");

  /******************* */
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isError, isSuccess, isLodaing, massage } = useSelector(
    (state) => state.tasks
  );

  //start forimk valus
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      status: "todo",
      group_id: Number(id),
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await dispatch(AddNewTask(values));
      await dispatch(reset());
      await dispatch(getAllTasks(id));
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
      formik.values.description = "";
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
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <Box>
            <InputLabel className="label">
              Name <span>*</span>
            </InputLabel>
            <InputFormStyle
              fullWidth
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              placeholder="Jobzella"
            />
          </Box>
          <Box>
            <InputLabel className="label">Describtion</InputLabel>
            <InputFormStyle
              className="textarea"
              fullWidth
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              placeholder="Write here ...."
            />
          </Box>
          <FormControl sx={{ marginBottom: "1rem" }}>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              className="label"
            >
              Choose status <span> *</span>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              id="status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="todo"
                control={<Radio />}
                label="To Do"
              />
              <FormControlLabel
                value="progress"
                control={<Radio />}
                label="In Progress"
              />
              <FormControlLabel value="done" control={<Radio />} label="Done" />
            </RadioGroup>
          </FormControl>
          <ButtonPrimary type="submit" className="taskBtn">
            {isLodaing ? "lodaing..." : "Add Task"}
          </ButtonPrimary>
        </form>
      </FormContainer>
    </>
  );
};

export const FormContainer = styled.div`
  .label {
    font-weight: 600;
    color: var(--black);
    display: flex;
    align-items: center;
    margin: 1rem 0 0.5rem;
    /* margin: 0.5rem 0; */
    span {
      color: red;
    }
  }
  /* .taskBtn {
    width: 265px;
    display: block;
    margin: 1rem auto;
  } */
`;

export default AddTaskForm;
