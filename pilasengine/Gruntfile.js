module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-touch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        concat: {
          dist: {
            src: ['tmp/pilasengine.js', 'libs/Tween.js'],
            dest: '../public/libs/pilasengine.js',
          }
        },
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
                dest: 'tmp/pilasengine.js',
                options: {
                    module: 'CommonJS',
                    removeComments: false,
                    target: 'es5',
                    sourceMap: false
                }
            }
        },
        qunit: {
          files: ['./tests/index.html']
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './ejemplos'
                }
            },
            tests: {
                options: {
                    port: 8089,
                    base: './'
                }
            }
        },
        watch: {
          withTests: {
            options: {
              livereload: true,
              spawn: false,
            },
            files: ['src/**/*.ts', 'tests/**'],
            tasks: ['typescript', 'concat', 'touch', 'qunit']
          },
          withNoTests: {
            options: {
              livereload: true,
              spawn: false,
            },
            files: ['src/**/*.ts', 'ejemplos/**'],
            tasks: ['typescript', 'concat', 'touch']
          }
        },
    });


    function show_message(message, url) {
      var line = "*****************************************************************************";
      var msg =  "*** " + message;
      var color = "\x1b[32m";
      var color2 = "\x1b[33m";
      var reset = "\x1b[0m";

      console.log(reset, "");
      console.log(color, line);
      console.log(color, msg, color2, url, color, "***");
      console.log(color, line);
      console.log(reset, "");
    }

    grunt.registerTask('message', 'Muestra que url se tiene que abrir.', function(arg) {
      show_message("Los ejemplos de pueden abrir desde la URL:", "http://localhost:8080");
    });

    grunt.registerTask('messageTests', 'Muestra que url se tiene que abrir.', function(arg) {
      show_message("Los tests de pueden abrir desde la URL:", "http://localhost:8089/tests");
    });

    grunt.loadNpmTasks('grunt-typedoc');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //grunt.registerTask('test', ['qunit']);
    //grunt.registerTask('default', ['typescript', 'typedoc', 'test', 'watch:withTests']);


    grunt.registerTask('compilar-con-ejemplos-livereload', ['connect', 'typescript', 'message', 'watch:withNoTests']);
    grunt.registerTask('compilar-y-notificar-live', ['typescript', 'watch:withNoTests']);
    grunt.registerTask('compilar-y-notificar-live-con-tests', ['connect:tests', 'messageTests', 'watch:withTests' /*'typedoc', 'test'*/]);
    grunt.registerTask('compilar', ['typescript', 'concat', 'touch']);
}
