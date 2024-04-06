import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCountryByCode } from "../Services/CountryService";
import CircularProgress from "@mui/material/CircularProgress";
import "./DetailCountry.css";
import Carousel from 'react-material-ui-carousel'


const DetailCountry = () => {
  let [code] = useSearchParams();
  code= code.get("code");
  const navigate = useNavigate()

  const handleClick = (codeBorder) => {
    window.scrollTo(0, 0)
    navigate("/detail?code="+codeBorder)
  }

  const { isLoading, data, isError, error } = useQuery({
    queryKey: [code],
    queryFn: () => getCountryByCode(code),
  });

  if (isLoading) return  <CircularProgress style={{ alignSelf: "center", width: "75px", height: "75px" }}/>
  else if (isError) return <div>Error: {error.message}</div>;

  const country = data;
  let name = country.name;
  let coatOfArms = country.coatOfArms?.png;
  let languages = country.languages;
  let borders = country.borders;

  return (
    <>
      <div className="country-detail">
        <section className="country">
          <div
            className={`country__details country__name ${
              !coatOfArms ? "country__name--extended" : ""
            }`}
          >
            <h1 className="">{name}</h1>
            <article className="country__flag">
              <img
                loading="lazy"
                className="country__img"
                src={country.flags.png}
                alt={country.flags.alt}
              />
            </article>
          </div>
          <div className="country__details country__currencies">
            <h2> {country.currencies.length > 1 ? "Monedas:" : "Moneda:"}</h2>
            {country.currencies.map((currency) => (
              <p key={currency.code}>
                {currency.name}({currency.symbol})
              </p>
            ))}
          </div>
          <div className="country__details country__capital">
            <h2>Capital:</h2>
            <p>{country.capital}</p>
          </div>
          <div className="country__details country__region">
            <h2>Continente:</h2>
            <p>{country.region}</p>
          </div>
          <div className="country__details country__subregion">
            <h2>Región:</h2>
            <p>{country.subregion}</p>
          </div>
          <div className="country__details country__language">
            <h2>{languages.length > 1 ? "Idiomas:" : "Idioma:"}</h2>
            <p>{languages.join(",")}</p>
          </div>
          <div className="country__details country__area">
            <h2>Área:</h2>
            <p>{country.area.toLocaleString()} km²</p>
          </div>
          <div className="country__details country__population">
            <h2>Población:</h2>
            <p>{country.population.toLocaleString()}</p>
          </div>
          <div className="country__details country__timezones">
            <h2>Husos Horarios:</h2>
            <p>{country.timezones.join(", ")}</p>
          </div>
          {coatOfArms ? (
            <div
              className={`country__details country__coat ${
                !coatOfArms ? "country__name--extended" : ""
              }`}
            >
              <h2>Escudo de Armas:</h2>
              <img
                loading="lazy"
                className="country__flag"
                src={coatOfArms}
                alt="coat of arms"
              />
            </div>
          ) : (
            ""
          )}
          {
            borders && 
            <div className="country__details country__borders">
            <h2>Paises Limitrofes:</h2>
            <Carousel
              next={ (next, active) => true }
              prev={ (prev, active) => true }
              visibleItems={borders?.length}
            >
              {borders?.map(border => 
                    <div style={{textAlign: 'center'}} key={border.cca2}> 
                      <div onClick={() => handleClick(border.cca2)} >
                      <img className="flag-border" style={{minHeight:150,maxHeight:150}} src={border.flags.png}/> 
                      <h3>{border.name.common}</h3>
                      </div>
                    </div>)
              }
            </Carousel>
          </div>
          }
        </section>
      </div>
    </>
  );
};

export default DetailCountry;
