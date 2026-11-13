import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const ORIGIN = 'https://ari-builds.github.io/elite-exterior-cleaning-site';
const REPO = 'elite-exterior-cleaning-site';

const M = JSON.parse(fs.readFileSync('C:/Users/Arian/AppData/Local/Temp/opencode/asset-manifest.json', 'utf8')).elite;

const S = {
  name: 'Elite Exterior Cleaning',
  short: 'Elite Exterior',
  tel: '(770) 744-0271',
  telHref: 'tel:+17707440271',
  area: 'Metro Atlanta & North Georgia',
  towns: ['Alpharetta', 'Roswell', 'Marietta', 'Sandy Springs', 'Johns Creek', 'Cumming', 'Woodstock', 'Kennesaw', 'Brookhaven', 'Decatur', 'Duluth', 'Gainesville'],
};

const NAV = [
  ['Services', 'services/', 'services'],
  ['Work', 'work/', 'work'],
  ['Process', 'process/', 'process'],
  ['About', 'about/', 'about'],
  ['Contact', 'contact/', 'contact'],
];

const SERVICES = [
  {
    slug: 'house-washing',
    n: '01',
    title: 'House washing',
    kicker: 'Soft wash',
    short: 'Siding, stucco, brick and vinyl — cleaned at low pressure with a solution that keeps working after we leave.',
    lede: 'The safe way to clean a house: low pressure, correct chemistry, and a rinse that takes the growth with it.',
    body: [
      'Most of what makes a house look dirty is alive — algae, mildew, pollen and spider webs. Blasting it with a pressure washer strips the surface and drives water behind the siding. We use a soft wash: low pressure, a properly diluted cleaning solution, and dwell time so the growth is killed rather than smeared.',
      'Vinyl, HardiePlank, stucco, brick and painted wood all get a different mix and a different tip. Landscaping is wet down and covered, windows are rinsed, and the plants go back to normal the same day.',
    ],
    includes: ['Soft wash, not high pressure', 'Siding, soffits, fascia and eaves', 'Windows and screens rinsed', 'Landscaping protected', 'Spot-free final rinse', 'Walkaround before we pack up'],
    img: 'work-01',
    alt: 'House washing on a North Georgia home',
    best: 'Vinyl, stucco, brick, HardiePlank and painted wood',
  },
  {
    slug: 'roof-cleaning',
    n: '02',
    title: 'Roof cleaning',
    kicker: 'Algae treatment',
    short: 'Black streaks are algae, not dirt. A low-pressure treatment kills the growth without voiding the shingle warranty.',
    lede: 'Those black streaks are a living organism. Pressure washing spreads them; treatment ends them.',
    body: [
      'The dark streaking on asphalt shingles is gloeocapsa magma, an algae that feeds on the limestone in the shingle. Pressure washing removes the top layer and takes the granules with it, which is why most roof warranties exclude it.',
      'We apply a low-pressure treatment, let it dwell, and rinse. The streaks lift over the following days and weeks, and the roof comes back without a single high-pressure pass. We protect gutters, plants and anything below the roofline before we start.',
    ],
    includes: ['Low-pressure only', 'Algae, moss and lichen treatment', 'Gutter and downspout protection', 'Landscaping covered and rinsed', 'No shingle granule loss', 'Before-and-after documentation'],
    img: 'work-05',
    alt: 'Roof cleaning on an Atlanta-area home',
    best: 'Asphalt shingle, metal and tile roofs',
  },
  {
    slug: 'driveway-cleaning',
    n: '03',
    title: 'Driveway & concrete',
    kicker: 'Surface cleaning',
    short: 'Red clay, oil, rust and tire marks lifted from concrete, pavers and aggregate — without a zebra-striped finish.',
    lede: 'Even passes, clean edges and no wand marks. Concrete should look uniform when we leave.',
    body: [
      'A driveway is usually the first thing people see and the last thing that gets cleaned. Red Georgia clay, oil drips, rust from a planter and tyre marks all need different treatment, and a single fast pass with a wand leaves stripes that never come out.',
      'We use a surface cleaner for an even finish, pre-treat the stains, and rinse the edges by hand. Pavers are cleaned at lower pressure with the joints protected, and we can quote a re-sand afterwards if the joints need it.',
    ],
    includes: ['Surface-cleaner finish, no wand stripes', 'Oil, rust and clay pre-treatment', 'Edges and expansion joints by hand', 'Paver-safe pressure', 'Post-clean rinse of surrounding surfaces', 'Optional re-sand for pavers'],
    img: 'work-03',
    alt: 'Driveway cleaning in Metro Atlanta',
    best: 'Concrete, pavers, aggregate and asphalt',
  },
  {
    slug: 'deck-and-patio',
    n: '04',
    title: 'Deck & patio',
    kicker: 'Outdoor living',
    short: 'Wood, composite, pavers and stone cleaned and made ready for sealing, staining or a summer of use.',
    lede: 'Cleaned at the right pressure for the material — not the same tip used on the driveway.',
    body: [
      'Wood wants low pressure and a brightener. Composite wants a gentle wash and no aggressive tip. Pavers want a surface cleaner and clean joints. Using one setting for all three is how decks get furred and composite gets scuffed.',
      'We clean, rinse and let the surface dry, then tell you honestly whether it needs sealing or staining and how soon. If you want the sealing done, that is quoted separately and scheduled for a dry stretch.',
    ],
    includes: ['Material-specific pressure and tips', 'Wood brightening where needed', 'Composite-safe wash', 'Paver joints protected', 'Furniture moved and returned', 'Sealing quote on request'],
    img: 'work-06',
    alt: 'Deck and patio cleaning',
    best: 'Wood, composite, pavers and natural stone',
  },
  {
    slug: 'fence-cleaning',
    n: '05',
    title: 'Fence cleaning',
    kicker: 'Wood & vinyl',
    short: 'Wood and vinyl fences washed without furring the grain, plus gate hardware and posts rinsed clean.',
    lede: 'A fence is a lot of surface area and very little margin for error.',
    body: [
      'Wood fences hold dirt, mildew and tannin. Too much pressure raises the grain and leaves a fuzzy surface that never looks clean again. We wash at low pressure with a solution matched to the material, then rinse thoroughly.',
      'Vinyl comes up quickly with the right mix. Either way we clean both sides where access allows, rinse the posts and hardware, and protect the lawn and beds underneath.',
    ],
    includes: ['Low-pressure wood washing', 'Mildew and tannin treatment', 'Both sides where accessible', 'Gate hardware and posts rinsed', 'Lawn and beds protected', 'Staining quote on request'],
    img: 'work-07',
    alt: 'Fence cleaning in North Georgia',
    best: 'Cedar, pressure-treated pine and vinyl',
  },
  {
    slug: 'gutter-cleaning',
    n: '06',
    title: 'Gutter cleaning',
    kicker: 'Flow & fascia',
    short: 'Debris out, downspouts tested, fascia rinsed — before the next storm finds the weak point.',
    lede: 'Clean gutters are a water-management job, not a cosmetic one.',
    body: [
      'A blocked gutter sends water down the fascia, behind the siding and into the foundation. We remove the debris by hand, flush the downspouts, and check that water actually leaves the building where it should.',
      'We bag the debris rather than dropping it in the beds, rinse the fascia and report anything that looks like a loose hanger, a leaking joint or a downspout that needs re-routing.',
    ],
    includes: ['Debris removed by hand', 'Downspouts flushed and tested', 'Fascia rinsed', 'Debris bagged and removed', 'Hanger and joint check', 'Photo report of problem areas'],
    img: 'work-10',
    alt: 'Gutter cleaning on a Metro Atlanta property',
    best: 'Every roof with gutters, before storm season',
  },
  {
    slug: 'commercial-cleaning',
    n: '07',
    title: 'Commercial exterior',
    kicker: 'Storefronts & property',
    short: 'Storefronts, sidewalks, dumpster pads, entryways and fleet areas — scheduled around your hours.',
    lede: 'Curb appeal on a schedule, not when someone finally complains.',
    body: [
      'Commercial exterior cleaning is about consistency. We build a scope per site — storefront glass and entry, sidewalks, dumpster pad, drive-through, building wash — and put it on a recurring calendar so it never becomes a crisis.',
      'Early-morning and after-hours work is normal for us. One point of contact, a written scope, and a photo record after each visit. Property managers and restaurant operators get the same standard as a homeowner.',
    ],
    includes: ['Storefront and entry cleaning', 'Sidewalks and dumpster pads', 'Building and awning wash', 'Recurring schedules', 'After-hours availability', 'Photo record each visit'],
    img: 'work-11',
    alt: 'Commercial exterior cleaning project',
    best: 'Retail, restaurants, offices and multi-unit properties',
  },
];

