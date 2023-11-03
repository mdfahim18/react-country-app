import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import SearchCountry from './components/SearchCountry';

const url = 'https://restcountries.com/v3.1/all';

function App() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const fetchCountry = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setLoading(false);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const removeCountry = (id: any) => {
    const newCountry = countries.filter(
      (country: any) => country.name.official !== id
    );
    setCountries(newCountry);
  };

  return (
    <main>
      {loading && <div className='loading'></div>}
      <SearchCountry handleSearch={setSearch} />
      <Countries
        countries={countries.filter((country: any) =>
          country.name.common.toLowerCase().includes(search)
        )}
        removeCountry={removeCountry}
      />
    </main>
  );
}

export default App;
