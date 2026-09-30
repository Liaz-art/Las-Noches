const regulation={"authority":"Un THG dispose d'une autorité décisionnaire absolue sur toute sanction : il peut à tout moment réduire, aggraver ou lever une peine prévue par ce règlement, quel que soit le palier de gravité concerné, y compris prononcer la mort. Cette autorité prime sur toute sanction déjà fixée par un HG.","levels":[{"number":1,"label":"MINEURE","articles":[{"number":"1.1","text":"Un gradé a autorité pleine et entière sur son subordonné direct.","sanction":"Rappel à l'ordre par la voie hiérarchique.","proposed":false},{"number":"1.2","text":"Un ordre donné par un HG est absolu et doit être exécuté sans délai, sauf contre-ordre explicite d'un autre HG ou d'un THG.","sanction":"Avertissement ; en cas de refus réitéré sans contre-ordre valable, requalification en insubordination (Gravité 3).","proposed":false},{"number":"1.3","text":"Tout Arrancar doit s'exprimer avec un langage approprié.","sanction":"Amende légère.","proposed":false}]},{"number":2,"label":"MODÉRÉE","articles":[{"number":"2.1","text":"Les combats sont interdits à l'intérieur du palais, sauf motif valable apprécié par un HG/THG.","sanction":"Sanction disciplinaire à l'appréciation du HG/THG concerné.","proposed":false},{"number":"2.2","text":"Les attaques de zone dans le palais sont interdites, sauf motif valable apprécié par un HG/THG.","sanction":"Sanction disciplinaire à l'appréciation du HG/THG concerné.","proposed":false},{"number":"2.3","text":"[Revendication] La guerre totale est circonscrite à une plage horaire définie (proposition : à partir de 21h30), afin de laisser aux factions le temps de dérouler leurs trames et de sécuriser les Arrancar envoyés en mission hors des heures de conflit ouvert.","sanction":"Statut : en négociation, non encore actée | sanction à définir au sommet diplomatique.","proposed":true},{"number":"2.4","text":"Interdiction d'entrer dans la salle d'un ordre dont on n'est pas membre sans autorisation.\nSauf sur ordre du Roi et/ou du Primera ou d'une urgence.","sanction":"Amende lourde.","proposed":false},{"number":"2.5","text":"Protocole d'adresse envers un THG\n\nEn dehors du cadre des ordres (sauf demande contraire du THG concerné), tout bas gradé souhaitant s'adresser à un Très Haut Gradé doit respecter le protocole suivant : genou à terre, présentation, puis demande de parole, avant de pouvoir s'exprimer.\n\nUn Haut Gradé n'est pas tenu de plier le genou face à un THG, mais reste soumis au reste du protocole (présentation, demande de parole).\n\nExemption : un THG peut à tout moment accorder une dérogation à ce protocole.\n\nProtocole d'adresse envers un HG\n\nEn dehors du cadre des ordres (sauf demande contraire du HG concerné), tout bas gradé souhaitant s'adresser à un Haut Gradé doit se présenter puis demander la parole avant de s'exprimer, sans obligation de plier le genou.\n\nExemption : un HG peut à tout moment accorder une dérogation à ce protocole.","sanction":"Sanction disciplinaire à l'appréciation du HG/THG concerné.\nAvertissement ; en cas de refus réitéré sans contre-ordre valable, requalification en insubordination (Gravité 3).","proposed":false}]},{"number":3,"label":"MAJEURE","articles":[{"number":"3.1","text":"La recherche scientifique commune ou commerciaux entre factions sont officiellement interdits. Ils peuvent avoir lieu dans la plus stricte discrétion.\nLes recherches d'accords de paix sont réservées aux diplomates ainsi qu'aux THG.","sanction":"Si le commandement a connaissance de ces pratiques : les personnes impliquées sont déclarées ennemies de la faction et jugées à hauteur des faits reprochés.\nPossibilité de requalification en gravité 4.","proposed":false},{"number":"3.2","text":"Interdiction de porter atteinte à un prisonnier ou un otage sans ordre explicite ; il doit toujours être escorté vers les cellules.\nSauf contre-ordre d'un HG/THG ou d'un diplomate.","sanction":"Cobaye scientifique (1 lune) + amende lourde.","proposed":false},{"number":"3.3","text":"Tout mensonge ou rapport falsifié sera sanctionné.","sanction":"Cobaye scientifique (1 lune) + amende lourde.\nPossibilité de requalification en gravité 4.","proposed":false}]},{"number":4,"label":"CRITIQUE","articles":[{"number":"4.1","text":"Dès qu'une capture a lieu, toute personne en ayant connaissance doit immédiatement prévenir son HG et un diplomate, sous 20 minutes maximum.","sanction":"Un bras coupé + amende de 100 000 yens. Si la somme n'est pas réunie sous 7 jours : mort.","proposed":false},{"number":"4.2","text":"Dès lors qu'un individu est déclaré ennemi de Las Noche.","sanction":"Peine de gravité 4.","proposed":false},{"number":"4.3","text":"[Revendication] Le preneur d'otage est seul maître de la négociation. Les dommages physiques ou psychologiques déjà infligés (aux nôtres comme aux leurs) ne peuvent en aucun cas être invoqués pour obtenir une négociation à la baisse. Si aucun accord n'est trouvé après 3 demandes formulées de part et d'autre, l'otage subit des séquelles irréversibles, ou la mort en cas de récidive.","sanction":"Statut : en négociation, non encore actée | application immédiate proposée dans la note aux HG.","proposed":true},{"number":"4.4","text":"Nul ne s'assied, sous aucun prétexte, sur le trône du Numéro 0.","sanction":"Peine de gravité 4.","proposed":false},{"number":"4.5","text":"Un ordre légitime d'un HG/THG ne se discute pas (complète l'article 1.2) ; le contester ouvertement, c'est choisir de mourir.\nCela en va de même pour le manque de respect en publique envers un HG/THG.","sanction":"Peine de gravité 4.","proposed":false}]}],"proposalNote":"[Revendication] = article proposé aux Hauts Gradés, en cours de négociation en sommet diplomatique | pas encore officiellement acté."};

