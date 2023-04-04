const jwt = require('jsonwebtoken');

const secret = "Ciro";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4MDIyNjc0OH0.6tFAwugrUF40HOzSOrcnq5zh-nG0wwHX1jSkIkr0LTI"

function verifyToken(token, secret) {
    return jwt.verify(token, secret)
}

const payload = verifyToken(token, secret);
console.log(payload);