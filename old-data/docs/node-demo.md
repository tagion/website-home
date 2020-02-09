---
title: Node Demo
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: true

description: We released Tagion Node in a docker container to demonstrate the process of processing events.
---

# Node Demonstration

This demo allows you to see different components of the Node software working together, processing incoming events.

Follow the guide to run it with docker-compose and observe the printout.

## Node Demonstration Guide

#### If you don't have Docker Compose

If you don't have Docker Compose, plese follow [official installation guide](https://docs.docker.com/compose/).

#### Run with Docker Compose

If you have Docker Compose installed, just clone the experiment repository;

```bash
git clone https://github.com/tagion/experiments-node.git
cd experiments-node
```

Then you can start the the client and the server containers. Before the first run, they will build.

```bash
docker-compose up
```

The server is one of the nodes, that listens for events. The client sends random events to a server.

#### What Happens Behind The Scenes

Node communicates events it receives from the client program to other nodes, and all of them build a Hashgraph. Ones the Hashgraph Round is decided, meaning all nodes have the same graph up until one defined point, the events are sorted and executed.

Client program here simulates users of the network.