const pages={
  reglement:{title:"Règlement",parent:"Information",eyebrow:"Par gravité"},
  objectifs:{title:"Objectifs Las Noches",parent:"Information",eyebrow:"Objectifs"},
  sphere:{title:"Hiérarchie Sphère Formation",parent:"Hiérarchie",eyebrow:"Organigramme"},
  espada:{title:"Roi / Espada / Privaron Las Noches",parent:"Hiérarchie",eyebrow:"Pouvoir de Las Noches"},
  procedure:{title:"Procédure de formation",parent:"Procédure de formation",eyebrow:"Formation & Aide"},
  "nouveau-formateur":{title:"Nouveau Formateur",parent:"Procédure de formation",eyebrow:"Premiers repères"}
};

const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function home(){
  return '<section class="hero"><div class="shell"><span class="eyebrow">Faction Arrancar</span><h1>Formation<br><em>Las Noches.</em></h1><p>Informations, hiérarchie et procédure de formation réunies au même endroit.</p></div></section>';
}

function rules(){
  return '<div class="reg-intro"><span class="eyebrow">Règlement par gravité</span><h2>Articles et sanctions</h2><p class="authority">'+escapeHTML(regulation.authority)+'</p></div>'+
    regulation.levels.map(level=>'<section class="severity severity-'+level.number+'"><div class="severity-head"><span class="index">0'+level.number+'</span><div><small>Gravité '+level.number+'</small><h3>'+escapeHTML(level.label)+'</h3></div><span class="count">'+level.articles.length+' articles</span></div>'+
      level.articles.map(rule=>'<article class="rule"><div class="rule-main"><span class="rule-number">'+escapeHTML(rule.number)+'</span><div>'+(rule.proposed?'<span class="proposal">Revendication · non actée</span>':'')+'<p>'+escapeHTML(rule.text)+'</p></div></div><div class="sanction"><small>Sanction ou statut</small><p>'+escapeHTML(rule.sanction)+'</p></div></article>').join('')+'</section>').join('')+
    '<p class="reg-note">'+escapeHTML(regulation.proposalNote)+'</p>';
}

