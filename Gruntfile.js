module.exports = function(grunt) {
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// concat: {   
	// 	dist: {
	// 		src: [
	// 		'js/libs/*.js',
	// 		'js/app.js'
	// 		],
	// 		dest: 'js/build/production.js',
	// 	}
	// },

	// uglify: {
	// 	build: {
	// 		src: 'js/build/production.js',
	// 		dest: 'js/min/production.min.js'
	// 	}
	// },

	// imagemin: {
	// 	dynamic: {
	// 		files: [{
	// 			expand: true,
	// 			cwd: 'images-build/',
	// 			src: ['*.{png,jpg,gif}'],
	// 			dest: 'img'
	// 		}]
	// 	}
	// },

	sass: {
		dist: {
			options: {
				sourcemap: 'auto',
				style: 'expanded'
			},
			files: {
				'css/barclays_regular.css': 'css/barclays_regular.scss'
			}
		} 
	},
	clean: ['svg_icons/compressed', 'svg_icons/output'],
	svgmin: { //minimize SVG files
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                expand: true,
                cwd: 'svg_icons/raw',
                src: ['*.svg'],
                dest: 'svg_icons/compressed',
                ext: '.colors-light-danger-success.svg'
            }
        },
	grunticon: {
		myIcons: {
			files: [{
				expand: true,
				cwd: 'svg_icons/compressed',
				src: ['*.svg', '*.png'],
				dest: 'css/icons'
			}],
			options: {
				loadersnippet: "grunticon.loader.js",
			}
		}
	},
	watch: {
		options: {
			// livereload: true,
		},
		// scripts: {
		// 	files: ['js/*.js'],
		// 	tasks: ['concat', 'uglify'],
		// 	options: {
		// 		spawn: false,
		// 	},
		// },
		css: {
			files: ['css/**/*.scss'],
			tasks: ['sass'],
			options: {
				spawn: false,
			}
		}
		// svg: {
		// 	files: ['svg/*.svg'],
		// 	tasks: ['grunticon:myIcons'],
		// 	options: {
		// 		spawn: false,
		// 	}
		// }
	}

});

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-svgmin');

    grunt.registerTask('default', 
    	[ 
    	// 'concat', 'uglify', 'imagemin', 
    	'sass', 'clean', 'svgmin', 'grunticon:myIcons', 'watch']);

};


