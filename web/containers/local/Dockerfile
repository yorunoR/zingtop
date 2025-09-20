FROM node:22.19.0-bookworm-slim

WORKDIR /web

COPY package.json /web/package.json

RUN apt-get update -qq \
    && apt-get install -y --no-install-recommends \
    build-essential \
    && npm install -g pnpm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
