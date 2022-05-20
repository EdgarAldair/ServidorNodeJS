CREATE TABLE users(
	id bigserial primary key,
	email varchar(255) not null unique,
	name varchar(255) not null,
	lastname varchar(120) not null,
	phone varchar(50) not null unique,
	image varchar(120) null,
	password varchar(255) not null,
	is_available boolean null,
	session_token varchar(220) null,
	created_at Timestamp (0) not null,
	update_at Timestamp (0) not null
);