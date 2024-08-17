## worker-bench-errors

A repro to show wrangler struggling to be benchmarked.

- in one tab, `npm i && npm start`
- in another, `npm run bench`

You'll see wrangler struggling to server requests, and a bunch of 503s.
