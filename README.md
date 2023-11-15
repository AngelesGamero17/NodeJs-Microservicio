para crear tu imagen perzonalizada
docker build -t {nombre}:v1 .

para ejecutar con la imaguen que creaste
docker run -d --name frontend -p 9000:19010 {nombre}:v1
docker run -d --name frontend -p 9000:3000 -e SERVICE_BACKEND1=http://localhost:9010/api/message frontend:v1

frontend
docker run -d --name frontend -p 9000:3000 -e SERVICE_BACKEND1=http://localhost:9010/api/message -e PORT=3000 frontend:v1

backend1
docker run -d --name backend1 -p 9010:3010 -e PORT=3010 -e SERVICE_BACKEND2=http://backend2:3020/api/message backend1:v1
 docker ps -a | grep backend1:v1
 docker logs backend1

backend2
docker run -d --name backend2 -e PORT=3020 backend2:v1

para verificar que se esta ejecutando
docker logs frontend

para ver aserca de lo que uses
docker ps -a | grep 9000


---
docker stop frontend

docker rm frontend


docker rmi frontend:v1


docker rmi 53b5bae92a86


docker images
docker ps -a


angeles@angeles:~/Prueba/01-comunicacion/backend1$ docker rm -f backend1



----------------------------------------------
docker network create net-ms -d bridge --------- backend1

docker run -d --name frontend -p 9000:3000 -e SERVICE_BACKEND1=http://localhost:9010/api/message -e PORT=3000 --network=net-ms frontend:v1   ------------- frotend


docker run -d --name backend1 -p 9010:3010 -e PORT=3010 -e SERVICE_BACKEND2=http://backend2:3020/api/message --network=net-ms backend1:v1 ------------------------ backend1


docker run -d --name backend2 -e PORT=3020 --network net-ms backend2:v1  ---- backend2