DROP DATABASE IF EXISTS qr_tickets;
CREATE DATABASE qr_tickets CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE qr_tickets;

CREATE TABLE tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  token VARCHAR(36) NOT NULL UNIQUE,
  usada BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO tickets (nombre, email, token, usada)
VALUES
  ('Ana García', 'ana.garcia@example.com', 'fd1ccf97-7766-4f02-8c7f-2c9f338f8e1a', FALSE),
  ('Luis Martínez', 'luis.martinez@example.com', '27d2fb5c-62bc-48fd-8d3c-0b4c4c4ac863', FALSE),
  ('Rocío Pérez', 'rocio.perez@example.com', 'e40eb01f-26b3-407d-ae6a-a46bec219b9c', TRUE);