const WORK = [
  ['work-01', 'House wash', 'Alpharetta', 'house'],
  ['work-02', 'House wash', 'Roswell', 'house'],
  ['work-03', 'Driveway', 'Marietta', 'driveway'],
  ['work-04', 'House wash', 'Sandy Springs', 'house'],
  ['work-05', 'Roof treatment', 'Johns Creek', 'roof'],
  ['work-06', 'Deck & patio', 'Cumming', 'deck'],
  ['work-07', 'Fence cleaning', 'Woodstock', 'fence'],
  ['work-08', 'Exterior wash', 'Brookhaven', 'house'],
  ['work-09', 'Roof treatment', 'Kennesaw', 'roof'],
  ['work-10', 'Driveway & gutters', 'Decatur', 'driveway'],
  ['work-11', 'Commercial exterior', 'Duluth', 'commercial'],
  ['work-12', 'Deck & patio', 'Gainesville', 'deck'],
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const url = (d, p) => '../'.repeat(d) + p;
const asset = (d, f) => '../'.repeat(d) + 'assets/opt/' + f;

const icons = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M4 12h15M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-tel" viewBox="0 0 24 24"><path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006.5 6.5l1.5-2 4 1.5v3A2.5 2.5 0 0118.5 21C10.5 21 3 13.5 3 5.5A2.5 2.5 0 015.5 3z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0113 0c0 4.8-6.5 11-6.5 11z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="i-spray" viewBox="0 0 24 24"><path d="M9 8h6v13H9zM9 8V5h6v3M6 11H3M19 4l2-1M19 8h3M17 2v3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
</defs></svg>`;

const logo = (d) => `<a class="logo" href="${d === 0 ? '#top' : url(d, '')}" aria-label="${S.name}, home">
  <span class="logo__mark" aria-hidden="true">E</span>
  <span class="logo__txt"><strong>Elite</strong><span class="mono">Exterior Cleaning</span></span>
</a>`;

const head = ({ d, title, desc, canonical, og, jsonld, active = '', base = '' }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<script>document.documentElement.classList.add('js');</script>
${base ? `<base href="${base}">` : ''}
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${ORIGIN}/${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${ORIGIN}/${canonical}">
<meta property="og:image" content="${ORIGIN}/assets/opt/${og}">
<meta name="theme-color" content="#0A0C0E">
<link rel="icon" href="${asset(d, 'work-11.webp')}" type="image/webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${url(d, 'styles.css')}">
<script type="application/ld+json">${jsonld}</script>
</head>
<body>
${icons()}
<a class="skip" href="#main">Skip to content</a>
<header class="hdr" id="top">
  <div class="shell hdr__in">
    ${logo(d)}
    <nav class="nav" aria-label="Main">
      ${NAV.map(([label, p, key]) => `<a href="${url(d, p)}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`).join('\n      ')}
    </nav>
    <a class="tel" href="${S.telHref}"><span class="mono">Free estimate</span><strong>${S.tel}</strong></a>
    <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="mnav"><span></span><span></span><span></span></button>
  </div>
  <div class="mnav" id="mnav" hidden>
    ${NAV.map(([label, p]) => `<a href="${url(d, p)}">${label}</a>`).join('\n    ')}
    <a class="mnav__tel" href="${S.telHref}">${S.tel}</a>
    <a class="btn btn--gold" href="${url(d, 'contact/')}">Request a free estimate</a>
  </div>
</header>`;

const foot = (d) => `<footer class="foot">
  <div class="shell foot__top">
    <div class="foot__brand">
      ${logo(d)}
      <p>Soft washing, pressure washing, roof treatment, gutters and commercial exterior cleaning across ${S.area}.</p>
      <a class="foot__tel" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
    </div>
    <div class="foot__col">
      <h4 class="mono">Services</h4>
      ${SERVICES.map((s) => `<a href="${url(d, `services/#${s.slug}`)}">${s.title}</a>`).join('\n      ')}
    </div>
    <div class="foot__col">
      <h4 class="mono">Company</h4>
      <a href="${url(d, 'about/')}">About</a>
      <a href="${url(d, 'work/')}">Recent work</a>
      <a href="${url(d, 'process/')}">Our process</a>
      <a href="${url(d, 'contact/')}">Contact</a>
    </div>
    <div class="foot__col">
      <h4 class="mono">Service area</h4>
      <p class="foot__area">${S.towns.slice(0, 8).join(' · ')}</p>
      <p class="foot__fine">Metro Atlanta &amp; North Georgia. Ask if you are just outside the list.</p>
    </div>
  </div>
  <div class="shell foot__bottom">
    <span class="mono">© <span data-year>2026</span> ${S.name}</span>
    <span class="mono">Free estimates · Owner-operated</span>
  </div>
</footer>`;

const ctaBand = (d) => `<section class="band">
  <div class="shell band__in">
    <div>
      <span class="label">Free estimate</span>
      <h2>Send us the<br><em>address.</em></h2>
      <p>One walkaround, a written quote, and a date. No deposit and no pressure — if the surface does not need cleaning, we will tell you.</p>
    </div>
    <div class="band__acts">
      <a class="btn btn--gold btn--lg" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
      <a class="btn btn--ghost btn--lg" href="${url(d, 'contact/')}">Request online</a>
      <span class="mono band__note">${S.area}</span>
    </div>
  </div>
</section>`;

const crumbs = (trail) => {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' }];
  trail.forEach((t, i) => items.push({ '@type': 'ListItem', position: i + 2, name: t[0], item: `${ORIGIN}/${t[1]}` }));
  return { '@type': 'BreadcrumbList', itemListElement: items };
};

const biz = () => ({
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${ORIGIN}/#business`,
  name: S.name,
  description: 'Soft washing, pressure washing, roof cleaning, driveway and deck cleaning, gutter cleaning and commercial exterior cleaning across Metro Atlanta and North Georgia.',
  url: ORIGIN + '/',
  image: `${ORIGIN}/assets/opt/hero.webp`,
  telephone: '+1-770-744-0271',
  areaServed: ['Metro Atlanta', 'North Georgia', 'Alpharetta', 'Roswell', 'Marietta', 'Sandy Springs', 'Johns Creek', 'Cumming', 'Woodstock', 'Kennesaw'],
  priceRange: '$$',
  founder: { '@type': 'Person', name: 'Justin Hall' },
});

function page(opts, body) {
  const jsonld = JSON.stringify(opts.jsonld);
  const html = `${head({ ...opts, jsonld })}
<main id="main">
${body}
</main>
${foot(opts.d)}
<script src="${url(opts.d, 'script.js')}" defer></script>
</body>
</html>
`.replace(/(src|href|data-full)="assets\/opt\//g, (m, attr) => `${attr}="${'../'.repeat(opts.d)}assets/opt/`);
  const out = opts.canonical === '' || opts.canonical.endsWith('/')
    ? path.join(ROOT, opts.canonical, 'index.html')
    : path.join(ROOT, opts.canonical);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log('wrote', path.relative(ROOT, out));
}

/* ------------------------------------------------------------------ */
/* home                                                                */
/* ------------------------------------------------------------------ */

const SURFACES = [
  { id: 'house', label: 'House', img: 'work-01', h: 'Siding that looks new again.', p: 'Low-pressure soft washing for vinyl, stucco, brick and painted wood. The solution does the work, so the surface keeps its finish.', ticks: ['Windows and screens rinsed', 'Landscaping protected', 'Walkaround before we leave'] },
  { id: 'roof', label: 'Roof', img: 'work-05', h: 'Black streaks are algae.', p: 'A low-pressure treatment that kills the growth instead of blasting the granules off your shingles. The streaks lift over the following weeks.', ticks: ['No high pressure on shingles', 'Gutters and plants covered', 'Before-and-after photos'] },
  { id: 'driveway', label: 'Driveway', img: 'work-03', h: 'Clean concrete, even finish.', p: 'Red clay, oil and rust pre-treated, then cleaned with a surface cleaner so you get an even finish instead of wand stripes.', ticks: ['No zebra striping', 'Edges and joints by hand', 'Paver-safe options'] },
  { id: 'deck', label: 'Deck & fence', img: 'work-07', h: 'The right pressure for the material.', p: 'Wood, composite, vinyl and pavers each get their own tip and their own mix — so a deck is cleaned, not furred.', ticks: ['Low-pressure wood washing', 'Mildew and tannin treatment', 'Sealing quote on request'] },
];

const home = `
<section class="hero">
  <div class="shell hero__grid">
    <div class="hero__copy rv">
      <span class="label"><span class="label__dot" aria-hidden="true"></span>${S.area}</span>
      <h1>A higher<br>standard of<br><em>exterior cleaning.</em></h1>
      <p class="hero__p">Soft washing, pressure washing, roofs, driveways, decks and gutters — done with the right pressure for the surface, and a walkaround before we call it finished.</p>
      <div class="hero__acts">
        <a class="btn btn--gold btn--lg" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
        <a class="btn btn--ghost btn--lg" href="contact/">Request an estimate</a>
      </div>
      <ul class="hero__ticks">
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Free, written estimates</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Owner-operated</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Residential &amp; commercial</li>
      </ul>
    </div>
    <div class="hero__media rv rv-d1">
      <figure class="plate"><img src="assets/opt/hero.webp" alt="Exterior cleaning in Metro Atlanta" width="${M.hero.w}" height="${M.hero.h}" fetchpriority="high" decoding="async"></figure>
      <span class="hero__rail mono">Soft wash · Pressure wash · Roof · Driveway · Deck · Gutters</span>
      <div class="hero__badge"><span>Free</span><span class="mono">estimates</span></div>
    </div>
  </div>
  <div class="shell hero__foot">
    <span class="mono">01 — Exterior cleaning, ${S.area}</span>
    <span class="mono">A higher standard</span>
  </div>
</section>

<section class="sec why">
  <div class="shell why__grid">
    <div class="why__head rv">
      <span class="label">Why it matters</span>
      <h2>Dirt is not the<br><em>real problem.</em></h2>
    </div>
    <div class="why__body rv rv-d1">
      <p class="lead">The problem is what the dirt is holding: algae eating into shingles, mildew in the siding, clay packed into concrete, and water finding a gutter that stopped flowing months ago.</p>
      <p>Elite Exterior Cleaning is owner-operated by Justin Hall and works across ${S.area}. The approach is simple — identify the surface, choose the right pressure and chemistry, protect everything that should not get wet, and do not leave until the edges match the middle.</p>
      <div class="why__notes">
        <div><span class="mono">01</span><strong>Right pressure</strong><p>Soft wash where it belongs, surface cleaner where it belongs, and never the same tip for both.</p></div>
        <div><span class="mono">02</span><strong>Right chemistry</strong><p>Dilution matched to the material, so the growth dies without bleaching the finish.</p></div>
        <div><span class="mono">03</span><strong>Right finish</strong><p>Edges, corners, joints and the walkaround — the parts a fast crew skips.</p></div>
      </div>
      <a class="link" href="process/">See how a job runs <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
  </div>
</section>

<section class="sec sel" id="surfaces">
  <div class="shell">
    <div class="sechead rv">
      <span class="label">02 — Pick a surface</span>
      <h2>What are we<br><em>cleaning?</em></h2>
      <p class="sechead__p">Four common surfaces, four different methods. Tap one to see what changes.</p>
    </div>
    <div class="sel__tabs" role="tablist" aria-label="Surface">
      ${SURFACES.map((s, i) => `<button class="sel__tab" role="tab" aria-selected="${i === 0}" aria-controls="panel-${s.id}" id="tab-${s.id}">${String(i + 1).padStart(2, '0')} ${s.label}</button>`).join('\n      ')}
    </div>
    <div class="sel__panels">
      ${SURFACES.map((s, i) => `<div class="sel__panel${i === 0 ? ' is-on' : ''}" id="panel-${s.id}" role="tabpanel" aria-labelledby="tab-${s.id}"${i === 0 ? '' : ' hidden'}>
        <figure class="sel__fig"><img src="assets/opt/${M[s.img].small}" alt="${esc(s.label)} cleaning by Elite Exterior Cleaning" width="${M[s.img].w}" height="${M[s.img].h}" decoding="async"></figure>
        <div class="sel__copy">
          <h3>${s.h}</h3>
          <p>${s.p}</p>
          <ul class="ticks">${s.ticks.map((t) => `<li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>${t}</li>`).join('')}</ul>
          <a class="btn btn--ghost" href="contact/">Get this quoted <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
        </div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="sec svcs">
  <div class="shell">
    <div class="sechead sechead--split rv">
      <div><span class="label">03 — Services</span><h2>Seven things<br><em>we clean.</em></h2></div>
      <p class="sechead__p">Residential and commercial, inside the perimeter and well outside it. Every estimate is written, not guessed on the phone.</p>
    </div>
    <ol class="svc">
      ${SERVICES.map((s) => `<li class="svc__item rv">
        <a class="svc__row" href="services/#${s.slug}">
          <span class="svc__n mono">${s.n}</span>
          <span class="svc__t">${s.title}</span>
          <span class="svc__d">${s.short}</span>
          <span class="svc__go"><svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></span>
          <span class="svc__peek"><img src="assets/opt/${s.img}-880.webp" alt="" loading="lazy" decoding="async"></span>
        </a>
      </li>`).join('\n      ')}
    </ol>
    <div class="svcs__foot">
      <a class="btn btn--gold" href="services/">All services <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <span class="mono">Written scope · no deposit</span>
    </div>
  </div>
</section>

<section class="sec sec--surface detail">
  <div class="shell detail__grid">
    <figure class="detail__fig">
      <img src="assets/opt/detail.webp" alt="Exterior cleaning detail" width="${M.detail.w}" height="${M.detail.h}" loading="lazy" decoding="async">
      <figcaption class="mono">Rinse, edge, walkaround</figcaption>
    </figure>
    <div class="detail__copy">
      <span class="label">04 — The finish</span>
      <h2>The last ten<br>minutes are<br><em>the job.</em></h2>
      <p>Anyone can point a pressure washer. The difference is in what happens after the big pass: the corners, the edges, the expansion joints, the windows, the plants, the gate that has to close the way it did before.</p>
      <ul class="ticks ticks--two">
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Edges cut in by hand</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Windows and screens rinsed</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Furniture moved and returned</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Landscaping watered and protected</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Debris bagged, not left</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Walkaround before we pack up</li>
      </ul>
      <a class="btn btn--gold" href="contact/">Book a walkaround <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
  </div>
</section>

<section class="sec proc">
  <div class="shell">
    <div class="sechead sechead--split rv">
      <div><span class="label">05 — The process</span><h2>Four steps,<br><em>no mystery.</em></h2></div>
      <p class="sechead__p">You know who is coming, what they will use, and what it costs before anyone pulls into the driveway.</p>
    </div>
    <ol class="steps">
      <li><span class="mono">01</span><h3>Walkaround</h3><p>Fifteen minutes on site. We test a small area, check the surface and the water source, and photograph anything delicate.</p></li>
      <li><span class="mono">02</span><h3>Written quote</h3><p>A fixed price for the scope, with the method named. No vague range and no day-of upcharge.</p></li>
      <li><span class="mono">03</span><h3>Protect &amp; clean</h3><p>Plants covered and wet down, windows closed, then the right method for each surface — soft wash or surface cleaner.</p></li>
      <li><span class="mono">04</span><h3>Walk it with us</h3><p>We walk the property together, fix anything you spot, and leave the before-and-after photos with the invoice.</p></li>
    </ol>
    <a class="link" href="process/">More about the process <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
  </div>
</section>

<section class="sec work">
  <div class="shell">
    <div class="sechead sechead--split rv">
      <div><span class="label">06 — Recent work</span><h2>Before, after,<br><em>and in between.</em></h2></div>
      <a class="link" href="work/">See all 12 projects <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
    <div class="gal">
      ${WORK.slice(0, 6).map(([img, label, town], i) => `<a class="gal__item rv" href="work/" aria-label="${esc(label)} in ${esc(town)}">
        <img src="assets/opt/${M[img].small}" alt="${esc(label)} in ${esc(town)}" width="${M[img].w}" height="${M[img].h}" loading="lazy" decoding="async">
        <span class="gal__cap"><span class="mono">${String(i + 1).padStart(2, '0')}</span>${label} · ${town}</span>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="sec area">
  <div class="shell area__grid">
    <div>
      <span class="label">07 — Where we work</span>
      <h2>Metro Atlanta,<br><em>and north of it.</em></h2>
      <p>We are based in the metro and work the northern corridor, from inside the perimeter out toward Gainesville. If you are just outside the list, call — the answer is usually yes.</p>
      <a class="foot__tel foot__tel--big" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
    </div>
    <ul class="area__list">
      ${S.towns.map((t) => `<li>${t}</li>`).join('')}
    </ul>
  </div>
</section>

${ctaBand(0)}
`;

page({
  d: 0,
  title: `Elite Exterior Cleaning | Pressure Washing in Metro Atlanta`,
  desc: 'Soft washing, pressure washing, roof cleaning, driveways, decks and gutters across Metro Atlanta and North Georgia. Free written estimates.',
  canonical: '',
  og: 'hero.webp',
  active: 'home',
  jsonld: {
    '@context': 'https://schema.org',
    '@graph': [biz(), {
      '@type': 'WebSite',
      '@id': ORIGIN + '/#website',
      url: ORIGIN + '/',
      name: S.name,
      publisher: { '@id': ORIGIN + '/#business' },
    }],
  },
}, home);

/* ------------------------------------------------------------------ */
/* services                                                            */
/* ------------------------------------------------------------------ */

const servicesBody = `
<section class="phero">
  <div class="shell phero__grid">
    <div>
      <span class="label">Services</span>
      <h1>Seven services.<br><em>One standard.</em></h1>
      <p>House washing, roofs, concrete, decks, fences, gutters and commercial exteriors across ${S.area}.</p>
      <a class="phero__tel" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
    </div>
    <figure class="plate plate--sm"><img src="assets/opt/work-04.webp" alt="House washing in Metro Atlanta" width="${M['work-04'].w}" height="${M['work-04'].h}" decoding="async"></figure>
  </div>
</section>

<section class="sec">
  <div class="shell">
    <div class="cmp">
      <div class="cmp__head">
        <span class="label">Choose the method</span>
        <h2>Soft wash or<br><em>pressure wash?</em></h2>
      </div>
      <div class="cmp__grid">
        <div class="cmp__col">
          <h3>Soft wash</h3>
          <p class="mono">Low pressure + solution</p>
          <ul>
            <li>Siding, stucco, brick and painted wood</li>
            <li>Roofs and shingles</li>
            <li>Fences and decks</li>
            <li>Anything with a finish to protect</li>
          </ul>
        </div>
        <div class="cmp__col">
          <h3>Pressure wash</h3>
          <p class="mono">Higher pressure + surface cleaner</p>
          <ul>
            <li>Concrete driveways and sidewalks</li>
            <li>Pavers and aggregate</li>
            <li>Dumpster pads and commercial concrete</li>
            <li>Surfaces with no finish to damage</li>
          </ul>
        </div>
      </div>
      <p class="cmp__note">We name the method in the quote, so there is no surprise about how your house will be cleaned.</p>
    </div>
  </div>
</section>

${SERVICES.map((s, i) => `<section class="sec ${i % 2 ? 'sec--surface' : ''} svcsec" id="${s.slug}">
  <div class="shell svcsec__grid">
    <div class="svcsec__media">
      <figure class="plate"><img src="assets/opt/${s.img}.webp" alt="${esc(s.alt)}" width="${M[s.img].w}" height="${M[s.img].h}" loading="lazy" decoding="async"></figure>
    </div>
    <div class="svcsec__body">
      <span class="label">${s.n} — ${s.kicker}</span>
      <h2>${s.lede}</h2>
      ${s.body.map((p) => `<p>${p}</p>`).join('\n      ')}
      <ul class="ticks ticks--two">${s.includes.map((x) => `<li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>${x}</li>`).join('')}</ul>
      <div class="svcsec__foot">
        <a class="btn btn--gold" href="${url(1, 'contact/')}">Price this service <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
        <span class="mono">${esc(s.best)}</span>
      </div>
    </div>
  </div>
</section>`).join('\n')}

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Exterior Cleaning Services in Metro Atlanta | ${S.name}`,
  desc: 'House washing, roof cleaning, driveway and concrete, decks, patios, fences, gutters and commercial exterior cleaning across Metro Atlanta and North Georgia.',
  canonical: 'services/',
  og: 'work-04.webp',
  active: 'services',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Services', 'services/']]), {
    '@type': 'ItemList',
    itemListElement: SERVICES.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.title, url: `${ORIGIN}/services/#${s.slug}` })),
  }] },
}, servicesBody);

