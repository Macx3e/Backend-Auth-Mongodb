
# 🚀 Backend con Node.js, Express y MongoDB  
**Gestión de usuarios y productos con autenticación JWT**  
![Image](https://github.com/user-attachments/assets/db3abac1-070d-428c-87cf-5599da344ca7)
![Image](https://github.com/user-attachments/assets/e4fafa08-2f3d-47b0-8197-dedfa523337e)
![Image](https://github.com/user-attachments/assets/094be268-61cc-4216-9136-434f4151ae91)
![Image](https://github.com/user-attachments/assets/12033cf8-4255-4747-9806-c551b230ad28)
![Image](https://github.com/user-attachments/assets/da85510a-6094-4f6a-86b0-6bf06ca5ab79)

## 📌 Descripción  
Este proyecto es un backend construido con Node.js, Express y MongoDB para gestionar usuarios y productos.  
Incluye autenticación JWT para asegurar rutas protegidas.  

## 🛠 Tecnologías utilizadas  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JSON Web Token (JWT)  
- Bcrypt.js para encriptación de contraseñas  

## 🚀 Instalación  
1️⃣ Clona este repositorio:  
```bash
git clone https://github.com/tuusuario/tu-repositorio.git

2️⃣ Instala dependencias:
bash
npm install

3️⃣ Configura el archivo .env:
env
JWT_SECRET=tuClaveSecretaSuperSegura
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/basededatos
PORT=5000

4️⃣ Inicia el servidor:
bash
node server.js

📌 Endpoints Principales
✅ Autenticación de Usuarios
Método	Endpoint	Descripción
POST	/api/user/login	Iniciar sesión y obtener token JWT
GET	/api/user/verifytoken	Verificar autenticación del usuario

📌 Ejemplo de autenticación en Postman: 🔹 Login (POST /api/user/login):
json
{
  "email": "usuario@example.com",
  "password": "tuContraseña"
}

🔹 Verificación (GET /api/user/verifytoken con Authorization: Bearer [TOKEN])

✅ Gestión de Productos
Método	Endpoint	Descripción
POST	/api/products/create	Crear un producto
GET	/api/products/readall	Obtener todos los productos
PUT	/api/products/update/:id	Editar un producto
DELETE	/api/products/delete/:id	Eliminar un producto

🛡 Autenticación con JWT

✅ Para acceder a rutas protegidas, envía el token en los headers:
Authorization: Bearer [TOKEN_AQUÍ]

📌 Contribuciones
Si deseas contribuir, ¡haz un fork del repositorio y envía un pull request!
📩 Contacto
Si tienes preguntas, contáctame en valdiviamaximiliano20@gmail.com 🚀
