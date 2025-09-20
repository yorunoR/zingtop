FROM python:3.12-bookworm

SHELL ["/bin/bash", "-c"]

ENV LANG=C.UTF-8 TZ=Asia/Tokyo NODE_VERSION=v22.19.0 PYTHONPATH=. PYTHONUNBUFFERED=1

WORKDIR /api

RUN apt-get update -qq \
    && apt-get install -y --no-install-recommends \
    build-essential \
    && pip install --upgrade pip \
    && pip install uv \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash \
    && . ~/.nvm/nvm.sh \
    && nvm install $NODE_VERSION \
    && npm install -g pnpm

ENV PATH=/root/.nvm/versions/node/$NODE_VERSION/bin:$PATH
