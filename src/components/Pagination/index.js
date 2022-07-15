import React from "react";
import Card from "../Card";
import { Pagination } from "@mui/material";
import { Grid } from "@mui/material";

export default function CustomPagination({
  data,
  handlePage,
  page,
  handleClick,
  count,
  show,
}) {
  const handleChange = (e, p) => {
    handlePage(p);
  };

  return (
    <>
      {data.map((item) => (
        <Grid item sx={4}>
          <Card
            key={item?.id}
            {...item}
            handleClick={handleClick}
            show={show}
          />
        </Grid>
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        <Pagination
          count={count || 50}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
