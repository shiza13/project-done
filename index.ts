import { type SchemaTypeDefinition } from 'sanity';
import { Category } from './category'; // Path to your category schema
import { product } from './product';   // Path to your product schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category, product], // Add your schemas here
};

