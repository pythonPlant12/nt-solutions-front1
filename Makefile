export PROJECT_NAME = nt-solutions-front1
export GROUPD_ID := $(shell id -g)
export USER_ID := $(shell id -u)
export ENV := $(if $(ENV),$(ENV),local)
#export ENV=prod
export TARGET := $(if $(filter $(ENV),prod),final-stage,base-stage)
export USER := $(USER)


build_image:
	npm run docker:build
dev:
	if [ -e "./node_modules"]; then echo "node_modules exist"; else npm run docker:run -- --rm ${PROJECT_NAME}; fi;
clean:
	npm run docker:clean
stop:
	npm run docker:stop
rm:
	npm run docker:rm
shell:
	npm run docker:run --rm ${PROJECT_NAME} /bin/bash
shell_root:
	npm run docker:run --rm -u root ${PROJECT_NAME} /bin/bash
install:
	npm run docker:run --rm ${PROJECT_NAME} npm install