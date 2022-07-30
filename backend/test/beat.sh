#!/bin/bash

. ../.env

curl -XPOST \
-H "Token: $TOKEN" \
-H "Content-type: application/json" \
-d $'{"type": "beat", "device": "coconut"}' \
'localhost:8080/post/data'
