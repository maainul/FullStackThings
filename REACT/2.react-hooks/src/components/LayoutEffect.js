import React, { useEffect, useLayoutEffect } from "react";

const LayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("Use Layout Hook Call");
  }, []);
  useEffect(() => {
    console.log("Use Effect call");
  });
  return <div>Layout Effect Hooks</div>;
};

export default LayoutEffect;
