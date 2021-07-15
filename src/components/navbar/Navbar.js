import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import PropTypes from "prop-types";

export const Navbar = ({ setCategories }) => {
  const [searchValue, setSearchValue] = useState((cats) => [cats]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.length > 2) {
      setCategories((cats) => [searchValue, ...cats]);
      console.log("object");
      setSearchValue("");
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="fixed z-50 top-0 left-0 bg-gray-900">
        <div className="w-screen flex flex-row items-center p-1 justify-between shadow-xl">
          <button
            type="button"
            className="ml-8 text-lg text-primary hidden md:flex duration-150 hover:opacity-80"
          >
            Gifity
          </button>
          <div className="flex w-screen md:w-1/3 h-10">
            <CgMenuGridO className="text-primary mr-0 sm:mr-2 w-10 h-10 flex-shrink-0 cursor-pointer duration-150 hover:opacity-80" />
            <form
              onSubmit={handleSubmit}
              className="w-full bg-gray-200 border border-gray-300 text-sm rounded-full flex"
            >
              <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Buscar coencidencia"
                className="flex-grow pl-2 sm:px-4 rounded-l-full rounded-r-full text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <BsSearch
                className="m-3 mr-4 text-lg text-gray-700 w-4 h-4 cursor-pointer duration-150 hover:text-black"
                onClick={handleSubmit}
              />
            </form>
          </div>
          <div className="flex-row-reverse md:mr-8 flex">
            <button className="text-gray-700 text-center bg-primary px-4 py-2 m-2 duration-150 hover:opacity-80">
              Favoritos
            </button>
            <button className="text-primary hidden md:block text-center bg-gray-700 px-4 py-2 m-2 duration-150 hover:opacity-80">
              Registro
            </button>
            {/* in login */}
            {/* <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                className="rounded-full w-10 h-10 object-cover cursor-pointer"
                alt=""
              />
              <div className="absolute bg-gray-900 top-10 -right-2 w-60 pt-8 pb-2">
                <a
                  href="/"
                  className="flex items-center mx-3 duration-150 hover:opacity-70"
                >
                  <img
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    className="rounded-full w-8 h-8 object-cover"
                    alt=""
                  />
                  <p className="flex flex-col ml-2">
                    <strong className="w-44 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      Carlos Fernandez
                    </strong>
                    <span className="text-xs w-44 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      alfredofernandezcarlos@gmail.com
                    </span>
                  </p>
                </a>
                <hr className="my-3 border-gray-800" />
                <div className="mx-3">
                  <a href="/" className="duration-150 hover:opacity-70">
                    Favoritos
                  </a>
                </div>
                <hr className="my-3 border-gray-800" />
                <a className="mx-3 duration-150 hover:opacity-70" href="/">
                  Salir
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
