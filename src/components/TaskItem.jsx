// Define the TaskItem function component and receive simple values as props.
function TaskItem({ taskName, status }) {
  // Check whether this task is completed.
  const isCompleted = status === "Completed";
  // Return one row for this task.
  return (
    // Use a label so the checkbox belongs to the task row.
    <label className="task-item">
      {/* Display a checkbox that is checked for completed tasks. */}
      <input type="checkbox" checked={isCompleted} readOnly />
      {/* Display the name of the task. */}
      <span className="task-name">{taskName}</span>
      {/* Display the status with a different style for completed tasks. */}
      <span className={isCompleted ? "status completed" : "status pending"}>
        {/* Show the received status text. */}
        {status}
      </span>
    </label>
  );
}

// Export TaskItem so TaskList can reuse it.
export default TaskItem;
