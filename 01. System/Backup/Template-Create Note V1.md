---
Creation date: <% tp.file.creation_date() %>
Tags:
  - <% tp.file.folder(true).split("/").join("\n  - ") %>
---
---
<%*const topic = await tp.system.prompt("📘 Please enter a Topic!")

const folder = tp.file.folder(true)
const parts = folder.split("/")
const count = parts.length

basePath = `${folder}/${topic}`
await app.vault.createFolder(`${basePath}`).catch(() => {})
await tp.file.move(`${basePath}/` + tp.file.title)
await tp.file.rename(`${topic}`)
/*
const templatefile = await tp.file.find_tfile("Template-Note");
if (templatefile) {
	const templateContent = await app.vault.read(templatefile);
	console.log(`${templateContent}`);
	
	const activeFile = app.workspace.getActiveFile();
	if (activeFile) {
		await app.vault.modify(activeFile, templateContent);
	} else {
		new Notice("Active file not found.");
	}
	//await tp.file.create_new(templateContent, `${topic}`, true, `${basePath}/`)
} else {
	new Notice("Template file not found.");
}
*/
%>
