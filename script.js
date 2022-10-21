const body = document.querySelector('body');
const open = document.querySelector('.btn');
open.addEventListener('click', () => {
  const popup = document.createElement('section');
  popup.id = 'nav-menu';
  popup.innerHTML = `
    <button type="button" class="close"><img src="images/close_mobile_menu.png" alt=""></button>
    <ul>
    <li data-target="submenu-1" id="sub-menu-1" style="border: 1px solid rgb(60, 63, 70); border-right: 0">
      <a href="#">Event Introduction</a>
    </li>
    <button type="button" class="menu-1"><img src="images/arrow_down.png" alt=""></button>
    <li data-target="submenu-2" id="sub-menu-2">
      <a href="#">program</a>
    </li>
    <button type="button" class="menu-2"><img src="images/arrow_down.png" alt=""></button>
    <li class="hide"><a href="#">Application for participation</a></li>
    <li class="hide"><a href="#">About</a></li>
    <li class="hide"><a href="#">News</a></li>
    <li id="live"><a href="#">presentation</a></li>
    </ul>
    `;
  body.appendChild(popup);

  //     const scroll = document.querySelector('.menu-1')
  //     scroll.addEventListener('click', () => {
  //         const submenu = document.getElementById("sub-menu-1");
  //         const add = document.querySelector('#add-em')
  //         submenu.appendChild(add);

  //         const close = document.querySelector('.menu-1');
  //         close.addEventListener('click', () => {
  //             submenu.removeChild(add);
  //     })

  // })

  // const scroll1 = document.querySelector('.menu-2')
  // scroll1.addEventListener('click', () => {
  //     const submenu = document.getElementById("sub-menu-2");
  //     const add = document.querySelector('#add-er')
  //     submenu.appendChild(add);

  //     const close = document.querySelector('.menu-2');
  //     close.addEventListener('click', () => {
  //         submenu.removeChild(add);
  // })

  // })

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(popup);
  });
});

const speakers = {
  speakerList: [
    {
      image: 'images/speaker_01.png',
      name: 'yohai benkler',
      nickname: 'Yohai Benkler',
      position: 'Professor at Harvard Law School',
      experience: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
    },
    {
      image: 'images/speaker_02.png',
      name: 'Jeon Gil-nam',
      nickname: 'Kilnam Chon',
      position: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
      experience: 'By developing Asia\'s first Internet protocol network SDN and leading Korea\'s first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.',
    },
    {
      image: 'images/speaker_03.png',
      name: 'Noh So-young',
      nickname: 'Sohyeong Noh',
      position: 'Art Center Nabi Director, CC Korea Director',
      experience: 'As the author of <Digital Art Art of Our Time>, he opened \'Art Center Nabi\', Korea\'s first digital art institution in 2000, and is currently serving.',
    },
    {
      image: 'images/speaker_04.png',
      name: 'Julia Leda',
      nickname: 'Julia Reda',
      position: 'Head of the Young Pirates of Europe',
      experience: 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU\'s copyright law in July.',
    },
    {
      image: 'images/speaker_05.png',
      name: 'Layla Trettikov',
      nickname: 'Lila Tretikov',
      position: 'Secretary General of the Wikimedia Foundation',
      experience: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world\'s population.',
    },
    {
      image: 'images/speaker_06.png',
      name: 'Ryan Merkley',
      nickname: 'Ryan Merkley',
      position: 'Creative Commons CEO, Former Mozilla Foundation COO',
      experience: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
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
          <div class="nickname"><a href="">${s.nickname}</a></div>
          <div class="position">${s.position}</div>
          <div class="guide-line"></div>
          <div class="experience">${s.experience}</div>
         </div>`;
});
