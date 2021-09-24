import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { setLoggedIn, addPlant, unsetEditing } from "../actions";
import { Typography, Button, Container } from "@material-ui/core/";
import { AddCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  cancel: {
    marginLeft: 20,
  },
});

const intiialFormValues = {
  nickname: "",
  species: "",
  h2oFrequency: "",
  description: "",
};

const PlantForm = ({ setLoggedIn, addPlant, isEditing, unsetEditing }) => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState(intiialFormValues);

  const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting...");
    addPlant(formValues);
    push("/plants");
  };

  const handleCancel = () => {
    unsetEditing();
    push("/plants");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn();
    }
  }, [setLoggedIn]);

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        {isEditing ? "Edit Plant" : "Add a New Plant"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChanges}
          value={formValues.nickname}
          name="nickname"
          className={classes.field}
          label="Nickname"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          onChange={handleChanges}
          value={formValues.species}
          name="species"
          className={classes.field}
          label="Species"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          onChange={handleChanges}
          value={formValues.h2oFrequency}
          name="h2oFrequency"
          className={classes.field}
          label="How often does it need watering?"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          onChange={handleChanges}
          value={formValues.description}
          name="description"
          className={classes.field}
          label="Tell us about your plant"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          required
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<AddCircle color="primary" />}
        >
          Add Plant
        </Button>
        <Button
          className={classes.cancel}
          onClick={handleCancel}
          color="secondary"
          variant="contained"
        >
          Cancel
        </Button>
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isEditing: state.isEditing,
  };
};

export default connect(mapStateToProps, {
  setLoggedIn,
  addPlant,
  unsetEditing,
})(PlantForm);
