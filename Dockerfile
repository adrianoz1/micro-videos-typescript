FROM node:14.17.0-slim

RUN apt update && apt install -y --no-install-recommends \
  git \
  ssh-client \
  ca-certificates

USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]
