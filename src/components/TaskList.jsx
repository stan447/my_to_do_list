// Import TaskItem so this component can reuse it.
import TaskItem from "./TaskItem";

// Define the TaskList function component.
function TaskList() {
  // Return the list of sample tasks.
  return (
    // Use a div to contain all task rows.
    <div className="task-list">
      {/* Reuse TaskItem to display the first completed task. */}
      <TaskItem taskName="Read React notes" status="Completed" />
      {/* Reuse TaskItem to display the second completed task. */}
      <TaskItem taskName="Practise JSX" status="Completed" />
      {/* Reuse TaskItem to display the first pending task. */}
      <TaskItem taskName="Create a React component" status="Pending" />
      {/* Reuse TaskItem to display the second pending task. */}
      <TaskItem taskName="Complete assignment" status="Pending" />
      {/* Reuse TaskItem to display the third pending task. */}
      <TaskItem taskName="Revise JavaScript" status="Pending" />
    </div>
  );
}

// Export TaskList so App.jsx can display it.
export default TaskList;
