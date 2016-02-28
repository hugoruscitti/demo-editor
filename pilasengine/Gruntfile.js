module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-touch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        typedoc: {
            build: {
                options: {
                    module: 'commonjs',
                    out: './docs/dist',
                    name: 'pilasengine.js',
                    target: 'es5',
                    readme: './docs/homepage.md'
                },
                src: ['./src/**/*', 'public/data/**/*']
            }
        },
        pkg: grunt.file.readJSON('package.json'),
	      touch: {
	        src: ['../app/index.html']
	      },
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: '../vendor/pilasengine.js',
                options: {
                    module: 'CommonJS',
                    removeComments: false,
                    target: 'es5'
                }
            }
        },
        qunit: {
          files: ['test/index.html']
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './ejemplos'
                }
            }
        },
        watch: {
          withTests: {
            options: {
              livereload: true,
            },
            files: ['src/**/*.ts', 'test/**'],
            tasks: ['typescript', 'test']
          },
          withNoTests: {
            options: {
              livereload: true,
              spawn: false,
            },
            files: ['src/**/*.ts', 'test/**'],
            tasks: ['typescript', 'touch']
          },
          withNoTestsLiveReload: {
            options: {
              livereload: true,
              spawn: false,
            },
            files: ['src/**/*.ts', 'test/**', 'ejemplos/**'],
            tasks: ['typescript', 'touch']
          }
        },
    });

    grunt.registerTask('message', 'Muestra que url se tiene que abrir.', function(arg) {
      var msg = '*** Los ejemplos se pueden abrir mediante la URL: http://localhost:8080';
      grunt.log.ok('\n' + msg + '\n');
    });

    grunt.loadNpmTasks('grunt-typedoc');

    //grunt.registerTask('test', ['qunit']);
    //grunt.registerTask('default', ['typescript', 'typedoc', 'test', 'watch:withTests']);


    grunt.registerTask('compilar-con-ejemplos-livereload', ['connect', 'typescript', 'message', 'watch:withNoTestsLiveReload']);
    grunt.registerTask('compilar-y-notificar-live', ['typescript', 'watch:withNoTests']);
    grunt.registerTask('compilar', ['typescript', 'touch' /*'typedoc', 'test'*/]);
}
