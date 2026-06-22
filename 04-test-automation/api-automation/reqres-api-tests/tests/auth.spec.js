const { test, expect } = require('@playwright/test');
const { testData } = require('../data/test-data');
const { createHeaders } = require('../utils/api-client');

test.describe('Reqres Users API', () => {
  test('should return users list', async ({ request }) => {
    const response = await request.get('users?page=2', {
      headers: createHeaders()
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('page', 2);
    expect(responseBody).toHaveProperty('data');
    expect(Array.isArray(responseBody.data)).toBe(true);
    expect(responseBody.data.length).toBeGreaterThan(0);

    expect(responseBody.data[0]).toHaveProperty('id');
    expect(responseBody.data[0]).toHaveProperty('email');
    expect(responseBody.data[0]).toHaveProperty('first_name');
    expect(responseBody.data[0]).toHaveProperty('last_name');
    expect(responseBody.data[0]).toHaveProperty('avatar');
  });

  test('should return single user', async ({ request }) => {
    const response = await request.get(`users/${testData.users.existingUserId}`, {
      headers: createHeaders()
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('data');
    expect(responseBody.data).toHaveProperty('id', testData.users.existingUserId);
    expect(responseBody.data).toHaveProperty('email');
    expect(responseBody.data).toHaveProperty('first_name');
    expect(responseBody.data).toHaveProperty('last_name');
    expect(responseBody.data).toHaveProperty('avatar');
  });

  test('should return 404 for non-existing user', async ({ request }) => {
    const response = await request.get(`users/${testData.users.nonExistingUserId}`, {
      headers: createHeaders()
    });

    expect(response.status()).toBe(404);

    const responseBody = await response.json();

    expect(responseBody).toEqual({});
  });

  test('should create user', async ({ request }) => {
    const response = await request.post('users', {
      headers: createHeaders(),
      data: testData.newUser
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('name', testData.newUser.name);
    expect(responseBody).toHaveProperty('job', testData.newUser.job);
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');
  });

  test('should update user', async ({ request }) => {
    const response = await request.put(`users/${testData.users.existingUserId}`, {
      headers: createHeaders(),
      data: testData.updatedUser
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('name', testData.updatedUser.name);
    expect(responseBody).toHaveProperty('job', testData.updatedUser.job);
    expect(responseBody).toHaveProperty('updatedAt');
  });

  test('should delete user', async ({ request }) => {
    const response = await request.delete(`users/${testData.users.existingUserId}`, {
      headers: createHeaders()
    });

    expect(response.status()).toBe(204);

    const responseBody = await response.text();

    expect(responseBody).toBe('');
  });
});