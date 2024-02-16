-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    contraseña VARCHAR(100) -- Es recomendable cifrar las contraseñas
);

-- Crear tabla de categorías de productos
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100)
);

-- Crear tabla de productos (camisetas)
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio NUMERIC(10, 2), -- Se utiliza NUMERIC para el precio para mantener precisión
    categoria_id INTEGER REFERENCES categorias(id),
    imagen_url VARCHAR(255) -- Ruta de la imagen del producto
);

-- Crear tabla de pedidos
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha y hora del pedido
    estado VARCHAR(50) -- Estado del pedido (por ejemplo: pendiente, completado, cancelado, etc.)
);

-- Crear tabla de detalle de pedidos
CREATE TABLE detalle_pedidos (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id),
    producto_id INTEGER REFERENCES productos(id),
    cantidad INTEGER,
    precio_unitario NUMERIC(10, 2) -- Precio unitario del producto al momento del pedido
);
