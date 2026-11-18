# My To-Do List

A small React application built with Vite. The page is assembled from reusable components in `src/components`.

## How components communicate

`App` is the composition point: it imports the page components and places them in the order shown on screen. Components render their own markup; they do not communicate directly with sibling components.

```text
main.jsx
  └─ App
      ├─ Header
      ├─ TaskSummary
      ├─ AddTaskForm
      └─ tasks section
          ├─ FilterButtons
          └─ TaskList
              └─ TaskItem (one per task)
```

In React, data and events normally flow through **props**:

1. A parent passes data down to a child as props.
2. A child reports a user action to its parent by calling a callback passed as a prop.
3. The parent owns and updates shared state, then passes the updated data back down. This keeps related components in sync without direct sibling-to-sibling communication.

For example, `TaskList` currently passes each task's `taskName` and `status` to `TaskItem`. `TaskItem` uses those props to display the row.

### Current behavior

The app currently displays hard-coded sample content. `TaskSummary` contains fixed counts, and `TaskList` contains five fixed tasks. The add form prevents submission, the filter buttons do not change the list, and task checkboxes are read-only. There is no shared task state, callback-based event flow, persistence, or backend communication yet.

### Extending task interactions

When adding working task management, keep the task data and shared state in `App` (or a dedicated state/context layer if the app grows). Pass the tasks and action callbacks down:

```text
App (owns tasks and selected filter)
  ├─ AddTaskForm      receives onAddTask(taskName)
  ├─ FilterButtons    receives selectedFilter and onFilterChange(filter)
  ├─ TaskList         receives visible tasks
  │   └─ TaskItem     receives a task and onToggleTask(taskId)
  └─ TaskSummary      receives totals derived from tasks
```

Child components should call their supplied callbacks when users interact; `App` should update its state and provide the new values through props. Derive the visible tasks and summary counts from the same task state so all parts of the page stay consistent.

## Run locally

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```
# my_to_do_list
