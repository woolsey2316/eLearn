module.exports = {
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
	moduleFileExtensions: [
		'ts',
    'tsx',
		'js',
	],
  preset: "ts-jest",
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$"
  ],
	transform: {
		'^.+\\.(ts|tsx)$': ['ts-jest'],
    "^.+\\.(js|jsx)$": "babel-jest",
	},
	testMatch: [
		'**/*.test.(tsx|ts|js)'
	],
  setupFilesAfterEnv: ["@testing-library/jest-dom", "./jest.setup.ts"],
	testEnvironment: 'jest-environment-jsdom',
  testURL: "http://localhost:5000",

};