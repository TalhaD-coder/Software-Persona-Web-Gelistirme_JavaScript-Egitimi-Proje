export const createTodo = ({ title, date }) => ({
  id: crypto.randomUUID(),
  title: title.trim(),
  date,
  completed: false,
});