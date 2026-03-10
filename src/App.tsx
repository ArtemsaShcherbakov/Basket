import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Loader } from "@/components/UI";

import router from "./routes";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader fullPage message="Загрузка страницы..." />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
