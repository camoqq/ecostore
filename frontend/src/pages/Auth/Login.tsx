import React from "react";
import Button from "../../components/ui/Button";

const LoginPage: React.FC = () => {
    
    const handleLogin = () => { 
        // console.log("Login");
        
    }
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="border p-5 w-full max-w-96 shadow-md">
        <h1 className="font-bold text-center text-2xl mb-3">Log in with</h1>
        <label className="mb-4 block">
          Email
          <input
            type="email"
            className="w-full border p-2 rounded outline-none focus:border-green-500"
          />
        </label>
        <p className="font-semibold mb-3 text-center">OR</p>
        <label className="mb-4 block">
          Phone Number
          <input
            type="number"
            className="w-full border p-2 rounded outline-none focus:border-green-500"
          />
        </label>
        <label className="mb-4 block">
          Password
          <input
            type="password"
            className="w-full border p-2 rounded outline-none focus:border-green-500"
          />
        </label>
        <Button onClick={handleLogin}> Login </Button>
      </div>
    </div>
  );
};

export default LoginPage;
