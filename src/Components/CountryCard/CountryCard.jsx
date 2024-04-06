import PropTypes from "prop-types";
import { Country } from "../../Domain/Country";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom' 

const CountryCard = ({ country }) => {

  const navigate = useNavigate()

  const viewDetail = () => {
    navigate('/detail?code='+ country.code)
  };

  return (
    <Card className="card" sx={{ minWidth: 300, maxWidth: 300 }}>
      <CardMedia
        component="img" 
        alt={country.flags.alt}
        height="140"
        image={country.flags.png}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          {country.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button onClick={viewDetail} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

CountryCard.propTypes = {
  country: PropTypes.instanceOf(Country),
};

export default CountryCard;
