/* eslint-disable eqeqeq */
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../../redux/actions";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function RecipeReviewCard(props) {
  const beers = useSelector((state) => state.beers);
  const beersKeys = Object.keys(beers);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = React.useState(false);
  const addFavourite = (value) => () => {
    if (beersKeys.indexOf(String(props?.id)) == -1) {
      dispatch(addToFavourite(value));
    } else {
      dispatch(removeFromFavourite(value));
    }
    setRefresh(!refresh);
  };

  const handleChange = (e, value) => {
    dispatch(addToFavourite({ ...value, rating: e.target.value }));
  };

  return (
    <Card key={props?.id} sx={{ maxWidth: 345, height: 450 }}>
      <div onClick={() => props.handleClick(props)}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props?.name.charAt(0)}
            </Avatar>
          }
          title={props?.name.slice(0, 30)}
          subheader={props?.tagline.slice(0, 30)}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardMedia
            component="img"
            height="194"
            image={props?.image_url}
            alt="Paella dish"
            style={{ width: "auto" }}
          />
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props?.description.slice(0, 120)}...
          </Typography>
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton
          onClick={addFavourite(props)}
          aria-label="add to favorites"
          title={beersKeys.indexOf(String(props?.id)) != -1 ? "Remove from favourites" : "Add to favorites"}
          style={{
            color: beersKeys.indexOf(String(props?.id)) != -1 ? "red" : "grey",
          }}
        >
          <FavoriteIcon />
        </IconButton>
        {(props.show || false) && (
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Rating
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props?.rating}
              onChange={(e) => handleChange(e, props)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        )}
      </CardActions>
    </Card>
  );
}
