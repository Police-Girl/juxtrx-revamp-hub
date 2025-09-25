CREATE DATABASE IF NOT EXISTS `juxtrx_portal` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `juxtrx_portal`;

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `phone` VARCHAR(50) NULL,
  `service` VARCHAR(200) NULL,
  `message` TEXT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `communications` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `type` ENUM('call','sms','whatsapp','email') NOT NULL,
  `from_number` VARCHAR(50) NULL,
  `to_number` VARCHAR(50) NULL,
  `sender` VARCHAR(200) NULL,
  `subject` VARCHAR(200) NULL,
  `message` TEXT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


