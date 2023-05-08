import React, { useState, useEffect } from "react";
import Spinner from "../../components/spinner/spinner";

const ApiRender = () => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getDog = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!getDog.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await getDog.json();
        setResponse(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>API</h2>
      {loading && <Spinner />}
      {response?.status && (
        <img
          style={{
            width: "30%",
            height: "30%",
          }}
          src={response?.message}
          alt='dog'
        />
      )}
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default ApiRender;
