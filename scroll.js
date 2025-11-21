 const container = document.getElementById('marqueeBox');
  const marquee = document.getElementById('marqueeText');

  container.addEventListener('click', () => {
    marquee.classList.toggle('paused');
  });