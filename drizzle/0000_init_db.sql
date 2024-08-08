CREATE TABLE `todos` (
	`id` integer PRIMARY KEY NOT NULL,
	`content` text,
	`completed` integer DEFAULT false,
	`created_at` integer DEFAULT '"2024-08-08T03:06:21.629Z"',
	`updated_at` integer DEFAULT '"2024-08-08T03:06:21.629Z"'
);
