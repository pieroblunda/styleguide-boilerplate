document.addEventListener('DOMContentLoaded', (event) => {

  var clipboard = new ClipboardJS('.clipboard');
  clipboard.on('success', function(e) {
      var copyLabel = e.trigger.children[0];
      copyLabel.classList.add('visible');
      setTimeout(function(){ copyLabel.classList.remove('visible'); }, 1200);
      e.clearSelection();
  });

  // Initialize highlightBlock
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });

  // Take out active in all tab-content
  document.querySelectorAll('.tab-content').forEach(function(item, index){
    item.classList.remove('active');
  });

  // Take out active in all buttons
  document.querySelectorAll('button[data-tab-type]').forEach(function(item, index){
    item.classList.remove('active');
  });

  // Set defaults values
  document.querySelectorAll('.tab-content.tab-html').forEach(function(item, index){
    item.classList.add('active');
  });
  document.querySelectorAll('.tabs-wrapper button:first-of-type').forEach(function(item, index){
    item.classList.add('active');
  });

  //- Add event to tab-buttons
  document.querySelectorAll('.tab-component .tabs-wrapper button').forEach(btn => {

    // hide all content
    btn.addEventListener('click', event => {


      // Set active the current menu button
      event.target.parentElement.querySelectorAll('button').forEach(function(item, index){
        item.classList.remove('active');
      });
      event.target.classList.add('active');


      // Set active the current content
      event.target.parentElement.parentElement.querySelectorAll('.tab-content').forEach(function(item, index){
        item.classList.remove('active');
      });
      var tabType = event.target.getAttribute('data-tab-type');
      var element = event.target.parentElement.parentElement.querySelector('.tab-'+tabType.toLowerCase());
      element.classList.add('active');

    });
  });
});
