
import './App.css';
import React, { useState } from 'react';
function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  const getLocation = () => {
    if (!window.zalo) {
      setError('Zalo SDK chưa sẵn sàng (chỉ hoạt động trong Zalo App)');
      return;
    }

    window.zalo.getLocation({
      success: (res) => {
        setLocation(res);
        setError('');
      },
      fail: (err) => {
        setError('Không thể lấy vị trí: ' + JSON.stringify(err));
      }
    });
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>Zalo Mini App - React (CRA)</h1>
      <button onClick={getLocation}>Lấy vị trí</button>
      {location && (
        <p>
          📍 Lat: {location.latitude}, Lng: {location.longitude}
        </p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
