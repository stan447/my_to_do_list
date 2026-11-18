// Define the FilterButtons function component.
function FilterButtons() {
  // Return the group of filter buttons.
  return (
    // Use a div to arrange the buttons in a row.
    <div className="filter-buttons" aria-label="Filter tasks">
      {/* Display the button that represents all tasks. */}
      <button className="active" type="button">All Tasks</button>
      {/* Display the button that represents pending tasks. */}
      <button type="button">Pending</button>
      {/* Display the button that represents completed tasks. */}
      <button type="button">Completed</button>
    </div>
  );
}

// Export FilterButtons for use in App.jsx.
export default FilterButtons;
