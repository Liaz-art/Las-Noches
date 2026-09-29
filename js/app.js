const regulation = {
  authority: "Un THG dispose d'une autorité décisionnaire absolue sur toute sanction : il peut à tout moment réduire, aggraver ou lever une peine prévue par ce règlement, quel que soit le palier de gravité concerné, y compris prononcer la mort. Cette autorité prime sur toute sanction déjà fixée par un HG.",
  levels: [
    {
      number: 1,
      label: "MINEURE",
      articles: [
        {
          number: "1.1",
          text: "Un gradé a autorité pleine et entière sur son subordonné direct.",
          sanction: "Rappel à l'ordre par la voie hiérarchique.",
          proposed: false
        },
        {
          number: "1.2",
          text: "Un ordre donné par un HG est absolu et doit être exécuté sans délai, sauf contre-ordre explicite d'un autre HG ou d'un THG.",
          sanction: "Avertissement ; en cas de refus réitéré sans contre-ordre valable, requalification en insubordination (Gravité 3).",
          proposed: false
        },
        {
          number: "1.3",
          text: "Tout Arrancar doit s'exprimer avec un langage approprié.",
          sanction: "Amende légère.",
          proposed: false
        }
      ]
    },
    {
      number: 2,
      label: "MODÉRÉE",
      articles: [
        {
          number: "2.1",
          text: "Les combats sont interdits à l'intérieur du palais, sauf motif valable apprécié par un HG/THG.",
          sanction: "Sanction disciplinaire à l'appréciation du HG/THG concerné.",
          proposed: false
        },
        {
          number: "2.2",
          text: "Les attaques de zone dans le palais sont interdites, sauf motif valable apprécié par un HG/THG.",
          sanction: "Sanction disciplinaire à l'appréciation du HG/THG concerné.",
          proposed: false
        },
        {
          number: "2.3",
          text: "[Revendication] La guerre totale est circonscrite à une plage horaire définie (proposition : à partir de 21h30), afin de laisser aux factions le temps de dérouler leurs trames et de sécuriser les Arrancar envoyés en mission hors des heures de conflit ouvert.",
          sanction: "Statut : en négociation, non encore actée | sanction à définir au sommet diplomatique.",
          proposed: true
        },
        {
          number: "2.4",
          text: "Interdiction d'entrer dans la salle d'un ordre dont on n'est pas membre sans autorisation.\nSauf sur ordre du Roi et/ou du Primera ou d'une urgence.",
          sanction: "Amende lourde.",
          proposed: false
        },
        {
          number: "2.5",
          text: "Protocole d'adresse envers un THG\n\nEn dehors du cadre des ordres (sauf demande contraire du THG concerné), tout bas gradé souhaitant s'adresser à un Très Haut Gradé doit respecter le protocole suivant : genou à terre, présentation, puis demande de parole, avant de pouvoir s'exprimer.\n\nUn Haut Gradé n'est pas tenu de plier le genou face à un THG, mais reste soumis au reste du protocole (présentation, demande de parole).\n\nExemption : un THG peut à tout moment accorder une dérogation à ce protocole.\n\nProtocole d'adresse envers un HG\n\nEn dehors du cadre des ordres (sauf demande contraire du HG concerné), tout bas gradé souhaitant s'adresser à un Haut Gradé doit se présenter puis demander la parole avant de s'exprimer, sans obligation de plier le genou.\n\nExemption : un HG peut à tout moment accorder une dérogation à ce protocole.",
          sanction: "Sanction disciplinaire à l'appréciation du HG/THG concerné.\nAvertissement ; en cas de refus réitéré sans contre-ordre valable, requalification en insubordination (Gravité 3).",
          proposed: false
        }
      ]
    },
    {
      number: 3,
      label: "MAJEURE",
      articles: [
        {
          number: "3.1",
          text: "La recherche scientifique commune ou commerciaux entre factions sont officiellement interdits. Ils peuvent avoir lieu dans la plus stricte discrétion.\nLes recherches d'accords de paix sont réservées aux diplomates ainsi qu'aux THG.",
          sanction: "Si le commandement a connaissance de ces pratiques : les personnes impliquées sont déclarées ennemies de la faction et jugées à hauteur des faits reprochés.\nPossibilité de requalification en gravité 4.",
          proposed: false
        },
        {
          number: "3.2",
          text: "Interdiction de porter atteinte à un prisonnier ou un otage sans ordre explicite ; il doit toujours être escorté vers les cellules.\nSauf contre-ordre d'un HG/THG ou d'un diplomate.",
          sanction: "Cobaye scientifique (1 lune) + amende lourde.",
          proposed: false
        },
        {
          number: "3.3",
          text: "Tout mensonge ou rapport falsifié sera sanctionné.",
          sanction: "Cobaye scientifique (1 lune) + amende lourde.\nPossibilité de requalification en gravité 4.",
          proposed: false
        }
      ]
    },
    {
      number: 4,
      label: "CRITIQUE",
      articles: [
        {
          number: "4.1",
          text: "Dès qu'une capture a lieu, toute personne en ayant connaissance doit immédiatement prévenir son HG et un diplomate, sous 20 minutes maximum.",
          sanction: "Un bras coupé + amende de 100 000 yens. Si la somme n'est pas réunie sous 7 jours : mort.",
          proposed: false
        },
        {
          number: "4.2",
          text: "Dès lors qu'un individu est déclaré ennemi de Las Noche.",
          sanction: "Peine de gravité 4.",
          proposed: false
        },
        {
          number: "4.3",
          text: "[Revendication] Le preneur d'otage est seul maître de la négociation. Les dommages physiques ou psychologiques déjà infligés (aux nôtres comme aux leurs) ne peuvent en aucun cas être invoqués pour obtenir une négociation à la baisse. Si aucun accord n'est trouvé après 3 demandes formulées de part et d'autre, l'otage subit des séquelles irréversibles, ou la mort en cas de récidive.",
          sanction: "Statut : en négociation, non encore actée | application immédiate proposée dans la note aux HG.",
          proposed: true
        },
        {
          number: "4.4",
          text: "Nul ne s'assied, sous aucun prétexte, sur le trône du Numéro 0.",
          sanction: "Peine de gravité 4.",
          proposed: false
        },
        {
          number: "4.5",
          text: "Un ordre légitime d'un HG/THG ne se discute pas (complète l'article 1.2) ; le contester ouvertement, c'est choisir de mourir.\nCela en va de même pour le manque de respect en publique envers un HG/THG.",
          sanction: "Peine de gravité 4.",
          proposed: false
        }
      ]
    }
  ],
  proposalNote: "[Revendication] = article proposé aux Hauts Gradés, en cours de négociation en sommet diplomatique | pas encore officiellement acté."
};

