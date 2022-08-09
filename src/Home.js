import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <div>Welcome</div>
      <button className="btn btn-primary" onClick={() => navigate('/Upload')}>
        Upload Resumes
      </button>
      <button className="btn btn-primary" onClick={() => navigate('/Search')}>
        Filter Resumes
      </button>
    </div>
  );
}
