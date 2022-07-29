#!/bin/bash

. ../.env

curl -XPOST \
-H "Token: $TOKEN" \
-H "Content-type: application/json" \
-d $'{"type": "quote", "quote": "I\'m a ticking time bomb, looking for my ride home\\nFlicking through my iPhone, no destination", "citation": "Time Bomb, The Chainsmokers"}' \
'localhost:5137/post/data'
