# -------------- STAGE 1: Build --------------

FROM node:18.12.0-alpine3.16
LABEL maintainer="HY-469 TAs"

# set working directory
WORKDIR /frontend
# add `/frontend/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install -g @angular/cli@16.0.3 @angular/core@16.0.3
COPY package.json /frontend/package.json

RUN npm install --legacy-peer-deps


# add app
COPY . /frontend

# -------------- STAGE 2: Run --------------

CMD ng serve --host 0.0.0.0
