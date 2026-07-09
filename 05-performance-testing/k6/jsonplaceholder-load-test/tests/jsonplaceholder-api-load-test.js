import http from 'k6/http';
import { check, sleep } from 'k6';

import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000']
  }
};

export default function () {
  const postsResponse = http.get(`${BASE_URL}/posts`);

  check(postsResponse, {
    'GET posts returns 200': (response) => response.status === 200,
    'GET posts returns data': (response) => response.json().length > 0
  });

  const singlePostResponse = http.get(`${BASE_URL}/posts/1`);

  check(singlePostResponse, {
    'GET single post returns 200': (response) => response.status === 200,
    'GET single post contains id': (response) => response.json('id') === 1
  });

  const payload = JSON.stringify({
    title: 'QA performance test',
    body: 'Created during k6 load test',
    userId: 1
  });

  const createPostResponse = http.post(`${BASE_URL}/posts`, payload, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  check(createPostResponse, {
    'POST post returns 201': (response) => response.status === 201,
    'POST post contains id': (response) => response.json('id') !== undefined
  });

  sleep(1);
}

export function handleSummary(data) {
  return {
    'results/k6-html-report.html': htmlReport(data)
  };
}