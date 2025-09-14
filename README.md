# 🚀 Backend Auth Boilerplate

Un boilerplate completo de backend con autenticación JWT y base de datos con Prisma.

## ✨ Características

- 🔐 **Autenticación JWT** - Login y registro de usuarios
- 🗄️ **Base de datos con Prisma** - ORM moderno con SQLite
- 🛡️ **Validación con Zod** - Validación de esquemas robusta
- 🎯 **TypeScript** - Tipado estático para mayor seguridad
- 🌐 **CORS configurado** - Listo para frontend
- 📝 **Manejo de errores** - Middleware personalizado

## 🚀 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/DarkSevenX/api-jwt-boilerplate-node
cd backend-auth
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura las variables de entorno**
```bash
# Crea un archivo .env
DATABASE_URL="file:./dev.db"
JWT_SECRET="tu-secreto-jwt-super-seguro"
PORT=8000
```

4. **Genera el cliente de Prisma**
```bash
npx prisma generate
```

5. **Ejecuta las migraciones**
```bash
npx prisma migrate dev
```

6. **Inicia el servidor**
```bash
npm run dev
```

## 📚 API Endpoints

### Autenticación
- `POST /auth/register` - Registrar nuevo usuario
- `POST /auth/login` - Iniciar sesión

### Rutas de Prueba
- `GET /test/public` - Ruta pública (sin autenticación)
- `GET /test/protected` - Ruta protegida (requiere JWT token)

### General
- `GET /ping` - Verificar estado del servidor

## 🧪 Prueba de las Rutas

```bash
# Ruta pública (sin autenticación)
curl http://localhost:8000/test/public

# Ruta protegida (requiere JWT token)
curl http://localhost:8000/test/protected \
    -H "token: <token>"
```

## 🔐 Autenticación

### Registro
```bash
curl -X POST http://localhost:8000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "role": "admin", "password": "123456"}'
```

### Login
```bash
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "role": "admin" "password": "123456"}'
```

## 🔐 CRUD de usuarios

### Obtener el usuario actual
```bash
curl http://localhost:8000/user \
  -H "token: <token>"
```

### Actualizar el usuario actual
```bash
curl -X PATCH http://localhost:8000/user \
  -H "token: <token>" \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "role": "admin"}'
```

### Eliminar el usuario actual
```bash
curl -X DELETE http://localhost:8000/user \
  -H "token: <token>"
```

## 🗄️ Base de Datos

### Modelo de Usuario
```prisma
model User {
  id        Int     @id @default(autoincrement())
  username  String  @unique
  password  String 
}
```

### Comandos Útiles
```bash
# Ver la base de datos
npx prisma studio

# Resetear la base de datos
npx prisma migrate reset

# Crear nueva migración
npx prisma migrate dev --name nombre-migracion
```

## 🛠️ Estructura del Proyecto

```
src/
├── app.ts                 # Configuración de Express
├── index.ts              # Punto de entrada del servidor
├── config/
│   └── database.ts       # Configuración de Prisma
├── controller/
│   └── authController.ts # Controladores de autenticación
├── middleware/
│   ├── jwt/             # Middleware de JWT
│   ├── errorHanddler.ts # Manejo de errores
│   └── validateSchema.ts # Validación con Zod
├── model/
│   └── User/            # Esquemas de validación
├── routes/
│   ├── authRoutes.ts    # Rutas de autenticación
│   └── testRoutes.ts    # Rutas de prueba
├── service/
│   └── userService.ts   # Lógica de negocio
└── util/
    ├── bcrypt/          # Utilidades de encriptación
    └── httpError.ts     # Errores HTTP personalizados
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Ejecutar en modo desarrollo
npm run build    # Compilar TypeScript
```

## 🚀 Próximos Pasos

Este boilerplate está listo para:
1. **Agregar WebSockets** si los necesitas más adelante
2. **Agregar Roles**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
