import React from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./AppRoute";
import Layout from "../components/Layout";
import Search from "../containers/Search";
import HistoryList from "../containers/HistoryList";
import HistoryDetail from "../containers/HistoryDetail";
export default function Routes() {
  return (
    <Switch>
      <AppRoute exact path="/" component={Search} layout={Layout} />
      <AppRoute exact path="/input-history" component={HistoryList} layout={Layout} />
      <AppRoute exact path="/print-sequence/:number" component={HistoryDetail} layout={Layout} />
    </Switch>
  );
}
