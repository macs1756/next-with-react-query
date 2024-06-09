import React, { ReactNode } from "react";

type TlayoutPrimary = {
  children: ReactNode;
};

const LayoutPrimary: React.FC<TlayoutPrimary> = ({ children }) => {
  return (
    <React.Fragment>
      <header>headr</header>
      <main>{children}</main>
      <footer>footer</footer>
    </React.Fragment>
  );
};

export default LayoutPrimary;
