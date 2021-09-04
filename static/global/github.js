window.onload = () => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = 'https://dislook-science.github.io/pages/home';
  } else window.location.href = 'https://dislook-science.github/pages/home';
};

window.oncontextmenu = (e) => e.preventDefault();
