export const createTodo = ({ title, date }) => ({
  id: Date.now(),
  title: title.trim(),
  date,
  completed: false,
});