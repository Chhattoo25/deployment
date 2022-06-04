import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Users() {
  // effects
  // lifecycle ->
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    setSearchParams({
      page
    });
    axios({
      url: "https://reqres.in/api/users",
      method: "GET",
      params: {
        page
      }
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {});
  }, [page]);
  // empty dependency
  // it means it depends on nothing
  // it will only get called, after the component
  // mounts

  return (
    <div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </button>
        <button disabled={page === 2} onClick={() => setPage(2)}>
          2
        </button>
      </div >
      {data.map((item) => (
        <div key={item.id} style={{display:"flex"}}>
          <img src={item.avatar} width="100px" alt={item.email} />
          <div>Name: {item.first_name}</div>
          <Link to={`/users/${item.id}`}>See More</Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
