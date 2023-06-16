const body = document.querySelector('body');
const open = document.querySelector('.btn');
open.addEventListener('click', () => {
  const popup = document.createElement('section');
  popup.id = 'nav-menu';
  popup.innerHTML = `
    <button type="button" class="close"><img src="images/small_icons/close_mobile_menu.png" alt=""></button>
    <ul>
    <li data-target="submenu-1" id="sub-menu-1" style="border: 1px solid rgb(60, 63, 70); border-right: 0">
      <a href="#">Event Introduction</a>
    </li>
    <button type="button" class="menu-1"><img src="images/small_icons/arrow_down.png" alt=""></button>
    <li data-target="submenu-2" id="sub-menu-2">
      <a href="#">program</a>
    </li>
    <button type="button" class="menu-2"><img src="images/small_icons/arrow_down.png" alt=""></button>
    <li class="hide"><a href="#">Application for participation</a></li>
    <li class="hide"><a href="about.html">About</a></li>
    <li class="hide"><a href="#">News</a></li>
    <li id="live"><a href="#">presentation</a></li>
    </ul>
    `;
  body.appendChild(popup);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(popup);
  });
});

const speakers = {
  speakerList: [
    {
      image: 'images/speakers/speaker_01.png',
      name: 'Yohai Benkler',
      position:
        'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
      experience:
        'Benkler studies commons-based peer production, and published his seminal book: The Wealth of Networks in 2006.',
    },
    {
      image: 'images/speakers/speaker_02.png',
      name: 'Kilnam Chon',
      position: ' ',
      experience:
        "Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons in 2012, he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame.",
    },
    {
      image: 'images/speakers/speaker_03.png',
      name: 'SohYeong Noh',
      position: 'Director of Art Center Nabi and a board member of CC Korea',
      experience:
        'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
    },
    {
      image: 'images/speakers/speaker_04.png',
      name: 'Julia Leda',
      position: 'President of Young Pirates of Europe',
      experience:
        "European integration, political democracy and participation of youth through online as her major concern. Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    },
    {
      image: 'images/speakers/speaker_05.png',
      name: 'Lila Trettikov',
      position: 'Executive Director of the Wikimedia Foundation',
      experience:
        'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used monthly by nearly half a billion people.',
    },
    {
      image: 'images/speakers/speaker_06.png',
      name: 'Ryan Merkley',
      position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
      experience:
        'Ryan has been leading open-source projects at the Mozilla Foundation such as open source movement.',
    },
  ],
};

const speakerSection = document.querySelector('.speaker-list');
speakers.speakerList.forEach((s) => {
  speakerSection.innerHTML += `<div class="speaker">
          <div class="speaker-img">
            <img src="${s.image}" alt="">
          </div>
          <div class="name"><a href="">${s.name}</a></div>
          <div class="position">${s.position}</div>
          <div class="guide-line"></div>
          <div class="experience">${s.experience}</div>
         </div>`;
});

const programs = [
  {
    name: 'conference',
    des: 'Listen to lectures from speakers from around the world and learn about the latest trends in the world.',
  },
  {
    name: 'CS exhibition',
    des: "Let's meet the creations of artists from various fields who share the open spirit of CS.",
  },
  {
    name: 'forum',
    des: 'We have time to share our thoughts and opinions with experts by topic.',
  },
  {
    name: 'workshop',
    des: 'You can create your own creations using open source instead of just looking at them.',
  },
  {
    name: 'CS party',
    des: 'Create opportunities to freely network with CS personnel from around the world.',
  },
];

programs.forEach((program, index) => {
  document.querySelector('.programs').innerHTML += `<div class="program-list">
  <div class="program-icon">
  <img src="images/program/program_icon_0${index + 1}.png" alt="" />
  </div>
  <div class="program-subtitle">${program.name}</div>
  <div class="program-description">${program.des}</div>
  </div>`;
});
