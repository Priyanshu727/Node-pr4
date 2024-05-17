const express = require('express');

const db = require('./config/database');
const userDB = require('./models/userTbl');


const app = express();

let bookstore = [



    {
        "ISBN": 9789400501157,
        "title": "De aanslag",
        "author": "David Baldacci",
        "summary": "Will Robie is een van de besten in zijn vak, een huurmoordenaar die nooit twijfelt en altijd zijn doelwit uitschakelt. Hij is de man op wie de Amerikaanse overheid een beroep doet als het gaat om het doden van haar grootste vijanden, van de monsters die talloze onschuldige slachtoffers op hun naam hebben staan. En niemand is zo goed als Robie. Niemand, behalve Jessica Reel... Reel is net als Robie zeer ervaren, uiterst professioneel en dodelijk precies. Maar Reel heeft zich tegen haar werkgever gekeerd en het vizier gericht op haar voormalige collega’s binnen hun agentschap. Nu een van hun eigen mensen moet worden afgestopt, doet men opnieuw een beroep op Robie. Zijn opdracht: zorg dat je Reel te pakken krijgt, levend of dood. Maar wanneer Robie de jacht opent op Reel, ontdekt hij al snel dat zij weleens gegronde redenen kan hebben voor haar verraad. De aanslagen op het agentschap houden verband met een veel groter gevaar. Een gevaar dat Washington D.C., de Verenigde Staten en de rest van de wereld op de grondvesten zal doen schudden...",
        "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/4/8/2/7/9200000010047284.jpg",
        "price": {
            "currency": "EUR",
            "value": 19.99,
            "displayValue": "19.99"
        }
    },
    {
        "ISBN": 9789044339338,
        "title": "Mag ik je nummer even?",
        "author": "Sophie Kinsella",
        "summary": "Poppy Wyatt is haar verlovingsring kwijt! Een antiek geval, al drie generaties in het bezit van de familie van Magnus, haar aanstaande. Over tien dagen is de bruiloft! En terwijl ze buiten met haar vriendinnen staat te bellen, wordt haar mobieltje plotseling uit haar handen gegrist. Ook dat nog! Nu is de crisis compleet. Wat moet ze zonder telefoon beginnen? Helemaal hyper denkt Poppy dat ze aan het hallucineren is geslagen wanneer ze in een afvalbak zomaar een smartphone ziet liggen. Hebbes! Maar het duurt niet lang voor de eigenaar, de botte zakenman Sam Roxton, zich meldt. En Sam is 'not amused' als Poppy ijskoud weigert haar schat aan hem af te staan.",
        "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/3/0/9/4/9200000009984903.jpg",
        "price": {
            "currency": "EUR",
            "value": 10,
            "displayValue": "10.00"
        }
    },
    {
        "ISBN": 9789022556627,
        "title": "Jarka Ruus",
        "author": "Terry Brooks",
        "summary": "Twintig jaar zijn voorbij gegaan sinds Grianne Ohmsford afstand deed van haar leven als de gevreesde Ilse Hek, ze bevrijd werd door de magie van het Zwaard van Shannara en de vernietiging van haar mentor, de Morgawr. Als Grianne plotseling verdwijnt, wordt haar jonge dienaar Tagwen gedwongen de handschoen op te nemen en haar uit de handen van haar vijanden te redden, samen met Griannes jonge neef Pen Ohmsford en de machtige elf Ahren Elessedil.",
        "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/8/9/9/1001004011269987.jpg",
        "price": {
            "currency": "EUR",
            "value": 18.95,
            "displayValue": "18.95"
        }
    },
    {
        "ISBN": 9789460680755,
        "title": "Last Minute",
        "author": "Linda van Rijn",
        "summary": "Op de lastminute-vakantie in Hurghada loopt Susan haar ex-vriend tegen het lijf. Liever had ze hem nooit meer gezien... Vijf jaar zijn Susan Waterberg en haar man Hugo getrouwd en gelukkig in Almere. Die mijlpaal wil Susan niet onopgemerkt voorbij laten gaan. Ze regelt haar schoonouders als oppas voor hun zoontje Stijn van drie en boekt een lastminutevakantie naar Hurghada. Voor Hugo is de trip een grote verrassing, zeker omdat hij zijn PADI (duikbrevet) pas een jaar heeft. Nu kan hij eindelijk echt gaan duiken. Hoewel het afscheid van Stijntje hun beiden zwaar valt, verheugen ze zich op een onbezorgde zonvakantie. Als ze op de duikschool inchecken krijgt Susan de schrik van haar leven. De duikinstructeur is een oude bekende en confronteert haar met een verleden dat ze altijd voor Hugo heeft verzwegen. De zorgeloze strandvakantie die Susan voor ogen had, verandert in een web van leugens en chantage. Om haar gezin te behouden, zal ze definitief moeten afrekenen met haar verleden.",
        "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/2/5/6/7/1001004011817652.jpg",
        "price": {
            "currency": "EUR",
            "value": 4.99,
            "displayValue": "4.99"
        }
    },
    {
        "ISBN": 9789023464143,
        "title": "Duizend schitterende zonnen",
        "author": "Khaled Hosseini",
        "summary": "De ongeschoolde Mariam is vijftien wanneer ze wordt uitgehuwelijkt aan de dertig jaar oudere schoenverkoper Rasheed in Kabul. Jaren later moet zij de beeldschone en slimme Laila naast zich dulden, die door Rasheed na een raketaanval uit het puin is gered. Rasheed neemt Laila in huis in de hoop dat zij hem de zoon zal schenken die Mariam hem niet kan geven. In eerste instantie overheersen tussen de twee vrouwen gevoelens van achterdocht en jaloezie, maar door de tirannieke houding van Rasheed ontstaat er langzamerhand een innige vriendschap. Samen zetten Mariam en Laila alles op alles om te overleven in de eindeloze oorlog van Afghanistan, die voor hen ook binnenshuis woedt. Na het overweldigende succes van De vliegeraar verrast Khaled Hosseini zijn lezers opnieuw met een verpletterend verhaal",
        "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/3/5/1/1001004010981537.jpg",
        "price": {
            "currency": "EUR",
            "value": 16.99,
            "displayValue": "16.99"
        }
    },
    {
        "ISBN": 9781408842423,
        "title": "And the Mountains Echoed",
        "author": "Khaled Hosseini",
        "summary": "And the Mountains Echoed is a deeply moving story about how we love, how we take care of one another and how the choices we make resonate through generations. With profound wisdom, depth, insight and compassion 'and moving from Kabul, to Paris, to San Francisco, to the Greek island of Tinos' Hosseini writes about the bonds that define us and shape our lives, the ways that we help our loved ones in need and how we are often surprised by the people closest to us. Six years in the writing, Khaled Hosseini says of his new book: 'My earlier novels were, at heart, tales of fatherhood and motherhood. My new novel is a multi-generational family story as well, this time revolving around brothers and sisters, and the ways in which they love, wound, betray, honour and sacrifice for each other.'",
        "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/0/6/0/3/9200000010223060.jpg",
        "price": {
            "currency": "EUR",
            "value": 8.99,
            "displayValue": "8.99"
        }
    }
]

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    userDB.find({}).then((bookstore) => {
        return res.render('Cart', { bookstore });
    }).catch((err) => {
        console.log(err);
        return false;
    })
});

app.post('/insertdata', (req, res) => {
    const { image, title, author, ISBN, price } = req.body
    userDB.create({
        image: image,
        title: title,
        author: author,
        ISBN: ISBN,
        price: price,

    }).then((user) => {
        console.log("Data successfully Insert..");
        return res.redirect('/');
    }).catch((err) => {
        console.log(err)
        return false;
    })
})



app.listen(8085, (err) => {
    if (!err) {
        console.log("server start. http://localhost:8085");
    }
    // console.log("server http://localhost:" + port);

})