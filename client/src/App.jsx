import React from "react";
import {
  DetailItemPage,
  HomePage,
  SignInPage,
  SignUpPage,
  Live,
  Manager,
} from "./components/pages";
import { Route, Routes as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import {
  Products,
  ShopUser,
  InfoUser,
  JoinedUser,
  PostsUser,
  CreatePost,
} from "./components/parts";
const App = () => {
  return (
    <div className="main-layout">
      <Header />
      <Router>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/" element={<DetailItemPage />} />
        <Route path="/login/" element={<SignInPage />} />
        <Route path="/sign-up/" element={<SignUpPage />} />
        <Route path="/account/" element={<Manager />} />
        <Route path="/account/info" element={<InfoUser />} />
        <Route path="/account/auction-joined/" element={<JoinedUser />} />
        <Route path="/account/post/" element={<PostsUser />} />
        <Route path="/account/create-post/" element={<CreatePost />} />
      </Router>
    </div>
  );
};

export default App;
