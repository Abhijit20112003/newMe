import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { NextPage } from "next";

const Home:NextPage= () => {
  const router = useRouter();
  return (
    <>
      <div className={darkMode ? 'dark-mode' :
  'light-mode'}>
   <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </div>
      <div>
        <div className=" text-6xl mx-20 font-thin  mt-60">
          Transform your resolutions into reality with <br /> our easy-to-use platform
          .
        </div>
      </div>
    </>
  );
}

export default Home;
