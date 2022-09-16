var isFR = true;
var rotateXValue = 0;
var rotateYValue = 0;
var rotateZValue = 0;

function randomize(rotate=true) {
    changeWord();
    if (rotate)
    {
        launch3DRotation();
    }
}

function changeWord() {
    setTimeout(()=>{
        var item = words[Math.floor(Math.random()*words.length)];
        var word1 = document.getElementById("word1");
        var word2 = document.getElementById("word2");
        if (isFR) {
            word1.innerHTML = item["en"].toUpperCase();
            word2.innerHTML = item["fr"].toUpperCase();
        }
        else {
            word1.innerHTML = item["fr"].toUpperCase();
            word2.innerHTML = item["en"].toUpperCase();
        }
    }, 200);
}

function launch3DRotation() {
    rotateYValue = rotateYValue + 180;
    var even = rotateYValue%360==0;
    scaleXValue = even?1:-1;
    document.getElementById("card").style.WebkitTransitionDuration='0.5s';
    document.getElementById("card").style.webkitTransform = 'rotateX(' + rotateXValue + 'deg) rotateY(' + rotateYValue + 'deg) rotateZ(' + rotateZValue +  'deg)';
    setTimeout(()=>{
        document.getElementById("word1").style.webkitTransform = 'scaleX(' + scaleXValue + ')';
        document.getElementById("word2").style.webkitTransform = 'scaleX(' + scaleXValue + ')';
    }, 200);
}


function launchRotation(mental=false){
    var value = mental?1800:180;
    var even = rotateYValue%360==0;
    if (even) {
        rotateZValue = rotateZValue + value;
    }
    else {
        rotateZValue = rotateZValue - value;
    }
    document.getElementById("card").style.WebkitTransitionDuration='1.5s';
    document.getElementById("card").style.webkitTransform = 'rotateX(' + rotateXValue + 'deg) rotateY(' + rotateYValue + 'deg) rotateZ(' + rotateZValue +  'deg)';
}


function toggleLanguage() {

    // isFR = !isFR;
    /*
    var word1 = document.getElementById("word1");
    var word2 = document.getElementById("word2");
    var tmp = word1.innerHTML;
    word1.innerHTML = word2.innerHTML;
    word2.innerHTML = tmp;
    */
    launchRotation();
}

document.addEventListener('DOMContentLoaded', function() {
   randomize(rotate=false);
}, false);

