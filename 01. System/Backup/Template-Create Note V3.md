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

let templateContent = "";
let templatefile = await tp.file.find_tfile("Template-Note");
if (templatefile) {
	templateContent = await app.vault.read(templatefile);
} else{
	console.log(`Not Find Template: Template-Note`);
}

let dir = "";
for (let i = 0; i < parts.length; i++) {
	dir = i === 0 ? parts[i] : `${dir}/${parts[i]}`;
	
	let mocFileName = `${parts[i]}.md`;
	let mocFilePath = `${dir}/${mocFileName}`
	console.log(`mocFile: ${mocFilePath}`);
	
	let mocFile = await app.vault.getAbstractFileByPath(mocFilePath);
	if (!mocFile) {
		await app.vault.create(mocFilePath, templateContent);
		console.log(`Create: ${mocFilePath}`);
	} else {
		console.log(`Find: ${mocFilePath}`);
	}
}
%>
