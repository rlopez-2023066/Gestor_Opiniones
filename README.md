# 🧪 Laboratorio #3 - API de Gestión para Empresas en Interfer (COPEREX)

Este proyecto consiste en el desarrollo de una **API RESTful** utilizando **Node.js**, **Express** y **MongoDB**. La finalidad es brindar una solución moderna para la gestión de empresas que deseen participar en la feria **Interfer**, organizada por COPEREX.

---

## 📌 Objetivo del Proyecto

Crear una API segura, robusta y funcional que permita a un administrador registrar nuevas empresas, visualizar sus datos, editarlas y generar reportes en formato **Excel** para su análisis.

---

## 🛡️ Consideraciones Importantes

- ✅ Proyecto desarrollado únicamente en **Backend**.
- ✅ Aplicación de **autenticación** y **seguridad** vistas en clase.
- ✅ Desarrollo **individual**.
- ✅ Uso exclusivo de **rol administrador** (sin múltiples roles).
- ❌ No se permite eliminación de empresas.
- 📅 **Fecha límite de entrega:** Viernes 28 de febrero de 2024 a las 23:59 hrs.

---

## 🔐 Funcionalidades del Administrador

### 1. Autenticación
- Inicio de sesión con validación mediante **JWT**.
- Solo el **administrador** puede acceder al sistema.

### 2. Registro de Empresas
- Ingreso de datos clave de cada empresa:
  - Nombre de empresa
  - Nivel de impacto
  - Años de trayectoria
  - Categoría empresarial
  - Otros campos adicionales si se considera necesario (correo, dirección, etc.).

### 3. Visualización de Empresas
- Listado completo de todas las empresas registradas.
- Filtros por:
  - Años de trayectoria
  - Categoría empresarial
  - Orden alfabético (A-Z / Z-A)
- Edición de datos de las empresas.
- **No se permite eliminar registros.**

### 4. Generación de Reportes
- Exportación de todos los registros en **formato Excel (.xlsx)**.
- Ideal para análisis y toma de decisiones estratégicas.

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** para autenticación
- **Bcrypt** para hash de contraseñas
- **dotenv** para variables de entorno
- **Multer / Express Validator** (opcional)
- **ExcelJS** o **xlsx** para generación de reportes

---


