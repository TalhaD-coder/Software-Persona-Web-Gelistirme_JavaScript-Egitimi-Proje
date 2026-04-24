import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Volume2, VolumeX } from 'lucide-react';
import TodoForm from '../Components/TodoForm';
import TodoItem from '../Components/TodoItem';
import EmptyState from '../Components/EmptyState';
import Toast from '../Components/Toast';
import { createTodo } from '../Interfaces/Todo';
import { TOAST_MESSAGES } from '../constants/uiText';

function Home() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('my_premium_todos');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [toast, setToast] = useState(null);
  // SES AYARI: Kullanıcı tercihi için state
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  useEffect(() => {
    localStorage.setItem('my_premium_todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const normalizeTitle = (value) => value.trim().toLocaleLowerCase('tr-TR');

  // SES ÇALMA FONKSİYONU
  const playSound = (type) => {
    if (!isSoundEnabled) return;
    const audio = new Audio(type === 'success' ? '/success.mp3' : '/delete.mp3');
    audio.play().catch(err => console.log("Ses çalınamadı:", err));
  };

  const addTodo = (title, date) => {
    const normalizedNewTitle = normalizeTitle(title);
    const hasDuplicate = todos.some(
      todo => normalizeTitle(todo.title) === normalizedNewTitle
    );

    if (hasDuplicate) {
      showToast(TOAST_MESSAGES.duplicateTaskError, 'error');
      return;
    }

    const newTodo = createTodo({ title, date });
    setTodos(prev => [newTodo, ...prev]);
    showToast(TOAST_MESSAGES.addSuccess);
  };

  const updateTodo = (id, title, date) => {
    const normalizedUpdatedTitle = normalizeTitle(title);
    const hasDuplicate = todos.some(
      todo => todo.id !== id && normalizeTitle(todo.title) === normalizedUpdatedTitle
    );

    if (hasDuplicate) {
      showToast(TOAST_MESSAGES.duplicateTaskError, 'error');
      return;
    }

    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, title, date } : todo))
    );
    setEditingTodoId(null);
    showToast(TOAST_MESSAGES.updateSuccess);
  };

  const deleteTodo = (id) => {
    playSound('delete'); // Silme sesi
    setTodos(prev => prev.filter(todo => todo.id !== id));
    if (editingTodoId === id) {
      setEditingTodoId(null);
    }
    showToast(TOAST_MESSAGES.deleteSuccess);
  };

  const toggleComplete = (id) => {
    const targetTodo = todos.find(t => t.id === id);
    if (targetTodo && !targetTodo.completed) {
      playSound('success'); // Sadece tamamlandığında ses çal
    }
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const progress = useMemo(() => {
    const total = todos.length;
    const completedCount = todos.filter(t => t.completed === true).length;
    return total === 0 ? 0 : Math.round((completedCount / total) * 100);
  }, [todos]);

  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate ? todo.date === selectedDate : true;
    if (!matchesDate) return false;
    if (filter === 'active') return !todo.completed && matchesSearch;
    if (filter === 'completed') return todo.completed && matchesSearch;
    return matchesSearch;
  });

  const editingTodo = todos.find(todo => todo.id === editingTodoId) ?? null;

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-12 flex justify-center items-start font-sans text-slate-900">
      <Toast toast={toast} />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* SOL PANEL */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-white relative overflow-hidden">
            
            {/* SES AÇMA KAPATMA BUTONU */}
            <button 
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
              className={`absolute top-6 right-6 p-3 rounded-2xl transition-all ${isSoundEnabled ? 'bg-teal-50 text-teal-600' : 'bg-slate-100 text-slate-400'}`}
            >
              {isSoundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            <h1 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal-500 rounded-xl flex items-center justify-center text-white text-sm">G</span>
              GOREV ASISTANI
            </h1>

            <div className="flex items-end gap-4 mb-6">
              <motion.span key={progress} className="text-7xl font-black leading-none tracking-tighter">%{progress}</motion.span>
              <div className="flex flex-col mb-1">
                <span className="text-teal-500 font-black text-xs uppercase tracking-[0.2em]">BAŞARI</span>
                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">TAMAMLANDI</span>
              </div>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
              <motion.div animate={{ width: `${progress}%` }} className="h-full bg-gradient-to-r from-teal-400 to-emerald-500" />
            </div>
          </div>

          <TodoForm
            key={editingTodoId ?? 'new'}
            addTodo={addTodo}
            updateTodo={updateTodo}
            editingTodo={editingTodo}
            cancelEdit={() => setEditingTodoId(null)}
            onNotify={showToast}
          />
        </div>

        {/* SAĞ PANEL */}
        <div className="lg:col-span-8 bg-white/40 backdrop-blur-md p-6 md:p-10 rounded-[3rem] shadow-2xl border border-white min-h-[700px]">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10 pb-8 border-b border-slate-200/50">
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-3">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text"
                  placeholder="Görevlerde ara..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-sm outline-none font-medium"
                />
              </div>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-4 py-4 bg-white rounded-2xl shadow-sm outline-none font-medium text-slate-500"
              />
              {selectedDate && (
                <button
                  type="button"
                  onClick={() => setSelectedDate('')}
                  className="px-4 py-4 bg-slate-100 rounded-2xl font-bold text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  Tum Tarihler
                </button>
              )}
            </div>
            
            <div className="flex bg-slate-200/50 p-1.5 rounded-[1.5rem]">
              {['all', 'active', 'completed'].map(f => (
                <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${filter === f ? 'bg-white text-teal-600 shadow-md scale-105' : 'text-slate-500'}`}>
                  {f === 'all' ? 'HEPSİ' : f === 'active' ? 'YAP' : 'BİTTİ'}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredTodos.length === 0 ? (
              <EmptyState />
            ) : (
              <AnimatePresence mode='popLayout'>
                {filteredTodos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={toggleComplete}
                    onStartEdit={setEditingTodoId}
                    onDelete={deleteTodo}
                  />
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;