#!/bin/bash
echo "Started Backend Entrypoint!"
npx prisma generate
npx prisma migrate deploy
npx prisma db push

chmod +x ./bin/*

./bin/addAdmin deerhack@deerwalk.edu.np deerHackRocks
./bin/seedData ./data/main.csv
# npm run dev