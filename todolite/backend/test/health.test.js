'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const supertest = require('supertest');
const app = require('../app');

test('GET /api/health responde 200 y { status: "ok" }', async () => {
  const res = await supertest(app)
    .get('/api/health')
    .expect(200);

  assert.deepEqual(res.body, { status: 'ok' });
});