function hierarchy(){
  const trainers=["Akasuna Kurosuki","Selena Solsticio","Lazalo Del Vacio","Stone Ryuazaki","Eris Akaria","Fryer zorwic"];
  return '<div class="org-intro"><span class="eyebrow">Organigramme</span><h2>La chaîne de formation</h2><p>La direction et les formateurs de Las Noches.</p></div>'+
    '<div class="org" role="group" aria-label="Hiérarchie de la sphère formation"><span class="org-kicker">Direction</span>'+
    '<div class="person org-lead"><img src="chef.webp" alt="Portrait illustré d’Azeno Del Vacio" loading="lazy"><div class="person-info"><small>Superviseur Chef</small><strong>Azeno Del Vacio</strong></div></div>'+
    '<div class="stem" aria-hidden="true"></div>'+
    '<div class="person org-deputy"><img src="sael.webp" alt="Portrait de Sael Valkan" loading="lazy"><div class="person-info"><small>Formateur en Chef</small><strong>Sael Valkan</strong></div></div>'+
    '<div class="stem" aria-hidden="true"></div><div class="team-heading">Formateurs</div><div class="trainers">'+
    trainers.map((name,i)=>'<div class="trainer"><span class="trainer-index">0'+(i+1)+'</span><div><small>Formateur</small><strong>'+escapeHTML(name)+'</strong></div></div>').join('')+
    '</div></div>';
}

function royalHierarchy(){
  const orders=[
    {order:"1",rank:"1",espada:"Calcume",privaron:"Ethan",co:"Co-gérant"},
    {order:"2",rank:"3",espada:"Islas Torres",privaron:"Saitekuro",co:"Co-gérant"},
    {order:"3",rank:"4",espada:"Tosen",privaron:"Selena Solsticio",co:"Co-gérante"},
    {order:"4",rank:"2",espada:"Azeno Del Vacio",privaron:"Akuma",co:"Co-gérant"},
    {order:"5",rank:"5",espada:"Akira Isogy",privaron:"Lucifere Lowneur",co:"Co-gérant"}
  ];
  const espadas=orders.map(({order,rank,espada})=>
    '<article class="rank-card"><span class="rank-number">N° '+escapeHTML(rank)+'</span><h3>'+escapeHTML(espada)+'</h3><p>Gérant Ordre '+order+'</p></article>'
  ).join('');
  const privarons=orders.map(({order,privaron,co})=>
    '<article class="rank-card"><span class="rank-number">Ordre '+order+'</span><h3>'+escapeHTML(privaron)+'</h3><p>'+escapeHTML(co)+' Ordre '+order+'</p></article>'
  ).join('');
  return '<div class="court-intro"><span class="eyebrow">Hiérarchie de Las Noches</span><h2>Le Roi et ses rangs</h2><p>Les Espada dirigent les ordres, assistés par les Privaron.</p></div>'+
    '<div class="court"><div class="throne"><span class="throne-symbol" aria-hidden="true">♛</span><small>Roi</small><strong>Sammael</strong></div>'+
    '<div class="court-line" aria-hidden="true"></div>'+
    '<section class="royal-tier" aria-labelledby="espada-title"><div class="tier-heading"><span>01</span><h2 id="espada-title">Espada</h2><p>Gérants des ordres</p></div><div class="tier-grid">'+espadas+'</div></section>'+
    '<div class="tier-lines" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>'+
    '<section class="royal-tier" aria-labelledby="privaron-title"><div class="tier-heading"><span>02</span><h2 id="privaron-title">Privaron</h2><p>Co-gérants des ordres</p></div><div class="tier-grid">'+privarons+'</div></section></div>';
}

