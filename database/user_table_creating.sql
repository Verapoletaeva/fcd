CREATE TYPE user_type AS ENUM ('admin', 'сashier');

CREATE TABLE users(
	contract_number integer PRIMARY KEY,
	login char(45),
	password_hash char(45),
	surname char(45),
	name char(45),
	patronymic char(45),
	privileged smallint,
	type user_type
);
