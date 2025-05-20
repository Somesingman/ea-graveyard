.PHONY: restart

build:
	docker compose build

shell:
	docker exec -it ea-graveyard-website-1 /bin/bash

e2e-shell:
	docker exec -it ea-graveyard-playwright-1 /bin/bash

start:
	docker compose up --remove-orphans --detach 

stop:
	docker compose --profile "*" down -v --remove-orphans

restart: stop start

e2e-start:
	docker compose --profile e2e up --detach