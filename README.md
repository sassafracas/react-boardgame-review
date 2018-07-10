README
======

## Deliverables

- [ ] Retrieve list of genres and populate the dropdowns (there are two).
- [ ] Retrieve list of games and populate the table.
- [ ] Your dropdown for `GameFilters` is already complete. Use `currentGenre` to filter the games by genre.
- [ ] Make `NameFilter` in `GameFilters` a controlled form.
- [ ] Have `NameFilter` filter boardgames by name when the form is submitted.
- [ ] Make `GameForm` a controlled form.
- [ ] On submit, have `GameForm` make a `POST` request to the API to add a new game.
- [ ] After a new game is added, make sure to update the list of games.

## Backend Instructions

```sh
cd backend
# Install dependencies:
npm install
# Run server:
npm run start
```

## Frontend Instructions

```sh
cd frontend
# Install dependencies:
npm install
# Since the backend runs on port 3000,
# we need to run React on a different port.
PORT=4000 npm start
```

### API

```markdown
Server runs on: http://localhost:3000

- /boardgames
  - GET
    - response: [
                  {
                    "id": 1,
                    "name": "The Settlers of Catan",
                    "genre": {
                      "id": 1,
                      "name": "strategy"
                    }
                  },
                  ...
                ]
  - POST
    - body: {
              name,
              genre: { id, name }
            }
- /genres
  - GET
    - response: [
                  {
                    "id": 1,
                    "name": "strategy"
                  },
                  ...
                ]
```
