import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const classMgmt = pgTable('class_mgmt', {
    id: serial('id').primaryKey(),
    name: text('name'),
});