<h1 align="center">
    Startual
</h1>

<h4 align="center">
 A simple static Homepage for your server to keep your services on hand, from a simple <code>json</code> configuration file.
</h4>
<p align="center">
 <strong>
  <a href="#getting-started">Getting started</a>
 </strong>
</p>
<p align="center">
 <a href="https://www.gnu.org/licenses/gpl-3.0.html#license-text"><img
  alt="License: GPLv3"
  src="https://img.shields.io/badge/License-GPL%203-blue.svg"></a>
</p>

## Table of Contents

- [Features](#features)
- [Getting started](#getting-started)
<!--
- [Configuration](docs/configuration.md)
- [Custom services](docs/customservices.md)
- [Tips & tricks](docs/tips-and-tricks.md)
- [Development](docs/development.md)
- [Troubleshooting](docs/troubleshooting.md)
-->
## Features

- json file configuration
<!-- - Installable (pwa) 
- Search 
- Theme customization
- Offline health check
- keyboard shortcuts:
  - `/` Start searching.
  - `Escape` Stop searching.
  - `Enter` Open the first matching result (respects the bookmark's `_target` property).
  - `Alt`/`Option` + `Enter` Open the first matching result in a new tab. -->
- Grouping
- Language configuration
- Backup and restore.

## Getting started

Startual is a full static html/js dashboard, based on a simple yaml configuration file. 

It's meant to be served by an HTTP server, **it will not work if you open the index.html directly over file:// protocol**.

### Using docker

#### Create a Docker image
```sh
docker build -t startual-app
```

#### Run the Docker Image
```sh
docker run -d -p 80:80 startual-app
```

The container will run using a user uid and gid 1000. Add `--user <your-UID>:<your-GID>` to the docker command to adjust it. Make sure this match the ownership of your assets directory.

<!--
#### With docker-compose

A [`docker-compose.yml`](docker-compose.yml) file is available as an example. It must be edited to match your needs. You probably want to adjust the port mapping and volume binding (equivalent to `-p` and `-v` arguments).

Then launch the container:

```sh
cd /path/to/docker-compose.yml/
docker-compose up -d
```
-->
### Using the release tarball (prebuilt, ready to use)

Download and extract the latest release (`startual.zip`) from the [release page](https://github.com/tecnual/startual/releases), edit the `src\assets\default-config.json` whith your preferences, and put it behind a web server.

```sh
wget https://github.com/tecnual/startual/releases/latest/download/startual.zip
unzip startual.zip
cd startual
npx serve # or python -m http.server 8010 or apache, nginx ...
```

### Build manually

```sh
# Using yarn (recommended)
yarn install
yarn build

# **OR** Using npm
npm install
npm run build
```

Then your dashboard is ready to use in the `/dist` directory.
