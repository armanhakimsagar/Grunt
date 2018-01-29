module.exports = function(grunt) {
    "use strict";

		//here we will configure our plugging
		
		 grunt.initConfig({
			
			concat: {

				js: {
					src: ['js/*.js'],
					dest: 'build/scripts.js'
				},
				css: {
					src: ['css/*.css'],
					dest: 'build/style.css'
				}
			},
			
			// after concat minify main file
			
			cssmin: {
			  target: {
				files: [{
				  expand: true,
				  src: ['*.css', '!*.min.css'],
				  dest: 'build/style',
				  ext: '.min.css'
				}]
			  }
			},
			
			  uglify: {
				my_target: {
				  files: {
					'dest/output.min.js': ['build/scripts.js']
				  }
				}
			  }
							 
		 });
		 
		
		// after config we need to load it 
		grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-concat');
		
		// register your task for future use
		
		grunt.registerTask('concat-js', ['concat:js']);
		grunt.registerTask('concat-css', ['concat:css']);
		
		
		
		

	}
