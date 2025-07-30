export function toggleMobileNavBar(): void {
  const overlay = document.querySelector('[data-navbar-overlay]');
  const navbarSlider = document.querySelector('[data-navbar-slider]');
  const navbarTab = document.querySelector('[data-navbar-tab]');

  navbarTab?.addEventListener('click', () => {
    console.log('clicked');
    overlay?.classList.toggle('opacity-50');
    overlay?.classList.toggle('pointer-events-none');
    navbarSlider?.classList.toggle('translate-x-[155px]');
  });

  overlay?.addEventListener('click', () => {
    console.log('overlay clicked');
    overlay?.classList.toggle('opacity-50');
    overlay?.classList.toggle('pointer-events-none');
    navbarSlider?.classList.add('translate-x-[155px]');
  });
}
