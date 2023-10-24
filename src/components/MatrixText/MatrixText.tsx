import React from "react";

export const MatrixText: React.FC = () => {
  const textStyle: React.CSSProperties = {
    marginTop: "20px",
    fontSize: "24px",
  };

  return (
    <div style={textStyle}>
      We are all in the matrix, which pill will you choose?
    </div>
  );
};
