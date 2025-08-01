 const toggle = document.getElementById('dogs-toggle');
  const menu = document.getElementById('dogs-menu');

  toggle.addEventListener('click', function (e) {
    e.preventDefault(); // prevent page jump
    menu.classList.toggle('show');
  });

  // Optional: Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('show');
    }
  });


  const Toggle = document.getElementById('cats-toggle');
  const Menu = document.getElementById('cats-menu');

  Toggle.addEventListener('click', function (e) {
    e.preventDefault(); // prevent page jump
    Menu.classList.toggle('show');
  });

  // Optional: Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!Menu.contains(e.target) && !Toggle.contains(e.target)) {
      Menu.classList.remove('show');
    }
  });