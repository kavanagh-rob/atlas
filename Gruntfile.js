module.exports = function(grunt) {
	
	var projectDependencies = ['angular/angular.min.js','jquery/dist/jquery.min.js'];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    copy:{
    	main:{
    		files:[
    			{expand:true, cwd:'bower_components/', src:projectDependencies, dest:'src/main/webapp/js/build'}
    			]    		
    		}
    },
    sync:{
    },
    clean: ["dist/","build/"]
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['clean','copy:main']);

};