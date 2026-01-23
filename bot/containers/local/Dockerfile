FROM node:22.19.0-bookworm-slim

WORKDIR /bot

COPY package.json /bot/package.json

RUN apt-get update -qq \
    && apt-get install -y --no-install-recommends \
    build-essential \
    && npm install -g pnpm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
