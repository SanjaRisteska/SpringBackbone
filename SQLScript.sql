CREATE DATABASE "phone"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'English_United States.1252'
       LC_CTYPE = 'English_United States.1252'
       CONNECTION LIMIT = -1;
	   
CREATE SEQUENCE phone.public."Phone_id_seq"
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 6
  CACHE 1;
ALTER TABLE public."Phone_id_seq"
  OWNER TO postgres;


CREATE TABLE phone.public.phone
(
  id integer NOT NULL DEFAULT nextval('"Phone_id_seq"'::regclass),
  manufacturer character varying(50),
  model character varying(50),
  price  integer,
  color character varying(20),
  img character varying,
  size character varying(20),
  weight character varying(20),
  cpu character varying,
  primary_camera character varying,
  secondary_camera character varying,
  link character varying,
  CONSTRAINT "Phone_pkey" PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.phone
  OWNER TO postgres;
  
  
INSERT INTO phone.public.phone (manufacturer, model, price, color, img, size, weight, cpu, primary_camera, secondary_camera, link) VALUES ('Samsung', 'S7 Edge', 510, 'Gray', 'img/samsungS7.png','5.5 inches', '157 g', 'Quad-core (2x2.15 GHz Kryo & 2x1.6 GHz Kryo) Octa-core (4x2.3 GHz Mongoose & 4x1.6 GHz Cortex-A53)', '12 MP, f/1.7, 26mm, phase detection autofocus, OIS, LED flash', '5 MP, 1/4.1" sensor size, 1.34 µm pixel size, f/1.7, 22mm, dual video call, Auto HDR', 'GalaxyS7Edge');
INSERT INTO phone.public.phone (manufacturer, model, price, color, img, size, weight, cpu, primary_camera, secondary_camera, link) VALUES ('Apple', 'iPhone 7', 820, 'Black', 'img/iphone.png','4.7 inches', '138 g', 'Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)', '12 MP, f/1.8, 28mm, phase detection autofocus, OIS, quad-LED (dual tone) flash', '7 MP, f/2.2, 32mm, 1080p@30fps, 720p@240fps, face detection, HDR, panorama', 'iPhone7');
INSERT INTO phone.public.phone (manufacturer, model, price, color, img, size, weight, cpu, primary_camera, secondary_camera, link) VALUES ('Huawei', 'P9', 300, 'White', 'img/nexus5.png','4.95 inches', '130 g', 'Quad-core 2.3 GHz Krait 400', '8 MP, f/2.4, 30mm, autofocus, OIS, LED flash', '1.3 MP, f/2.4, 1/6" sensor size, 1.9µm pixel size', 'Nexus5');

CREATE TABLE phone.public.cart
(
  id integer NOT NULL DEFAULT nextval('"Phone_id_seq"'::regclass),
  product_id integer,
  quantity integer,
  CONSTRAINT "cart_pkey" PRIMARY KEY (id),
  CONSTRAINT fk_cart_product FOREIGN KEY (product_id)
      REFERENCES phone.public.phone (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE phone.public.phone
  OWNER TO postgres;