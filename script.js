const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  // innerHTML gets rid of all content in insert tag and put these elements in it
  // The space key returns an empty string with a space in it. if space is clicked replace that with the word 'space'
  insert.innerHTML = `<div class="key">
  ${e.key === ' ' ? 'Space' : e.key} 
  <small>event.key</small>
</div>
<div class="key">
  ${e.keyCode}
  <small>even.keyCode</small>
</div>
<div class="key">
  ${e.code}
  <small>event.code</small>
</div>`;
});
