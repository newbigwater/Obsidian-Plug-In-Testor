// apply_template.js
module.exports = async (templateFile) => {
	const tp = this.app.plugins.plugins["templater-obsidian"].templater;
	await tp.append_template_to_active_file(templateFile);
};