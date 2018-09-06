import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Form from "./Form";
import All from "./All";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact={true} path="/" component={Form} />
          <Route path="/all" component={All} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
