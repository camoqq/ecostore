import React from "react";
import Button from "../../components/ui/Button";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="border p-5 w-full max-w-96 shadow-md">
        <h1 className="font-bold text-center text-2xl mb-3">Register </h1>
        <label className="mb-4 block">
          Full Name <span className="text-red-600">*</span>
          <input
            required
            type="text"
            className="w-full border p-2 rounded outline-none focus:border-green-500
            invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </label>
        <label className="block mb-4">
          Choose profile photo
          <input
            type="file"
            className="mt-2 block cursor-pointer w-full text-sm text-slate-400
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-[var(--primary-color)] file:text-white
      hover:file:cursor-pointer
    "
          />
        </label>
        <label className="mb-4 block">
          Email <span className="text-red-600">*</span>
          <input
            required
            type="email"
            className="w-full border p-2 rounded outline-none focus:border-green-500
            invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label className="mb-4 block">
          Phone Number <span className="text-red-600">*</span>
          <input
            required
            type="number"
            className="w-full border p-2 rounded outline-none focus:border-green-500
            invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </label>
        <label className="mb-4 block">
          Password <span className="text-red-600">*</span>
          <input
            required
            type="password"
            className="w-full border p-2 rounded outline-none focus:border-green-500
            invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </label>
        <label className="mb-4 block">
          Confirm Password <span className="text-red-600">*</span>
          <input
            required
            type="password"
            className="w-full border p-2 rounded outline-none focus:border-green-500
            invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
        </label>
        <Button> Register </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