var words = [
    {"fr": "<em>un nom de vêtement</em>", "en": "happy"},
    {"fr": "<em>un nom de pays ou de région</em>", "en": "long"},
    {"fr": "matin", "en": "life"},
    {"fr": "soir", "en": "(to) need"},
    {"fr": "jour", "en": "side"},
    {"fr": "nuit", "en": "bridge"},
    {"fr": "printemps", "en": "(to) talk"},
    {"fr": "été", "en": "(to) want"},
    {"fr": "vieux / vieille", "en": "(to) kiss"},
    {"fr": "seul(e)", "en": "together"},
    {"fr": "arbre", "en": "tomorrow / yesterday"},
    {"fr": "gueule", "en": "forever"},
    {"fr": "vin", "en": "man / men"},
    {"fr": "eau", "en": "woman / women"},
    {"fr": "marin / matelot", "en": "bed"},
    {"fr": "bateau / navire", "en": "(to) dream"},
    {"fr": "pont", "en": "dark / darkness"},
    {"fr": "fontaine", "en": "blue"},
    {"fr": "pleurer", "en": "song / (to) sing"},
    {"fr": "boire", "en": "friend"},
    {"fr": "roi / reine", "en": "(to) smile"},
    {"fr": "madame / mesdames", "en": "(to) call"},
    {"fr": "joie", "en": "water"},
    {"fr": "pain", "en": "river"},
    {"fr": "tête", "en": "everybody / everyone"},
    {"fr": "bière", "en": "nobody"},
    {"fr": "main", "en": "(to) kill"},
    {"fr": "pied", "en": "sea"},
    {"fr": "histoire", "en": "(to) cry"},
    {"fr": "demain", "en": "(to) look"},
    {"fr": "bleu(e)", "en": "foot / feet"},
    {"fr": "rose", "en": "hand"},
    {"fr": "ciel", "en": "(to) give"},
    {"fr": "coup", "en": "(to) play"},
    {"fr": "mer", "en": "little"},
    {"fr": "terre", "en": "old"},
    {"fr": "temps", "en": "girl"},
    {"fr": "aimer", "en": "free"},
    {"fr": "chemin", "en": "house / home"},
    {"fr": "rue / route", "en": "bad"},
    {"fr": "soleil", "en": "<em>a vehicle</em>"},
    {"fr": "fleur", "en": "<em>a musical instrument</em>"},
    {"fr": "beau / belle", "en": "somebody"},
    {"fr": "bras", "en": "something"},
    {"fr": "non", "en": "road / street"},
    {"fr": "oublier", "en": "(to) walk"},
    {"fr": "blond(e)", "en": "gun"},
    {"fr": "mai", "en": "sunshine"},
    {"fr": "larme", "en": "child / children"},
    {"fr": "quitter", "en": "baby"},
    {"fr": "champ", "en": "star"},
    {"fr": "an", "en": "moon"},
    {"fr": "air", "en": "wind"},
    {"fr": "bois", "en": "tree"},
    {"fr": "frère", "en": "lady"},
    {"fr": "enfant", "en": "pretty"},
    {"fr": "fête", "en": "money"},
    {"fr": "vent", "en": "stone"},
    {"fr": "femme", "en": "music"},
    {"fr": "homme", "en": "sun"},
    {"fr": "œil / yeux", "en": "good"},
    {"fr": "cheveux", "en": "morning"},
    {"fr": "oiseau", "en": "night"},
    {"fr": "poisson", "en": "day"},
    {"fr": "mal", "en": "away"},
    {"fr": "fils", "en": "sky"},
    {"fr": "mère / maman", "en": "body"},
    {"fr": "père / papa", "en": "heart"},
    {"fr": "bar / café / bistrot", "en": "way"},
    {"fr": "bal", "en": "world"},
    {"fr": "noir(e)", "en": "flower"},
    {"fr": "blanc / blanche", "en": "sweet"},
    {"fr": "grand(e)", "en": "crazy"},
    {"fr": "petit(e)", "en": "time"},
    {"fr": "corps", "en": "white"},
    {"fr": "cœur", "en": "black"},
    {"fr": "pays", "en": "father / daddy / dad"},
    {"fr": "monde", "en": "mother / mummy / mum"},
    {"fr": "amour", "en": "story"},
    {"fr": "chapeau", "en": "love"},
    {"fr": "<em>une année</em>", "en": "word"},
    {"fr": "<em>un nom de ville</em>", "en": "nothing"},
    {"fr": "pauvre", "en": "never"},
    {"fr": "heureux / heureuse", "en": "always"},
    {"fr": "jardin", "en": "only"},
    {"fr": "couleur", "en": "why"},
    {"fr": "mort(e)", "en": "head"},
    {"fr": "vie", "en": "eye"},
    {"fr": "maison", "en": "<em>an animal</em>"},
    {"fr": "rhum", "en": "goodbye"},
    {"fr": "ami(e) / copain / copine", "en": "silver"},
    {"fr": "guerre", "en": "gold"},
    {"fr": "<em>un prénom féminin</em>", "en": "please"},
    {"fr": "<em>un prénom masculin</em>", "en": "afternoon"},
    {"fr": "personne", "en": "(to) come"},
    {"fr": "gens", "en": "(to) answer"},
    {"fr": "garçon", "en": "stranger"},
    {"fr": "fille", "en": "town / city"},
    {"fr": "toi", "en": "hair"},
    {"fr": "moi", "en": "mind"},
    {"fr": "toujours", "en": "<em>a drink</em>"},
    {"fr": "jamais", "en": "shadow"},
    {"fr": "chanteur / chanteuse / chanson", "en": "alone"},
    {"fr": "jupon", "en": "wild"},
    {"fr": "mot", "en": "(to) forget"},
    {"fr": "triste", "en": "(to) remember"}
];
