module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-qunit');

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
        watch: {
          withTests: {
            options: {
              livereload: true,
            },
            files: ['src/**/*.ts', 'test/**', 'public/ejemplos/**'],
            tasks: ['typescript', 'test']
          },
          withNoTests: {
            options: {
              livereload: true,
              spawn: false,
            },
            files: ['src/**/*.ts', 'test/**', 'public/ejemplos/**'],
            tasks: ['typescript']
          }
        },
    });


    grunt.loadNpmTasks('grunt-typedoc');

    //grunt.registerTask('test', ['qunit']);
    //grunt.registerTask('default', ['typescript', 'typedoc', 'test', 'watch:withTests']);
    grunt.registerTask('defaultFast', ['typescript', 'watch:withNoTests']);

    grunt.registerTask('only-build', ['typescript', /*'typedoc', 'test'*/]);
}
