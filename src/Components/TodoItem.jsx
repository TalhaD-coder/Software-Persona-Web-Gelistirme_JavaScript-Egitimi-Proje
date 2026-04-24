import { motion } from 'framer-motion';
import { Trash2, CheckCircle2, Circle, Pencil } from 'lucide-react';

function TodoItem({ todo, onToggleComplete, onStartEdit, onDelete }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`group p-5 rounded-[2rem] flex items-center justify-between border-2 transition-all ${todo.completed ? 'bg-slate-50/50 border-transparent opacity-60' : 'bg-white border-white shadow-sm'}`}
    >
      <div
        className="flex items-center gap-5 cursor-pointer flex-1"
        onClick={() => onToggleComplete(todo.id)}
      >
        <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center transition-all ${todo.completed ? 'bg-teal-500 border-teal-500 text-white' : 'bg-slate-50 border-slate-200'}`}>
          {todo.completed ? <CheckCircle2 size={24} /> : <Circle size={20} className="text-slate-300" />}
        </div>
        <div>
          <h3 className={`font-black text-xl transition-all ${todo.completed ? 'line-through text-slate-300' : 'text-slate-700'}`}>{todo.title}</h3>
          <p className="text-[10px] font-black text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md w-fit mt-1">📅 {new Date(todo.date + 'T00:00:00').toLocaleDateString('tr-TR')}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onStartEdit(todo.id)}
          className="p-4 text-slate-300 hover:text-amber-500 transition-all"
        >
          <Pencil size={20} />
        </button>
        <button onClick={() => onDelete(todo.id)} className="p-4 text-slate-300 hover:text-red-500 transition-all">
          <Trash2 size={20} />
        </button>
      </div>
    </motion.div>
  );
}

export default TodoItem;
