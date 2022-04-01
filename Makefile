up:
	cp .env ./services/node/.env
	cp .env ./services/app/.env
	docker-compose up  --build --remove-orphans
down:
	docker-compose down
clear:
	docker-compose down -v