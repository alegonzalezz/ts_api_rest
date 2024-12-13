# Usar una imagen oficial de Node.js como base
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Instalar dependencias
RUN npm install

# Compilar el código TypeScript
RUN npm run build

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
