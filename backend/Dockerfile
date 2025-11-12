FROM node:24-alpine
WORKDIR /backend 
EXPOSE 3000
COPY ./src /backend/src
COPY package.json package-lock.json* ./
COPY ./tsconfig.json /backend/tsconfig.json
COPY .env /backend/.env
COPY ./node_modules /backend/node_modules
RUN npm run build
CMD ["npm", "start"]
