import React, { PropsWithChildren } from "react";

type AppPropTypes = {};

const App: React.FC<PropsWithChildren<AppPropTypes>> = ({ children }) => {
  return <div>{children}</div>;
};

export default App;
