import React from "react";

const TextArea = ({ ...props }) => {
  return (
    <div>
      <textarea {...props} style={{ width: "25rem" }} />
    </div>
  );
};

export default TextArea;
