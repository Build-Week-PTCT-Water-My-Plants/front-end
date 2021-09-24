import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { deletePlant, setEditing } from "../actions";
import { useHistory } from "react-router";

const Plant = ({ plant, deletePlant, deletePlantError, setEditing }) => {
  const { push } = useHistory();

  const handleEdit = () => {
    console.log("Editing: ", plant.id);
    setEditing();
    push(`/plantform/${plant.id}`);
  };

  const handleDelete = () => {
    console.log("Deleting: ", plant.id);
    deletePlant(plant.id);
  };

  return (
    <div className="plant">
      {deletePlantError && (
        <h5 className="deletePlantError">{deletePlantError}</h5>
      )}
      <Card elevation={1}>
        <CardHeader
          title={plant.nickname}
          subheader={plant.species}
          action={
            <div>
              <IconButton onClick={handleEdit}>
                <EditOutlined color="secondary" />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteOutlined color="error" />
              </IconButton>
            </div>
          }
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary">
            Water: {plant.h2oFrequency}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {plant.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deletePlantError: state.deletePlantError,
  };
};

export default connect(mapStateToProps, { deletePlant, setEditing })(Plant);
