import React, { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import getCountries from "../../apis/CountriesApi";
// import { AiFillCaretUp } from "react-icons/ai";
import getAllCountries from "../../apis/allCountries";

const AbGrid = () => {
  const [getLang, setgetLang] = useState("");
  const [selectedCountries, setselectedCountries] = useState("");
  const [saveCon, setsaveCon] = useState([]);
  const [getAll, setgetAll] = useState([]);

  const onChangeLang = (e) => {
    setgetLang(e.target.value);
    console.log(getLang);
  };
  const onChangeCountries = (e) => {
    setselectedCountries(e.target.value);
  };

 


  useEffect(() => {
    const fetchAllCountries = async() => {
      const response = await getAllCountries()
      const getLanguage = response.flatMap((res, index) =>
        Object.entries(res.languages || {}).map(([code, name]) => ({
          code: `${code}-${index}`,
          name,
        }))
      );
      setgetAll(getLanguage)
      console.log(getLanguage, "from langs")
    }
    fetchAllCountries()
  }, [])
  useEffect(() => {
    const getFetchCountry = async () => {
      const response = await getCountries();
      const countries = response.map((country) => ({
        name: country.name.common,
        // flag: country.flags.png,
        code: country.cca2,
      }));
      setsaveCon(countries);
      console.log(countries, "from countries");
    };

    getFetchCountry();
  }, []);

  return (
    <div className="sm:px-28 px-8">
      <h1 className="sm:text-[55px] text-[30px]  pt-1 font-semibold text-left ">Ableton</h1>
      <div className="lg:grid text-xs sm:text-base block lg:grid-cols-3 sm:py-8 py-4 text-left gap-8">
      <ul className="sm:hidden block">
          <li>
            <strong>
              <a  className="py-2" href="#">Sign up to our newsletter</a>
            </strong>
          </li>
          <p>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <form action="" className="py-4 flex">
            <input
              className="bg-zinc-200 py-1"
              placeholder=" Email Address"
              type="email"
              name=""
              id=""
            />
            <span className="">
              <button
                className="bg-[#0000FF] text-xs py-1 px-1 text-white"
                type="submit"
              >
                Sign Up
              </button>
            </span>
          </form>
        </ul>
        <ul>
          <li>
            <a href="#">Register Live, Push or Move</a>
          </li>
          <li>
            <a href="#">About Ableton</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <div className="flex gap-4 py-4">
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <TiSocialYoutube />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTiktok />
            </span>
          </div>
        </ul>
        <ul>
          <li className="py-2">
            <strong>
              <a href="#">Education</a>
            </strong>
          </li>
          <li className="py-2">
            <a href="#">Offers for students and teachers</a>
          </li>
          <li className="py-2">
            <a href="#">Ableton for the Classroom</a>
          </li>
          <li className="py-2">
            <a href="#">Ableton for Colleges and Universities</a>
          </li>
        </ul>
        <ul className="sm:block hidden">
          <li>
            <strong>
              <a href="#">Sign up to our newsletter</a>
            </strong>
          </li>
          <p>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <form action="" className="py-4">
            <input
              className="bg-zinc-200 py-1 px-4"
              placeholder="  Email Address   "
              type="email"
              name=""
              id=""
            />
            <span>
              <button
                className="bg-[#0000FF] py-1 px-6 text-white"
                type="submit"
              >
                Sign Up
              </button>
            </span>
          </form>
        </ul>
        <ul className="sm:pt-4">
          <li className="py-2">
            <strong>
              <a href="#">Community</a>
            </strong>
          </li>
          <li>
            <a href="#">Find Ableton User Groups</a>
          </li>
          <li>
            <a href="#">Find Certified Training</a>
          </li>
          <li>
            <a href="#">Become a Certified Trainer</a>
          </li>
        </ul>
        <ul className="sm:pt-4">
          <li className="py-2">
            <strong>
              <a href="#">Language and Location</a>
            </strong>
          </li>
          <ul className="flex gap-[3px]">
            <li className="relative flex gap-4 items-center w-44">
              <select
                onChange={onChangeLang}
                name="lang"
                id="lang"
                value={getLang}
                className="bg-zinc-200 px-1 appearance-none w-full py-1 border-gray-300 text-gray-700"
              >
                <option value="en"> Select language</option>
                {
                    getAll.map((lang, index) =>(
                      <option key={`${lang.code}-${index}`}>
                        {lang.name}
                      </option>))
                }
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center justify-between">
                <AiFillCaretDown />
              </div>
            </li>
            <div className="relative w-44 py-2">
              <select
                name="country"
                id="country"
                value={selectedCountries}
                onChange={onChangeCountries}
                className="bg-zinc-200 block px-1 border-gray-300 text-gray-700  appearance-none py-1 w-full"
              >
                <option value="ni">Select country</option>
                {saveCon.map((con, index) => (
                  <option key={`${con.code}-${index}`} value={con.code} >
                    {/* key={con.codes} value={con.code} */}
                    
                    {con.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 justify-between flex items-center pr-3">
                <AiFillCaretDown />
              </div>
            </div>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default AbGrid;
