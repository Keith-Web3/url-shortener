import React from 'react'
import { Link } from 'react-router-dom'
import '../../sass/Auth/sign-up-form.scss'
import axios from 'axios'
import { useRef } from 'react'
import { useContext } from 'react'
import AuthContext from '../../store/AuthContext'

function SignUpForm({ signedUp }) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const ctx = useContext(AuthContext)

  function submitHandler(e) {
    e.preventDefault()
    signedUp ? loginHandler() : signUpHandler()
  }

  const options = {
    header: {
      'Content-Type': 'application/json',
    },
  }

  function signUpHandler() {
    const currentEmail = emailRef.current.value
    const currentPassword = passwordRef.current.value

    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQTFFPbZ51yNGf0uUtx2sS7NOkBNq5eN8',
        {
          email: currentEmail,
          password: currentPassword,
          returnSecureToken: true,
        },
        options
      )
      .then(res => {
        console.log(res)
        if (!res.data)
          throw new Error(res.response.data.error || 'request failed')
        ctx.login(res.data.idToken)
      })
      .catch(err => alert(err.message))
  }
  function loginHandler() {
    const currentEmail = emailRef.current.value
    const currentPassword = passwordRef.current.value

    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQTFFPbZ51yNGf0uUtx2sS7NOkBNq5eN8',
        {
          email: currentEmail,
          password: currentPassword,
          returnSecureToken: true,
        },
        options
      )
      .then(res => {
        console.log(res)
        if (!res.data)
          throw new Error(res.response.data.error || 'request failed')
        ctx.login(res.data.idToken)
      })
      .catch(err => alert(err.message))
  }

  return (
    <form className="sign-up-form" onSubmit={submitHandler} method="POST">
      <label htmlFor="email">
        Email:
        <input type="email" name="email" id="email" ref={emailRef} required />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
          minLength="6"
          required
        />
      </label>
      <button>{signedUp ? 'Log In' : 'Sign Up'}</button>
      <Link to={signedUp ? '/sign-up' : '/login'}>
        {!signedUp
          ? 'Already signed up? Log In'
          : "Don't have an account yet? Sign Up"}
      </Link>
    </form>
  )
}

export default SignUpForm
