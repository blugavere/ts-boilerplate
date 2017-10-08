
.PHONY: test coverage

init:
	npm install -g ts-node typescript

dev:
	nodemon ./src/boot.ts

test:
	node_modules/.bin/nyc --all node_modules/.bin/mocha --opts .mocharc

watch:
	node_modules/.bin/mocha  --watch --opts .mocharc

build:
	tsc

clean:
	rm -rf coverage dist .nyc_output

coverage:
	node_modules/.bin/nyc report --reporter=text-lcov | coveralls
