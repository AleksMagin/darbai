function changeParagraphColor(color) {
  var paragraphs = document.getElementsByTagName('p');
  for(var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = color;
  }
}