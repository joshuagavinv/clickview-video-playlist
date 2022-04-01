up:
	cp .env ./services/node/.env
	cp .env ./services/app/.env
	docker-compose up  --build --remove-orphans
down:
	docker-compose down
clear:
	docker-compose down -v
test:
	docker exec clickview_backend npm run test

install-backend:
	docker exec clickview_backend npm install ${PACKAGE}

install-frontend:
	docker exec clickview_frontend npm install ${PACKAGE}