/* ------------------------------------------------------------------ */
/* work                                                                */
/* ------------------------------------------------------------------ */

const workBody = `
<section class="phero phero--work">
  <div class="shell">
    <span class="label">Recent work</span>
    <h1>Twelve properties.<br><em>One standard.</em></h1>
    <p>House washes, roofs, concrete, decks, fences and commercial exteriors around ${S.area}. Filter by surface, then tap any photo to look closer.</p>
  </div>
</section>

<section class="sec">
  <div class="shell">
    <div class="filters" role="group" aria-label="Filter projects">
      <button class="filters__btn is-on" data-filter="all">All <span class="mono">12</span></button>
      ${[...new Set(WORK.map((w) => w[3]))].map((cat) => `<button class="filters__btn" data-filter="${cat}">${cat[0].toUpperCase() + cat.slice(1)} <span class="mono">${WORK.filter((w) => w[3] === cat).length}</span></button>`).join('\n      ')}
    </div>
    <div class="gal gal--work" data-gallery>
      ${WORK.map(([img, label, town, cat], i) => `<button class="gal__item gal__item--btn rv" data-cat="${cat}" data-lightbox="${i}" data-full="assets/opt/${M[img].file}" data-label="${esc(label)} · ${esc(town)}" aria-label="Open ${esc(label)} in ${esc(town)}">
        <img src="assets/opt/${M[img].small}" alt="${esc(label)} in ${esc(town)} by Elite Exterior Cleaning" width="${M[img].w}" height="${M[img].h}" loading="lazy" decoding="async">
        <span class="gal__cap"><span class="mono">${String(i + 1).padStart(2, '0')}</span>${label} · ${town}</span>
      </button>`).join('\n      ')}
    </div>
    <p class="gal__empty mono" hidden>No projects in this category yet.</p>
  </div>
</section>

<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Project photo" hidden>
  <button class="lb__close" aria-label="Close">×</button>
  <button class="lb__nav lb__prev" aria-label="Previous">‹</button>
  <img class="lb__img" src="assets/opt/${M['work-01'].file}" alt="">
  <button class="lb__nav lb__next" aria-label="Next">›</button>
  <span class="lb__cap mono"></span>
</div>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Recent Exterior Cleaning Projects in Atlanta | ${S.name}`,
  desc: 'House washing, roof treatment, driveway cleaning, deck and fence projects across Metro Atlanta and North Georgia by Elite Exterior Cleaning.',
  canonical: 'work/',
  og: 'work-06.webp',
  active: 'work',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Work', 'work/']])] },
}, workBody);

