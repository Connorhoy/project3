import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Landing = () => (
  <div>
    <h2>Sign In</h2>
    <form>
      <label for="username">Username: </label>
      <input type="text" id="username" name="username"/><br/>
      <label for="password">Password: </label>
      <input type="password" id="password" name="password"/>
    </form>
    <button type="submit" id="login-btn">Submit</button>
    <p id="error-login"></p> 
    <p><Link to="/">Forgot Login Info</Link></p>
    <p><Link to="/signup">Not registered? Sign up here!</Link></p>
  </div>
)

const Signup = () => (
  <div>
    <h2>Registration</h2>
    <p id="error-reg"></p>
    <form>
      <label for="new-username">Username: </label>
      <input type="text" name="new-username" id="new-username"></input>
      <br/>
      <label for="new-password">Password: </label>
      <input type="password" name="new-password" id="new-password"></input>
      <br/>
      <label for="confirm-pw">Confirm Password: </label>
      <input type="password" name="confirm-pw" id="confirm-pw"></input>
      <br/>
      <label for="new-email">Email: </label>
      <input type="text" name="new-email" id="new-email"></input>
      <br/>
      <label for="new-keyword">Keyword: </label>
      <input type="text" name="new-keyword" id="new-keyword"></input>
      <br/>
    </form>
    <button type="submit" id="reg-btn">Register</button>
  </div>
)

const Search = () => (
  <div>
    <h2>Search Upcoming Meetings</h2>
    <form>
      <label for="search-input">Search for: </label>
      <input type="text" id="search-input" name="search-input" placeholder="Enter keyword here."/>
      <button type="submit" id="search"> Search </button>
    </form>
    <p id="error-search"></p>

    <div id="search-results">
    </div>
  </div>
)


const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/Search" component={Search}/>
    </div>
  </Router>
)

export default BasicExample