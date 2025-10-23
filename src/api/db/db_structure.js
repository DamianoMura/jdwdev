//model of the databaserelative to authentication
//it will serve the authentication middleware to retrieve roles permissions and sessions 
const db_tables = [
"CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE `name` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL UNIQUE `password` VARCHAR(255) NOT NULL, PRIMARY KEY(`id`));",
"CREATE TABLE IF NOT EXISTS `roles` (`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE, `name` VARCHAR(255), `description` TEXT(65535), PRIMARY KEY(`id`);", 
"CREATE TABLE IF NOT EXISTS `user_roles` ( `id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE, `user_id` INTEGER NOT NULL UNIQUE, `role_id` INTEGER NOT NULL UNIQUE, PRIMARY KEY(`id`));", 
"CREATE TABLE IF NOT EXISTS `permissions` (`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,`name` VARCHAR(255) NOT NULL,`description` TEXT(65535),PRIMARY KEY(`id`));", 
"CREATE TABLE IF NOT EXISTS `roles_permissions` (`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,`role_id` INTEGER UNIQUE,`permission_id` INTEGER UNIQUE,PRIMARY KEY(`id`));", 
"CREATE TABLE IF NOT EXISTS `sessions` (`id` INTEGER NOT NULL UNIQUE,`user_id` INTEGER NOT NULL UNIQUE,PRIMARY KEY(`id`));",
"ALTER TABLE `user_roles`" ,
"ADD FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)",
"ON UPDATE NO ACTION ON DELETE NO ACTION;",
"ALTER TABLE `user_roles`",
"ADD FOREIGN KEY(`role_id`) REFERENCES `roles`(`id`)",
"ON UPDATE NO ACTION ON DELETE NO ACTION;",
"ALTER TABLE `roles_permissions`",
"ADD FOREIGN KEY(`role_id`) REFERENCES `roles`(`id`)",
"ON UPDATE NO ACTION ON DELETE NO ACTION;",
"ALTER TABLE `roles_permissions`",
"ADD FOREIGN KEY(`permission_id`) REFERENCES `permissions`(`id`)",
"ON UPDATE NO ACTION ON DELETE NO ACTION;",
"ALTER TABLE `users`",
"ADD FOREIGN KEY(`id`) REFERENCES `sessions`(`user_id`)",
"ON UPDATE NO ACTION ON DELETE NO ACTION;"
]



module.exports=db_tables;