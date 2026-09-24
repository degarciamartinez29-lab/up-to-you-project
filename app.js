class UpToYou {
  root() { return document.querySelector('[data-up-root]'); }

  labels() {
    return { objetivo: 'Personal goal', lactosa: 'Milk/other', huevo: 'Egg', gluten: 'Gluten', marisco: 'Shellfish', crustaceos: 'Crustaceans', frutos: 'Nuts', mostaza: 'Mustard', pescado: 'Fish', cerdo: 'White meat', diabetes: 'Diabetes', hipertension: 'Hypertension', embarazo: 'Pregnancy', vegana: 'Vegan diet', pescatoriano: 'Red meat' };
    }

  masks() {
    return { objetivo: 7, lactosa: 6, huevo: 8, gluten: 5, marisco: 9, crustaceos: 10, frutos: 11, mostaza: 12, pescado: 13, cerdo: 14, diabetes: 16, hipertension: 17, embarazo: 4, vegana: 18, pescatoriano: 15 };
  }

  dishes() {
    return {
      tabla: { name: 'Cheese and charcuterie board', price: '€16.00', photo: 'images/dish-8.jpg',
        desc: 'A selection of cured cheeses, Iberian salchichón, cristal bread, apple, marcona almonds and red berry jam.',
        lines: [
          { t: 'Cured sheep cheese', tag: 'lactosa', alt: '' },
          { t: 'Iberian salchichón', tag: 'cerdo', alt: 'Beef cecina' },
          { t: 'Cristal bread', tag: 'gluten', alt: 'Buckwheat bread' },
          { t: 'Apple and almonds', tag: 'frutos', alt: '' },
          { t: 'Red berry jam', tag: '', alt: '' }
        ] },
      pan: { name: 'Rye bread with roasted aubergine', price: '€9.50', photo: 'images/dish-3.jpg',
        desc: 'Toasted rye bread, oven-roasted aubergine, fresh cheese cream, pea shoots and crispy onion.',
        lines: [
          { t: 'Rye bread', tag: 'gluten', alt: 'Buckwheat bread' },
          { t: 'Roasted aubergine', tag: '', alt: '' },
          { t: 'Fresh cheese cream', tag: 'lactosa', alt: 'Cashew cream' },
          { t: 'Pea shoots', tag: '', alt: '' }
        ] },
      verde: { name: 'Green salad with grape and cucumber', price: '€11.00', photo: 'images/dish-4.jpg',
        desc: 'Celery, cucumber, white grape, baby spinach, fresh basil and a lemon and extra virgin olive oil vinaigrette.',
        lines: [
          { t: 'Celery and cucumber', tag: '', alt: '' },
          { t: 'White grape', tag: '', alt: '' },
          { t: 'Baby spinach and basil', tag: '', alt: '' },
          { t: 'Lemon vinaigrette', tag: '', alt: '' }
        ] },
      templada: { name: 'Warm egg and carrot salad', price: '€12.50', photo: 'images/dish-2.jpg',
        desc: 'Boiled egg, baby carrot, green beans, rocket, cherry tomato and pumpkin seeds with mustard dressing.',
        lines: [
          { t: 'Boiled egg', tag: 'huevo', alt: 'Marinated tofu' },
          { t: 'Carrot and green beans', tag: '', alt: '' },
          { t: 'Rocket and cherry tomato', tag: '', alt: '' },
          { t: 'Mustard dressing', tag: 'mostaza', alt: 'Lemon vinaigrette' }
        ] },
      poche: { name: 'Poached egg on rye toast', price: '€10.50', photo: 'images/dish-5.jpg',
        desc: 'Poached egg, rye toast, lamb’s lettuce, pink pepper and basil oil.',
        lines: [
          { t: 'Poached egg', tag: 'huevo', alt: '' },
          { t: 'Rye toast', tag: 'gluten', alt: 'Buckwheat toast' },
          { t: 'Lamb’s lettuce', tag: '', alt: '' },
          { t: 'Pink pepper', tag: '', alt: '' }
        ] },
      kimchi: { name: 'Pork kimchi with rice', price: '€13.50', photo: 'images/dish-6.jpg',
        desc: 'Fermented cabbage, pork belly, jasmine rice, gochujang and spring onion.',
        lines: [
          { t: 'Pork belly', tag: 'cerdo', alt: 'Sautéed seitan' },
          { t: 'Fermented cabbage (kimchi)', tag: '', alt: '' },
          { t: 'Jasmine rice', tag: '', alt: '' },
          { t: 'Gochujang', tag: 'gluten', alt: 'Gluten-free gochujang' }
        ] },
      guiso: { name: 'Cumin chickpea stew', price: '€12.00', photo: 'images/dish-7.jpg',
        desc: 'Chickpeas, roasted tomato, cumin, bean sprouts and toasted sesame.',
        lines: [
          { t: 'Chickpeas', tag: '', alt: '' },
          { t: 'Roasted tomato and cumin', tag: '', alt: '' },
          { t: 'Bean sprouts', tag: '', alt: '' },
          { t: 'Toasted sesame', tag: '', alt: '' }
        ] },
      carbonara: { name: 'Fettuccine carbonara', price: '€14.50', photo: 'images/dish-10.jpg',
        desc: 'Fettuccine, egg yolk sauce, diced guanciale, grated parmesan, freshly ground black pepper.',
        lines: [
          { t: 'Fettuccine', tag: 'gluten', alt: 'Gluten-free fettuccine', sev: 'no' },
          { t: 'Egg yolk sauce', tag: 'huevo', alt: '' },
          { t: 'Diced guanciale', tag: 'cerdo', alt: 'Crispy tempeh', sev: 'no' },
          { t: 'Grated parmesan', tag: 'lactosa', alt: 'Lactose-free parmesan' },
          { t: 'Freshly ground black pepper', tag: '', alt: '' }
        ],
        extras: ['Extra grated parmesan', 'Extra crispy tempeh', 'Extra sauce'] },
      bolognese: { name: 'Spaghetti bolognese', price: '€13.00', photo: 'images/dish-9.jpg',
        desc: 'Spaghetti, beef ragù, grated parmesan, parsley and toasted garlic bread.',
        lines: [
          { t: 'Spaghetti', tag: 'gluten', alt: 'Gluten-free spaghetti' },
          { t: 'Beef ragù', tag: 'pescatoriano', alt: 'Lentil ragù' },
          { t: 'Grated parmesan', tag: 'lactosa', alt: 'Lactose-free parmesan' },
          { t: 'Toasted garlic bread', tag: 'gluten', alt: '' }
        ] }
    };
  }

  renderVals() {
    return {
      toggleChip: (e) => this.toggleChip(e.currentTarget),
      applyFiltersBtn: () => this.showPane(1),
      openFull: () => { this.clearFilters(); this.showPane(1); },
      clearFilters: () => this.clearFilters(),
      openDish: (e) => this.openDish(e.currentTarget.getAttribute('data-up-dish')),
      goBack: () => this.goBack(),
      openMenu: (e) => { e.stopPropagation(); this.drawer(true); },
      closeMenu: (e) => { if (e) e.stopPropagation(); this.drawer(false); },
      applyMenu: () => { this.drawer(false); this.applyFilters(); if (this.openId) this.openDish(this.openId); },
      toggleEdit: () => { this.editing = !this.editing; this.renderMod(); }
    };
  }

  showPane(n) {
    const r = this.root(); if (!r) return;
    this.pane = n;
    r.querySelectorAll('[data-up-pane]').forEach(p => {
      p.style.display = p.getAttribute('data-up-pane') === String(n) ? 'block' : 'none';
    });
    const step = r.querySelector('[data-up-step]');
    if (step) step.textContent = ['Step 1 of 3 · Filters', 'Step 2 of 3 · Menu', 'Step 3 of 3 · Dish detail'][n];
    const back = r.querySelector('[data-up-back]');
    if (back) back.style.opacity = n === 0 ? '.35' : '1';
    if (n === 1) this.applyFilters();
    if (this.sizePanes) this.sizePanes();
    const scr = r.querySelector('[data-up-pane="' + n + '"]');
    if (scr) scr.scrollTop = 0;
  }

  goBack() { this.showPane(this.pane === 2 ? 1 : 0); }

  selected() {
    const r = this.root(); if (!r) return [];
    return [...r.querySelectorAll('[data-up-chip][data-on="1"]')].map(b => b.getAttribute('data-up-chip'));
  }

  paintChip(btn) {
    const on = btn.getAttribute('data-on') === '1';
    const guide = btn.getAttribute('data-up-guide') === '1';
    const ico = btn.querySelector('[data-up-ico]');
    if (ico) ico.style.background = on ? '#D49517' : '#0b0b0c';
    btn.style.animation = (!on && guide) ? 'upHalo 2.4s ease-in-out infinite' : 'none';
    btn.style.boxShadow = 'none';
  }

  toggleChip(btn) {
    btn.setAttribute('data-on', btn.getAttribute('data-on') === '1' ? '0' : '1');
    this.paintChip(btn);
    const r = this.root();
    const hint = r && r.querySelector('[data-up-hint]');
    if (hint) {
      const left = [...r.querySelectorAll('[data-up-guide="1"]')].filter(b => b.getAttribute('data-on') !== '1').length;
      hint.textContent = left ? 'Tap the ' + left + ' highlighted filters' : 'Ready · hit APPLY FILTERS';
    }
  }

  clearFilters() {
    const r = this.root(); if (!r) return;
    r.querySelectorAll('[data-up-chip]').forEach(b => { b.setAttribute('data-on', '0'); this.paintChip(b); });
    const hint = r.querySelector('[data-up-hint]');
    if (hint) hint.textContent = 'Tap the 3 highlighted filters';
    this.paintDrawer();
    this.applyFilters();
    if (this.openId) this.renderMod();
  }

  stateFor(el, sel) {
    const contains = (el.getAttribute('data-contains') || '').split(',').filter(Boolean);
    const swap = (el.getAttribute('data-swap') || '').split(',').filter(Boolean);
    const conflicts = sel.filter(s => contains.includes(s));
    if (!conflicts.length) return 'ok';
    return conflicts.every(c => swap.includes(c)) ? 'adapt' : 'no';
  }

  applyFilters() {
    const r = this.root(); if (!r) return;
    const sel = this.selected();
    const icons = { ok: 'images/healthy.png', adapt: 'images/sad.png', no: 'images/death.png' };
    const all = this.dishes();
    r.querySelectorAll('[data-up-dish]').forEach(d => {
      const state = this.stateFor(d, sel);
      d.style.opacity = '1';
      const dsc = d.querySelector('[data-up-desc]');
      const data = all[d.getAttribute('data-up-dish')];
      if (dsc && data) {
        dsc.innerHTML = data.lines.map(l => {
          if (!(l.tag && sel.includes(l.tag))) return l.t.toLowerCase();
          const ico = icons[l.sev || (l.alt ? 'adapt' : 'no')];
          return '<span style="white-space:nowrap"><img src="' + ico + '" style="display:inline;width:14px;height:14px;vertical-align:-3px;margin-right:4px"><strong style="font-weight:700;color:#0b0b0c">' + l.t.toLowerCase() + '</strong></span>';
        }).join(', ') + '.';
      }
    });
    const applied = r.querySelector('[data-up-applied]');
    if (applied) {
      const m = this.masks();
      applied.innerHTML = '';
      sel.forEach(s => {
        const sp = document.createElement('span');
        sp.style.cssText = 'display:block;width:56px;height:66px;background:#D49517;-webkit-mask:url(\'images/component-' + m[s] + '.png\') center/contain no-repeat;mask:url(\'images/component-' + m[s] + '.png\') center/contain no-repeat;';
        applied.appendChild(sp);
      });
      if (!sel.length) applied.innerHTML = '<span style="font-family:\'Unbounded\',sans-serif;font-size:11px;color:#6b6b73;align-self:center">No filters · full menu</span>';
    }
    const clear = r.querySelector('[data-up-clear]');
    if (clear) clear.style.display = sel.length ? 'block' : 'none';
    const openF = r.querySelector('[data-up-openfilters]');
    if (openF) openF.style.display = sel.length ? 'none' : 'block';
  }

  icons() { return { ok: 'images/healthy.png', adapt: 'images/sad.png', no: 'images/death.png' }; }

  drawer(open) {
    const r = this.root(); if (!r) return;
    const d = r.querySelector('[data-up-drawer]');
    const c = r.querySelector('[data-up-drawer-card]');
    if (!d) return;
    d.style.opacity = open ? '1' : '0';
    d.style.pointerEvents = open ? 'auto' : 'none';
    if (c) c.style.transform = open ? 'translateX(0)' : 'translateX(-16px)';
    if (open) this.paintDrawer();
  }

  paintDrawer() {
    const r = this.root(); if (!r) return;
    const grid = r.querySelector('[data-up-drawer-grid]'); if (!grid) return;
    const m = this.masks();
    grid.innerHTML = '';
    r.querySelectorAll('[data-up-chip]').forEach(src => {
      const key = src.getAttribute('data-up-chip');
      const guide = src.getAttribute('data-up-guide') === '1';
      const on = src.getAttribute('data-on') === '1';
      const b = document.createElement('button');
      b.type = 'button';
      b.style.cssText = 'border:0;background:transparent;padding:4px 0;cursor:' + (guide ? 'pointer' : 'not-allowed') + ';opacity:' + (guide ? '1' : '.35') + ';border-radius:10px';
      const sp = document.createElement('span');
      sp.style.cssText = 'display:block;width:100%;height:46px;background:' + (on ? '#D49517' : '#0b0b0c') + ";-webkit-mask:url('images/component-" + m[key] + ".png') top/contain no-repeat;mask:url('images/component-" + m[key] + ".png') top/contain no-repeat";
      if (guide && !on) b.style.animation = 'upHalo 2.4s ease-in-out infinite';
      b.appendChild(sp);
      if (guide) b.addEventListener('click', () => { this.toggleChip(src); this.paintDrawer(); this.applyFilters(); });
      grid.appendChild(b);
    });
  }

  choiceFor(id, i) {
    this.choices = this.choices || {};
    this.choices[id] = this.choices[id] || {};
    if (this.choices[id][i] === undefined) this.choices[id][i] = 'sub';
    return this.choices[id][i];
  }

  setChoice(id, i, v) {
    this.choices = this.choices || {};
    this.choices[id] = this.choices[id] || {};
    this.choices[id][i] = v;
    this.renderMod();
  }

  renderMod() {
    const r = this.root(); if (!r) return;
    const id = this.openId;
    const data = this.dishes()[id]; if (!data) return;
    const sel = this.selected();
    const ic = this.icons();
    const panel = r.querySelector('[data-up-fmod]');
    const label = r.querySelector('[data-up-editlabel]');
    if (label) label.textContent = this.editing ? 'Save changes' : 'Edit ingredients';

    const rows = data.lines.map((l, i) => {
      const conflict = !!(l.tag && sel.includes(l.tag));
      return { l: l, i: i, conflict: conflict, swapped: conflict && !!l.alt && this.choiceFor(id, i) === 'sub' };
    });
    const shown = this.editing ? rows : rows.filter(x => x.conflict);

    const desc = r.querySelector('[data-up-fdesc]');
    if (desc) desc.textContent = rows.map((x, i) => {
      const t = x.swapped ? x.l.alt : x.l.t;
      return i === 0 ? t : t.charAt(0).toLowerCase() + t.slice(1);
    }).join(', ') + '.';

    if (!panel) return;
    if (!shown.length) {
      panel.innerHTML = '<div style="font-family:\'Unbounded\',sans-serif;font-size:12px;color:#56565e">This dish already fits your filters. Nothing needs changing.</div>';
      return;
    }
    const cellL = x => '<div style="display:flex;align-items:flex-start;gap:9px;min-height:30px"><img src="' +
      (x.conflict ? ic[x.l.sev || (x.l.alt ? 'adapt' : 'no')] : ic.ok) + '" style="width:22px;height:auto;flex:none;margin-top:1px"><span style="font-family:\'Unbounded\',sans-serif;font-size:12px;line-height:1.45;' +
      (x.swapped ? 'text-decoration:line-through;color:#6b6b73' : '') + '">' + x.l.t + '</span></div>';

    const cellR = x => {
      let inner = '';
      if (x.conflict && x.l.alt && x.swapped) {
        inner = '<img src="' + ic.ok + '" style="width:22px;height:auto;flex:none;margin-top:1px"><span style="font-family:\'Unbounded\',sans-serif;font-size:12px;line-height:1.45">' + x.l.alt + '</span>' +
          (this.editing ? '<button type="button" data-up-ch="' + x.i + ':orig" style="margin-left:auto;border:0;background:transparent;cursor:pointer;font-size:15px;line-height:1;color:#6b6b73">✕</button>' : '');
      } else if (x.conflict && x.l.alt) {
        inner = '<button type="button" data-up-ch="' + x.i + ':sub" style="display:inline-flex;align-items:center;gap:8px;border:0;background:transparent;cursor:pointer;padding:0;text-align:left;font-family:\'Unbounded\',sans-serif;font-size:12px;line-height:1.45;color:#0b0b0c"><span style="width:20px;height:20px;flex:none;border-radius:50%;border:1.5px solid #0b0b0c;display:flex;align-items:center;justify-content:center;font-size:12px;line-height:1">+</span>Add ' + x.l.alt.toLowerCase() + '</button>';
      } else if (x.conflict) {
        inner = '<img src="' + ic.no + '" style="width:22px;height:auto;flex:none;margin-top:1px"><span style="font-family:\'Unbounded\',sans-serif;font-size:12px;line-height:1.45;color:#6b6b73">No substitute · essential</span>';
      } else {
        inner = '<span style="font-family:\'Unbounded\',sans-serif;font-size:12px;line-height:1.45;color:#a1a1aa">No changes</span>';
      }
      return '<div data-up-modsub="1" style="display:flex;align-items:flex-start;gap:9px;min-height:30px">' + inner + '</div>';
    };

    const hd = '<div data-up-modrow="1" data-up-modhead="1" style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(10px,2.4vw,28px);padding-bottom:10px">' +
      '<div style="font-family:\'Unbounded\',sans-serif;font-weight:700;font-size:12px">ORIGINAL DISH</div>' +
      '<div style="font-family:\'Unbounded\',sans-serif;font-weight:700;font-size:12px">MODIFIED DISH</div></div>';

    const rowsHtml = shown.map(x => '<div data-up-modrow="1" style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(10px,2.4vw,28px);align-items:start;padding:10px 0;border-top:1px solid #e6e6e9">' +
      cellL(x) + cellR(x) + '</div>').join('');

    panel.innerHTML = hd + rowsHtml +
      (this.editing ? '<div style="font-family:\'Unbounded\',sans-serif;font-size:10px;line-height:1.6;color:#6b6b73;margin-top:14px">You can drop the substitute and keep the original ingredient, even if it does not fit your filters.</div>' : '');

    panel.querySelectorAll('[data-up-ch]').forEach(b => {
      b.addEventListener('click', ev => {
        ev.stopPropagation();
        const p = b.getAttribute('data-up-ch').split(':');
        this.setChoice(id, Number(p[0]), p[1]);
      });
    });
  }

  openDish(id) {
    const r = this.root(); if (!r) return;
    const data = this.dishes()[id]; if (!data) return;
    const sel = this.selected();
    this.openId = id;
    const row = r.querySelector('[data-up-dish="' + id + '"]');
    const state = row ? this.stateFor(row, sel) : 'ok';
    const icons = this.icons();
    const set = (sel2, val, attr) => { const el = r.querySelector(sel2); if (el) { if (attr) el.setAttribute(attr, val); else el.textContent = val; } };
    set('[data-up-fpic]', data.photo, 'src');
    set('[data-up-fname]', data.name);
    set('[data-up-fprice]', data.price);
    set('[data-up-fdesc]', data.desc);
    this.renderMod();

    const extras = r.querySelector('[data-up-fextras]');
    if (extras) {
      const list = data.extras || ['Extra side', 'Sauce on the side', 'Gluten-free bread'];
      extras.innerHTML = list.map(x => '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid #f0f0f2"><span style="font-family:\'Unbounded\',sans-serif;font-size:12px">' + x + '</span><span style="width:20px;height:20px;border-radius:50%;background:#e6e6e9;color:#56565e;display:flex;align-items:center;justify-content:center;font-size:13px;line-height:1">+</span></div>').join('');
    }

    const note = r.querySelector('[data-up-fnote]');
    if (note) note.textContent = state === 'ok' ? 'Fits your filters' : state === 'adapt' ? 'Adapted to your filters' : 'Not recommended with your filters';
    const noteIco = r.querySelector('[data-up-fnoteico]');
    if (noteIco) noteIco.setAttribute('src', icons[state]);

    this.showPane(2);
  }

  init() {
    const r = this.root(); if (!r) return;
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.pane = 0;
    r.querySelectorAll('[data-up-chip]').forEach(b => { if (!b.getAttribute('data-on')) b.setAttribute('data-on', '0'); this.paintChip(b); });
    this.applyFilters();

    this.sizePanes = () => {
      const p0 = r.querySelector('[data-up-pane="0"]'); if (!p0) return;
      const hid = p0.style.display === 'none';
      if (hid) { p0.style.visibility = 'hidden'; p0.style.position = 'absolute'; p0.style.display = 'block'; }
      const h = p0.offsetHeight;
      if (hid) { p0.style.display = 'none'; p0.style.position = ''; p0.style.visibility = ''; }
      const cap = Math.min(h, Math.round(window.innerHeight * 0.82));
      ['1', '2'].forEach(n => {
        const p = r.querySelector('[data-up-pane="' + n + '"]');
        if (p) { p.style.maxHeight = cap + 'px'; p.style.overflowY = 'auto'; }
      });
    };
    this.sizePanes();
    window.addEventListener('resize', this.sizePanes);

    r.querySelectorAll('[data-up-screen]').forEach(sc => {
      sc.addEventListener('pointerdown', e => {
        if (this.reduced) return;
        const rect = sc.getBoundingClientRect();
        const rip = document.createElement('span');
        rip.style.cssText = 'position:absolute;left:' + (e.clientX - rect.left) + 'px;top:' + (e.clientY - rect.top + sc.scrollTop) +
          'px;width:200px;height:200px;border-radius:50%;pointer-events:none;z-index:5;background:radial-gradient(circle,rgba(212,149,23,.35),rgba(212,149,23,0) 65%);animation:upRipple .75s ease-out forwards;';
        sc.appendChild(rip);
        setTimeout(() => rip.remove(), 800);
      });
    });

    const vals = this.renderVals();
    r.querySelectorAll('[data-act]').forEach(el => {
      const fn = vals[el.getAttribute('data-act')];
      if (fn) el.addEventListener('click', fn);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new UpToYou().init());
