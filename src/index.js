import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GoogleIcons } from './components/GoogleIcons';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { useEffect, useState, useRef } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { RssFeedApp } from './pages/works/rss-feed-app';
import { SlackWeetApp } from './pages/works/slack-weet-app';

function App() {
  const location = useLocation();

  return (
    <>
      <GoogleIcons></GoogleIcons>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            exact
            path="/works"
            render={() => {
              return <Work />;
            }}
          />
          <Route
            exact
            path="/works/rss-feed-app"
            render={() => {
              return <RssFeedApp />;
            }}
          />
          <Route
            exact
            path="/works/slack-weet-app"
            render={() => {
              return <SlackWeetApp />;
            }}
          />
        </Switch>
      </AnimatePresence>
      <NavBar></NavBar>
      <Footer></Footer>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
