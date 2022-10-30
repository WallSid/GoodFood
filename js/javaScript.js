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
    for (let key in langArray) {
        document.querySelector('.lng-' + key).innerHTML = langArray[key][hash];
    };

}

changeLanguage();