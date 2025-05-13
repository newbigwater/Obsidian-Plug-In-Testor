---
Creation date: <% tp.file.creation_date() %>
tags:
  - <% tp.file.folder(true).split("/").join("\n  - ") %>
MOC:
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
%>
<%*
let mocPath = "";
for (let i = 0; i < parts.length; i++) {
	mocPath = i === 0 ? parts[i] : `${mocPath}/${parts[i]}`;
	let mocFilePath = `${mocPath}/${mocPath}.md`;
	
	let mocFile = await app.vault.getAbstractFileByPath(mocFilePath);
	if (!mocFile) {
		let templatefile = await tp.file.find_tfile("Template-Note");
		if (templatefile) {
			const templateContent = await app.vault.read(templatefile);

			console.log(`Create: ${mocFilePath}`);
			await tp.file.create_new(`${templateContent}`, `${mocPath}.md`, false, mocPath);
			mocFile = await app.vault.getAbstractFileByPath(mocFilePath);
		} else {
			new Notice("Template file not found.");
		}
	} else {
		console.log(`Find: ${mocFilePath}`);
	}
}
%>
