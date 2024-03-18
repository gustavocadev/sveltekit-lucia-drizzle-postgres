import pg from 'pg';
import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '$lib/server/drizzle/schema';

const pool = new pg.Pool({
	connectionString: DATABASE_URL
});

export const db = drizzle(pool, { schema });
