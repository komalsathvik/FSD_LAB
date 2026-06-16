# Express Practice

Basic Express application with:

- `GET /` for a welcome message
- `GET /students` for sample student data
- `POST /students` for adding a student
- Middleware for JSON parsing, request logging, and POST validation

## Run

```bash
npm install
npm start
```

## Test POST

```bash
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Rahul\",\"course\":\"Backend Development\"}"
```
