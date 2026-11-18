// Define the TaskSummary function component.
function TaskSummary() {
  // Return the summary card area.
  return (
    // Group the three summary values together.
    <section className="summary" aria-label="Task summary">
      {/* Display the first summary card for all tasks. */}
      <article className="summary-card">
        {/* Show the sample total number of tasks. */}
        <strong>5</strong>
        {/* Describe what the number represents. */}
        <span>Total tasks</span>
      </article>
      {/* Display the second summary card for completed tasks. */}
      <article className="summary-card">
        {/* Show the sample number of completed tasks. */}
        <strong>2</strong>
        {/* Describe what the number represents. */}
        <span>Completed</span>
      </article>
      {/* Display the third summary card for pending tasks. */}
      <article className="summary-card">
        {/* Show the sample number of pending tasks. */}
        <strong>3</strong>
        {/* Describe what the number represents. */}
        <span>Pending</span>
      </article>
    </section>
  );
}

// Export TaskSummary for use in App.jsx.
export default TaskSummary;
