import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};

export default createJestConfig(config);
