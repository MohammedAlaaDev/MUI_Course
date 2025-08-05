import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";

import Home from "./pages/home/Home";
import Create from "./pages/create/Create";

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />

    </Route>
  )
);

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
