import { useState } from 'react';
import SearchComponent from './SearchComponent';

const WeatherApplication = () => {
  const [search, setSearch] = useState('');

  async function handleSearch() {}

  return (
    <div>
      <SearchComponent
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      Weather Application
    </div>
  );
};

export default WeatherApplication;
