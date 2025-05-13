---
creation date: <% tp.file.creation_date() %>
tags:
  - abc
  - abc123
---

```js
<%*
const topic = await tp.system.prompt("📘 Please enter a Topic!")

const folder = tp.file.folder(true)
const parts = folder.split("/")
const Level1 = parts[0].split(". ")[1]
const Level2 = parts[1]
const Level3 = parts[2]

basePath = `${folder}/${topic}/CMDS`
if (Level1 === "Area") {
    await app.vault.createFolder(`${basePath}/01. Merge`).catch(() => {})
    await app.vault.createFolder(`${basePath}/02. Develop`).catch(() => {})
    await app.vault.createFolder(`${basePath}/03. Share`).catch(() => {})
} else if (Level1 === "Resource") {
    await app.vault.createFolder(basePath).catch(() => {})
}
-%>
```
