import iphone7 from '../images/iphone/iphone7.jpg';
import iphone8plus from '../images/iphone/iphone8plus.jpg';
import iphone8 from '../images/iphone/iphone8.jpeg';
import iphone7plus from '../images/iphone/iphone7plus.jpg';
import iphonex from '../images/iphone/iphonex.jpeg';
import iphone11 from '../images/iphone/iphone11.jpeg';
import ipad18 from '../images/ipad/ipad18.jpg';
import ipad19 from '../images/ipad/ipad19.jpg';
import ipad1812 from '../images/ipad/ipad1812.jpg';
import ipadair from '../images/ipad/ipadair.jpg';
import ipadmini from '../images/ipad/ipadmini.jpg';
import ipadpro from '../images/ipad/ipadpro.jpg';
import imac from '../images/mac/imac.jpg';
import imaccustom from '../images/mac/imaccustom.jpg';
import macair from '../images/mac/macair.jpg';
import macmini from '../images/mac/macmini.jpg';
import macpro from '../images/mac/macpro.jpg';
import macpro2 from '../images/mac/macpro2.jpg';
import watch2 from '../images/watch/watch2.jpg';
import watch3 from '../images/watch/watch3.jpg';
import watch4 from '../images/watch/watch4.jpg';
import watch5 from '../images/watch/watch5.jpg';
import airpods from '../images/accestories/airpods.jpg';
import airpods2 from '../images/accestories/airpods2.jpg';
import airpodspro from '../images/accestories/airpodspro.jpg';
import usbcable from '../images/accestories/usbcable.jpg';

