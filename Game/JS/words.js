 wordList1 = ['Дом', 'Кот', 'Бык', 'Рак', 'Жук', 'Зуб', 'Рог', 'Шаг', 'Мир', 'Зал', 'Лев', 'Йод', 'Сон', 'Нож', 'Сын', 'Чай', 'Дуб', 'Шар', 'Шум', 'Пар', 'Луч', 'Меч', 'Лук', 'Сом', 'Пир', 'Нюх', 'Нос', 'Рой', 'Век', 'Мех', 'Фея', 'Еда', 'Ёрш', 'Уют', 'Ухо', 'Юла', 'Яма', 'Эхо', 'Имя', 'Ель']
          wordList2 = ['Каша', 'Море', 'Лужа', 'Поле', 'Рама', 'Щука', 'Пена', 'Чудо', 'Дети', 'Лапа', 'Весы', 'Вода', 'Пила', 'Кино', 'Жара', 'Гора', 'Луна', 'Цена', 'Нора', 'Сова', 'Яхта', 'Воин', 'Утка', 'Соус', 'Юмор', 'Утро', 'Ёлка', 'Юбка', 'Ящик', 'Арка', 'Тигр', 'Лифт', 'Снег', 'Лист', 'Клюв', 'Парк', 'Грач', 'Яйцо', 'Флаг', 'Рысь']
          wordList3 = ['Каток', 'Кусок', 'Салон', 'Наряд', 'Закат', 'Игрок', 'Туман', 'Тепло', 'Слеза', 'Парад', 'Банка', 'Вишня', 'Ветка', 'Галка', 'Белка', 'Ложка', 'Буква', 'Ванна', 'Бочка', 'Песня', 'Земля', 'Батут', 'Район', 'Алмаз', 'Чулок', 'Жираф', 'Сосед', 'Пирог', 'Рукав', 'Газон', 'Маска', 'Печка', 'Масло', 'Кошка', 'Лодка', 'Карта', 'Лента', 'Горло', 'Дочка', 'Место']
          wordList4 = ['Отпуск', 'Жемчуг', 'Рельсы', 'Рыцарь', 'Остров', 'Шарики', 'Август', 'Камень', 'Золото', 'Кролик', 'Десять', 'Случай', 'Кактус', 'Книжки', 'Ковшик', 'Зяблик', 'Сонный', 'Скалка', 'Спелый', 'Спичка', 'Победа', 'Аптека', 'Сорока', 'Работа', 'Страус', 'Свёкла', 'Свитер', 'Сирена', 'Дорога', 'Ворота', 'Цветок', 'Крючок', 'Колесо', 'Стакан', 'Стекло', 'Талант', 'Молоко', 'Огород', 'Сугроб', 'Ананас']
          wordList5 = ['Барабан', 'Адмирал', 'Анекдот', 'Самовар', 'Носорог', 'Красота', 'Дневник', 'Человек', 'Таракан', 'Старуха', 'Палитра', 'Парашют', 'Песочек', 'Пластик', 'Табурет', 'Веселье', 'Вмятина', 'Возраст', 'Ярмарка', 'Мальчик', 'Капитан', 'Зеркало', 'История', 'Приехал', 'Хозяйка', 'Большой', 'Дядюшка', 'Трактор', 'Стрелка', 'Свадьба', 'Антенна', 'Кукушка', 'Счастье', 'Русалка', 'Реклама', 'Медведь']
          wordList6 = ['Гардероб', 'Горизонт', 'Стрекоза', 'Ресторан', 'Поплавок', 'Единорог', 'Телескоп', 'Талисман', 'Лабиринт', 'Мартышка', 'Младенец', 'Акварель', 'Горбушка', 'Жужжание', 'Кармашек', 'Наклейка', 'Памятник', 'Сапожник', 'Раковина', 'Ласточка', 'Карточка', 'Крепость', 'Солнышко', 'Сходство', 'Блинчики', 'Странник', 'Туловище', 'Черепаха', 'Художник', 'Королева', 'Буратино', 'Пирамида', 'Обезьяна', 'Кукуруза', 'Квартира', 'Здоровье']
          wordList7 = ['Лена читает <br> книгу.', 'Кошка любит <br> молоко.', 'Девочка учит <br> стихи.', 'Коля купил <br> игрушку.', 'Собака грызёт <br> кость.', 'Медведь зимой <br> спит.', 'Ваня ест <br> яблоко.', 'Катя любит <br> конфеты.', 'Котёнок весело <br> играет.', 'Ярко светит <br> солнце.', 'На ветке <br> висит груша.', 'Бегемот живёт <br> в болоте.', 'У Буратино <br> золотой ключик.', 'На тарелке <br> лежит яблоко.', 'На ёлке <br> выросли шишки.', 'Птица сидит <br> на ветке.', 'В саду <br> растёт капуста.', 'Под окном <br> растут цветы.', 'Завтра будет <br> сильный ветер.', 'Маша хочет <br> пойти гулять.']

        var count = 0;
        var delay_time = 1000;

        document.getElementById('1').checked = true;

        game = false;


        function сhangSpeed() {
          speed = document.getElementById("speed").value;
          delay_time = 6000 - (speed * 1000);
          return delay_time;
        }

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }

        function randomWords(){
          arrNum = getRandomInt(1,8);
          switch(arrNum){
            case 1:
              console.log(1);
              return wordList1;
            case 2:
              console.log(2);
              return wordList2;
            case 3:
              console.log(3);
              return wordList3;
            case 4:
              console.log(4);
              return wordList4;
            case 5:
              console.log(5);
              return wordList5;
            case 6:
              console.log(6);
              return wordList6;
            case 7:
              console.log(7);
              return wordList7;                        
          }

        }

        function changLevel(){
          if (document.getElementById('1').checked) { return wordList1; }
          else if (document.getElementById('2').checked) { return wordList2; }
          else if (document.getElementById('3').checked) { return wordList3; }
          else if (document.getElementById('4').checked) { return wordList4; }
          else if (document.getElementById('5').checked) { return wordList5; }
          else if (document.getElementById('6').checked) { return wordList6; }
          else if (document.getElementById('7').checked) { return wordList7; }
          else if (document.getElementById('8').checked) { return randomWords(); }

        }



        function showText(wordList){
          if (count <= wordList.length - 1) {
            document.getElementById('word').innerHTML = wordList[count];
            count++;
          }
          else{
            count = 0;
          }
        }

        function runGame (){
          setTimeout(function run() {
            if (game){
              delay_time = сhangSpeed();
              level = changLevel();

              showText(level);
              setTimeout(run, delay_time);
            }
          }, delay_time);
        }


    window.onload = function () {
      var b = document.getElementById("startButton").onclick = function() {
        if ( this.innerHTML == "Старт" )
          game = true,
          runGame(),
          this.innerHTML = "Стоп";
        else this.innerHTML = "Старт",
          game = false;
      }
    return false;
    }