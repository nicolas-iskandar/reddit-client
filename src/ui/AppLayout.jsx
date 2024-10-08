import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const { state } = useNavigation();

  return (
    <>
      {state === "loading" && <Loader />}
      {state === "idle" && <Outlet />}
    </>
  );
}

export default AppLayout;
