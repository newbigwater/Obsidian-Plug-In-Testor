```js
<%*
const topic = await tp.system.prompt("📘 Please enter a Topic!")

const folder = tp.file.folder(true)
const parts = folder.split("/")

let Level1 = parts[0]
if (Level1.includes(". ")) {
	Level1 = parts[0].split(". ")[1]
}
let Level2 = ""
if(2 <= count){
	Level2 = parts[1]
}
let Level3 = ""
if(3 <= count){
	Level3 = parts[2]
}

basePath = `${folder}/${topic}`
await app.vault.createFolder(`${basePath}`).catch(() => {})
await tp.file.move(`${basePath}/` + tp.file.title)
await tp.file.rename(`${topic}`)
-%>
```
