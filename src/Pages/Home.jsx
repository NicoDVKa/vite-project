import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../Services/CountryService";
import CircularProgress from "@mui/material/CircularProgress";
import CountryCard from "../Components/CountryCard/CountryCard";

const Home = () => {

  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['countries'],
    queryFn : getAllCountries
  })

  if (isLoading) return <CircularProgress style={{alignSelf: 'center', width: '75px', height: '75px'}}/>
  else if (isError) return <div>Error: {error.message}</div>

  return (
    <>
      <div className="cardContainer">
        {data.map((country) => (
          <CountryCard country={country} key={country.code} />
        ))}
      </div>
    </>
  );
};

export default Home;
