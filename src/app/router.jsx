import '../App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom'

import Home from '../components/routingExample/Home'
import About from '../components/routingExample/About'
import Error from '../components/routingExample/Error'
import { Product } from '../components/routingExample/product'
import Login from '../components/routingExample/Login'
import Dashboard from '../components/routingExample/Dashboard'
import Logout from '../components/routingExample/Logout'
import { DreagNDrop } from '../components/DragNDrop/example'
import Layout from '../components/routingExample/Layout'

// How to find current mode of system like it is dark mode or light mode.
function App() {
  let isLogin = true
  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link
              class="navbar-brand active"
              aria-current="page"
              to="/"
            >
              Learn ReactJS
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/DreagNDrop"
                  >
                    DragNDrop
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/Something"
                  >
                    Something
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/product/mobile/1"
                  >
                    First Mobile
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="about"
              element={<About />}
            />
            <Route
              path="DreagNDrop"
              element={<DreagNDrop />}
            />
          </Route>

          <Route
            path="/product/:c/:id"
            element={<Product />}
          />
          <Route
            path="/dashboard"
            element={
              isLogin ? (
                <Dashboard />
              ) : (
                <Navigate
                  to="/login"
                  replace
                  state={'user not login'}
                />
              )
            }
          />
          <Route
            path="/login"
            element={
              isLogin ? (
                <Navigate
                  to="/dashboard"
                  replace
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/logout"
            element={<Logout />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
