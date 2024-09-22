git pull origin main

docker stop shancw-gate

docker rm -f shancw-gate

docker rmi shancw-gate

npx prisma generate

docker build -t shancw-gate .

docker run -d -p 7779:3000 --restart always --name shancw-gate shancw-gate
