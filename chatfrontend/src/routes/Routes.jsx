import React from "react";
import { Route } from "react-router";
import { Chat } from "../components/Chat";
import { Join } from "../components/Join";

export const Routes = () => {
  return (
    <div>
      <Route exact path="/">
        <Join />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
    </div>
  );
};
