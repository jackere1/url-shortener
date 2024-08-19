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

### Project page url:
https://roadmap.sh/projects/url-shortening-service
