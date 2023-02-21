import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    testEnvironment: "jsdom",
    transform: {
      '\\.[jt]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\.css$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  };
};