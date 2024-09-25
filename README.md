# Tech stack:
- ExpressJS (Typescript)
- MongoDB

### Approach:
Used incremental hash on short url generation. (1-9|a-z) (36^6 =~ 2 billion available)

### Run the project
Using docker:
`docker pull jackere1/url-shortener`
`docker run -p $PORT:$INTERNAL_PORT jackere1/url-shortener`

With nodejs:
`npm install`
`npm start`

### Usage

##### Shorten a URL `GET: /shorten?originalURL=https://facebook.com` => responds with `{ "shortURL": "123abc" }`

##### Use shortURL `GET: /:shortURL`

##### Get visited counts of short url `GET: /metrics/:shortURL`

### Project page url:
https://roadmap.sh/projects/url-shortening-service

### Follow up:
When handling request, the request count in a short range of time can be very big. Implement a locking mechanism for the short URL index, otherwise the short URL collision will happen a lot during a spike. 

##### Tips: 
Use Database locking mechanisms for each request to achieve transactional operation. You can also use 3rd party software tools(Redis, MQ, Pub/sub etc) and services to make the request handling sequential.
