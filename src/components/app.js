import React from 'react'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div class="main-container">
          <div class="logo-container">
          <div class="logo"></div>
          <span id="logo-text"> Blink </span>
  </div>


  <div class="sign-in">
  <span>
  <a href="https://accounts.google.com/o/oauth2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code&client_id=491020538989-p7rt3a2bpl8qloj56qedsd327q5sg10p.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Flogged%2F"> <div id="login-button">Sign In</div> </a></span>


  </div>
</div>
      </div>
    )
  }
}
