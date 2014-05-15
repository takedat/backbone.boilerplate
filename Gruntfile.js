'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			options: {

			},
			html: {
				files: '**/*.html',
				tasks: {},
				options: {
					livereload: true,
					nospawn: true
				}
			},
			coffee: {
				files: 'assets/coffee/**/*.coffee',
				tasks: 'coffee',
				options: {
					livereload: true,
					nospawn: true
				}
			},
			sass: {
				files: 'assets/scss/**/*.scss',
				tasks: 'compass',
				options: {
					livereload: true,
					nospawn: true
				}
			},
			all: {
				files: [
					'<%= watch.html.files %>',
					'<%= watch.coffee.files %>',
					'<%= watch.sass.files %>'
				],
				tasks: ['js', 'css'],
				options: {
					livereload: true,
					nospawn: true
				}
			}
		},
		coffee: {
			compile: {
				expand: true,
				cwd: 'assets/coffee',
				src: ['**/*.coffee'],
				dest: 'assets/dist/scripts',
				ext: '.js',
				options: {
					bare: true
				}
			}
		},
		compass: {
			compile: {
				linecomments: false,
				forcecompile: true,
				debugsass: false,
				relativeassets: true,
				options: {
					config: 'config.rb'
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			src: [
				['assets/js/**/*.js', '!assets/js/vendors/*.js']
			]
		},
		connect: {
			server: {
				options: {
					port: 8888
				}
			}
		},
		bower: {
			install: {
				options: {
					targetDir:'assets/dist/scripts/vendors',
					layout: 'byComponent',
					install: true,
					verbose: true,
					cleanBowerDir: true,
					cleanTargetDir: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-bower-task');

	grunt.registerTask('js', ['coffee']);
	grunt.registerTask('css', ['compass']);
	grunt.registerTask('default', ['bower:install']);
	grunt.registerTask('default', ['connect','watch:all']);

	//grunt.registerTask('dist', ['livereload-start', 'connect', 'regarde']);
};
