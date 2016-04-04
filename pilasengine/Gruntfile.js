module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-touch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        concat: {
          dist: {
            src: ['tmp/pilasengine.js', 'libs/Tween.js'],
            dest: '../public/libs/pilasengine.js',
          },
          map: {
            src: ['tmp/pilasengine.d.ts'],
            dest: '../public/libs/pilasengine.d.ts',
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
                    declaration: true,
                    sourceMap: false
                }
            }
        },
/*
        qunit: {
          files: ['./tests/index.html']
        },
*/
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
            files: ['src/**/*.ts', 'tests/**', 'ejemplos/**'],
            tasks: ['typescript', 'concat', 'touch', /*'qunit'*/]
          },
        },
    });


    function show_message(message, url) {
      var color = "\x1b[32m";
      var color2 = "\x1b[33m";
      var msg =  "*** " + message;

      console.log(color, msg, color2, url, color, "***");
    }

    function drawLine() {
      var reset = "\x1b[0m";
      var color = "\x1b[32m";
      var line = "*".repeat(83);
      console.log(color, line);
    }

    function clear() {
      var reset = "\x1b[0m";
      console.log(reset, "");
    }

    grunt.registerTask('message', 'Muestra que url se tiene que abrir.', function(arg) {
      clear();
      drawLine();

      show_message("Los ejemplos de pueden abrir desde la URL:", "http://localhost:8089/ejemplos");
      show_message("Los tests de pueden abrir desde la URL:   ", "http://localhost:8089/tests   ");

      drawLine();
      clear();
    });

    grunt.loadNpmTasks('grunt-typedoc');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('compilar-con-ejemplos-livereload', ['connect:tests', 'typescript', 'message', 'watch:withTests']);
    //grunt.registerTask('compilar-y-notificar-live-con-tests', ['connect:tests', 'message', 'watch:withTests' /*'typedoc', 'test'*/]);
    grunt.registerTask('compilar', ['typescript', 'concat', 'touch']);
}
