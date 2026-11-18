// Define the AddTaskForm function component.
function AddTaskForm() {
  // Return the form section.
  return (
    // Group the input controls in a section.
    <section className="add-task-section">
      {/* Display the title above the input and button. */}
      <h2>Add a new task</h2>
      {/* Create a form layout for the text input and button. */}
      <form className="add-task-form" onSubmit={(event) => event.preventDefault()}>
        {/* Allow the learner to type a new task name. */}
        <input
          aria-label="Task name"
          placeholder="Enter your task here..."
          type="text"
        />
        {/* Display a button that does not submit a task in this version. */}
        <button type="submit">+ Add Task</button>
      </form>
    </section>
  );
}

// Export AddTaskForm for use in App.jsx.
export default AddTaskForm;
