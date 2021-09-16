import * as React from "react";
import DrawerNav from "../navigation/drawer";
import { _retrieveData } from "../services/asyncStorage";

const Dashboard = () => {
  const [] = React.useState(0);
  React.useEffect(() => {
    _retrieveData("profile")
      .then((res) => {})
      .catch((err) => {});
  });
  return (
    <>
      <DrawerNav />
    </>
  );
};

export default Dashboard;
