import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function UsersPage() {
  const [data, setData] = useState([]);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    axios({
      url: `https://reqres.in/api/users/${params.id}`,
      method: "GET"
    })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {});
  }, [params.id]);

  console.log(data);
  return (
    <div>
      <div key={data.id}>
        <img src={data.avatar} width="100px" alt={data.email} />
        <div>ID: {data.id}</div>
        <div>Name: {data.first_name}</div>
        <div>Last Name: {data.last_name}</div>
        <div>Email: {data.email}</div>
      </div>
    </div>
  );
}

export default UsersPage;
