# 
FROM node:20.10

#
WORKDIR /social-network-ts-main

#
COPY . /social-network-ts-main

#
EXPOSE 3000

RUN npm i

#
CMD ["npm", "start"]