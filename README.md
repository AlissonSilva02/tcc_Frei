```
drop database if exists db_autonomo;
create database db_autonomo;
use db_autonomo;

CREATE TABLE autonomo (
    id_autonomo INT PRIMARY KEY auto_increment,
    nome VARCHAR(255) not null,
    senha VARCHAR(255) not null
);

INSERT INTO autonomo (nome, senha)
VALUES ('usuario', '1234');

select * from autonomo;

CREATE TABLE produtos (
    id_produto INT PRIMARY KEY auto_increment,
    tipo VARCHAR(255),
    img VARCHAR(255),
    descricao VARCHAR(255),
    valor DECIMAL(18,2),
    disponivel BOOLEAN,
    estoque int,
    id_autonomo int,
    FOREIGN KEY (id_autonomo) references autonomo (id_autonomo)
);
```
