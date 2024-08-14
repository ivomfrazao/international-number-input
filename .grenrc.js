module.exports = {
	template: {
		release: function (p) {
			let parts = p.date.split("/");
			let date = parts[2] + "-" + parts[1] + "-" + parts[0];
			return "## " + p.release + " (" + date + ")\n" + p.body;
		},
		releaseSeparator: "\n\n",
	},
};