const pages = {
  reglement: {
    title: "Règlement",
    parent: "Information",
    eyebrow: "Par gravité"
  },
  objectifs: {
    title: "Objectifs Las Noches",
    parent: "Information",
    eyebrow: "Objectifs"
  },
  sphere: {
    title: "Hiérarchie Sphère Formation",
    parent: "Hiérarchie",
    eyebrow: "Organigramme"
  },
  espada: {
    title: "Espada Las Noches",
    parent: "Hiérarchie",
    eyebrow: "Espada"
  },
  procedure: {
    title: "Procédure de formation",
    parent: "Procédure de formation",
    eyebrow: "Formation & Aide"
  },
  "nouveau-formateur": {
    title: "Nouveau Formateur",
    parent: "Procédure de formation",
    eyebrow: "Premiers repères"
  }
};

const escapeHTML = value => String(value).replace(
  /[&<>"']/g,
  character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]
);

function home() {
  return `
    <section class="hero">
      <div class="shell">
        <span class="eyebrow">Faction Arrancar</span>
        <h1>Formation<br><em>Las Noches.</em></h1>
        <p>Informations, hiérarchie et procédure de formation réunies au même endroit.</p>
      </div>
    </section>
  `;
}

function rules() {
  return `
    <div class="reg-intro">
      <span class="eyebrow">Règlement par gravité</span>
      <h2>Articles et sanctions</h2>
      <p class="authority">${escapeHTML(regulation.authority)}</p>
    </div>
  ` + regulation.levels.map(level => `
    <section class="severity severity-${level.number}">
      <div class="severity-head">
        <span class="index">0${level.number}</span>
        <div>
          <small>Gravité ${level.number}</small>
          <h3>${escapeHTML(level.label)}</h3>
        </div>
        <span class="count">${level.articles.length} articles</span>
      </div>
      ${level.articles.map(rule => `
        <article class="rule">
          <div class="rule-main">
            <span class="rule-number">${escapeHTML(rule.number)}</span>
            <div>
              ${rule.proposed ? '<span class="proposal">Revendication · non actée</span>' : ''}
              <p>${escapeHTML(rule.text)}</p>
            </div>
          </div>
          <div class="sanction">
            <small>Sanction ou statut</small>
            <p>${escapeHTML(rule.sanction)}</p>
          </div>
        </article>
      `).join("")}
    </section>
  `).join("") + `<p class="reg-note">${escapeHTML(regulation.proposalNote)}</p>`;
}