/* ------------------------------------------------------------------ */
/* process                                                             */
/* ------------------------------------------------------------------ */

const processBody = `
<section class="phero phero--process">
  <div class="shell">
    <span class="label">Process</span>
    <h1>From the call<br><em>to the walkaround.</em></h1>
    <p>Cleaning is simple. Doing it the same way on every property is the hard part — so we made it a checklist.</p>
  </div>
</section>

<section class="sec">
  <div class="shell">
    <ol class="bigsteps">
      <li><span class="mono">01</span><div><h2>Call or send the address</h2><p>Tell us what is bothering you — the siding, the roof streaks, the driveway, or all of it. Photos help but are not required. We will ask about the surface and the water source before quoting.</p></div></li>
      <li><span class="mono">02</span><div><h2>Walkaround &amp; test patch</h2><p>On site we check the material, test a small area, and look for anything that needs a gentler method — oxidized paint, loose flashing, a deck that has not been sealed in years. The quote is based on what is actually there.</p></div></li>
      <li><span class="mono">03</span><div><h2>Protect, then clean</h2><p>Plants are covered and wet down, windows closed, electrical fixtures checked. Then the work: soft wash on the house and roof, surface cleaner on concrete, low pressure on wood, and a rinse on everything that should not have soap left on it.</p></div></li>
      <li><span class="mono">04</span><div><h2>Walk it with us</h2><p>Before we pack up, we walk the property with you. Anything you spot gets fixed while we are still there, and you get the before-and-after photos by email or text. No deposit, payment when you are happy.</p></div></li>
    </ol>
  </div>
</section>

<section class="sec sec--surface">
  <div class="shell two">
    <div>
      <span class="label">What we protect</span>
      <h2>The house is not<br><em>the only thing on site.</em></h2>
      <p>Landscaping, pets, outdoor furniture, grills, light fixtures and the neighbour's car — all of it gets considered before water starts moving. Plants are wet down before and rinsed after, and anything delicate gets covered.</p>
      <p>If a surface should not be pressure washed, we say so. A soft wash on a roof or a deck is not a shortcut; it is the correct method.</p>
    </div>
    <figure class="plate frame"><img src="assets/opt/work-08.webp" alt="Protected landscaping during exterior cleaning" width="${M['work-08'].w}" height="${M['work-08'].h}" loading="lazy" decoding="async"><figcaption class="mono">Covered, rinsed, walked</figcaption></figure>
  </div>
</section>

<section class="sec">
  <div class="shell faqmini">
    <span class="label">Good to know</span>
    <h2>Questions we get<br><em>before booking.</em></h2>
    <div class="faqmini__grid">
      <div><h3>Do you need my water?</h3><p>Yes, a standard outdoor spigot is ideal. If water access is limited, tell us when you call and we will plan around it.</p></div>
      <div><h3>How long does it take?</h3><p>A house wash is usually two to four hours. A roof treatment is similar. Driveways and decks depend on size and staining.</p></div>
      <div><h3>Will plants be harmed?</h3><p>They are covered and wet down before we start and rinsed after. The mixes we use are diluted for exterior surfaces, not vegetation.</p></div>
      <div><h3>What about rain?</h3><p>Light rain does not stop a house wash. If weather would affect the finish or safety, we reschedule at no cost.</p></div>
    </div>
    <a class="btn btn--gold" href="${url(1, 'contact/')}">Ask us directly <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
  </div>
</section>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Our Exterior Cleaning Process | ${S.name}`,
  desc: 'How Elite Exterior Cleaning works: walkaround and test patch, written quote, protection, the right method for each surface, and a final walkaround.',
  canonical: 'process/',
  og: 'work-08.webp',
  active: 'process',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Process', 'process/']])] },
}, processBody);

