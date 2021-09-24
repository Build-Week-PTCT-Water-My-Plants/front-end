import React, { useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

import Container from "@material-ui/core/Container";
import Plant from "./Plant";
import Masonry from "react-masonry-css";
import { connect } from "react-redux";
import { getPlants, setLoggedIn } from "../actions";

//map over GET request from server to render individual <Plant /> components here
const PlantList = (props) => {
  const { plants, getPlants, loadingPlants, plantsError, setLoggedIn } = props;

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    console.log("PlantList route loaded!");
    if (localStorage.getItem("token")) {
      setLoggedIn();
    }
    getPlants();
  }, [getPlants, setLoggedIn]);

  return (
    <Container>
      {loadingPlants && (
        <div className="loader">
          <FadeLoader size={150} />
        </div>
      )}
      {plantsError && <h3 className="plantsError">{plantsError}</h3>}
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
    plantsError: state.plantsError,
  };
};

export default connect(mapStateToProps, { getPlants, setLoggedIn })(PlantList);
