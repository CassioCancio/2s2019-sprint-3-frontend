CREATE DATABASE Endereco;

USE Endereco;

CREATE TABLE Enderecos(
	idEndereco INT PRIMARY KEY IDENTITY NOT NULL,
	Nome VARCHAR(255) NOT NULL,
	Logradouro VARCHAR(255) NOT NULL,
	Complemento VARCHAR(255),
	Bairro VARCHAR(255) NOT NULL,
	Localidade VARCHAR(255) NOT NULL,
	UF VARCHAR(255) NOT NULL,
	CEP VARCHAR(20) NOT NULL
);

SELECT * FROM Enderecos;