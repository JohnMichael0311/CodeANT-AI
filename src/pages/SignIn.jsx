import About from "../components/SignInComponents/About";
import SignInAction from "../components/SignInComponents/SignInAction";

const SignIn = () => {
  return (
    <div className="h-screen flex flex-row">
      <About />
      <SignInAction />
    </div>
  );
};
export default SignIn;
