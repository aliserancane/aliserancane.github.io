const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
const loadButton = document.querySelector('#load-soundcloud');
const soundcloudPanel = document.querySelector('#soundcloud-panel');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

loadButton.addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.className = 'soundcloud-frame';
  frame.title = 'Alise Rancāne on SoundCloud';
  frame.allow = 'autoplay';
  frame.loading = 'lazy';
  frame.src = 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/aliserancane&color=%23ff5a36&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=true';
  soundcloudPanel.replaceChildren(frame);
});

document.querySelector('#year').textContent = new Date().getFullYear();
