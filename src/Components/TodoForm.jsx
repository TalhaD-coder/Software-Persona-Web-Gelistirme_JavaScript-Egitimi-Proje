import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { TODO_FORM } from '../constants/uiText';

function TodoForm({ addTodo, updateTodo, editingTodo, cancelEdit, onNotify }) {
  const [text, setText] = useState(editingTodo?.title ?? "");
  const [date, setDate] = useState(
    editingTodo?.date ?? new Date().toISOString().split('T')[0]
  );
  const [dateError, setDateError] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editingTodo && date < today) {
      const message = TODO_FORM.pastDateError;
      setDateError(message);
      onNotify?.(message, 'error');
      return;
    }

    setDateError('');
    if (!text.trim()) return;

    if (editingTodo) {
      updateTodo(editingTodo.id, text, date);
      return;
    }
    addTodo(text, date);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white/80 p-6 rounded-[2rem] border border-white shadow-xl backdrop-blur-sm">
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Görev Başlığı</label>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={TODO_FORM.maxTitleLength}
          placeholder="Neyi başarmak istiyorsun?" 
          className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-400 outline-none transition-all font-bold text-slate-700" 
        />
        <p className="text-[11px] font-semibold text-slate-400 text-right pr-1">
          {text.length}/{TODO_FORM.maxTitleLength}
        </p>
      </div>
      
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Hedef Tarih</label>
        <div className="relative">
          <input 
            type="date" 
            value={date}
            min={editingTodo ? undefined : today}
            onChange={(e) => {
              setDate(e.target.value);
              if (dateError) setDateError('');
            }}
            className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-teal-400 outline-none font-bold text-slate-500 transition-all cursor-pointer" 
          />
        </div>
        {dateError && <p className="text-xs font-semibold text-red-500 ml-1">{dateError}</p>}
      </div>

      <div className="flex gap-3">
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="submit" 
          className="w-full bg-slate-900 text-white p-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 hover:bg-teal-600 transition-colors"
        >
          <PlusCircle size={20} />
          {editingTodo ? 'GÜNCELLE' : 'LİSTEYE EKLE'}
        </motion.button>

        {editingTodo && (
          <button
            type="button"
            onClick={cancelEdit}
            className="px-6 rounded-2xl bg-slate-100 text-slate-600 font-black uppercase text-xs tracking-wider hover:bg-slate-200 transition-colors"
          >
            İPTAL
          </button>
        )}
      </div>
    </form>
  );
}

export default TodoForm;