# backend-express-frame

## Features

- Typescript
- ExpressJS Basic App
- PostgreSQL database
- Prisma ORM
- Jest Testing
- Auto Lint + Format

## Introduction

This repo is a basic ExpressJS app setup. Feel free to clone it whenever you do a new project.

Besides the basic stuff in this repo, there are many more concerns you need to consider for production:

- Security / Rate Limiting
- Authentication
- Error Tracking
- Data Logging
- Deploy
- Cross Platform Resources (Monorepo)
- ...

But the good thing is no one needs to know everything in order to start. Just jump right into any project that inspires you and have fun!

## Required Tools

- Docker
- VSCode
- VSCode Plugins:
  - Eslint
  - Prettier
  - Prisma
  - Docker (Optional)

## Env File

Normally, you would want to gitignore the `.env` file. But for the sake of testing, I'll leave `.env` file right in the repo.

## Setup

1. To fully run the API `/about`, you need to have Docker installed.

   a. After Docker is installed, run `yarn dock` to initialize database instance in Docker.

   b. Then, run `yarn pdev` to apply schema changes to database.

   c. Finally, run `yarn pgen` to generate types to use in Typescript code.

2. If you just want to run the API without database, call `/about/no-db`.

## Run

1. Run `yarn install`.

2. Run `yarn dev`.
