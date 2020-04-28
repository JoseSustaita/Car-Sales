import React from "react";
import { removeFeature } from "../actions/action";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeature(props.feature)}
        className="button"
      >
        Remove Feature
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
