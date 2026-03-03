// Shared nav — injected by each page's inline script
const NAV = `
<nav>
  <a href="/" class="nav-logo"></a>
  <div class="nav-item">
    <div class="nav-dash"></div>
    <a href="/tools/prompt-architect" class="nav-label">AI TOOLS</a>
    <div class="nav-sub">
      <a href="/tools/prompt-architect">Prompt Architect</a>
      <a href="/tools/image-cropper">Image Cropper</a>
    </div>
  </div>
  <div class="nav-item">
    <div class="nav-dash"></div>
    <a href="/about" class="nav-label">ABOUT</a>
  </div>
  <div class="nav-item">
    <div class="nav-dash"></div>
    <a href="/projects" class="nav-label">PROJECTS</a>
  </div>
  <div class="nav-item">
    <div class="nav-dash"></div>
    <a href="/profile" class="nav-label">PROFILE</a>
  </div>
  <div class="nav-right">
    <div class="nav-right-dash"></div>
    <a href="/" class="nav-right-label">CHAOS-LAB</a>
  </div>
</nav>`;
document.body.insertAdjacentHTML('afterbegin', NAV);
