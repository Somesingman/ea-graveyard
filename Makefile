
build:
	docker compose build

shell:
	docker exec -it ea-graveyard-website-1 /bin/bash

e2e-shell:
	docker exec -it ea-graveyard-playwright-1 /bin/bash

start:
	docker compose up --remove-orphans --detach 

stop:
	docker compose --profile "*" down --remove-orphans

e2e-start:
	docker compose --profile e2e up --detach