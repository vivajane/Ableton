import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import getAllCountries from "../apis/allCountries";
import { useState, useEffect } from "react";
import { SignUp } from "../apis/Login";
import Button from "../components/Button";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await SignUp(formData);
      return res;

      // console.log(res, "from formsubmit")
    } catch (error) {
      console.log(error, "the error");
    }
  };

  const signUpHandler = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
    console.log(value, " from onchange");
  };
  const [getCountries, setgetCountries] = useState([]);
  const [saveCon, setSaveCon] = useState("");

  const onChangeHandler = (e) => {
    setSaveCon(e.target.value);
  };

  useEffect(() => {
    const fetchCon = async () => {
      const response = await getAllCountries();
      const getCont = response.map((res) => ({
        name: res.name.common,
        // flag: country.flags.png,
        code: res.cca2,
      }));
      setgetCountries(getCont);
      console.log(getCont, "from get it");
    };
    fetchCon();
  }, []);
  return (
    <div className="md:px-28 px-8 ">
      <div className="md:flex  gap-20 md:pb-48 pb-24">
        <div className="md:w-1/2 text-left">
          <hr />
          <LoginProp
            title="Log in"
            semititle="Why do I need to Login"
            para="To use any version of Live (including Live Lite or our free trial) you need an Ableton account. It takes less than a minute to create one, and even less to log in if you already have one."
          />
          <form className="max-w-xs w-full text-xs">
            <div className="py-6">
              <div className="py-2 font-semibold">
                <label htmlFor="email">Email or Username</label>
              </div>
              <input
                className="bg-[#EEEEEE] w-full py-3"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label className="font-semibold" htmlFor="password">
                  Password
                </label>

                <a className="text-[#0000FF] py-2" href="#">
                  Forgot Password?
                </a>
              </div>
              <input
                className="bg-[#EEEEEE] w-full py-3"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="text-left">
          <Button>Log in</Button>
        </div>
          </form>
        </div>
        

        <div className="md:w-1/2 text-left">
          <LoginProp
            title="Register"
            semititle="New Customer? Please create an account."
            para="Your account lets you authorize and download Live plus your included library content."
          />
          <form onSubmit={formSubmit} className="max-w-xs w-full text-xs">
            <div className="py-4">
              <div className="py-2 font-semibold">
                <label htmlFor="email">Email</label>
              </div>
              <input
                onChange={signUpHandler}
                className="bg-[#EEEEEE] w-full py-3"
                type="email"
                name="email"
                id="email"
                value={formData.email}
              />
            </div>
            <div className="pb-4">
              <div className="py-2 font-semibold">
                <label htmlFor="fullname">FullName</label>
              </div>
              <input
                onChange={signUpHandler}
                className="bg-[#EEEEEE] w-full py-3"
                placeholder="optional"
                type="text"
                name="fullname"
                value={formData.fullname}
                id="fullname"
              />
              <p className="text-[#00A2B0] font-semibold">
                So that we know what to call you if we email you.
              </p>
            </div>
            <div className="py-6">
              <label className="font-semibold py-2" htmlFor="password">
                Password
              </label>
              <input
                onChange={signUpHandler}
                className="bg-[#EEEEEE] w-full py-3"
                type="password"
                value={formData.password}
                name="password"
                id="password"
              />
            </div>

            <div className="relative font-semibold py-4">
              <label htmlFor="country">Country or Region</label>
              <select
                onChange={onChangeHandler}
                value={saveCon}
                className="bg-zinc-200 block px-6 border-gray-300 text-gray-700  appearance-none py-3 w-full"
                name="country"
                id="country"
              >
                <option value="">Select country</option>
                {getCountries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-2 right-0 justify-between flex items-center pr-3">
                <AiFillCaretDown />
              </div>
            </div>
          </form>

          <div className="flex gap-2 items-baseline py-8 ">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p className="">
              <span className="font-semibold">
                Sign up to the Ableton newsletter to stay up to date with the
                latest special offers, tutorial videos, downloads, surveys and
                other news.{" "}
              </span>
              <span className="text-sm">
                It’s free and you can unsubscribe at any time. Further
                information is available in our
              </span>{" "}
              <span className="text-[#0000FF]">Privacy Policy.</span>
            </p>
          </div>
          <Button>Create an account </Button>
        </div>
      </div>
      <hr className="py-8" />
    </div>
  );
};

export default Login;

export const LoginProp = ({ title, semititle, para }) => {
  return (
    <div>
      <h1 className="text-6xl font-semibold pt-8 md:pt-24 pb-8">{title}</h1>
      <hr />
      <h1 className="text-xl pb-1 font-semibold pt-8">{semititle}</h1>
      <p>{para}</p>
    </div>
  );
};

// export const FormInput = ({ htmlfor, label, intype }) => {
//   return (
//     <form>
//       <label htmlFor={htmlfor}>{label}</label>
//       <input className=" w-full bg-slate-300 py-3" type={intype} />
//     </form>
//   );
// };
