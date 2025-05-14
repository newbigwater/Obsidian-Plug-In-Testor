module.exports = async (templateFile) => {
	// Templater 플러그인 객체 가져오기
	const tpPlugin = this.app.plugins.plugins["templater-obsidian"];
	const rawTemplate = await this.app.vault.read(templateFile);

	// 템플릿 파싱기 사용해서 렌더링된 문자열 반환
	const rendered = await tpPlugin.templater.render_template(rawTemplate, this.app.workspace.getActiveFile());

	return rendered;
};
