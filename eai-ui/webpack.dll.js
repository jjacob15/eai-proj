var path = require("path");
var webpack = require("webpack");

module.exports = {
	mode: 'development',
	resolve: {
		extensions: [".js", ".jsx"]
	},
	entry: {
		react: ["react", "react-dom","react-transition-group", "redux","react-redux","redux-logger","redux-thunk"],
		utility: ["babel-polyfill","classnames", "@tweenjs/tween.js","velocityjs",]
	},
	output: {
		path: path.join(__dirname, "build"),
		filename: "[name].dll.js",
		library: "[name]"
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, "build", "[name]-manifest.json"),
			name: "[name]"
		})
	]
};