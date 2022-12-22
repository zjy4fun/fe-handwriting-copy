#!/usr/bin/env bash
LOCAL_PORT=8888
cd "$(dirname "$0")" || exit
WWW_DIR=$(pwd)
docker run --rm -p $LOCAL_PORT:80 -v "$WWW_DIR":/usr/share/nginx/html nginx:latest