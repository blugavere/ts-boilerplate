
.PHONY: test coverage

init:
	npm install -g ts-node typescript

dev:
	ts-node ./src/boot.ts

test:
	mocha --compilers ts:ts-node/register,tsx:ts-node/register test