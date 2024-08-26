# docker_app/front_end_app/Dockerfile

FROM node:20.11.1

WORKDIR /frontend

COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json

RUN npm install
COPY . /frontend

EXPOSE 3000

CMD ["npm", "start"]
