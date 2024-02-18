"use client";

import { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("Ethiopia");
//   useEffect(() => {
//     const getCountry = async () => {
//       const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
//         .then((res) => res.json())
//         .then((data) => data.country);
//       if (!res) return;
//       setCountry(res);
//     };
//     getCountry();
//   }, []);
  return <div>{country}</div>;
};

export default CountryLookup;
