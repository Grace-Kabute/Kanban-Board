const Login = () => {
  return (
    <>
    <h1>Welcome to TaskFlow</h1>
    <h5>Finishing tasks is just, <span>Start</span></h5>
    <form action="get">
      <label htmlFor="">Name</label>
      <input type="text" placeholder="enter full name" required />
      <label htmlFor="">Email</label>
      <input type="email" placeholder="enter email" required />
      <label htmlFor="">Password</label>
      <input type="password" placeholder="enter password" required />
      <span>forgot password?</span>
    </form>
    <div>
      <button>Sign up</button>
    </div>
    <p>or</p>
    <button>Sign up with google</button>
   
    </>
  )
}

export default Login;