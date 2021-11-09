---
title: Funnel
lang: en-US
sidebar: true
sidebarDepth: 0
editLink: true

description: Funnel is based on Forth, that was originally developed for small embedded control mini- and micro-computers. The main difference between Funnel and Forth is that Funnel is strongly-typed language. Funnel support both function scope variables and global variables.
---

# Funnel

> Documentation is still in an early stage.

Funnel is based on [_Forth_](https://en.wikipedia.org/wiki/Forth_language), that was originally developed for small embedded control mini- and micro-computers. 

The main difference between Funnel and Forth is that Funnel is **strongly-typed language**.

## Funnel Language Guide

### Variables
Funnel support both function scope variables and global variables.

Variables are declared as in C, by declaring the type keyword first. A number variable is declared by the keyword `NUM`, and a text-string is declared by `TEXT`.

```
NUM global

: funcname
TEXT local_text
;
```

### Loops
Funnel supports three types of loops `DO LOOP/+LOOP`, `BEGIN WHILE REPEAT` and `BEGIN UNTIL`. All loops can exit with the keyword `LEAVE` and re-loop can be activated with the `AGAIN` keyword.

### Recursion
A function can call itself like in the example below:

```
: call_my_self
NUM scope_local_var
..
call_my_self
..
;
```

Variables are scope local this means that the variable `scope_local_var` is created for every new call.
