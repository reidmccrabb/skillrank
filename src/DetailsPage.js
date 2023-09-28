import React from 'react';
import { useNavigate } from 'react-router-dom';

function DetailsPage() {
  // Use the navigate function from the useNavigate hook
  const navigate = useNavigate();

  return (
    <div className="details-page">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {/* Back to Home Button */}
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>

      <h1>Details for AI Engineer slat</h1>
      {/* Add your detailed content here */}
    </div>
  );
}

export default DetailsPage;
