import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Searcher from "./components/Searcher";
import UserCard from "./containers/userCard";
import { getGithubUser } from "./services/users";

function App() {
  const [inputUser, setInputUser] = useState("octocat"); //captura del input
  const [userState, setUserState] = useState("inputuser");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    gettingUser(inputUser);
  }, [inputUser]);

  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);
    console.log(userResponse);
    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse);
    }
    if (userResponse.message === "Not Found") {
      // const [octocat] = localStorage;
      // setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
      setNotFound(false);
    }
  };
  // console.log(userState)

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      {notFound === false ? (
        <UserCard userState={userState} />
        ) : (
        <h1>Usuario no válido</h1>
      )}
    </Container>
  );
}

export default App;
