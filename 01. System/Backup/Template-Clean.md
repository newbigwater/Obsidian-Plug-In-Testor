
```js
<%*
const folder = tp.file.folder(true)
const dumyFile = `${folder}/Untitled.md`
if (await app.vault.adapter.exists(dumyFile)) {
  await app.vault.adapter.remove(dumyFile)
  tR += `✅ 파일이 삭제되었습니다: ${dumyFile}`
} else {
  tR += `⚠️ 파일을 찾을 수 없습니다: ${dumyFile}`
}
-%>
```