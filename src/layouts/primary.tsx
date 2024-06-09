import React, { ReactNode } from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type TlayoutPrimary = {
  children: ReactNode;
};

const LayoutPrimary: React.FC<TlayoutPrimary> = ({ children }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default LayoutPrimary;
