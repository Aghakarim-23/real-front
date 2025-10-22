import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UserList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        // const response = await axios.get("http://localhost:5001/users");
        const response = await axios.get("https://real-back-jkxe.onrender.com/users",  )
        setList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getList()
  }, []);
  return (
    <div className="flex justify-center ">
      <div>
        <h1 className="text-3xl text-center font-bold my-6">User list</h1>
          <table className="border">
            <thead>
              <tr>
                <th className="border px-4 py-2">No</th>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {list.map((list, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "" : "bg-gray-300"}`}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{list.userName}</td>
                  <td className="border px-4 py-2">{list.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default UserList;