/* ------------------------------------------------------------------ */
/* about                                                               */
/* ------------------------------------------------------------------ */

const aboutBody = `
<section class="phero phero--about">
  <div class="shell phero__grid">
    <div>
      <span class="label">About</span>
      <h1>Owner-operated.<br><em>A higher standard.</em></h1>
      <p>Elite Exterior Cleaning is Justin Hall's company, working across ${S.area}.</p>
    </div>
    <figure class="plate plate--portrait"><img src="assets/opt/about.webp" alt="Elite Exterior Cleaning at work" width="${M.about.w}" height="${M.about.h}" decoding="async"></figure>
  </div>
</section>

<section class="sec">
  <div class="shell about__grid">
    <div class="about__lead">
      <span class="label">The standard</span>
      <h2>“A higher standard”<br><em>is not a slogan.</em></h2>
      <p class="lead">It is a list of things that do not get skipped: the test patch, the plants, the edges, the walkaround. Most of it is invisible when the job is done — which is exactly the point.</p>
      <p>Justin started Elite to do exterior cleaning properly: soft washing where pressure would cause damage, surface cleaning where it produces an even finish, and a written scope so the price does not move halfway through the day.</p>
      <p>The company works with homeowners, realtors, property managers and small commercial sites. Residential and commercial, one property or a recurring schedule. You deal with the owner, and the owner is on site.</p>
    </div>
    <figure class="about__fig plate"><img src="assets/opt/work-09.webp" alt="Roof cleaning project" width="${M['work-09'].w}" height="${M['work-09'].h}" loading="lazy" decoding="async"><figcaption class="mono">Low-pressure roof treatment</figcaption></figure>
  </div>
</section>

<section class="sec sec--surface">
  <div class="shell">
    <div class="sechead rv"><span class="label">What we hold to</span><h2>Four rules on<br><em>every property.</em></h2></div>
    <ul class="rules">
      <li><span class="mono">01</span><h3>Test before you treat</h3><p>A small patch tells us more than a phone description. It is how we avoid bleaching a finish or etching a surface.</p></li>
      <li><span class="mono">02</span><h3>Protect the surroundings</h3><p>Plants, furniture, pets and neighbours. Water goes where it is supposed to and nowhere else.</p></li>
      <li><span class="mono">03</span><h3>Name the method</h3><p>The quote says soft wash or pressure wash, and why. You should not have to guess what will happen to your siding.</p></li>
      <li><span class="mono">04</span><h3>Walk it before you pay</h3><p>The job is finished when you have walked it and anything you spotted has been fixed. Not when the truck pulls away.</p></li>
    </ul>
  </div>
</section>

<section class="sec">
  <div class="shell two two--rev">
    <figure class="plate frame"><img src="assets/opt/work-11.webp" alt="Commercial exterior cleaning" width="${M['work-11'].w}" height="${M['work-11'].h}" loading="lazy" decoding="async"><figcaption class="mono">Commercial exterior · Metro Atlanta</figcaption></figure>
    <div>
      <span class="label">Residential &amp; commercial</span>
      <h2>The same crew.<br><em>The same standard.</em></h2>
      <p>Homes get the careful version. Commercial properties get the same careful version on a schedule — storefronts, sidewalks, dumpster pads and building washes, early morning or after close.</p>
      <p>If you manage multiple properties, ask about a recurring scope. One point of contact, a photo record after each visit, and a calendar that does not slip.</p>
      <a class="btn btn--gold" href="${url(1, 'contact/')}">Talk about a property <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
  </div>
</section>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `About Elite Exterior Cleaning | Metro Atlanta`,
  desc: 'Meet Elite Exterior Cleaning — owner-operated by Justin Hall, serving Metro Atlanta and North Georgia with soft washing, pressure washing and roof cleaning.',
  canonical: 'about/',
  og: 'about.webp',
  active: 'about',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['About', 'about/']]), {
    '@type': 'Person',
    name: 'Justin Hall',
    jobTitle: 'Owner',
    worksFor: { '@id': `${ORIGIN}/#business` },
  }] },
}, aboutBody);

