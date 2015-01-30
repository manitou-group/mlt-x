module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['vendor/jquery/dist/jquery.min.js',
              'vendor/bootstrap/dist/js/bootstrap.min.js',
              'src/_assets/js/*.js'],
        dest: '_site/assets/js/<%= pkg.name %>-<%= pkg.version %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */'
      },
      dist: {
        files: {
          '_site/assets/js/<%= pkg.name %>-<%= pkg.version %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    less: {
      build: {
        files: {
          '_site/assets/css/<%= pkg.name %>-<%= pkg.version %>.css': 'src/_assets/less/main.less'
        }
      },
      compile: {
        files: {
          '_site/assets/css/<%= pkg.name %>-<%= pkg.version %>.css': 'src/_assets/less/main.less'
        },
        options: {
          cleancss: true,
          compress: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'concat', 'uglify', 'less:build']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less:build']);

};