import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function Toast({ toast }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-6 right-6 z-50"
        >
          <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl border ${toast.type === 'error' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
            {toast.type === 'error' ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
            <span className="font-bold text-sm">{toast.message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
