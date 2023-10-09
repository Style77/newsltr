.PHONY: test migrate runserver generateschema

test:
	@echo Running tests...
	cd newsltr && pipenv run python manage.py test

migrate:
	@echo Running migrations...
	cd newsltr && pipenv run python manage.py migrate

makemigrations:
	@echo Making migrations...
	cd newsltr && pipenv run python manage.py makemigrations

runserver:
	@echo Running server...
	cd newsltr && pipenv run python manage.py runserver

runcelery:
	@echo running celery
	cd newsltr && pipenv run celery -A newsltr worker -l info

generateschema:
	@echo Generating schema...
	cd newsltr && pipenv run python manage.py spectacular --file openapi-schema.yml

up-dev:
	@echo Building dev image...
	docker compose -f docker-compose.dev.yml up --build

freeze:
	@echo Freezing dependencies...
	cd newsltr && pipenv run pip freeze > requirements.txt
