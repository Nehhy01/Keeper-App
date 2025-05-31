import Input from "./Input";

const LoginForm = (props) => {
var isRegistered = props.isRegistered
    return (
        <div className="container">
            <form action="">
                <Input
                type="text"
                placeholder="Username"/>

                <Input
                type="password"
                placeholder="Password"/>

            {!isRegistered && <Input type="password" placeholder="Confirm Password"/>}
              {isRegistered ? <button>Login</button> :   <button>Register</button>}
            </form>
        </div>
      );
}
 
export default LoginForm;