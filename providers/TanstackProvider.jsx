'use client'
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const TanstackProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