function content(id){
  if(id==="reglement")return rules();
  if(id==="sphere")return hierarchy();
  if(id==="objectifs"){
    const objectives=[
      ["01","Évoluer","Développer sa puissance et ses compétences pour progresser au sein de Las Noches."],
      ["02","Se souvenir","Garder en mémoire notre histoire, nos alliés et les épreuves qui nous ont forgés."],
      ["03","Abattre les Shinigamis","Combattre les Shinigamis qui menacent Las Noches et défendre notre faction."]
    ];
    return '<div class="objectives-intro"><span class="eyebrow">Notre voie</span><h2>Les objectifs de Las Noches</h2><p>Trois principes guident la faction Arrancar.</p></div>'+
      '<div class="objectives">'+objectives.map(([number,title,description])=>
        '<article class="objective"><span class="objective-number">'+number+'</span><div><h3>'+escapeHTML(title)+'</h3><p>'+escapeHTML(description)+'</p></div></article>'
      ).join('')+'</div>';
  }
  if(id==="espada")return royalHierarchy();
  if(id==="nouveau-formateur")return '<h2>Comment recruter un formateur</h2><p>Le recrutement se déroule en trois étapes.</p>'+
    '<section class="step"><h3>1. Prendre contact</h3><p>Avant tout, contactez le Superviseur Chef ou le Formateur en Chef.</p></section>'+
    '<section class="step"><h3>2. Passer un entretien oral</h3><p>La personne candidate passe ensuite un entretien oral devant le Superviseur Chef ou le Formateur en Chef.</p></section>'+
    '<section class="step"><h3>3. Réussir l’examen</h3><p>Un examen lui est proposé. Pour être admise, elle doit le compléter et obtenir suffisamment de points.</p></section>'+
    '<section class="step"><h3>Moyens de contact</h3><p>Contactez le Superviseur Chef ou le Formateur en Chef sur Discord ou par missive en jeu.</p></section>';

  if(id==="procedure")return `
    <div class="procedure-intro"><span class="eyebrow">Guide du formateur</span><h2>Former un nouvel Arrancar</h2><p>Suivez ces six étapes, du premier contact jusqu’aux bases du combat.</p></div>
    <div class="procedure-list">
      <section class="procedure-step"><span class="procedure-number">01</span><div class="procedure-body">
        <h3>Premier contact</h3><p>Lorsque vous faites face à un jeune Arrancar, commencez par lui demander :</p>
        <ul><li>Son nom</li><li>Son prénom</li></ul>
        <aside class="procedure-note"><strong>HRP</strong><p>Apprenez-lui à se présenter correctement tout en restant RP. Pour l’aider, vous pouvez utiliser une phrase comme : « Concentre-toi, fixe mon épaule et présente-toi. » S’il rencontre des difficultés, expliquez-lui la manipulation dans le chat HRP.</p></aside>
      </div></section>
      <section class="procedure-step"><span class="procedure-number">02</span><div class="procedure-body">
        <h3>Commencer la formation</h3><p>Une fois l’étape 1 terminée, commencez officiellement sa formation depuis le <strong>menu C</strong>.</p>
        <p>Regardez le joueur, lancez sa formation, puis suivez les différentes indications affichées <strong>in game</strong>.</p>
      </div></section>
      <section class="procedure-step"><span class="procedure-number">03</span><div class="procedure-body">
        <h3>Le règlement</h3><p>Présentez-lui le <strong>règlement de Las Noches</strong>.</p>
        <p>Il n’est pas nécessaire de réciter chaque article mot pour mot. Expliquez-lui principalement les règles et les points importants qu’un nouvel Arrancar doit absolument connaître.</p>
        <p>Assurez-vous qu’il ait bien compris les règles essentielles avant de poursuivre la formation.</p>
      </div></section>
      <section class="procedure-step"><span class="procedure-number">04</span><div class="procedure-body">
        <h3>Présenter les Ordres</h3><p>Présentez clairement et complètement les <strong>Ordres de 5 à 1</strong>.</p>
        <p>Pour chaque Ordre, expliquez notamment :</p>
        <ul><li>Son rôle et son fonctionnement</li><li>Son organisation</li><li>Ses sorts et ses attaques</li><li>Ses particularités</li><li>Ses gérants</li><li>Les informations importantes à connaître</li></ul>
        <p>L’objectif est que le nouvel Arrancar comprenne le fonctionnement et les particularités de chaque Ordre.</p>
        <aside class="procedure-warning"><strong>Exception importante — Ordre 2</strong><p><strong>Ne donnez aucune information confidentielle concernant l’Ordre 2.</strong></p>
          <p>Vous ne devez notamment révéler :</p><ul><li>Aucun sort</li><li>Aucune attaque</li><li>Aucune information sur l’identité de ses gérants</li><li>Aucun détail concernant sa formation</li></ul>
          <p>L’Ordre 2 possède une formation particulière. <strong>La seule chose que vous êtes autorisé à expliquer est le rôle de l’Ordre et ce qu’il fait.</strong></p>
        </aside>
      </div></section>
      <section class="procedure-step"><span class="procedure-number">05</span><div class="procedure-body">
        <h3>Les pôles de Las Noches</h3><p>Présentez-lui les différents <strong>pôles de Las Noches</strong>.</p>
        <p>Expliquez notamment :</p><ul><li>Le rôle de chaque pôle</li><li>Leur fonctionnement</li><li>Qui les gère</li><li>À qui s’adresser en cas de besoin</li></ul>
      </div></section>
      <section class="procedure-step"><span class="procedure-number">06</span><div class="procedure-body">
        <h3>Les bases du combat</h3><p>Pour terminer la formation, expliquez-lui les <strong>bases du combat</strong>.</p>
        <p>Vous pouvez également lui apprendre ces bases au cours de la formation si cela est plus pratique.</p>
        <aside class="procedure-warning"><strong>Zone d’entraînement obligatoire</strong><p>Tout entraînement au combat doit obligatoirement avoir lieu dans une zone d’entraînement.</p></aside>
      </div></section>
    </div>
    <p class="procedure-end">Une fois toutes les étapes terminées et comprises par le nouvel Arrancar, sa formation peut être considérée comme terminée.</p>`;
  return "";
}

