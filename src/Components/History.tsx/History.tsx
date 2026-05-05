import React from 'react';
import '../../App.css';

interface HistoryProps {
  history: string[];
  onClearHistory: () => void;
}

const History: React.FC<HistoryProps> = ({ history, onClearHistory }) => {
  return (
    <div className="history-panel">
      <div className="history-header">
        <h2 className="history-title">History</h2>
        {history.length > 0 && (
          <button onClick={onClearHistory} className="clear-history-btn">
            Clear
          </button>
        )}
      </div>

      <div className="history-list">
        {history.length === 0 ? (
          <div className="history-empty">
            <div className="history-empty-icon">📝</div>
            <p>No calculations yet</p>
            <p className="history-empty-subtitle">Start calculating!</p>
          </div>
        ) : (
          history.map((calc, index) => (
            <div key={index} className="history-item">
              <div className="history-calculation">{calc}</div>
            </div>
          ))
        )}
      </div>

      {history.length > 0 && (
        <div className="history-count">
          {history.length} calculation{history.length !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
};

export default History;