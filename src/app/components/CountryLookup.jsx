"use client";
import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("Addis Ababa");
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => {
        response.json().then((jsonData) => {
          setCountry(jsonData.city);
        });
      })
      .catch((error) => {
        console.log(error);
      }, []);
  });
  return <div>{country}</div>;
};

export default CountryLookup;
