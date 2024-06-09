CREATE TABLE `item` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `material` RENAME COLUMN `material` TO `name`;