
  function showSection(sectionId, event) {
    // Hide all sections
    document.querySelectorAll('.resume-content .content').forEach(content => content.classList.remove('active'));

    // Remove active from buttons
    document.querySelectorAll('.resume-buttons .btn').forEach(btn => btn.classList.remove('active'));

    // Show the clicked section
    document.getElementById(sectionId).classList.add('active');

    // Highlight active button
    event.target.classList.add('active');
  }
  const resumeContent = document.querySelector('.resume-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(c => c.classList.remove('active'));
      const activeContent = document.getElementById(tab.dataset.target);
      activeContent.classList.add('active');

      // Adjust container height dynamically
      resumeContent.style.height = activeContent.offsetHeight + "px";
    });
  });

  // Set initial height on page load
  window.addEventListener('load', () => {
    const activeContent = document.querySelector('.resume-content .content.active');
    resumeContent.style.height = activeContent.offsetHeight + "px";
  });
  // Sidebar toggle
