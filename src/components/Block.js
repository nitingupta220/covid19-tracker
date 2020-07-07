import React from "react";

const Block = ({ label, value }) => {
  return (
    <>
      {label ? <p>{label}</p> : null}
      <div>{value ? value.value : null}</div>
    </>
  );
};

export default Block;
