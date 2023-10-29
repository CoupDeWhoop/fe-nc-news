# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<span id="copy-text">https://nc-news-api-zlkx.onrender.com/</span>
<button onclick="copyToClipboard('copy-text')">Copy</button>

<span id="copy-text">npm install</span>
<button onclick="copyToClipboard('copy-text')">Copy</button>

npm install

<script>
function copyToClipboard(elementId) {
  const textElement = document.getElementById(elementId);
  const textToCopy = textElement.innerText;

  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}
</script>