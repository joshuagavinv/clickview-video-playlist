# clickview video playlist project
Comprised of docker, react, node js

### SETUP
- need docker desktop installed https://www.docker.com/products/docker-desktop/
- `cp .env.sample .env`. Edit `.env`, remove all comments
- `make up` to spin up the server, and instantiate all docker services
- `make down` to remove container without removing mysql volumes
- `make clear` remove container + remove volumes

### Project Structure

#### Node
- routes folder contain api routes
- TODO is part 3 of the data

### React
- todo making the singular front end page, ran out of time


### TO test
- just run make up and it will run the node and react js