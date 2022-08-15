FROM node:16
RUN mkdir -p /app
WORKDIR /app
ENV PORT=5000
EXPOSE 5000
COPY . /app
RUN npm install
RUN ls
ENTRYPOINT [ "npm start" ]