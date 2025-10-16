#set a base image
FROM node:20-alpine as base

#set work directory
WORKDIR /app

#copy and install dependencies
COPY ./package*.json .
RUN npm ci --omit=dev

#copy app source
COPY . .

#run as non-root user (alpine already has user 'node')
USER node
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "npm","start" ]
