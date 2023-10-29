# NC NEWS

A React frontend web application that utilises a custom News API

<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>

### Copyable Text Snippets

<p id="text1">Text to be copied</p>
<button class="btn" data-clipboard-action="copy" data-clipboard-target="#text1">Copy</button>

<p id="text2">Another text to be copied</p>
<button class="btn" data-clipboard-action="copy" data-clipboard-target="#text2">Copy</button>

### More Content

Here's some more content for my project.

<script>
document.addEventListener('DOMContentLoaded', function() {
  new ClipboardJS('.btn');
});
</script>
