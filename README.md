```
drop database if exists db_autonomo;
create database db_autonomo;
use db_autonomo;
CREATE TABLE autonomo (
    id_autonomo		 	INT PRIMARY KEY auto_increment,
    nome 				VARCHAR(255) not null,
    senha 				VARCHAR(255) not null
);

 

INSERT INTO autonomo (nome, senha)
VALUES ('robson', '1234');

select * from autonomo;

CREATE TABLE produtos (
    id_produto			INT PRIMARY KEY auto_increment,
    tipo 				VARCHAR(255),
    img 				VARCHAR(800),
    descricao 			VARCHAR(255),
    valor 				DECIMAL(18,2),
    disponivel			BOOLEAN,
    estoque				int,
    id_autonomo			int,
    FOREIGN KEY (id_autonomo) references autonomo (id_autonomo)
);


INSERT INTO produtos (tipo, img, descricao, valor, disponivel, estoque,id_autonomo) VALUES
('Batom', 'batom.jpg', 'Batom hidratante com longa duração', 29.90, TRUE, 50,1),
('Base', 'base.jpg', 'Base líquida com cobertura mate', 49.90, FALSE, 10,1),
('Máscara de Cílios', 'mascara.jpg', 'Máscara de cílios para volume e alongamento', 39.90, TRUE, 20,1),
('Blush', 'blush.jpg', 'Blush em pó com acabamento natural', 34.90, TRUE, 30,1),
('Demaquilante', 'demaquilante.jpg', 'Demaquilante bifásico para todos os tipos de pele', 24.90, TRUE, 40,1),
('Creme Hidratante', 'creme_hidratante.jpg', 'Creme hidratante facial com FPS', 59.90, TRUE, 60,1),
('Esmalte', 'esmalte.jpg', 'Esmalte de longa duração e rápido secagem', 19.90, TRUE, 70,1),
('Perfume', 'perfume.jpg', 'Perfume floral com notas de frutas', 89.90, TRUE, 80,1),
('Esfoliante', 'esfoliante.jpg', 'Esfoliante corporal com grânulos naturais', 44.90, TRUE, 90,1),
('Sérum Facial', 'serum.jpg', 'Sérum facial anti-idade', 79.90, TRUE, 100,1);	

select * from produtos;	

UPDATE produtos
SET valor = 25.00
WHERE id_produto = 1;

DELETE FROM produtos
WHERE id_produto = 1;
```