/* ------------------------------------------------------------------ */
/* contact                                                             */
/* ------------------------------------------------------------------ */

const contactBody = `
<section class="phero phero--contact">
  <div class="shell">
    <span class="label">Contact</span>
    <h1>Send us the<br><em>address.</em></h1>
    <p>Call for the fastest answer, or send the form with a photo. Estimates are free and written.</p>
  </div>
</section>

<section class="sec">
  <div class="shell contact__grid">
    <form class="form" action="../thank-you/" method="get" data-quote>
      <div class="form__row">
        <label>Name<input type="text" name="name" autocomplete="name" required placeholder="Your name"></label>
        <label>Phone<input type="tel" name="phone" autocomplete="tel" required placeholder="(770) 555-0123"></label>
      </div>
      <label>Property address<input type="text" name="address" autocomplete="street-address" placeholder="Street, city"></label>
      <div class="form__row">
        <label>Service
          <select name="service">
            ${SERVICES.map((s) => `<option>${s.title}</option>`).join('\n            ')}
            <option>Not sure yet</option>
          </select>
        </label>
        <label>Timeline
          <select name="timeline">
            <option>As soon as possible</option>
            <option>Within two weeks</option>
            <option>This month</option>
            <option>Just planning</option>
          </select>
        </label>
      </div>
      <label>About the property<textarea name="message" rows="5" placeholder="Single storey or two? Vinyl, brick or stucco? What needs cleaning, and anything we should know."></textarea></label>
      <button class="btn btn--gold btn--lg" type="submit">Request my estimate <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></button>
      <p class="form__fine mono">Free estimate · no deposit · reply the same or next business day</p>
    </form>

    <aside class="contact__aside">
      <a class="cbox cbox--gold" href="${S.telHref}">
        <span class="mono">Fastest answer</span>
        <strong>${S.tel}</strong>
        <span>Call or text Justin directly</span>
      </a>
      <div class="cbox">
        <h3>Where we work</h3>
        <p>${S.towns.join(' · ')}, and the surrounding ${S.area} corridor.</p>
      </div>
      <div class="cbox">
        <h3>What to send</h3>
        <p>A photo of the surface and the rough size is enough for a first number. We confirm on site with a test patch.</p>
      </div>
      <div class="cbox cbox--dark">
        <h3>Residential &amp; commercial</h3>
        <p>Property managers and business owners: ask about recurring schedules and after-hours work.</p>
        <span class="mono">Owner · ${S.name}</span>
      </div>
    </aside>
  </div>
</section>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Contact Elite Exterior Cleaning | Metro Atlanta`,
  desc: 'Request a free exterior cleaning estimate in Metro Atlanta and North Georgia. Call (770) 744-0271 or send the form for a written quote.',
  canonical: 'contact/',
  og: 'hero.webp',
  active: 'contact',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Contact', 'contact/']])] },
}, contactBody);

