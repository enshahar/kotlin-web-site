import '../com/search';
import '../com/cookie-banner';
import CodeMirror from '../com/codemirror/CodeMirror';
import NavTree from '../com/nav-tree';
import $ from 'jquery';

$(document).ready(function () {
  CodeMirror.colorize($('.code._highlighted'));

  const html = document.getElementsByTagName('html')[0];

  html.className = html.className.replace('no-js', '');

  // OS detection
  if (navigator.userAgent.indexOf('Linux') > -1)
    html.className += ' os_linux';

  // Browser detection
  if ('chrome' in window)
    html.className += ' ua_chrome';
  else if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
    html.className += ' ua_firefox';

  // hack to force :active support in mobile Safari
  document.addEventListener("touchstart", function () {
  }, false);

  $('h1,h2,h3').each(function (element) {
    const id = this.getAttribute("id");
    if (id === null) return;
    const referenceElement = document.createElement("a");
    referenceElement.className = "anchor";
    referenceElement.href = "#" + id;
    this.appendChild(referenceElement);
  });

  const sideTreeElement = document.querySelector('.js-side-tree-nav');
  if (sideTreeElement) {
    new NavTree(sideTreeElement);
  }
});