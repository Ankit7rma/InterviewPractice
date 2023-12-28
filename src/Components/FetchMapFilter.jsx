/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const FetchMapFilter = () => {
  const [userData, setUserData] = useState(null);
  const [inputFilter, setInputFilter] = useState("");

  let api = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const fetchUserData = async () => {
      const fetchedUserData = await fetch(api);
      const fetchedUserDataJson = await fetchedUserData.json();
      setUserData(fetchedUserDataJson);
    };
    fetchUserData();
  }, []);
  const filterData = userData?.filter((user) =>
    user?.username.toLowerCase().includes(inputFilter.toLowerCase())
  );

  console.log(filterData);
  return (
    <div>
      <div>
        <h2>User Data</h2>
        {userData?.map((user) => (
          <ul key={user.id}>
            <li>
              <div>{user.username}</div>
            </li>
          </ul>
        ))}
      </div>
      <div>
        <h2>Filter</h2>
        <input
          value={inputFilter}
          onChange={(e) => setInputFilter(e.target.value)}
        />
        {filterData.map((user) => (
          <ul key={user.id}>
            <li>
              <div>{user.username}</div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FetchMapFilter;
