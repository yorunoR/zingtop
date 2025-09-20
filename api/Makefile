fmt:
	uv run ruff format

lint:
	uv run ruff check .

lint-fix:
	uv run ruff check . --fix

run:
	uv run python manage.py runserver

test:
	uv run python manage.py test

shell:
	uv run python manage.py shell_plus --ipython

show:
	uv run python manage.py showmigrations

migrations:
	uv run python manage.py makemigrations

migrate:
	uv run python manage.py migrate

rollback:
	uv run python manage.py migrate lib ${to}

adminuser:
	uv run python manage.py createsuperuser
