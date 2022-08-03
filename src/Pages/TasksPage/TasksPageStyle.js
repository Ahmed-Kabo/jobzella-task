import styled from "styled-components";

export const DesignStyled = styled.div`
  background: #f5f5f5;
  min-height: 100vh;
  .header {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .progress {
    .task-progress {
      font-weight: bold;
      color: #4483f7;
    }
    .bar {
      min-width: 200px;
      display: flex;
      align-items: center;
    }
    .rate {
      display: flex;
      align-items: center;
      color: #ffa800;
      font-size: 0.9rem;
      svg {
        font-size: 1rem;
        margin-right: 6px;
      }
    }
  }
  .btn-task {
    width: 200px;
  }
`;

export const TaskListStyle = styled.div`
  background: var(--lightColor);
  border-radius: 0.5rem;
  padding: 1rem;

  .heading {
    display: flex;
    align-items: center;
    padding: 0.5rem 0 1rem 0;
    border-bottom: 2.5px solid;
    margin-bottom: 1.5rem;
    .dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    .MuiBadge-badge {
      background: #e0e0e0;
      color: var(--gray);
      font-weight: 600;
    }
  }
  .btnAddTask {
    height: 55px;
    border: 2px dashed rgba(0, 88, 122, 0.3);
    color: var(--mainColor);
    margin: 2rem 0 0 0;
  }
  &.todo {
    .dot {
      background: var(--toDo);
    }
    .heading {
      border-color: var(--toDo);
    }
  }
  &.progress {
    .dot {
      background: var(--progress);
    }
    .heading {
      border-color: var(--progress);
    }
  }
  &.done {
    .dot {
      background: var(--done);
    }
    .heading {
      border-color: var(--done);
    }
  }
`;
