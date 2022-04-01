# Google adwords mockup module project
Comprised of docker, react, node js, mysql

### SETUP
- `cp .env.sample .env`. Edit `.env`, remove all comments
- `make up` to spin up the server, and instantiate all docker services
- `make down` to remove container without removing mysql volumes
- `make clear` remove container + remove volumes

### Project Structure

#### Node
- contain integration to server with dockerised mysqldb using sequelize
- db schema are in node models (for this project it just takes meta key and a stringtified json as a meta value)
- routes folder contain api routes relating to DB action
- reports folder contains report generated from export report button on react in JSON format
  - containing list of sites
  - user settings on the search

### React
- all components are located inside the components folder with App being the parent component
  - keywords folder contain keywords search list component
  - search folder contain keywords search list component
  - both keyword and search depend on the same component from global
  - global contain search components + customized button and checkboxes

- function.js contains app states throughout the whole components, as well as functions to update state data
- uploads folder contain default json that gets loaded if there's no setting data in db


### Button on app

#### Start Button
- save sites, keywords, settings to db

#### Stop Button
- show alert that analysis have been stopped

#### export button
-  export json format containing list of sites, keywords, and settings user inputted for the search