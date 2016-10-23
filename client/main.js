import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import CreateLinkForm from "./components/CreateLinkForm";
import LinkList from "./components/LinkList";

import { Links } from "../imports/collections/links";


const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <CreateLinkForm />
        <LinkList />
      </div>
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});