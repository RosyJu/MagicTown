let v = "1.0.0"
let link = document.querySelectorAll('link[rel="stylesheet"]');
let script = document.querySelectorAll("script");
function update(value) {
  let scriptLength = script.length - 1;
  let linkLength = link.length - 1
  while (linkLength >= 0) {
    link[linkLength].href = link[linkLength].href + '?v=' + String(value)
    linkLength = linkLength - 1
  }
  while (scriptLength >= 0) {
    script[scriptLength].src = script[scriptLength].src + '?v=' + String(value)
    scriptLength = scriptLength - 1
  }
}
update(v)