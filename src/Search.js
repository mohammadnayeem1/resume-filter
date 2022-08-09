import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
  const [resumeData, setResumeData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchResults(
      resumeData.filter((resume) =>
        resume.raw.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  console.log(searchResults);

  const handleClear = (event) => {
    setSearchResults([]);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/resumes').then((res) => {
      setResumeData(res.data);
    });
  }, []);
  return (
    <div>
      <form className="form-inline" onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
        <button type="button" className="btn btn-danger" onClick={handleClear}>
          clear
        </button>
      </form>
      {searchResults.length > 0 && (
        <strong>Found {searchResults.length} results</strong>
      )}
      {searchResults.length > 0
        ? searchResults.map((resume) => <div>{resume.title}</div>)
        : resumeData.map((resume) => {
            return (
              <div>
                <h1>{resume.title}</h1>
                <p>{resume.raw}</p>
              </div>
            );
          })}
    </div>
  );
}
