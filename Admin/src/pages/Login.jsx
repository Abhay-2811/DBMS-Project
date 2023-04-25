const Login = ()=>{
    return(
        <div>
            <form action="">
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="pass" id="pass" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;