function hierarchy() {
  const trainers = [
    "Akasuna Kurosuki",
    "Selena Solsticio",
    "Lazalo Del Vacio",
    "Stone Ryuazaki",
    "Eris Akaria",
    "Fryer zorwic"
  ];

  return `
    <div class="org-intro">
      <span class="eyebrow">Organigramme</span>
      <h2>La chaîne de formation</h2>
      <p>La direction et les formateurs de Las Noches.</p>
    </div>
    <div class="org" role="group" aria-label="Hiérarchie de la sphère formation">
      <span class="org-kicker">Direction</span>

      <div class="person org-lead">
        <img src="chef.webp" alt="Portrait illustré d’Azeno Del Vacio" loading="lazy">
        <div class="person-info">
          <small>Superviseur Chef</small>
          <strong>Azeno Del Vacio</strong>
        </div>
      </div>

      <div class="stem" aria-hidden="true"></div>

      <div class="person org-deputy">
        <img src="sael.webp" alt="Portrait de Sael Valkan" loading="lazy">
        <div class="person-info">
          <small>Formateur en Chef</small>
          <strong>Sael Valkan</strong>
        </div>
      </div>

      <div class="stem" aria-hidden="true"></div>
      <div class="team-heading">Formateurs</div>

      <div class="trainers">
        ${trainers.map((name, i) => `
          <div class="trainer">
            <span class="trainer-index">0${i + 1}</span>
            <div>
              <small>Formateur</small>
              <strong>${escapeHTML(name)}</strong>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function content(id) {
  if (id === "reglement") return rules();
  if (id === "sphere") return hierarchy();

  if (id === "objectifs") {
    const objectives = [
      ["01", "Évoluer", "Développer sa puissance et ses compétences pour progresser au sein de Las Noches."],
      ["02", "Se souvenir", "Garder en mémoire notre histoire, nos alliés et les épreuves qui nous ont forgés."],
      ["03", "Abattre les Shinigamis", "Combattre les Shinigamis qui menacent Las Noches et défendre notre faction."]
    ];

    return `
      <div class="objectives-intro">
        <span class="eyebrow">Notre voie</span>
        <h2>Les objectifs de Las Noches</h2>
        <p>Trois principes guident la faction Arrancar.</p>
      </div>
      <div class="objectives">
        ${objectives.map(([number, title, description]) => `
          <article class="objective">
            <span class="objective-number">${number}</span>
            <div>
              <h3>${escapeHTML(title)}</h3>
              <p>${escapeHTML(description)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  if (id === "espada") return "<h2>Espada</h2>";

  if (id === "nouveau-formateur") {
    return `
      <h2>Bienvenue dans la sphère formation</h2>
      <p>Retrouve les informations utiles pour commencer ton rôle de formateur.</p>

      <section class="step">
        <h3>La hiérarchie</h3>
        <p>Découvre le Superviseur Chef, le Formateur en Chef et l’équipe de formation.</p>
        <a class="back" href="#sphere">Voir la hiérarchie →</a>
      </section>

      <section class="step">
        <h3>Le règlement</h3>
        <p>Prends connaissance des articles classés par gravité.</p>
        <a class="back" href="#reglement">Lire le règlement →</a>
      </section>

      <section class="step">
        <h3>La procédure</h3>
        <p>Consulte les étapes de formation des nouveaux Arrancars.</p>
        <a class="back" href="#procedure">Voir la procédure →</a>
      </section>
    `;
  }

  return `
    <h2>Formation & Aide</h2>
    <p>Bonjour cher formateur, voici comment fonctionne la formation des nouveaux Arrancars.</p>

    <section class="step">
      <h3>1. Lorsque vous faites face à un jeune Arrancar</h3>
      <p>Demandez-lui :</p>
      <ul><li>Nom et prénom</li></ul>
      <p>(Hrp : apprenez-lui à se présenter à vous avec la touche, tout en restant RP. Pour l’aider, utilisez des mots comme « Concentre-toi, fixe mon épaule et présente-toi ». Expliquez-le dans le chat HRP s’il a du mal.)</p>
    </section>

    <section class="step">
      <h3>2. Étape suivante</h3>
      <p>Le texte de cette étape s’interrompt ici sur le site d’origine.</p>
    </section>
  `;
}

function closeMenus() {
  document.querySelectorAll(".nav-item.open").forEach(item => {
    item.classList.remove("open");
    item.querySelector("button").setAttribute("aria-expanded", "false");
  });
}

function render() {
  let id;

  try {
    id = decodeURIComponent(location.hash.slice(1)) || "accueil";
  } catch {
    id = "accueil";
  }

  const shortcuts = {
    information: "objectifs",
    hierarchie: "sphere",
    formation: "procedure"
  };

  if (shortcuts[id]) {
    id = shortcuts[id];
    history.replaceState(null, "", "#" + id);
  }

  if (id !== "accueil" && !pages[id]) id = "accueil";
  const page = pages[id];

  document.getElementById("main").innerHTML = id === "accueil"
    ? home()
    : `
      <div class="page-top">
        <div class="shell">
          <div class="crumb">
            <a href="#accueil">Accueil</a>
            <span>›</span>
            <span>${page.parent}</span>
            <span>›</span>
            <strong>${page.title}</strong>
          </div>
          <span class="eyebrow">${page.eyebrow}</span>
          <h1>${page.title}</h1>
        </div>
      </div>
      <article class="shell content">
        ${content(id)}
        <a class="back" href="#accueil">← Accueil</a>
      </article>
    `;

  document.title = (page ? page.title : "Accueil") + " — Formation Las Noches";
  document.querySelector(".nav > a").classList.toggle("active", id === "accueil");

  document.querySelectorAll(".nav-item").forEach(item => {
    const active = !!page && item.querySelector(".nav-head").textContent.includes(page.parent);
    item.querySelector(".nav-head").classList.toggle("active", active);
  });

  document.querySelectorAll(".dropdown a").forEach(link => {
    if (link.hash === "#" + id) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  closeMenus();
  window.scrollTo(0, 0);
}

document.querySelectorAll(".nav-head").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".nav-item");
    const opening = !item.classList.contains("open");
    closeMenus();
    item.classList.toggle("open", opening);
    button.setAttribute("aria-expanded", String(opening));
  });
});

document.addEventListener("click", event => {
  if (!event.target.closest(".nav-item")) closeMenus();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenus();
});

window.addEventListener("hashchange", render);
render();

const intro = document.getElementById("intro");
const percent = document.getElementById("percent");
const started = performance.now();

function tick(now) {
  if (!intro.isConnected) return;
  const value = Math.min(100, Math.floor((now - started) / 50));
  percent.textContent = value + "%";
  if (value < 100) requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
setTimeout(() => intro.classList.add("message"), 5000);
setTimeout(() => intro.classList.add("fading"), 7000);
setTimeout(() => intro.remove(), 8600);
