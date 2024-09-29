#!/bin/bash
echo "Iniciando serviços..."

cd /home/ec2-user/cumes-brasil || exit 1

# Reconstruir as imagens Docker sem utilizar o cache
docker-compose build --no-cache

# Iniciar os containers Docker Compose
docker-compose up -d