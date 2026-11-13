/* Elite Exterior Cleaning — interactions */
(() => {
  'use strict';

  /* Header state */
  const hdr = document.querySelector('.hdr');
  if (hdr) {
    const onScroll = () => hdr.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Mobile nav */
  const burger = document.querySelector('.burger');
  const mnav = document.getElementById('mnav');
  if (burger && mnav) {
    const setOpen = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      mnav.classList.toggle('is-open', open);
      mnav.hidden = !open;
    };
    burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
    mnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        burger.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && burger.getAttribute('aria-expanded') === 'true') setOpen(false);
    });
  }

  /* Reveal on scroll */
  document
    .querySelectorAll('.steps li, .bigsteps li, .rules li, .faqmini__grid > div, .cbox, .two > .frame, .about__lead, .about__fig, .detail__fig, .detail__copy')
    .forEach((el) => el.classList.add('rv'));
  const revealEls = document.querySelectorAll('.rv');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('on');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('on'));
    }
  }

  /* Surface selector */
  const tabs = [...document.querySelectorAll('.sel__tab')];
  const panels = [...document.querySelectorAll('.sel__panel')];
  if (tabs.length && panels.length) {
    const select = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach((p) => {
        const on = p.id === tab.getAttribute('aria-controls');
        p.hidden = !on;
        p.classList.toggle('is-on', on);
      });
      if (focus) tab.focus();
    };
    tabs.forEach((tab, i) => {
      tab.tabIndex = i === 0 ? 0 : -1;
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        select(tabs[(i + dir + tabs.length) % tabs.length], true);
      });
    });
  }

  /* Work filters */
  const gallery = document.querySelector('[data-gallery]');
  const filterBtns = [...document.querySelectorAll('[data-filter]')];
  if (gallery && filterBtns.length) {
    const items = [...gallery.querySelectorAll('[data-cat]')];
    const empty = document.querySelector('.gal__empty');
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.filter;
        filterBtns.forEach((b) => b.classList.toggle('is-on', b === btn));
        let shown = 0;
        items.forEach((item) => {
          const show = cat === 'all' || item.dataset.cat === cat;
          item.hidden = !show;
          if (show) shown += 1;
        });
        if (empty) empty.hidden = shown > 0;
      });
    });
  }

  /* Lightbox */
  const lb = document.getElementById('lightbox');
  if (lb) {
    const img = lb.querySelector('.lb__img');
    const cap = lb.querySelector('.lb__cap');
    const triggers = [...document.querySelectorAll('[data-lightbox]')];
    let index = 0;
    let lastFocus = null;

    const visibleTriggers = () => triggers.filter((t) => !t.hidden && t.offsetParent !== null);

    const render = () => {
      const list = visibleTriggers();
      if (!list.length) return;
      const t = list[Math.min(index, list.length - 1)];
      const full = t.dataset.full;
      if (full) img.src = full;
      const thumb = t.querySelector('img');
      img.alt = thumb ? thumb.alt : (t.dataset.label || 'Project photo');
      cap.textContent = t.dataset.label || '';
    };

    const open = (t) => {
      lastFocus = t;
      const list = visibleTriggers();
      index = Math.max(0, list.indexOf(t));
      render();
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      lb.querySelector('.lb__close').focus();
    };

    const close = () => {
      lb.hidden = true;
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };

    const step = (dir) => {
      const list = visibleTriggers();
      if (!list.length) return;
      index = (index + dir + list.length) % list.length;
      render();
    };

    triggers.forEach((t) => t.addEventListener('click', () => open(t)));
    lb.querySelector('.lb__close').addEventListener('click', close);
    lb.querySelector('.lb__prev').addEventListener('click', () => step(-1));
    lb.querySelector('.lb__next').addEventListener('click', () => step(1));
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'Tab') {
        const focusables = [lb.querySelector('.lb__close'), lb.querySelector('.lb__prev'), lb.querySelector('.lb__next')].filter(Boolean);
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* Year */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
