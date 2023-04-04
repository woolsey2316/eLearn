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
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ]
};