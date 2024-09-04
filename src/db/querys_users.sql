CREATE DATABASE IF NOT EXISTS tabla_usuarios;

use tabla_usuarios;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    address VARCHAR(100),
    mail VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, lastName, address, mail, password)
VALUES 
('Juan', 'Pérez', 'Calle Falsa 123', 'juan.perez@mail.com', 'password123'),
('María', 'López', 'Avenida Siempreviva 456', 'maria.lopez@mail.com', 'password456'),
('Carlos', 'García', 'Calle Principal 789', 'carlos.garcia@mail.com', 'password789'),
('Ana', 'Martínez', 'Calle del Sol 321', 'ana.martinez@mail.com', 'password321'),
('Luis', 'Rodríguez', 'Calle Luna 654', 'luis.rodriguez@mail.com', 'password654'),
('Elena', 'Fernández', 'Calle Estrella 987', 'elena.fernandez@mail.com', 'password987'),
('Jorge', 'Gómez', 'Avenida Central 111', 'jorge.gomez@mail.com', 'password111'),
('Lucía', 'Díaz', 'Calle Sur 222', 'lucia.diaz@mail.com', 'password222'),
('Roberto', 'Hernández', 'Avenida Norte 333', 'roberto.hernandez@mail.com', 'password333'),
('Paula', 'Ruiz', 'Calle Este 444', 'paula.ruiz@mail.com', 'password444');
