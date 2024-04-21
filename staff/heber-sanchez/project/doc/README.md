# FutNow App

## Intro

"FutNow simplifies the search and booking of football matches near to your location, connecting users who want to play but don't have teams, friends, or available fields. Easily find or create matches and join other football enthusiasts in a hassle-free experience."

![](https://media.giphy.com/media/usjtDKDAmOuPu/giphy.gif?cid=ecf05e47wwc0o5yu6k46s73lf3azc4qitkcg5zfzu0d3dv6e&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description

### Use Cases

- Create events (field reservation): Users will be able to create events to reserve a football field at a specific location and time. They can set details such as the duration of the match and the number of allowed players.
- Join events (reservation): Users can search for and join events created by other users. This will allow them to participate in football matches even if they don't have an established team or group of friends.
- Search for football fields: Users can view a list of football fields near their current location. This feature will enable them to easily find available fields to reserve or join nearby events.
- Filter by proximity: Users can filter available football fields based on their proximity to their current location. This will help them find convenient options to play near where they are located.

v.0.1

- Create tournaments: Users will be able to create tournaments, allowing them to organize and manage competitive events.
- Chat: Users can communicate with each other through a built-in chat feature, facilitating coordination and discussion among participants.

### UI Design

[Figma](https://www.figma.com/file/cw8K38zpv36iQkjQA5fVXC/App?type=design&node-id=0-1&mode=design&t=RHFOp1rBhBeRDwEs-0).

## Technical Description

### Modules

- api (server logic)
- app (client interface)
- com (common utils, tools, ...)

### Technologies

- TypeScript
- React
- Express
- Node
- Tailwind
- Mongo
- ...

### Data Model

User

- id (required)
- name (string, required)
- birthdate (date, required)
- email (string, required)
- username (string, required)
- password (string, required)
- avatar (string, optional)

Place

- id (required)
- title (string, required)
- address (string, required)
- coords ([number, number])

Match
-tittle
-Id (required)
-Id (creator)
-Id (user)

- place
-
