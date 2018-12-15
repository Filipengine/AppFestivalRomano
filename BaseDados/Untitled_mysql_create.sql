CREATE TABLE `Utilizador` (
	`idUser` INT NOT NULL,
	`idAcesso` INT NOT NULL,
	`idFotoPerfil` INT NOT NULL,
	`username` varchar(30) NOT NULL UNIQUE,
	`primeiroNome` VARCHAR(50) NOT NULL,
	`apelido` VARCHAR(50) NOT NULL,
	`password` varchar(25) NOT NULL,
	`email` varchar(100) NOT NULL UNIQUE,
	`pais` VARCHAR(50) NOT NULL,
	`contacto` varchar(30) NOT NULL,
	`newsletter` BOOLEAN NOT NULL,
	`termos` BOOLEAN NOT NULL,
	PRIMARY KEY (`idUser`)
);

CREATE TABLE `Acessos` (
	`idAcesso` INT NOT NULL AUTO_INCREMENT,
	`descricao` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`idAcesso`)
);

CREATE TABLE `Bilhete` (
	`idBilhete` INT NOT NULL AUTO_INCREMENT,
	`idtipoBilhete` INT NOT NULL,
	`` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`idBilhete`)
);

CREATE TABLE `tipoBilhete` (
	`idtipoBilhete` varchar NOT NULL AUTO_INCREMENT,
	`tipoBilhete` VARCHAR(255) NOT NULL,
	`Dias` varchar NOT NULL,
	PRIMARY KEY (`idtipoBilhete`)
);

CREATE TABLE `Restaurantes` (
	`idRestaurante` INT NOT NULL AUTO_INCREMENT,
	`idMenu` varchar NOT NULL,
	`idUser` INT NOT NULL,
	`nome` varchar(30) NOT NULL,
	`localizacao` varchar NOT NULL,
	PRIMARY KEY (`idRestaurante`)
);

CREATE TABLE `Menus` (
	`idMenu` INT NOT NULL AUTO_INCREMENT,
	`idPrato` INT NOT NULL,
	`idBebidas` varchar NOT NULL,
	`idSopa` INT NOT NULL,
	`idSobremesa` INT NOT NULL,
	`idFotoMenu` INT NOT NULL,
	`nome` varchar(30) NOT NULL,
	PRIMARY KEY (`idMenu`)
);

CREATE TABLE `Fatos` (
	`idFato` INT NOT NULL AUTO_INCREMENT,
	`idUser` INT NOT NULL,
	`idTipoFato` INT NOT NULL,
	PRIMARY KEY (`idFato`)
);

CREATE TABLE `TipoFato` (
	`idTipoFato` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(30) NOT NULL,
	`preco` FLOAT NOT NULL,
	PRIMARY KEY (`idTipoFato`)
);

CREATE TABLE `Bebidas` (
	`idBebida` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(30) NOT NULL UNIQUE,
	`preco` FLOAT NOT NULL,
	PRIMARY KEY (`idBebida`)
);

CREATE TABLE `Pratos` (
	`idPrato` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(30) NOT NULL UNIQUE,
	`descricao` varchar(150) NOT NULL,
	`preco` FLOAT NOT NULL,
	PRIMARY KEY (`idPrato`)
);

CREATE TABLE `Sopas` (
	`idSopa` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(30) NOT NULL UNIQUE,
	`descricao` varchar(150) NOT NULL,
	`preco` FLOAT NOT NULL,
	PRIMARY KEY (`idSopa`)
);

CREATE TABLE `Sobremesas` (
	`idSobremesa` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`nome` varchar(30) NOT NULL UNIQUE,
	`preco` FLOAT NOT NULL,
	PRIMARY KEY (`idSobremesa`)
);

CREATE TABLE `Fotos Menus` (
	`idFotoMenu` INT NOT NULL AUTO_INCREMENT,
	`descricao` varchar(150) NOT NULL,
	`caminho` varchar NOT NULL UNIQUE,
	PRIMARY KEY (`idFotoMenu`)
);

CREATE TABLE `Fotos Perfil` (
	`idFotoPerfil` INT NOT NULL AUTO_INCREMENT,
	`descricao` varchar(150) NOT NULL,
	`caminho` varchar NOT NULL UNIQUE,
	PRIMARY KEY (`idFotoPerfil`)
);

ALTER TABLE `Utilizador` ADD CONSTRAINT `Utilizador_fk0` FOREIGN KEY (`idAcesso`) REFERENCES `Acessos`(`idAcesso`);

ALTER TABLE `Utilizador` ADD CONSTRAINT `Utilizador_fk1` FOREIGN KEY (`idFotoPerfil`) REFERENCES `Fotos Perfil`(`idFotoPerfil`);

ALTER TABLE `Bilhete` ADD CONSTRAINT `Bilhete_fk0` FOREIGN KEY (`idtipoBilhete`) REFERENCES `tipoBilhete`(`idtipoBilhete`);

ALTER TABLE `Restaurantes` ADD CONSTRAINT `Restaurantes_fk0` FOREIGN KEY (`idMenu`) REFERENCES `Menus`(`idMenu`);

ALTER TABLE `Restaurantes` ADD CONSTRAINT `Restaurantes_fk1` FOREIGN KEY (`idUser`) REFERENCES `Utilizador`(`idUser`);

ALTER TABLE `Menus` ADD CONSTRAINT `Menus_fk0` FOREIGN KEY (`idPrato`) REFERENCES `Pratos`(`idPrato`);

ALTER TABLE `Menus` ADD CONSTRAINT `Menus_fk1` FOREIGN KEY (`idBebidas`) REFERENCES `Bebidas`(`idBebida`);

ALTER TABLE `Menus` ADD CONSTRAINT `Menus_fk2` FOREIGN KEY (`idSopa`) REFERENCES `Sopas`(`idSopa`);

ALTER TABLE `Menus` ADD CONSTRAINT `Menus_fk3` FOREIGN KEY (`idSobremesa`) REFERENCES `Sobremesas`(`idSobremesa`);

ALTER TABLE `Menus` ADD CONSTRAINT `Menus_fk4` FOREIGN KEY (`idFotoMenu`) REFERENCES `Fotos Menus`(`idFotoMenu`);

ALTER TABLE `Fatos` ADD CONSTRAINT `Fatos_fk0` FOREIGN KEY (`idUser`) REFERENCES `Utilizador`(`idUser`);

ALTER TABLE `Fatos` ADD CONSTRAINT `Fatos_fk1` FOREIGN KEY (`idTipoFato`) REFERENCES `TipoFato`(`idTipoFato`);

