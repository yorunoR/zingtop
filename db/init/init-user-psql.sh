#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER dbuser WITH PASSWORD 'password' LOGIN;
    ALTER USER dbuser CREATEDB CREATEROLE;
EOSQL

psql -v ON_ERROR_STOP=1 --username "dbuser" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE api_dev;
    CREATE DATABASE api_test;
EOSQL
