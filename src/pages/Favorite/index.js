/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../../components/Pagination";
import AlertDialogSlide from "../../components/Dialog";
import { useSelector } from "react-redux";

function Favorite() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 12;
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});
  const [open, setOpen] = useState(false);

  const beers = useSelector((state) => state.beers);
  const beersData = Object.values(beers);

  useEffect(() => {
    const filtered = beersData.slice(
      page > 1 ? (page - 1) * PER_PAGE : 0,
      PER_PAGE * page
    );
    setData(filtered);
  }, [page]);

  const handleClose = () => {
    setOpen(false);
    setSelected({});
  };

  const handlePage = (val) => {
    window.scrollTo(0, 0);
    setPage(val);
  };

  return (
    <div style={{ marginTop: 75 }}>
      {beersData.length > 0 ? (
        <Grid container justifyContent="center" spacing={2}>
          <Card
            data={data}
            PER_PAGE={PER_PAGE}
            handlePage={handlePage}
            page={page}
            handleClick={(value) => {
              setSelected(value);
              setOpen(true);
            }}
            count={parseInt(beersData.length / PER_PAGE) + 1}
            show
          />
          <AlertDialogSlide
            open={open}
            handleClose={handleClose}
            title={selected?.name}
          >
            Tagline: {selected?.tagline}
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={selected?.image_url} width="15%" />
            </div>
            <br />
            Description: {selected?.description}
          </AlertDialogSlide>
        </Grid>
      ) : (
        <h3>No favorite data found!</h3>
      )}
    </div>
  );
}

export default Favorite;
