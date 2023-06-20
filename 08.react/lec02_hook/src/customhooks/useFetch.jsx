import React, { useEffect, useState } from "react";

const useFetch = (baseUrl, initialType) => {
  const [data, setData] = useState("");

  const fetchUrl = (type) => {
    fetch(baseUrl + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return { data, fetchUrl };
};

export default useFetch;
