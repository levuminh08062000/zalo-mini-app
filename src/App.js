import React, { useState, useRef } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const fileInputRef = useRef(null); // dùng để click input ẩn

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handleTakePhotoClick = () => {
    fileInputRef.current.click(); // mô phỏng click input ẩn
  };

  return (
    <div>
      <button onClick={handleTakePhotoClick}>📷 Chụp ảnh</button>

      <input
        type="file"
        accept="image/*"
        capture="user"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {imageUrl && <img src={imageUrl} alt="Ảnh đã chụp" width="200" />}
    </div>
  );
}

export default App;
