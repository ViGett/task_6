/*
Проверка URL на валидность.
Передаем урл функции и проверяем валидное оно или нет (возращаем тру или фолс).
Критерии: Урл должен начинаться с http:// иили https:// и заканчиваться на .php или .html. Например - http://site.ru/index.php - валидный, http://site.com - не валидный, site.ru/index.php - не валидный
*/


let isLink = str => {
    let reg = /^https?:\/\/.+\.[a-z]{2,}\/.+\.html|php$/;

    if (str.match(reg)) alert('URL валидный (true)');
    else alert('URL не валидный (false)')
}

let str = prompt('Введите URL');

isLink(str);
