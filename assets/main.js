import { Buffer } from 'buffer';
import matter from 'gray-matter';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import indexContent from '../index.md?raw';
import 'index.css';

// Polyfill Buffer
window.Buffer = Buffer;

const logoHtml = `
  <div class="logo-container">
    <a href="/" class="logo-link" aria-label="ŞahvMat - Dijital Satranç Dergisi">
      <span class="logo-main">
        <span class="logo-sah">Şah</span>
        <span class="logo-v">v</span>
        <span class="logo-mat">Mat</span>
      </span>
      <span class="logo-sub">
        <span class="tagline">DİJİTAL SATRANÇ DERGİSİ</span>
        <span class="logo-dot" aria-hidden="true"></span>
      </span>
    </a>
  </div>
`;

function init() {
  // Render Logos
  document.getElementById('header-logo-container').innerHTML = logoHtml;
  document.getElementById('footer-logo-container').innerHTML = logoHtml;
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Parse Frontmatter and Markdown
  const { data, content: markdownContent } = matter(indexContent);
  
  // Update Title if needed (metadata is updated in HTML generally)
  if (data.title) {
    document.title = `${data.title} - ŞahvMat`;
  }

  // Render Markdown
  const rawHtml = marked.parse(markdownContent);
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  document.getElementById('content').innerHTML = cleanHtml;

  // Scroll logic
  const logoHeader = document.getElementById('site-logo');
  function onScroll() {
    const scrollPos = Math.max(0, window.scrollY);
    if (scrollPos > 50) {
      logoHeader.classList.add('is-scrolled', 'shadow-sm');
    } else if (scrollPos < 20) {
      logoHeader.classList.remove('is-scrolled', 'shadow-sm');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

document.addEventListener('DOMContentLoaded', init);