const SETCURRENTSECTION = 'setCurrentSection';
const SETCURRENTITEM = 'setCurrentItem';
const CHANGEQUANTITY = 'changeQuantity';
let id = 0;
const initionalState = {
    iphone: [
        {
            id: ++id,
            type: 'iphone',
            model: 'Iphone 7 64gb',
            price: 400,
            img: iphone7,
            description: 'Смартфон працює на базі 64-бітного чотириядерного процесора Apple A10 Fusion, що працює з тактовою частотою 1,8 ГГц. Графічний процесор — 6-ядерний. Оперативна пам\'ять — 2 Гб для 7, а для 7 Plus — 3Гб, вбудована пам\'ять у 7 і 7 Plus — 32/128/256 Гб (слот розширення пам\'яті відсутній). Апарат 7 оснащений 4,7-дюймовим (11,94 см відповідно) екраном із розширенням 750 x 1334 пікселів, тобто з щільністю пікселів 326 (ppi), а 7 Plus 5,5-дюймовим (13,97 см відповідно) екраном із розширенням 1080 x 1920 пікселів, тобто із щільністю пікселів 401 (ppi). Усі екрани виконані за технологією IPS LCD. В усі апарати вбудовано 12-мегапіксельну основну камеру, яка може знімати 4К-відео (2160p) із частотою 30 кадрів на секунду і 1080p із частотою 60 і 120 кадрів на секунду, а також 720p із частотою 240 кадрів на секунду. Апарат оснащено фронтальною 7-мегапіксельною камерою (1080p, 30 кадрів за секунду і 720p, 240 кадрів на секунду). Дані передаються бездротовими модулями Wi-Fi (802.11a/b/g/n/ac), Bluetooth 4.2. Підтримує мобільні мережі 2, 3 і 4 покоління, вбудована антена стандарту GPS + GLONASS. Всі апарати працюють від Li-Ion акумулятора, що може працювати у режимі очікування 240 годин, або ж 10 днів у версії 7, 384 години, або ж 16 днів у версії 7 Plus, у режимі розмови — 14 годин і 21 годину відповідно, і важить 138 і 188 грамів. У клавішу Додому встановлено сканер відбитків пальців — Touch ID.',
            quantity: 4
        },
        {
            id: ++id,
            type: 'iphone',
            model: 'Iphone 7 plus 64gb',
            price: 500,
            img: iphone7plus,
            description: 'Смартфон працює на базі 64-бітного чотириядерного процесора Apple A10 Fusion, що працює з тактовою частотою 1,8 ГГц. Графічний процесор — 6-ядерний. Оперативна пам\'ять — 2 Гб для 7, а для 7 Plus — 3Гб, вбудована пам\'ять у 7 і 7 Plus — 32/128/256 Гб (слот розширення пам\'яті відсутній). Апарат 7 оснащений 4,7-дюймовим (11,94 см відповідно) екраном із розширенням 750 x 1334 пікселів, тобто з щільністю пікселів 326 (ppi), а 7 Plus 5,5-дюймовим (13,97 см відповідно) екраном із розширенням 1080 x 1920 пікселів, тобто із щільністю пікселів 401 (ppi). Усі екрани виконані за технологією IPS LCD. В усі апарати вбудовано 12-мегапіксельну основну камеру, яка може знімати 4К-відео (2160p) із частотою 30 кадрів на секунду і 1080p із частотою 60 і 120 кадрів на секунду, а також 720p із частотою 240 кадрів на секунду. Апарат оснащено фронтальною 7-мегапіксельною камерою (1080p, 30 кадрів за секунду і 720p, 240 кадрів на секунду). Дані передаються бездротовими модулями Wi-Fi (802.11a/b/g/n/ac), Bluetooth 4.2. Підтримує мобільні мережі 2, 3 і 4 покоління, вбудована антена стандарту GPS + GLONASS. Всі апарати працюють від Li-Ion акумулятора, що може працювати у режимі очікування 240 годин, або ж 10 днів у версії 7, 384 години, або ж 16 днів у версії 7 Plus, у режимі розмови — 14 годин і 21 годину відповідно, і важить 138 і 188 грамів. У клавішу Додому встановлено сканер відбитків пальців — Touch ID.',
            quantity: 1
        },
        {
            id: ++id,
            type: 'iphone',
            model: 'Iphone 8 64gb',
            price: 550,
            img: iphone8,
            description: 'iPhone 8 і iPhone 8 Plus — смартфони із серії iPhone, розробляються компанією Apple Inc., працюють на операційній системі IOS 11. Смартфон є наступником IPhone 7 і одинадцятим поколінням iPhone. Релiз вiдбувся 12 вересня 2017 року продажі стартували 22 вересня. Поставки нової моделі iPhone 8 було перенесено від запланованої спочатку дати через труднощі у виробництві OLED-панелей для екранів. В квітні 2018 року, в рамках благодійної кампанії (RED), була представлена версія в яскраво-червоному кольорі. В «Apple» вирішили відійти від традиції називати смартфони із літерою, перейшовши відразу до iPhone 8 iPhone 8 — ювілейна модель, оскільки перший iPhone був випущений 10 років тому у 2007 році.',
            quantity: 0
        },
        {
            id: ++id,
            type: 'iphone',
            model: 'Iphone 8 plus 64gb',
            price: 650,
            img: iphone8plus,
            description: 'iPhone 8 і iPhone 8 Plus — смартфони із серії iPhone, розробляються компанією Apple Inc., працюють на операційній системі IOS 11. Смартфон є наступником IPhone 7 і одинадцятим поколінням iPhone. Релiз вiдбувся 12 вересня 2017 року продажі стартували 22 вересня. Поставки нової моделі iPhone 8 було перенесено від запланованої спочатку дати через труднощі у виробництві OLED-панелей для екранів. В квітні 2018 року, в рамках благодійної кампанії (RED), була представлена версія в яскраво-червоному кольорі. В «Apple» вирішили відійти від традиції називати смартфони із літерою, перейшовши відразу до iPhone 8 iPhone 8 — ювілейна модель, оскільки перший iPhone був випущений 10 років тому у 2007 році.',
            quantity: 10
        },
        {
            id: ++id,
            type: 'iphone',
            model: 'Iphone X 64gb',
            price: 800,
            img: iphonex,
            description: '   IPhone X оснащенний діагональним 5,8-дюймовим кольоровим OLED-екраном, що підтримує широку кольорову гаму DCI-P3, sRGB та високий динамічний діапазон, а коефіцієнт контрастності 1 000 000:1. На дисплеї Super Retina використовується технологія True Tone як на iPad Pro, яка використовує датчики зовнішнього освітлення, щоб адаптувати баланс білого дисплея до навколишнього навколишнього світла. Хоча iPhone X не підтримує таку ж технологію ProMotion, як у дисплеях другого покоління iPad Pro, де дисплей забезпечує частоту оновлення 120 Гц, він робить вибірковий сенсорний вхід на 120 Гц.\n' +
                '\n' +
                '   IPhone X має два варіанти кольорів: сріблястий і космічний сірий. Передня і задня частина телефону зроблені із нержавіючої хірургічної сталі, що підвищує термін служби, а пристрій має скляний корпус. Корпус захищений від води та пилу за стандартом IP67.\n' +
                '\n' +
                '   В iPhone X міститься Apple-AION Bionic чип, який також використовується в iPhone 8 і 8 Plus, який є гекса-ядерним процесором із двома ядрами, оптимізованими для продуктивності, що на 25 % швидше, ніж процесор A10 Fusion, а також чотири оптимізовані за ефективністю ядер, які на 70 % швидше, ніж попереднє покоління. Він також оснащений першим Apple-розробленим графічним процесором і Neural Engine, який керує прискорювачем штучного інтелекту. Мікропроцесор A11 Bionic виготовлений на замовлення Apple на фабриках тайванської компанії TSMC.\n',
            quantity: 4
        },
        {
            id: ++id,
            type: 'iphone',
            model: 'Iphone 11 128gb',
            price: 1100,
            img: iphone11,
            description: 'iPhone 11 працює на новому швидкодіючому процесорі А13 третього покоління (до 1 трильйона операцій на секунду).\n' +
                '\n' +
                'Блок основної камери отримав два об\'єктива по 12 Мп, дозвіл фронтальної камери також 12 Мп. З\'явився режим нічної зйомки, а для перемикання між режимом фото і відео досить одного дотику. Крім того, автономність роботи iPhone 11 значно збільшилася.\n' +
                '\n' +
                'Завдяки посиленому захисту корпусу смартфон може знаходитись на глибині до 2 метрів протягом півгодини.',
            quantity: 6
        }
    ],
    ipad: [
        {
            id: ++id,
            type: 'ipad',
            model: 'Apple iPad 2018 Wi-Fi 128GB',
            price: 350,
            img: ipad18,
            description: 'Планшет 9.7 ", 2048x1536, TFT IPS\n' +
                'вбудована пам\'ять 128 Гб, без слота для карт пам\'яті\n' +
                'iOS, ОЗУ 2 Гб, процесор Apple A10 Fusion\n' +
                'Wi-Fi, Bluetooth\n' +
                'розміри 169.5x240x7.5 мм, вага 469 г\n' +
                'тилова камера 8 Мпікс\n' +
                'фронтальна камера 1.2 Мпікс',
            quantity: 1
        },
        {
            id: ++id,
            type: 'ipad',
            model: 'Apple iPad 2019 Wi-Fi 128GB',
            price: 420,
            img: ipad19,
            description: 'Планшет 9.7 ", 2048x1536, TFT IPS\n' +
                'вбудована пам\'ять 128 Гб, без слота для карт пам\'яті\n' +
                'iOS, ОЗУ 2 Гб, процесор Apple A10 Fusion\n' +
                'Wi-Fi, Bluetooth\n' +
                'розміри 169.5x240x7.5 мм, вага 469 г\n' +
                'тилова камера 8 Мпікс\n' +
                'фронтальна камера 1.2 Мпікс',
            quantity: 5
        },
        {
            id: ++id,
            type: 'ipad',
            model: 'Apple iPad 2018 Wi-Fi 128GB 12.1',
            price: 400,
            img: ipad1812,
            description: 'Планшет 12.1 ", 2048x1536, TFT IPS\n' +
                'вбудована пам\'ять 128 Гб, без слота для карт пам\'яті\n' +
                'iOS, ОЗУ 2 Гб, процесор Apple A10 Fusion\n' +
                'Wi-Fi, Bluetooth\n' +
                'розміри 169.5x240x7.5 мм, вага 469 г\n' +
                'тилова камера 8 Мпікс\n' +
                'фронтальна камера 1.2 Мпікс',
            quantity: 4
        },
        {
            id: ++id,
            type: 'ipad',
            model: 'Apple iPad Air',
            price: 550,
            img: ipadair,
            description: 'Планшет 9.7 ", 2048x1536, TFT IPS\n' +
                'вбудована пам\'ять 128 Гб, без слота для карт пам\'яті\n' +
                'iOS, ОЗУ 2 Гб, процесор Apple A10 Fusion\n' +
                'Wi-Fi, Bluetooth\n' +
                'розміри 169.5x240x7.5 мм, вага 469 г\n' +
                'тилова камера 8 Мпікс\n' +
                'фронтальна камера 1.2 Мпікс',
            quantity: 7
        },
        {
            id: ++id,
            type: 'ipad',
            model: 'Apple iPad mini',
            price: 600,
            img: ipadmini,
            description: 'Планшет 9.7 ", 2048x1536, TFT IPS\n' +
                'вбудована пам\'ять 128 Гб, без слота для карт пам\'яті\n' +
                'iOS, ОЗУ 2 Гб, процесор Apple A10 Fusion\n' +
                'Wi-Fi, Bluetooth\n' +
                'розміри 169.5x240x7.5 мм, вага 469 г\n' +
                'тилова камера 8 Мпікс\n' +
                'фронтальна камера 1.2 Мпікс',
            quantity: 2
        },
        {
            id: ++id,
            type: 'ipad',
            model: 'Apple iPad pro',
            price: 900,
            img: ipadpro,
            description: 'Планшет 9.7 ", 2048x1536, TFT IPS\n' +
                'вбудована пам\'ять 128 Гб, без слота для карт пам\'яті\n' +
                'iOS, ОЗУ 2 Гб, процесор Apple A10 Fusion\n' +
                'Wi-Fi, Bluetooth\n' +
                'розміри 169.5x240x7.5 мм, вага 469 г\n' +
                'тилова камера 8 Мпікс\n' +
                'фронтальна камера 1.2 Мпікс',
            quantity: 4
        }
    ],
    mac: [
        {
            id: ++id,
            type: 'mac',
            model: 'MacBook Pro',
            price: 1400,
            img: macpro,
            description: 'Два порти FireWire 800 (один на передній панелі, один на задній панелі). Два порти FireWire 400 (один на передній панелі, один на задній панелі). Пять портів USB 2.0 (два на передній панелі, три на задній панелі). Вхід і вихід «міні-джек» для аналогового стереосигналу. Розєм «міні-джек» для навушників на передній панелі. Оптичний цифровий аудіовхід і аудіовихід Toslink.Два незалежних інтерфейси 10/100/1000 BASE-T Ethernet (RJ-45). Bluetooth 2.0 +EDR. Wi-Fi 802.11n.',
            quantity: 4
        },
        {
            id: ++id,
            type: 'mac',
            model: 'Mac Pro',
            price: 5000,
            img: macpro2,
            description: 'Чотири порти FireWire 800 (два на передній панелі, два на задній панелі). Пять портів USB 2.0 (два на передній панелі, три на задній панелі). Вхід і вихід «міні-джек» для аналогового стереосигналу. Розєм «міні-джек» для навушників на передній панелі. Оптичний цифровий аудіовхід і аудіовихід Toslink Два незалежних інтерфейси 10/100/1000BASE-T Ethernet (RJ-45). Bluetooth 2.1 +EDR. Плата AirPort Extreme з підтримкою Wi-Fi стандарту IEEE 802.11a/b/g.',
            quantity: 5
        },
        {
            id: ++id,
            type: 'mac',
            model: 'iMac',
            price: 1800,
            img: imac,
            description: 'Настільний компютер, який буквально занурює вас в контент. Ця ідея лежить в основі сучасного iMac - сьогодні вона актуальна? як ніколи. Абсолютно нові процесори, інноваційні графічні технології, надсучасні накопичувачі і розєми з вражаючою пропускною спроможністю - все це новий iMac. Його дисплей Retina здатний оживити будь-яку картинку, адже за яскравістю і якістю передачі кольору йому немає рівних серед iMac. Працювати на iMac тепер ще цікавіше і приємніше.',
            quantity: 8
        },
        {
            id: ++id,
            type: 'mac',
            model: 'MacBook mini',
            price: 1000,
            img: macmini,
            description: '4-ядерний процесор з тактовою частотою 3,6 ГГц. Накопичувач 128 ГБ. 4-ядерний процесор Intel Core i3 8-го покоління з тактовою частотою 3,6 ГГц  8 ГБ памяті DDR4 2666 МГц. Графічний процесор Intel UHD Graphics 630. SSD-накопичувач PCIe ємністю 128 ГБ',
            quantity: 6
        },
        {
            id: ++id,
            type: 'mac',
            model: 'iMac custom',
            price: 2100,
            img: imaccustom,
            description: 'Екран 27 "IPS Retina (5120x2880), 5K LED, глянцевий / Intel Core i5 (3.0) / RAM 16 ГБ / Fusion Drive 1 ТБ / AMD Radeon Pro 570X, 4 ГБ / Ethernet 10/100/1000 / Wi-Fi 802.11 a / b / g / n / ac / Bluetooth 4.2 / macOS Mojave / 650x516x 203 мм, 9.44 кг / білий',
            quantity: 6
        },
        {
            id: ++id,
            type: 'mac',
            model: 'MacBook Air',
            price: 1000,
            img: macair,
            description: 'Улюблений для всіх Mac, в який можна легко закохатися заново. Ще більш тонкий і легкий, новий MacBook Air оснащений дисплеєм Retina з технологією True Tone, Touch ID, клавіатурою останнього покоління і трекпедом Force Touch. Представлений в трьох кольорах - сріблястому, золотом і «сірий космос». Це самий екологічний Mac. Зберігши його культовий дизайн, ми використовували для корпусу тільки перероблений алюміній.1 І це неймовірно зручний MacBook Air - він працює весь день без підзарядки і може впоратися з будь-якими завданнями.',
            quantity: 6
        },
    ],
    watch: [
        {
            id: ++id,
            type: 'watch',
            model: 'Apple watch 2',
            price: 300,
            img: watch2,
            description: 'Apple Watch — наручний годинник із додатковими функціями (розумний годинник) створений корпорацією Apple. Він поєднує у собі фітнес-трекер та різноманітні фукнції для стеження за здоров\'ям, що інтегруються з iOS та іншими продуктами і сервісами Apple. Для його повноцінної роботи потрібен смартфон сімейства iPhone 5 або більш пізньої модифікації, зокрема для здійснення дзвінків і надсилання текстових повідомлень. Наявніть wi-fi модулю дозволяє розумному годиннику виконувати певні обмежені функції без прив\'язки до iPhone.',
            quantity: 4
        },
        {
            id: ++id,
            type: 'watch',
            model: 'Apple watch 3',
            price: 340,
            img: watch3,
            description: 'Apple Watch — наручний годинник із додатковими функціями (розумний годинник) створений корпорацією Apple. Він поєднує у собі фітнес-трекер та різноманітні фукнції для стеження за здоров\'ям, що інтегруються з iOS та іншими продуктами і сервісами Apple. Для його повноцінної роботи потрібен смартфон сімейства iPhone 5 або більш пізньої модифікації, зокрема для здійснення дзвінків і надсилання текстових повідомлень. Наявніть wi-fi модулю дозволяє розумному годиннику виконувати певні обмежені функції без прив\'язки до iPhone.',
            quantity: 5
        },
        {
            id: ++id,
            type: 'watch',
            model: 'Apple watch 4',
            price: 450,
            img: watch4,
            description: 'Apple Watch — наручний годинник із додатковими функціями (розумний годинник) створений корпорацією Apple. Він поєднує у собі фітнес-трекер та різноманітні фукнції для стеження за здоров\'ям, що інтегруються з iOS та іншими продуктами і сервісами Apple. Для його повноцінної роботи потрібен смартфон сімейства iPhone 5 або більш пізньої модифікації, зокрема для здійснення дзвінків і надсилання текстових повідомлень. Наявніть wi-fi модулю дозволяє розумному годиннику виконувати певні обмежені функції без прив\'язки до iPhone.',
            quantity: 8
        },
        {
            id: ++id,
            type: 'watch',
            model: 'Apple watch 5',
            price: 590,
            img: watch5,
            description: 'Apple Watch — наручний годинник із додатковими функціями (розумний годинник) створений корпорацією Apple. Він поєднує у собі фітнес-трекер та різноманітні фукнції для стеження за здоров\'ям, що інтегруються з iOS та іншими продуктами і сервісами Apple. Для його повноцінної роботи потрібен смартфон сімейства iPhone 5 або більш пізньої модифікації, зокрема для здійснення дзвінків і надсилання текстових повідомлень. Наявніть wi-fi модулю дозволяє розумному годиннику виконувати певні обмежені функції без прив\'язки до iPhone.',
            quantity: 4
        }
    ],
    accestories: [
        {
            id: ++id,
            type: 'accestories',
            model: 'Airpods',
            price: 200,
            img: airpods,
            description: 'Watch — безпровідні Bluetooth навушники від компанії Apple Inc. Вперше представлені 13 грудня 2016 року.\n' +
                '\n' +
                'Окрім відтворення аудіо, Watch оснащені вбудованим мікрофоном, який відфільтровує фоновий шум. Таким чином через навушники зручно приймати телефонні дзвінки та спілкуватися з цифровим помічником Siri. Окрім цього, вбудовані оптичні сенсори реагують на дотики (подвійний дотик для павзи), а вбудований акселерометр на місцерозташування навушників (автоматична павза, якщо навушники виймаються з вух).',
            quantity: 4
        },
        {
            id: ++id,
            type: 'accestories',
            model: 'Airpods 2',
            price: 280,
            img: airpods2,
            description: 'Watch — безпровідні Bluetooth навушники від компанії Apple Inc. Вперше представлені 13 грудня 2016 року.\n' +
                '\n' +
                'Окрім відтворення аудіо, Watch оснащені вбудованим мікрофоном, який відфільтровує фоновий шум. Таким чином через навушники зручно приймати телефонні дзвінки та спілкуватися з цифровим помічником Siri. Окрім цього, вбудовані оптичні сенсори реагують на дотики (подвійний дотик для павзи), а вбудований акселерометр на місцерозташування навушників (автоматична павза, якщо навушники виймаються з вух).',
            quantity: 4
        },
        {
            id: ++id,
            type: 'accestories',
            model: 'Airpods pro',
            price: 350,
            img: airpodspro,
            description: 'Watch — безпровідні Bluetooth навушники від компанії Apple Inc. Вперше представлені 13 грудня 2016 року.\n' +
                '\n' +
                'Окрім відтворення аудіо, Watch оснащені вбудованим мікрофоном, який відфільтровує фоновий шум. Таким чином через навушники зручно приймати телефонні дзвінки та спілкуватися з цифровим помічником Siri. Окрім цього, вбудовані оптичні сенсори реагують на дотики (подвійний дотик для павзи), а вбудований акселерометр на місцерозташування навушників (автоматична павза, якщо навушники виймаються з вух).',
            quantity: 4
        },
        {
            id: ++id,
            type: 'accestories',
            model: 'Usb cable lighting',
            price: 20,
            img: usbcable,
            description: 'Apple Кабель Lightning to USB 2.0 (MD818) - це кабель для синхронізації і зарядки пристроїв Apple з роз\'ємом Lightning. Його довжина становить 1 метр, що потрібно враховувати, якщо ви шукаєте заміну стандартному кабелю з комплекту. З одного боку стандартний коннектор USB Type-A для підключення до ПК або зарядного, а з іншого коннектор Lightning.',
            quantity: 4
        },
    ],
    currentItem: {},
    currentSection: []

};

export const dataReducer = (state = initionalState, action) => {
    switch (action.type) {
        case SETCURRENTSECTION:
            return {
                ...state,
                currentSection: [...state[action.section]]
            }
        case SETCURRENTITEM:
            return {
                ...state,
                currentItem: [...state[action.section]].find(p => p.model === action.model)
            }
        case CHANGEQUANTITY:
            return {
                ...state,
                [action.section]: state[action.section].map(
                    (p) => {
                        if (action.model === p.model) {
                            return {...p, quantity: p.quantity - action.amount}
                        }
                        return p;
                    }
                )
            }
        default:
            return state;
    }
}

export const setCurrentItem = (section, model) => {
    return {type: SETCURRENTITEM, section, model}
}

export const setCurrentSection = (section) => {
    return {type: SETCURRENTSECTION, section}
}

export const changeQuantity = (model, section, amount) => {
    return {type: CHANGEQUANTITY, model, section, amount}
}
