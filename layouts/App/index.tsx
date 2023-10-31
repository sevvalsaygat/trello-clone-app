import React, { PropsWithChildren } from "react";

import { Layouts } from "@app/componets";

type AppPropTypes = {};

const App: React.FC<PropsWithChildren<AppPropTypes>> = ({ children }) => {
  return (
    <div>
      <Layouts.App.Header />
      {children}
    </div>
  );
};

export default App;
