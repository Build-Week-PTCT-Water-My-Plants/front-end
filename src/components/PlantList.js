import React, { useEffect } from "react";

import Container from "@material-ui/core/Container";
import Plant from "./Plant";
import Masonry from "react-masonry-css";
import { connect } from "react-redux";

//map over GET request from server to render individual <Plant /> components here
const PlantList = (props) => {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  //write reducer case for this using an axios request to set plants state
  useEffect(() => {
    console.log("PlantList loaded!");
  }, []);

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.plants.map((plant) => (
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

export default connect(mapStateToProps, {})(PlantList);
