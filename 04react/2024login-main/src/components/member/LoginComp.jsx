import React, { useState } from "react";
import { loginPostAsync } from "../../slices/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import KakaoLoginComp from "./KakaoLoginComp";

const initState = {
  email: "",
  pw: "",
};

function LoginComp() {
  const [loginParams, setLoginParams] = useState({ ...initState });
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { doLogin, moveToPath } = useCustomLogin();

  const handleChange = (e) => {
    loginParams[e.target.name] = e.target.value;
    setLoginParams({ ...loginParams });
  };

  const handleClickLogin = () => {
    // dispatch(loginPostAsync(loginParams))
    //   .unwrap()
    //   .then((data) => {
    //     if (data.error) {
    //       alert("이메일과 패스워드를 확인하세요.");
    //     } else {
    //       navigate("/");
    //     }
    //   });
    doLogin(loginParams).then((data) => {
      if (data.error) {
        alert("이메일과 패스워드를 확인하세요.");
      } else {
        moveToPath("/");
      }
    });
  };

  return (
    <div>
      <div>
        <div className="h-screen  flex items-center">
          <div className="container mx-auto ">
            <div className="bg-gray-100 max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
              <div>
                <h3 className="font-bold text-2xl">환영합니다.</h3>
                <p className="text-gray-600 pt-2">로그인하세요.</p>
              </div>
              <div className="flex flex-col">
                <div className="bg-gray-200 mt-10 rounded pt-3 mb-5">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  />
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="pw"
                    type="password"
                    onChange={handleChange}
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  />
                </div>
                <div className="flex justify-end"></div>
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                  onClick={handleClickLogin}
                >
                  Sign In
                </button>
                <KakaoLoginComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
