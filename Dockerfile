FROM node:16
WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild
ENV PORT=5000
EXPOSE 5000
CMD [ "npm", "start" ]