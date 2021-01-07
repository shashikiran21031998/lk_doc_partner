function copyToClipboard(container) {
  const el = document.createElement('textarea');
  el.value = container.textContent.replace(/\n$/, '');
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function setupLangSelector(){
  var s0='<a href="#" data-language-name=';
  var l=$('body').data('languages');
  var a='';
  for(var i=0;i<l.length;i++){
     a+=s0+"'"+l[i]+"' >"+l[i]+'</a>'

  }

  $('pre.highlight.shell').prepend('<div class="lang-selector1">'+a+'</div>');
  $('pre.highlight.python').prepend('<div class="lang-selector1">'+a+'</div>');
  $('pre.highlight.java').prepend('<div class="lang-selector1">'+a+'</div>');
  
  window.pushURL('shell');
    window.activateLanguage('shell');
  $(".lang-selector1 a").on("click", function() {
    var language = $(this).data("language-name");
    window.pushURL(language);
    window.activateLanguage(language);
    return false;
  });
}

function setupCodeCopy() {
  setupLangSelector();
  $('pre.highlight.java').prepend('<div class="copy-clipboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg></div>');
  $('pre.highlight.shell').prepend('<div class="copy-clipboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg></div>');
  $('pre.highlight.python').prepend('<div class="copy-clipboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg></div>');
  
   $('.copy-clipboard').on('click', function() {
    copyToClipboard(this.parentNode.children[2]);
  });
}
