// src/MyApp.jsx
import React from "react";
import Nav from "./Nav"

function MyApp() {
  return (
    <div className="container">
      <Nav />
    </div>
  );
}

//TE4
//section copied then editted for TE4
useEffect(() => {
  fetchUsers()
    .then((res) =>
      res.status === 200 ? res.json() : undefined
    )
    .then((json) => {
      if (json) {
        setCharacters(json["users_list"]);
      } else {
        setCharacters(null);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}, [])

//

export default MyApp;
