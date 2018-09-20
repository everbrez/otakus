module.exports = {
	"extends": "airbnb",
	"rules": {
		"react/jsx-filename-extension": [1, {
			"extensions": [".js", ".jsx"]
		}],
		"import/prefer-default-export": "off"
	},
	"globals": {
	"document": false,
	"window": false,
	"it": false,
	"describe": false,
	"fetch": false,
	"test": false,
	"expect": false
}
};