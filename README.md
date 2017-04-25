# Tiny ruby api

API built in ruby for the back-end and react for the front-end.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

##Now you need to use Docker.

> Docker for Laravel 5.4 (Node, Postgres, PHP7.1 and Nginx)

## How to run

Make sure you have already installed [Docker](https://www.docker.com).

```bash
# Start Laravel application (You can access application through http://localhost)
./develop up -d && ./develop composer install
```
## `develop` Helper
```bash
# Run artisan command
./develop art [command]

# Run composer
./develop composer [command]

# Run NPM commands
./develop npm [command]

# Run tests
./develop test [command]
./develop t [command]

# Run Docker Compose commands
./develop [command]
```

