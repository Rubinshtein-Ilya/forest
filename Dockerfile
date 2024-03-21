# Используем официальный образ Node.js
FROM node:latest

# Обновляем список пакетов
RUN apt-get update

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install --ignore-scripts

# Копируем остальные файлы проекта
COPY . .

# Выполняем сборку клиентской части
RUN npm run build:client

# Выполняем сборку серверной части
RUN npm run build:server

# Определяем команду для запуска приложения
CMD ["npm", "start"]
