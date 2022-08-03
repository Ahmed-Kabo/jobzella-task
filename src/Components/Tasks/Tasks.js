import { ControlPoint } from "@mui/icons-material";
import { Badge, Button, Grid } from "@mui/material";
import { Paragraph } from "../../Helper/Helper";
import { TaskListStyle } from "../../Pages/TasksPage/TasksPageStyle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllTasks, reset } from "../../Redux/TasksSlice/TasksSlice";
import CardTask from "./CardTask";

const Tasks = () => {
  //get the id from url
  const { id } = useParams();

  //dispatch
  const dispatch = useDispatch();

  //get the data from reducer
  const { tasks } = useSelector((state) => state.tasks);

  //get the to do
  const TO_DO_LIST = tasks?.data ? tasks?.data?.todo : [];

  //get the progress
  const PROGRESS_LIST = tasks?.data ? tasks?.data?.progress : [];

  //get the done
  const DONE_LIST = tasks?.data ? tasks?.data?.done : [];

  //get all tasks
  useEffect(() => {
    const getTasks = async () => {
      await dispatch(getAllTasks(id));
      await dispatch(reset());
    };
    if (id) {
      getTasks();
    }
  }, [id]);

  return (
    <Grid container spacing={3} columns={12}>
      {/* ------------- to do --------------------- */}

      <Grid item lg={4} md={6} xs={12}>
        {/* to do column  */}
        <TaskListStyle className="todo">
          {/* task title  */}
          <div className="heading">
            <span className="dot"></span>
            <Paragraph fz="13px" fw="700" lh="20px" m="0 1.5rem 0 0">
              To Do
            </Paragraph>
            <Badge className="bage" badgeContent={TO_DO_LIST?.length} />
          </div>
          {/* start task card  */}
          {TO_DO_LIST?.map((item) => (
            <CardTask key={item.id} data={item} />
          ))}
          {/* end  task card  */}

          <Button fullWidth className="btnAddTask">
            <ControlPoint />
          </Button>
        </TaskListStyle>
      </Grid>

      {/* ------------- progress --------------------- */}

      <Grid item lg={4} md={6} xs={12}>
        <TaskListStyle className="progress">
          {/* task title  */}
          <div className="heading">
            <span className="dot"></span>
            <Paragraph fz="13px" fw="700" lh="20px" m="0 1.5rem 0 0">
              On Progress
            </Paragraph>
            <Badge className="bage" badgeContent={PROGRESS_LIST?.length} />
          </div>
          {/* start task card  */}
          {PROGRESS_LIST?.map((item) => (
            <CardTask key={item.id} data={item} />
          ))}
          {/* end  task card  */}

          <Button fullWidth className="btnAddTask">
            <ControlPoint />
          </Button>
        </TaskListStyle>
      </Grid>

      {/* ------------- done  --------------------- */}

      <Grid item lg={4} md={6} xs={12}>
        <TaskListStyle className="done">
          {/* task title  */}
          <div className="heading">
            <span className="dot"></span>
            <Paragraph fz="13px" fw="700" lh="20px" m="0 1.5rem 0 0">
              Done
            </Paragraph>
            <Badge className="bage" badgeContent={DONE_LIST?.length} />
          </div>
          {/* start task card  */}
          {DONE_LIST?.map((item) => (
            <CardTask key={item.id} data={item} />
          ))}
          {/* end  task card  */}
          <Button fullWidth className="btnAddTask">
            <ControlPoint />
          </Button>
        </TaskListStyle>
      </Grid>
    </Grid>
  );
};

export default Tasks;
