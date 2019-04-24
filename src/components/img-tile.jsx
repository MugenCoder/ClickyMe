import * as React from "react";

export const ImageTile = props => {
  return (
    <div
      className="click"
      data-tile-number={props.tileNumber}
      onClick={props.handleClick}
    >
      {props.tileNumber}
    </div>
  );
};