function closeMenus(){
  document.querySelectorAll(".nav-item.open").forEach(item=>{item.classList.remove("open");item.querySelector("button").setAttribute("aria-expanded","false")});
}

function render(){
  let id;
  try{id=decodeURIComponent(location.hash.slice(1))||"accueil"}catch{id="accueil"}
  const shortcuts={information:"objectifs",hierarchie:"sphere",formation:"procedure"};
  if(shortcuts[id]){id=shortcuts[id];history.replaceState(null,"","#"+id)}
  if(id!=="accueil"&&!pages[id])id="accueil";
  const page=pages[id];
  document.getElementById("main").innerHTML=id==="accueil"?home():
    '<div class="page-top"><div class="shell"><div class="crumb"><a href="#accueil">Accueil</a><span>›</span><span>'+page.parent+'</span><span>›</span><strong>'+page.title+'</strong></div><span class="eyebrow">'+page.eyebrow+'</span><h1>'+page.title+'</h1></div></div>'+
    '<article class="shell content">'+content(id)+'<a class="back" href="#accueil">← Accueil</a></article>';
  document.title=(page?page.title:"Accueil")+" — Formation Las Noches";
  document.querySelector(".nav>a").classList.toggle("active",id==="accueil");
  document.querySelectorAll(".nav-item").forEach(item=>{
    const active=!!page&&item.querySelector(".nav-head").textContent.includes(page.parent);
    item.querySelector(".nav-head").classList.toggle("active",active);
  });
  document.querySelectorAll(".dropdown a").forEach(link=>{
    if(link.hash==="#"+id)link.setAttribute("aria-current","page");
    else link.removeAttribute("aria-current");
  });
  closeMenus();
  window.scrollTo(0,0);
}

document.querySelectorAll(".nav-head").forEach(button=>button.addEventListener("click",()=>{
  const item=button.closest(".nav-item"),opening=!item.classList.contains("open");
  closeMenus();item.classList.toggle("open",opening);
  button.setAttribute("aria-expanded",String(opening));
}));
document.addEventListener("click",event=>{if(!event.target.closest(".nav-item"))closeMenus()});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenus()});
window.addEventListener("hashchange",render);
render();

const intro=document.getElementById("intro"),percent=document.getElementById("percent"),fill=intro.querySelector(".fill"),started=performance.now();
function tick(now){
  if(!intro.isConnected)return;
  const progress=Math.min(1,(now-started)/5000);
  fill.style.width=(progress*100)+"%";
  percent.textContent=Math.floor(progress*100)+"%";
  if(progress<1)requestAnimationFrame(tick);
  else{
    intro.classList.add("message");
    setTimeout(()=>{
      intro.classList.add("fading");
      setTimeout(()=>intro.remove(),3100);
    },3300);
  }
}
intro.addEventListener("transitionend",event=>{
  if(event.target===intro&&event.propertyName==="opacity"&&intro.classList.contains("fading"))intro.remove();
});
requestAnimationFrame(tick);
