"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dump = dump;
const functions_1 = require("@azure/functions");
async function dump(request, context) {
    return {
        status: 200,
        jsonBody: {
            method: request.method,
            url: request.url,
            headers: request.headers,
            query: request.query,
            body: request.body
        }
    };
}
functions_1.app.http('dump', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: dump
});
