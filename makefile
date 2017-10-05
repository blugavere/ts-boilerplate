
.PHONY: test coverage

init:
	npm install -g ts-node typescript

dev:
	ts-node ./src/boot.ts

test:
	mocha test/*.ts --opts .mocharc