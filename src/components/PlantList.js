import React, { useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

import Container from "@material-ui/core/Container";
import Plant from "./Plant";
import Masonry from "react-masonry-css";
import { connect } from "react-redux";
import { getPlants } from "../actions";

//map over GET request from server to render individual <Plant /> components here
const PlantList = (props) => {
  const { plants, getPlants, loadingPlants } = props;

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    console.log("PlantList route loaded!");
    getPlants();
  }, [getPlants]);

  return (
    <Container>
      {loadingPlants && (
        <div className="loader">
          <FadeLoader size={150} />
        </div>
      )}
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {plants.map((plant) => (
          <div key={plant.id}>
            <Plant plant={plant} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
    loadingPlants: state.loadingPlants,
  };
};

export default connect(mapStateToProps, { getPlants })(PlantList);
