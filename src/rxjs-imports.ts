import { filter, of, merge } from 'rxjs'

// This forces angular compiler to generate a "rxjs-imports.metadata.json"
// with a valid metadata instead of "[null]"
export const noop = () => {};
