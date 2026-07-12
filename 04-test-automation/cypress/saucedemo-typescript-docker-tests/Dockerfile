FROM cypress/included:15.18.1

WORKDIR /e2e

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm", "test"]