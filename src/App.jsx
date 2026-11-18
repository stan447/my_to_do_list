// Import the application stylesheet for the complete page layout.
import "./App.css";
// Import the Header component that shows the page title.
import Header from "./components/Header";
// Import the TaskSummary component that shows the task totals.
import TaskSummary from "./components/TaskSummary";
// Import the AddTaskForm component that shows the task input.
import AddTaskForm from "./components/AddTaskForm";
// Import the FilterButtons component that shows the filter choices.
import FilterButtons from "./components/FilterButtons";
// Import the TaskList component that shows all five sample tasks.
import TaskList from "./components/TaskList";

// Define the main App component that combines the other components.
function App() {
  // Return the visible page structure.
  return (
    // Use a main element to represent the main page content.
    <main className="app">
      {/* Display the heading component at the top of the page. */}
      <Header />
      {/* Display the three summary cards below the heading. */}
      <TaskSummary />
      {}
      <AddTaskForm />
      {/* Display the heading and filter buttons for the task list. */}
      <section className="tasks-section">
        {/* Display the title for the task list section. */}
        <h2>My Tasks</h2>
        {/* Display the three filtering buttons. */}
        <FilterButtons />
        {/* Display the list of sample tasks. */}
        <TaskList />
      </section>
    </main>
  );
}

// Export App so main.jsx can render it.
export default App;