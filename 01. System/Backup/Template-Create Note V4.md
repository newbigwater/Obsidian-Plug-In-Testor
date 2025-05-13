---
Creation date: <% tp.file.creation_date() %>
tags:
  - <% tp.file.folder(true).split("/").join("\n  - ") %>
BackLinks: 
OutgoingLinks:
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

let mocFile = null

for (let i = 0; i < parts.length; i++) {
	dir = i === 0 ? parts[i] : `${dir}/${parts[i]}`;
	
	let mocFileName = `${parts[i]}.md`;
	let mocFilePath = `${dir}/${mocFileName}`
	console.log(`mocFile: ${mocFilePath}`);
	
	let mocFile = await app.vault.getAbstractFileByPath(mocFilePath);
	if (!mocFile) {
		mocFile = await app.vault.create(mocFilePath, templateContent);
		console.log(`Create: ${mocFilePath}`);
	} else {
		console.log(`Find: ${mocFilePath}`);
	}

	if(i == parts.length - 1){
		const targetPath = `${basePath}/${topic}`; // 예: language/a/a
		const displayName = topic;               // 예: a
		const yamlLink = `  - "[[${targetPath}|${displayName}]]"`;
		
		const original = await app.vault.read(mocFile);
		if (!original.includes(yamlLink)) {
			const updated = original.replace(/Outgoinglinks:\s*\n/, match => `${match}${yamlLink}\n`);
			await app.vault.modify(mocFile, updated);
			console.log(`✅ Top-level MOC에 링크 추가됨: ${yamlLink}`);
		} else {
			console.log(`🔁 이미 존재함: ${yamlLink}`);
		}
	}
}
%>