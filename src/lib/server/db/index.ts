import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';

// NOTE: in production this should OBVIOUSLY be replaced with a turso instance
export const libsqlClient = createClient({
	url: env.DATABASE_URL,
	authToken: 'no need b/c local'
});

export const db = drizzle(libsqlClient);
