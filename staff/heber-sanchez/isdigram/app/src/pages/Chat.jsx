import { logger, showFeedback } from "../utils";

import logic from "../logic.js";

import { useEffect, useState } from "react";

function Chat(props) {
  logger.debug("Chat");

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    try {
      const fetchedUserList = logic.retrieveUsersWithStatus();
      setUserList(fetchedUserList);
    } catch (error) {
      showFeedback(error);
    }
    showFeedback(error);
  }, []);

  const handleOnHomeButtonClick = () => props.onHomeClick();

  logger.debug("Chat -> render");
  return (
    <main>
      <nav>
        <h1>Chat</h1>
        <button onClick={handleOnHomeButtonClick}>🏠</button>
      </nav>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </main>
  );
}

export default Chat;
