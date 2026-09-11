import { useEffect, useState } from 'react';
import { getHistory } from '../../services/historyService.js';
import HistoryItem from '../../components/HistoryItem/HistoryItem.jsx';
import './History.css';

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <main className="history-page">
      <h1 className="history-title">Historial</h1>

      {history.length === 0 ? (
        <p className="history-empty">Todavía no visitaste ningún ítem.</p>
      ) : (
        <div className="history-timeline">
          {history.map((item) => (
            <HistoryItem key={`${item.entity}-${item.id}`} item={item} />
          ))}
        </div>
      )}
    </main>
  );
}