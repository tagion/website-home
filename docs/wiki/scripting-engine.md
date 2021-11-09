---
title: Scripting Engine
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: true

description: Scripting Engine is a component of Tagion Node. The source code will be released later, but with this experimental package, you can start writing some basic Funnel script and become familiar with the language.
---

# Scripting Engine

Scripting Engine is a component of Tagion Node. The source code will be released later, but with this experimental package, you can start writing some basic Funnel script and become familiar with the language.

## Your First Funnel Script

We assume you have Docker installed. If not, please follow Docker [official documentation](https://www.docker.com/get-started) to get it installed on your machine.

With Docker, you can quickly execute Funnel without worrying about dependencies or missing libraries.

#### Create `funnel_test.fs`

Let's write our first test script on Funnel. You can copy the sample code from [this gist](https://gist.github.com/vladpazych/4eb290a6041c4dbc0ed9cdf4c88460d8).

Put this script to your working directory in the `scripts` folder, so your working directory looks like this:

```
./scripts/
 ./funnel_test.fs
```

#### Run without docker-compose

The command is hard to remember, especially if you are new to Docker, so below you have another option of running it with docker-compose. But you have to have it installed on your machine.

The simplest way to start is just to execute this command:

```bash
docker run -e "SCRIPT=funnel_test" -v $(pwd)/scripts:/funnel/scripts tagion/funnel_engine
```

**Let's unpack what this command does.**

`docker run` runs the container from image (image name goes in the end).

`-e "SCRIPT=funnel_test"` sets the filename to execute and watch.

`-v $(pwd)/scripts:/funnel/scripts` mounts your `./scripts` directory you created in previous step to the running container.

`tagion/funnel_engine` is the name of the official funnel engine image.


#### Run with docker-compose

If you have docker-compose installed, create `docker-compose.yml` file in your working directory with this content:

```yml
version: "3"
services:
 funnel:
 image: tagion/funnel_engine
 build: .
 volumes:
 - ./scripts:/funnel/scripts
 environment:
 - SCRIPT=funnel_test
 user: root
```

Your working directory now should look like this:

```
./scripts/
 ./funnel_test.fs
./docker-compose.yml
```

Then you can execute `docker-compose up`, and it will start your `funnel_test` script and watch it for changes.

#### Output

Output of sample script is large, but starts like this:

```bash
call main
call
.v
Globals: GLOBAL_VAR
 .000:X null
X @
7
+
X !
.v
Globals: GLOBAL_VAR
 .000:X 7
X @
4
*
X !
.v
Globals: GLOBAL_VAR
 .000:X 28
call
.l
Locals: LOCAL_VAR
 001:LOCAL null
LOCAL @
7
+
LOCAL !
```


## Hooray!

Congratulations, you just executed first Funnel script! It doesn't do much, but you can see that language is very straightforward.

Follow the [Funnel Documentation](/docs/funnel.md) to dive deeper.
