
.PHONY: test coverage

init:
	npm install -g ts-node typescript

dev:
	nodemon ./src/boot.ts

test:
	mocha --opts .mocharc

build:
	tsc