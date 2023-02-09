## GovDeals: Semantic Search for Defense Contracts

### Problem

The process of finding Gov. Contracts is difficult for smaller contractors because of:

1. Limited resources: Some contractors dont have the resources or personnel to effectively search for and bid on defense contracts. This makes it difficult for them to compete with larger companies.

2. Lack of capabilities or certifications: Many defense contracts require specific capabilities or certifications, such as security clearance or experience with certain technologies. Contractors without these qualifications have a harder time finding relevant opportunities.

### Solution

I use the OpenGSA Goverment Opportunities API to fetch all contracts daily, then I built a semantic search engine to find all relevant opporutnities for a given query. For example, say I'm a small contractor working on technolog for submarines, I could query:

`I am a small contractor working on submarine technology for unmanned submarines and I am looking for contracts from the Navy, Office of Naval Research and DARPA`

GovDeals will find the most relevant contracts related to the query:

`1. contract 1`

`2. contract 2`

`3. contract 3`

### Stack

- NoSQL database: MongoDB object data modeling using Mongoose
- Authentication and authorization: using passport
- Validation: request data validation using Joi
- Logging: using winston and morgan
- Testing: unit and integration tests using Jest
- Error handling: centralized error handling mechanism
- API documentation: with swagger-jsdoc and swagger-ui-express
- Process management: advanced production process management using PM2
- Dependency management: with Yarn
- Environment variables: using dotenv and cross-env
- Security: set security HTTP headers using helmet
- Santizing: sanitize request data against xss and query injection
- CORS: Cross-Origin Resource-Sharing enabled using cors
- Compression: gzip compression with compression
- CI: continuous integration with Travis CI
- Docker support
- Code coverage: using coveralls
- Code quality: with Codacy
- Git hooks: with husky and lint-staged
- Linting: with ESLint and Prettier
- Editor config: consistent editor configuration using EditorConfig
