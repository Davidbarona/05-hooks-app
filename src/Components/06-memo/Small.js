import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Again here I am :(");
  return (
    <>
      <small>{value}</small>
    </>
  );
});
