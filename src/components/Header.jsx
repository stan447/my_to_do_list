// Define the Header function component.
function Header() {
  // Return the heading and welcome text.
  return (
    // Place the header information in a header element.
    <header className="header">
      {/* Display the small application name. */}
      <p className="app-name">MY TASK MANAGER</p>
      {/* Display the main assignment heading. */}
      <h1>My To-Do List</h1>
    </header>
  );
}

// Export Header so it can be imported into App.jsx.
export default Header;
