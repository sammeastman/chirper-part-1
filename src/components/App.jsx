import React, { useState } from "react";

const App = () => {
  const [chirps, setChirps] = useState([
    {
      username: "Sam",
      message: "How Can Mirrors Be Real If Our Eyes Aren't Real",
    },
    {
      username: "Sam",
      message: "How Can Mirrors Be Real If Our Eyes Aren't Real",
    },
    {
      username: "Sam",
      message: "How Can Mirrors Be Real If Our Eyes Aren't Real",
    },
  ]);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);
  const handleClick = () => {
    const newChirp = {
        username: username,
        message: message
    };
    setChirps([...chirps, newChirp]) 
  }

  return (
    <>
      <h1>Chirper</h1>

      <label htmlFor="username-input">Who are you?</label>
      <input type="text" name="username-input" id=" " />
      <label htmlFor="message-input">Say it!</label>
      <textArea name="message-input" cols="40" rows="10" value={message} onChange></textArea>

      {chirps.map((chirp) => (
        <>
          <div>{chirp.username}</div>
          <p>{chirp.message}</p>
        </>
      ))}
    </>
  );
};

export default App;
