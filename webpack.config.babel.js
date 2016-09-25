let webpack  = require("webpack"),
 	path     = require("path"),
 	fs       = require("fs"),
 	nodeModules = path.join(__dirname, "./node_modules")


let env = process.env.NODE_ENV,
	config = {
		// context: path.resolve(__dirname, "src"), 
		entry: {
			app: [
				'./src/jsx/app.jsx',
				"./src/style/app.less"
			],
			vendor: [
				"./src/js/util.js",
				"react",
				"react-dom"
			]
		},

		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bundle.js"
		},

		devtool: false,

		module: {
			loaders: [{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loaders: [
                    "react-hot",				
                    "babel?presets[]=stage-2,presets[]=es2015,presets[]=react",
                ]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					presets: ["es2015","react"]
				}
			},{
				test: /\.less$/,
				loader: "style!css!autoprefixer!less"
			}]
		},

	    resolve: {
	    	extensions: ["", ".js", ".jsx"]
	    },

		plugins: [
			new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
			new webpack.BannerPlugin(
				fs
				  .readFileSync("./LICENSE")
				  .toString("utf-8"))
		]
	}

module.exports = config;