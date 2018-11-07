[![Build Status](https://travis-ci.org/SmoglyMonitor/smogly-frontend.svg?branch=master)](https://travis-ci.org/SmoglyMonitor/smogly-frontend)
[![Coverage Status](https://coveralls.io/repos/github/SmoglyAirMonitor/smogly-frontend/badge.svg?branch=master)](https://coveralls.io/github/SmoglyAirMonitor/smogly-frontend?branch=master)

# smogly-frontend

Frontend for SmoglyAirMonitor project. Powered by React

# Useful commands

- ``npm run build`` - build files to be used for production
- ``npm run start`` - run a test server with hot reload on localhost:8080
- ``npm run test`` - run tests
- ``npm run test:watch`` - run tests continuously
- ``npm run coverage`` - run coverage report

# Development with Docker

## To start development:
1. install [docker](https://docs.docker.com/#/components) and [docker-compose](https://docs.docker.com/compose/install/)
2. copy docker-compose.yml to root project dir to have Your own local copy

    ```bash
    cp ./docker/docker-compose.yml ./docker-compose.yml
    ```

## To run project:
1. `docker-compose up` - start webpack-dev-server with hot reloading and log output, you need to wait a bit for 
package.json requirements to download
2. point your browser to `localhost:8081`
3. press `CTRL+C` to stop

## Notes:
1. Each change in the code should be reflected automatically in Your browser.
2. To run one off `package.json` configured command just do `docker-compose run --rm web npm run YOUR_CMD`.
3. To get into shell of container to debug `docker-compose run --rm web bash`.
4. Executing container **will automatically prune and install** new dependencies from ``packages.json`` rebuilding 
is not needed.
5. To change ENV variables check [this](https://docs.docker.com/compose/compose-file/#/environment) docker-compose 
manual + defaults set in `Dockerfile`.
6. To add more concurrent execution of ``packages.json`` commands just add entry in Your copied docker-compose.yml 
like so:

```
  builder:
    extends:
      file: docker-compose-base.yml
      service: web
    command: "npm run build:watch"
```
7. We recommend setting up bash aliases to **increase productivity**:

```bash
#!/bin/bash
dcclear() {
    docker images -qf dangling=true | xargs -r docker rmi
    docker volume ls -qf dangling=true | xargs -r docker volume rm
}
alias dc='docker-compose'
alias dcrun='docker-compose run --rm'
```