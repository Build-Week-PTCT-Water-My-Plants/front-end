import React, { useEffect } from "react";

import Container from "@material-ui/core/Container";
import Plant from "./Plant";
import Masonry from "react-masonry-css";
import { connect } from "react-redux";
import { getPlants } from "../actions";

//map over GET request from server to render individual <Plant /> components here
const PlantList = (props) => {
  const { plants, getPlants } = props;
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  //write reducer case for this using an axios request to set plants state
  useEffect(() => {
    console.log("PlantList route loaded!");
    getPlants();
  }, [getPlants]);

  return (
    <Container>
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
  };
};

export default connect(mapStateToProps, { getPlants })(PlantList);
