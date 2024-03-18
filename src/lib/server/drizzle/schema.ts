import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const userTable = pgTable('user', {
	id: text('id').primaryKey(),
	// ... other fields
	username: text('username').notNull(),
	passwordHash: text('password_hash').notNull(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull()
});

export const sessionTable = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp('expires_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});
