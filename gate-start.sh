git pull origin main

docker stop shancw-gate

docker rm -f shancw-gate

docker build -t shancw-gate .

docker run -d -p 7779:3000 --name shancw-gate shancw-gate