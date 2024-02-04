import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UploadPage.css';

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/upload-endpoint', { // replace '/upload-endpoint' with your server-side upload URL
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      alert('Upload successful');
    } catch (error) {
      console.error('Error:', error);
      alert('Upload failed');
    }
  };

  return (
    <div className="upload-page">
        <div className="parent-container">
        <h1>Upload your own video to share with your friends!</h1>
      <div className="file-upload-container">
      <img className="logo" src="songASLlogo.png" alt="Logo" style={{cursor:'pointer'}}></img>

        <label htmlFor="fileInput" className="file-upload-label">
          <i className="fas fa-cloud-upload-alt"></i>
          <span>Drag & Drop or Click to Upload</span>
        </label>
        <input
          type="file"
          id="fileInput"
          className="file-upload-input"
          onChange={handleFileChange}
        />

        {selectedFile && (
          <div className="selected-file">
            <p>Selected File:</p>
            <p>{selectedFile.name}</p>
          </div>
        )}

        <button className="submit-button" onClick={handleSubmit}>
          <Link to="/new-page" className="submit-button-link">
            Submit
          </Link>
        </button>
      </div>
      </div>
    </div>
  );
}

export default UploadPage;