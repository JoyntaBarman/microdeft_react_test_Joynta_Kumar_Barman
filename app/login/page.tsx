import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microdeft | Login",
  description: "My Portfolio",
};

const Login = () => {
  return (
    <LoginForm/>
  );
};

export default Login;
