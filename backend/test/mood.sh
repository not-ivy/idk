#!/bin/sh

. ../.env

curl -X POST \
-H "Token: $TOKEN" \
-H "Content-type: application/json" \
-d '{"type": "mood", "score": "3"}' \
'localhost:5137/post/data'
