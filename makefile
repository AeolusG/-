convert:
	sass src/sass/styles.scss src/css/styles.css
install:
	npm ci
watch: 
	sass --watch src/sass/styles.scss\:src/css/styles.css