#!/bin/bash

npx prisma generate
npx prisma migrate deploy

chmod +x ./bin/*

./bin/addAdmin deerhack@deerwalk.edu.np deerHackRocks
./bin/seedData ./data/main.csv
npm run dev