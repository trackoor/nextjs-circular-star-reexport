# Turbopack: circular `export *` with a second star source

```
npm install
npm run build
```

Expected: build passes and `/` shows `a = 1, keys = a`.
Actual: `Export a is a circular re-export` (Turbopack). With `turbopackScopeHoisting: false`, `next dev`, or `--webpack`: `RangeError: Maximum call stack size exceeded`.
