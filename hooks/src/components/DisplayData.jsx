import React from "react";
import { useFetch } from "../customHooks/useFetch";

const DisplayData = () => {
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/photos`
  );

  if (loading) return <p>Loding....</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {data.slice(0, 10).map((item) => (
                <div
                  key={item.id}
                  style={{
                    width: "200px",
                    backgroundColor: "grey",
                    margin: "5px",
                    padding: "10px",
                  }}
                >
                  <img src={item.url} alt="someImg" width={"200px"} />
                  <p>{item.title.slice(0, 20)}</p>
                  <p>{item.id}</p>
                  <button> Add to Cart</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DisplayData;
