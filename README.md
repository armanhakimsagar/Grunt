# Grunt
Repository on : GRUNT The JavaScript Task Runner  components : compress , concat &amp; uglify (js &amp; css)
1. node js install


2. npm install -g grunt-cli


3. npm init . (follow package.json file structure in git)


4. npm install grunt --save-dev


5. Check everthing is ok or not :

	Create Gruntfile.js

	module.exports = function(grunt) {
	
		 
		// here our custom task if have any 
		
		 grunt.registerTask('run',function(){
		 
			console.log("im running");
			
		});

	};

	cmd : grunt run
	
	
_________________________

concat 
	
	
6. Concat : we have around 5000 pluggings in grunt. for concat all css & js file need to download :



	cmd > npm install grunt-contrib-concat --save-dev

	
	
	

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
			 
			 });
			 
			
			// after config we need to load it 
			
			grunt.loadNpmTasks('grunt-contrib-concat');
			
			
			// register your css & js task for future use
		
			grunt.registerTask('concat-js', ['concat:js']);
			grunt.registerTask('concat-css', ['concat:css']);
		
		
		}
	
	
	
7. cmd > grunt concat

8. cmd > concat-js		[for future use]


_________________________


minify :



9. minify package download :

   npm install grunt-contrib-cssmin --save-dev	

   
10. mincss: {

		compress : {
			
			files: {
			
				'build/scripts.min.js' : 'build/scripts.js'
			}
		
		}
	},
   
11. load min css package :

	grunt.loadNpmTasks('grunt-contrib-mincss');
	
	
12. cmd > grunt cssmin			[for compress file]





_________________________


Uglify (For minify js) :



13. uglify: {
	my_target: {
	  files: {
		'dest/output.min.js': ['build/scripts.js']
	  }
	}
	
  }	


14. grunt.loadNpmTasks('grunt-contrib-uglify');
 
 
15. grunt.registerTask('concat-js', ['concat:js']);

					
16. cmd > grunt uglify		[for compress file]

