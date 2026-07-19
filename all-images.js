const extraPics=[
  ['Big Guns.jpeg','Big guns. Bigger personality.'],
  ['WhatsApp Image 2026-07-16 at 3.07.23 PM.jpeg','The original Arsh era'],
  ['WhatsApp Image 2026-07-16 at 3.07.24 PM (1).jpeg','Birthday celebrations across every distance'],
  ['WhatsApp Image 2026-07-16 at 3.07.27 PM (2).jpeg','Main character energy'],
  ['WhatsApp Image 2026-07-16 at 3.07.27 PM (4).jpeg','Another frame worth keeping'],
  ['WhatsApp Image 2026-07-16 at 3.07.28 PM (1).jpeg','Coffee, conversations, and the usual attitude'],
  ['WhatsApp Image 2026-07-16 at 3.07.28 PM.jpeg','One more for the archives'],
  ['WhatsApp Image 2026-07-16 at 3.08.35 PM (1).jpeg','Built different'],
  ['WhatsApp Image 2026-07-16 at 3.08.35 PM.jpeg','Effortlessly composed'],
  ['WhatsApp Image 2026-07-16 at 3.10.46 PM.jpeg','The CFO era']
];
extraPics.forEach(([src,cap])=>{pics.push([src,cap]);const f=document.createElement('figure');f.className='memory-card far';f.innerHTML=`<img src="${src}" alt="${cap}" loading="lazy"><span>${cap}</span>`;const index=pics.length-1;f.onclick=()=>openPhoto(index);stage.append(f)});
render();
