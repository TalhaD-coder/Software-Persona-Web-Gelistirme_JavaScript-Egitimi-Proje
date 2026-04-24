import { Inbox } from 'lucide-react';

function EmptyState() {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 p-10 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
        <Inbox size={24} />
      </div>
      <h3 className="text-xl font-black text-slate-700">Gorev bulunamadi</h3>
      <p className="mt-2 text-sm font-medium text-slate-400">
        Filtre veya arama sonucunda listelenecek bir gorev yok.
      </p>
    </div>
  );
}

export default EmptyState;