/* ------------------------------------------------------------------ */
/* thank you + 404                                                     */
/* ------------------------------------------------------------------ */

const thanksBody = `
<section class="thanks">
  <div class="shell thanks__in">
    <span class="label">Request received</span>
    <h1>Got it.<br><em>We will call you.</em></h1>
    <p>Thanks — your estimate request is in. Justin will reply the same or next business day to book the walkaround. If it is urgent, call ${S.tel}.</p>
    <div class="thanks__acts">
      <a class="btn btn--gold" href="${url(1, '')}">Back to home <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <a class="btn btn--ghost" href="${S.telHref}">${S.tel}</a>
    </div>
  </div>
</section>
`;

page({
  d: 1,
  title: `Request received | ${S.name}`,
  desc: 'Your exterior cleaning estimate request has been received. Elite Exterior Cleaning will reply the same or next business day.',
  canonical: 'thank-you/',
  og: 'hero.webp',
  active: '',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz()] },
}, thanksBody);

const notFoundBody = `
<section class="thanks">
  <div class="shell thanks__in">
    <span class="label">404</span>
    <h1>This page came<br><em>out in the wash.</em></h1>
    <p>The link may be old or mistyped. Head back to the home page, or call and we will point you the right way.</p>
    <div class="thanks__acts">
      <a class="btn btn--gold" href="/${REPO}/">Back to home <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <a class="btn btn--ghost" href="/${REPO}/contact/">Contact us</a>
    </div>
  </div>
</section>
`;

