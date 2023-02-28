window.onload = function() {
    // get all the image sections
    const imageSections = document.querySelectorAll('.image-section');
  
    // loop through the image sections and animate them
    imageSections.forEach(function(section, index) {
      // set a delay based on the index of the section
      const delay = index * 200;
  
      // fade in the section
      setTimeout(function() {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, delay);
  
      // fade in the image caption
      setTimeout(function() {
        const caption = section.querySelector('.image-caption');
        caption.style.opacity = '1';
        caption.style.transform = 'translateY(0)';
      }, delay + 250);
    });
  }
  