import { useRouter } from "next/router";
import { useEffect } from "react";
import { checkAuth, signIn } from "../utils/auth";

export default function login({ username, password }) {
  const router = useRouter();

  const login = (e) => {
    e.preventDefault();
    let isOk = signIn(
      document.getElementById("user").value,
      document.getElementById("pass").value
    );
    if (isOk) router.replace("/");
    else alert("Error: Wrong username or password !!!");
  };
  useEffect(() => {
    let isAuth = checkAuth();
    if (isAuth) router.replace("/");
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="space-y-4 bg-gray-100 p-8">
        <div className="flex items-center space-x-2">
          <p className="font-bold w-1/3">Username: </p>
          <input id="user" className="border-2 py-2 px-4 block w-2/3"></input>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-bold w-1/3">Password: </p>
          <input
            id="pass"
            type={"password"}
            className="border-2 py-2 px-4 w-2/3"
          ></input>
        </div>

        <button
          onClick={login}
          className="bg-blue-600 rounded-md px-8 py-2 text-white font-bold block w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}