{
  const html = head({
    d: 0,
    title: `Page not found | ${S.name}`,
    desc: 'That page could not be found.',
    canonical: '404.html',
    og: 'hero.webp',
    base: `/${REPO}/`,
    jsonld: JSON.stringify({ '@context': 'https://schema.org', '@graph': [biz()] }),
  }).replace('<meta name="description"', '<meta name="robots" content="noindex">\n<meta name="description"');
  fs.writeFileSync(path.join(ROOT, '404.html'), `${html}
<main id="main">${notFoundBody}</main>
${foot(0)}
<script src="/${REPO}/script.js" defer></script>
</body>
</html>
`);
  console.log('wrote 404.html');
}

/* ------------------------------------------------------------------ */
/* sitemap, robots, llms, .nojekyll                                    */
/* ------------------------------------------------------------------ */

const routes = [['', '1.0', 'monthly'], ['services/', '0.9', 'monthly'], ['work/', '0.8', 'monthly'], ['process/', '0.7', 'yearly'], ['about/', '0.7', 'yearly'], ['contact/', '0.9', 'yearly']];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(([p, pr, f]) => `  <url><loc>${ORIGIN}/${p}</loc><changefreq>${f}</changefreq><priority>${pr}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
fs.writeFileSync(path.join(ROOT, 'llms.txt'), `# ${S.name}\nSoft washing, pressure washing, roof cleaning, driveway, deck, fence, gutter and commercial exterior cleaning across Metro Atlanta and North Georgia. Phone ${S.tel}.\n\n## Pages\n- Home: ${ORIGIN}/\n- Services: ${ORIGIN}/services/\n- Work: ${ORIGIN}/work/\n- Process: ${ORIGIN}/process/\n- About: ${ORIGIN}/about/\n- Contact: ${ORIGIN}/contact/\n`);
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');
console.log('wrote sitemap.xml, robots.txt, llms.txt, .nojekyll');
