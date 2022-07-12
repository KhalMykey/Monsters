import { React, useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import Cardlist from "./components/card-list/card-list.component";

//TODO: 

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const onSearchChange = (event) => {
    const userInput = event.target.value.toLocaleLowerCase();
    setSearchField(userInput);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((json_response) => {
        setUsers(json_response);
      });
    });
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((people) => {
      return people.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  return (
    <div>
      <SearchBox
        placehoder="Enter A Name"
        className="search-box"
        onChangeHandler={onSearchChange}
      />

      <Cardlist monsters={filteredUsers} />
    </div>
  );
};

export default App;
