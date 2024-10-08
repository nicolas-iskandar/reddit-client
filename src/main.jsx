import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App, { loader } from "./pages/App.jsx";
import InitialPage, { action as submitAction } from "./pages/InitialPage.jsx";
import "./index.css";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<InitialPage />} action={submitAction} />
      <Route path="/r/:subreddit" element={<App />} loader={loader} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
