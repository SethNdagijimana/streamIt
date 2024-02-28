import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import SinglePage from "./components/watch/SinglePage"
import HomePage from "./home/HomePage"
import "./index.css"

function App() {
  return (
    <>
      <Router>
        <Header />
        <HomePage />
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/singlepage/:id" component={SinglePage} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
