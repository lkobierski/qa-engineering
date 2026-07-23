import http from 'k6/http';
import { check, sleep } from 'k6';

import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000'],
  },
};

function logFailedChecks(requestName, response, passed, expectedResult) {
  if (!passed) {
    console.error(
      `[CHECK FAILED] ${requestName}: status=${response.status}; expected=${expectedResult}`
    );
  }
}

export default function () {
  const postsResponse = http.get(`${BASE_URL}/posts`, {
    tags: { name: 'GET /posts' },
  });

  const postsPassed = check(postsResponse, {
    'GET posts returns 200': (response) => response.status === 200,
    'GET posts returns data': (response) => response.json().length > 0,
  });

  logFailedChecks(
    'GET /posts',
    postsResponse,
    postsPassed,
    'status 200 and a non-empty response array'
  );

  const singlePostResponse = http.get(`${BASE_URL}/posts/1`, {
    tags: { name: 'GET /posts/1' },
  });

  const singlePostPassed = check(singlePostResponse, {
    'GET single post returns 200': (response) => response.status === 200,
    'GET single post contains id': (response) => response.json('id') === 1,
  });

  logFailedChecks(
    'GET /posts/1',
    singlePostResponse,
    singlePostPassed,
    'status 200 and id equal to 1'
  );

  const payload = JSON.stringify({
    title: 'QA performance test',
    body: 'Created during k6 load test',
    userId: 1,
  });

  const createPostResponse = http.post(`${BASE_URL}/posts`, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
    tags: { name: 'POST /posts' },
  });

  const createPostPassed = check(createPostResponse, {
    'POST post returns 201': (response) => response.status === 201,
    'POST post contains id': (response) =>
      response.json('id') !== undefined,
  });

  logFailedChecks(
    'POST /posts',
    createPostResponse,
    createPostPassed,
    'status 201 and a response containing an id'
  );

  sleep(1);
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, {
      indent: ' ',
      enableColors: true,
    }),

    'results/k6-summary.txt': textSummary(data, {
      indent: ' ',
      enableColors: false,
    }),

    'results/k6-html-report.html': htmlReport(data),
  };
}