(function(global){
  const T = {
    ar:{brand:"منصة حصيف — Hasseef",tagline:"البوابة الوطنية للتكامل التنموي",
      nav_about:"عن المنصة",nav_privacy:"الخصوصية",nav_terms:"الاتفاقية",nav_contact:"تواصل",cta_login:"دخول",
      hero_title:"منصة وطنية للتكامل التنموي",hero_p:"ربط التحديات بالحلول والتمويل والتنفيذ وقياس الأثر — عبر حسابات لكل قطاع وشركاء استراتيجيين.",
      accounts:"أنواع الحسابات",partners:"الشركاء الاستراتيجيون",
      metrics:["مشاريع: 27","تمويل: 6.4M","فعاليات: 19"],
      gov:"الجهات الحكومية",emirate:"الإمارات",private:"القطاع الخاص",nonprofit:"القطاع غير الربحي",university:"الجامعات",individual:"الأفراد",donor:"الجهات المانحة",partners_acc:"الشركاء الاستراتيجيون",
      services:"خدمات الحساب",contact_us:"تواصل معنا",
      tabs:{projects:"📊 المشاريع والمحفظة",solutions:"🧩 سوق الحلول",facilities:"🏟️ المرافق والفعاليات",consult:"💡 الاستشارات",jobs:"👥 الوظائف/التدريب/التطوع",wallet:"💳 المحفظة",prince:"🎯 رعاية الأمير (للقطاعات فقط)",speakers:"🛡️ المسح الأمني للمتحدثين",rbac:"🔐 الصلاحيات",profile:"👤 الملف الشخصي",settings:"⚙️ الإعدادات"}},
    en:{brand:"Hasseef Platform",tagline:"National Gateway for Developmental Integration",
      nav_about:"About",nav_privacy:"Privacy",nav_terms:"Terms",nav_contact:"Contact",cta_login:"Sign in",
      hero_title:"A National Platform for Integrated Development",hero_p:"Linking challenges with solutions, funding, execution and impact — via role-based accounts and strategic partners.",
      accounts:"Accounts",partners:"Strategic Partners",
      metrics:["Projects: 27","Funding: 6.4M","Events: 19"],
      gov:"Government",emirate:"Emirates",private:"Private Sector",nonprofit:"Nonprofit",university:"Universities",individual:"Individuals",donor:"Donors",partners_acc:"Strategic Partners",
      services:"Account Services",contact_us:"Contact us",
      tabs:{projects:"📊 Projects & Wallet",solutions:"🧩 Solutions Marketplace",facilities:"🏟️ Facilities & Events",consult:"💡 Consulting",jobs:"👥 Jobs/Internship/Volunteering",wallet:"💳 Wallet",prince:"🎯 Prince Sponsorship (sectors only)",speakers:"🛡️ Speakers Security Screening",rbac:"🔐 RBAC",profile:"👤 Profile",settings:"⚙️ Settings"}}
  };
  function $(s,r=document){return r.querySelector(s)}
  function kpis(lang){return '<div class="grid3">'+T[lang].metrics.map(m=>'<div class="kpi"><div class="text-sm">'+m.split(':')[0]+'</div><div class="text-2xl font-extrabold">'+m.split(':')[1]+'</div></div>').join('')+'</div>'}
  function header(lang){return `<header class="header"><div class="container py-3 flex items-center justify-between">
    <a class="flex items-center gap-3" href="./"><img class="logo" src="./assets/hasseef-logo.svg" alt="حصيف">
      <div><div class="text-lg md:text-xl font-extrabold">${T[lang].brand}</div><div class="text-xs text-slate-500">${T[lang].tagline}</div></div></a>
    <nav class="hidden md:flex items-center gap-2 text-sm">
      <a class="btn" href="./about.html">${T[lang].nav_about}</a>
      <a class="btn" href="./privacy.html">${T[lang].nav_privacy}</a>
      <a class="btn" href="./terms.html">${T[lang].nav_terms}</a>
      <a class="btn" href="./contact.html">${T[lang].nav_contact}</a>
      <a class="btn btn-primary" href="./account.html?type=gov">${T[lang].cta_login}</a>
    </nav></div></header>`}
  function langSwitch(current){return `<div class="lang-switch"><span>Language:</span><button data-lang="ar" class="${current==='ar'?'active':''}">العربية</button><button data-lang="en" class="${current==='en'?'active':''}">English</button></div>`}
  function accountsGrid(lang){const A=["gov","emirate","private","nonprofit","university","individual","donor","partners_acc"];return '<div class="grid4">'+A.map(k=>`<a class="card" href="./account.html?type=${k}">${T[lang][k]}</a>`).join('')+'</div>'}
  function partnerRail(){const P=["sdb","monshaat","ncnp","hrsd","mc","mep","rdia","ndf","asda","adaa"];return '<div class="logo-rail">'+P.map(p=>`<div class="cell"><img src="./assets/partners/${p}.svg" alt="${p}" onerror="this.style.display='none'"><div><b>${p.toUpperCase()}</b></div></div>`).join('')+'</div>'}
  const blocks={
    projects:(l)=>`<section class="card"><div class="section-title">${T[l].tabs.projects}</div>${kpis(l)}</section>`,
    solutions:(l)=>`<section class="card"><div class="section-title">${T[l].tabs.solutions}</div><ul class="list-disc pr-5"><li>بوابة الرعايات الوطنية</li><li>حاضنات/مسرعات</li><li>سوق المرافق والفعاليات</li></ul></section>`,
    facilities:(l)=>`<section class="card"><div class="section-title">${T[l].tabs.facilities}</div><table class="w-full"><thead><tr><th class="text-right p-2 border-b">المرفق</th><th class="text-right p-2 border-b">المدينة</th><th class="text-right p-2 border-b">السعة</th><th class="text-right p-2 border-b">الحالة</th></tr></thead><tbody><tr><td class="p-2 border-b">مركز المؤتمرات</td><td class="p-2 border-b">الرياض</td><td class="p-2 border-b">1200</td><td class="p-2 border-b">متاح</td></tr></tbody></table></section>`,
    consult:(l)=>`<section class="card"><div class="section-title">${T[l].tabs.consult}</div><div class="grid2"><input class="search" placeholder="موضوع الاستشارة"><select class="search"><option>حوكمة</option><option>أثر اجتماعي</option><option>تقني</option></select><button class="btn btn-primary">إرسال</button></div></section>`,
    jobs:(l)=>`<section class="card"><div class="section-title">${T[l].tabs.jobs}</div><div class="grid3"><button class="btn btn-primary">نشر فرصة</button><button class="btn">استيراد</button><button class="btn">تصدير</button></div></section>`,
    wallet:(l)=>`<section class="card"><div class="section-title">${T[l].tabs.wallet}</div>${kpis(l)}</section>`,
    rbac:(l)=>`<section class="card"><div class="section-title">${T[l].tabs.rbac}</div><table class="w-full"><thead><tr><th class="text-right p-2 border-b">الدور</th><th class="text-right p-2 border-b">قراءة</th><th class="text-right p-2 border-b">إنشاء</th><th class="text-right p-2 border-b">اعتماد</th><th class="text-right p-2 border-b">صرف</th></tr></thead><tbody><tr><td class="p-2 border-b">مشرف</td><td class="p-2 border-b">✓</td><td class="p-2 border-b">✓</td><td class="p-2 border-b">✓</td><td class="p-2 border-b">✓</td></tr><tr><td class="p-2 border-b">مدير مشروع</td><td class="p-2 border-b">✓</td><td class="p-2 border-b">✓</td><td class="p-2 border-b">—</td><td class="p-2 border-b">—</td></tr></tbody></table></section>`,
    profile:(l)=>`<section class="card"><div class="section-title">${T[l].tabs.profile}</div><div class="grid2"><input class="search" placeholder="الاسم"><input class="search" placeholder="البريد"><input class="search" placeholder="الجوال"><select class="search"><option>العربية</option><option>English</option></select></div><div class="mt-2"><button class="btn btn-primary">حفظ</button></div></section>`,
    settings:(l)=>`<section class="card"><div class="section-title">${T[l].tabs.settings}</div><div class="grid2"><select class="search"><option>الرياض (GMT+3)</option><option>UTC</option></select><select class="search"><option>تنبيهات: بريد</option><option>رسائل</option><option>بريد + رسائل</option></select></div><div class="mt-2"><button class="btn">نسخة احتياطية</button> <button class="btn btn-primary">حفظ</button></div></section>`
  };
  function buildHome(lang){
    const m=document.querySelector('main'); m.innerHTML="";
    m.insertAdjacentHTML('beforeend', `<section class="card"><div class="section-title">${T[lang].hero_title}</div><p class="text-slate-700">${T[lang].hero_p}</p><div class="grid3 mt-3">${kpis(lang)}</div></section>`);
    m.insertAdjacentHTML('beforeend', `<section class="card mt-4"><div class="section-title">${T[lang].accounts}</div>${accountsGrid(lang)}</section>`);
    m.insertAdjacentHTML('beforeend', `<section class="card mt-4"><div class="section-title">${T[lang].partners}</div>${partnerRail()}</section>`);
    m.insertAdjacentHTML('beforeend', `<footer class="footer container text-center">© منصة حصيف — v24 (Prototype)</footer>`);
  }
  function buildAccount(lang){
    const type=(new URLSearchParams(location.search).get('type'))||'gov';
    const title=T[lang][type]||T[lang].gov;
    const m=document.querySelector('main'); m.innerHTML="";
    const layout=document.createElement('div'); layout.className='layout';
    const content=document.createElement('section'); content.className='space-y-3'; content.id='content';
    const side=document.createElement('aside'); side.className='sidebar';
    side.innerHTML=`<div class="section-title">${T[lang].services}</div>
    <nav class="space-y-1">
      <a class="btn w-full">${T[lang].tabs.projects}</a>
      <a class="btn w-full">${T[lang].tabs.solutions}</a>
      <a class="btn w-full">${T[lang].tabs.facilities}</a>
      <a class="btn w-full">${T[lang].tabs.consult}</a>
      <a class="btn w-full">${T[lang].tabs.jobs}</a>
      <a class="btn w-full">${T[lang].tabs.wallet}</a>
      <a class="btn w-full">${T[lang].tabs.rbac}</a>
      <a class="btn w-full">${T[lang].tabs.profile}</a>
      <a class="btn w-full">${T[lang].tabs.settings}</a>
    </nav>`;
    content.insertAdjacentHTML('beforeend', `<section class="card"><div class="section-title">${title}</div></section>`);
    content.insertAdjacentHTML('beforeend', [blocks.projects(lang),blocks.solutions(lang),blocks.facilities(lang),blocks.consult(lang),blocks.jobs(lang),blocks.wallet(lang),blocks.rbac(lang),blocks.profile(lang),blocks.settings(lang)].join(""));
    layout.appendChild(content); layout.appendChild(side); m.appendChild(layout);
  }
  function buildPartner(lang){
    const slug=(new URLSearchParams(location.search).get('slug'))||'sdb';
    const m=document.querySelector('main'); m.innerHTML="";
    m.insertAdjacentHTML('beforeend', `<section class="card"><div class="section-title">شريك: ${slug.toUpperCase()}</div><p class="text-slate-700">مؤشرات الشراكة والتكامل.</p></section>`);
    m.insertAdjacentHTML('beforeend', [blocks.projects(lang),blocks.wallet(lang),blocks.solutions(lang),blocks.rbac(lang),blocks.settings(lang)].join(""));
  }
  function headerBuild(lang){
    document.body.insertAdjacentHTML('afterbegin', header(lang));
  }
  function buildAll(lang){
    document.body.innerHTML = `<main class="container py-6"></main>`;
    headerBuild(lang);
    const path=location.pathname.toLowerCase();
    if(path.endsWith('/account.html')) buildAccount(lang);
    else if(path.endsWith('/partner.html')) buildPartner(lang);
    else buildHome(lang);
  }
  document.addEventListener('DOMContentLoaded', ()=>{ const lang = localStorage.getItem('hs_lang') || 'ar'; buildAll(lang); });
})(window);
