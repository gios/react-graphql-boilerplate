import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/styles/index.scss";
import { App } from "./app";
import { ExchangeRates } from "./pages/exchange-rates/exchange-rates";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

const app = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There is nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  app
);
