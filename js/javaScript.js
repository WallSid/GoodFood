// const langEn = document.querySelector('#lang-en');
// const langRu = document.querySelector('#lang-ru');

// langEn.addEventListener('click', setLang.bind(null, 'en'));
// langRu.addEventListener('click', setLang.bind(null, 'ru'));

// function setLang(lang) {
//   if (!langArr.hasOwnProperty(lang)) return;
//   if (window.hasOwnProperty('localStorage'))
//     window.localStorage.setItem('lang', lang);
//   for (let key in langArr[lang]) {
//     let elem = document.querySelector('.lng-' + key);
//     if (elem) {
//       elem.innerHTML = langArr[lang][key];
//     }
//   }
//   location.reload();
// }
// let lang = window.hasOwnProperty('localStorage') || 'en';
// setLang(lang);


const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage () {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage () {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        location.reload();
    }
    select.value = hash;
    // elem = document.querySelector('[data-att]');
    // console.log(elem);
    console.log(document.querySelector('.lng-title').innerHTML);
    for (let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    };

}

changeLanguage();