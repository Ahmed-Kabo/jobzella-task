const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      name: "ui/ux",
      description:
        "Brainstorming brings team members diverse experience into play.",
      status: "todo",
    },
    "task-2": {
      id: "task-2",
      name: "ui/ux",
      description:
        "Brainstorming brings team members diverse experience into play.",
      status: "todo",
    },
    "task-3": {
      id: "task-3",
      name: "ui/ux",
      description:
        "Brainstorming brings team members diverse experience into play.",
      status: "todo",
    },
    "task-4": {
      id: "task-4",
      name: "ui/ux",
      description:
        "Brainstorming brings team members diverse experience into play.",
      status: "todo",
    },
    "task-5": {
      id: "task-5",
      name: "ui/ux",
      description:
        "Brainstorming brings team members diverse experience into play.",
      status: "todo",
    },
  },
  columns: {
    "columns-1": {
      id: "1",
      name: "To DO",
      color: "todo",
      task_id: ["task-1", "task-2", "task-3"],
    },
    "columns-2": {
      id: "2",
      name: "To DO",
      color: "progress",
    },
    "columns-3": {
      id: "3",
      name: "To DO",
      color: "done",
    },
  },

  columnOrder: ["columns-1"],
};

export default initialData;
