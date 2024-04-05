import './App.css';
import { useQuery } from '@tanstack/react-query';
import { getAllCountries } from './Services/CountryService';
import CircularProgress from '@mui/material/CircularProgress';
import CountryCard from './Components/CountryCard/CountryCard';

function App() {

  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['countries'],
    queryFn : getAllCountries
  })

  if (isLoading) return <CircularProgress />
  else if (isError) return <div>Error: {error.message}</div>


  return (
    <div>
      {data.map(country => <CountryCard country={country} key={country.code} />)}
    </div>
  );
}

export default App;
