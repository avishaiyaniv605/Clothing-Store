import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../firebase/Firebase";
import "./SignIn.scss";

class SignIn extends React.Component {
  state = { email: "", password: "" };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Already have an account ?</h1>
        <span className="sub-title">Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleButton onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
