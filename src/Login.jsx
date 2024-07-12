import React from 'react'

function Login() {
  return (
    <>
    <div class="main-login-div" >
    <div class="login-div">
<h1 class="heading-login">Login Page</h1>
<form>
  <div class="page">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required/>
  </div>
  <div class="page">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required/>
  </div>
  <button class="btn-cart" type="submit">Login</button>
</form>
</div>
    </div>
    
    </>
    
)
}

 
export default Login
