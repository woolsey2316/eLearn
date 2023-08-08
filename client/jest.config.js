module.exports = {
	moduleFileExtensions: [
		'ts',
    'tsx',
		'js',
	],
	transform: {
		'^.+\\.(ts|tsx)$': ['ts-jest', { tsConfiggit: 'tsconfig.json' }],
    "^.+\\.(js|jsx)$": "babel-jest",
	},
	testMatch: [
		'**/*.test.(ts|js)'
	],
	testEnvironment: 'node',
  testURL: "http://localhost:5000",
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ]
};