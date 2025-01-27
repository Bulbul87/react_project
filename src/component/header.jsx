
import React, { useState } from 'react';

const Header = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert('No files selected!');
      return;
    }

    // Simulating a file upload
    console.log('Uploading files:', files);
    alert(`${files.length} files uploaded successfully!`);
    setFiles([]); // Clear files after upload
  };

  return (
    <div style={{ backgroundColor: 'gray', color: 'white', padding: '20px' }}>
      <h2>Header Component</h2>
      
      <input 
        type="file" 
        multiple 
        onChange={handleFileChange} 
        style={{ margin: '10px 0', color: 'white' }}
      />
      
      <button 
        onClick={handleUpload} 
        style={{
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '10px'
        }}
      >
        Upload Files
      </button>
      
      {files.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4>Selected Files:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

