import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./MenuDirectory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/selectors/directorySelector";
import { createStructuredSelector } from "reselect";

const MenuDirectory = ({ sections }) => {
  return (
    <div className="menu-directory">
      {sections.map(({ id, ...restOfProps }) => {
        return <MenuItem key={id} {...restOfProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(MenuDirectory);
