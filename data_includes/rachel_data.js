var theShuffle = rshuffle("c1", "c2", "c3", "c4", "c5", "c6")
var theShuffle2 = rshuffle("c1-2", "c2-2", "c3-2", "c4-2", "c5-2", "c6-2")


var shuffleSequence1 = seq("intro", sepWith("sep", seq("pracMsg", "prep", rshuffle("practice"), "realMsg", "prep", theShuffle, "break", "prep", theShuffle2, "sr", "lastPage")));
var shuffleSequence2 = seq("intro", sepWith("sep", seq("pracMsg", "prep", rshuffle("practice"), "realMsg", "prep", theShuffle2, "break", "prep", theShuffle, "sr", "lastPage")));



function chooseShuffle(){
   i = Math.floor(Math.random() * 2);
   console.log(i)

   if (i == 1) {
     return shuffleSequence1
   }
   else {
     return shuffleSequence2
   }
}

var shuffleSequence = chooseShuffle()

var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "",
        ignoreFailure: true
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        randomOrder: false,
        as: [['t', 'et'], ['n', 'en'], ['i', 'ei'],],
        presentHorizontally: true,
        timeout: 3000
    },
    "Message", {
        hideProgressBar: true,
        transfer: "click"
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

//DID CHANGE TO VALUE OF CSS_INCLUDES_DIR in server_conf.py. Change this back to "css_includes" if messed up
var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    ["sr", "__SendResults__", { }],

    ["sep", "Separator", {normalMessage: "+"}],
    ["prep", "Separator", {transfer: 3000, normalMessage: ""}],

    ["intro", "Message", {
      html: { include: "intro.html"}
    }],
    ["intro", "Form", {
      html: { include: "questionnaire.html"}
    }],

    ["pracMsg", "Message", {html: {include: "instr1.html"}, transfer: "click"}],
    ["realMsg", "Message", {html: {include: "instr2.html"}, transfer: "click"}],
    ["break", "Message", {html: {include: "break.html"}, transfer: "click"}],
    ["lastPage", "Message", {html: {include: "lastPage.html"}, transfer: null}],



    ["practice", "Question", {hasCorrect: 0, q: "høst"}],
    ["practice", "Question", {hasCorrect: 0, q: "dessert"}],
    ["practice", "Question", {hasCorrect: 0, q: "dag"}],
    ["practice", "Question", {hasCorrect: 2, q: "pute"}],
    ["practice", "Question", {hasCorrect: 2, q: "stekepanne"}],
    ["practice", "Question", {hasCorrect: 2, q: "bro"}],
    ["practice", "Question", {hasCorrect: 0, q: "blomkål"}],
    ["practice", "Question", {hasCorrect: 0, q: "fordel"}],
    ["practice", "Question", {hasCorrect: 0, q: "hage"}],
    ["practice", "Question", {hasCorrect: 2, q: "reise"}],
    ["practice", "Question", {hasCorrect: 2, q: "bukse"}],
    ["practice", "Question", {hasCorrect: 2, q: "bønne"}],
    ["practice", "Question", {hasCorrect: 1, q: "navn"}],
    ["practice", "Question", {hasCorrect: 1, q: "hjerte"}],
    ["practice", "Question", {hasCorrect: 1, q: "tilbud"}],
    ["practice", "Question", {hasCorrect: 1, q: "sykehus"}],
    ["practice", "Question", {hasCorrect: 1, q: "skjerf"}],
    ["practice", "Question", {hasCorrect: 1, q: "yrke"}],

    ["c1", "Question", {hasCorrect: 0, q: "børste"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "farge"}],
    ["c1", "Question", {hasCorrect: 0, q: "flyplass"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "kniv"}],
    ["c1", "Question", {hasCorrect: 0, q: "frakk"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "måned"}],
    ["c1", "Question", {hasCorrect: 0, q: "frokost"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "arm"}],
    ["c1", "Question", {hasCorrect: 0, q: "innsjø"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "dal"}],
    ["c1", "Question", {hasCorrect: 0, q: "ost"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "hatt"}],
    ["c1", "Question", {hasCorrect: 0, q: "sko"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "ring"}],
    ["c1", "Question", {hasCorrect: 0, q: "størrelse"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "sommer"}],

    ["c2", "Question", {hasCorrect: 2, q: "hånd"}],
    ["c2-2", "Question", {hasCorrect: 2, q: "gulrot"}],
    ["c2", "Question", {hasCorrect: 2, q: "skjorte"}],
    ["c2-2", "Question", {hasCorrect: 2, q: "drue"}],
    ["c2", "Question", {hasCorrect: 2, q: "gate"}],
    ["c2-2", "Question", {hasCorrect: 2, q: "flaske"}],
    ["c2", "Question", {hasCorrect: 2, q: "seng"}],
    ["c2-2", "Question", {hasCorrect: 2, q: "grense"}],
    ["c2", "Question", {hasCorrect: 2, q: "skje"}],
    ["c2-2", "Question", {hasCorrect: 2, q: "kirke"}],
    ["c2", "Question", {hasCorrect: 2, q: "tavle"}],
    ["c2-2", "Question", {hasCorrect: 2, q: "klokke"}],
    ["c2", "Question", {hasCorrect: 2, q: "trapp"}],
    ["c2-2", "Question", {hasCorrect: 2, q: "pil"}],
    ["c2", "Question", {hasCorrect: 2, q: "uke"}],
    ["c2-2", "Question", {hasCorrect: 2, q: "trøye"}],

    ["c3", "Question", {hasCorrect: 0, q: "måne"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "løk"}],
    ["c3", "Question", {hasCorrect: 0, q: "ryggsekk"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "rygg"}],
    ["c3", "Question", {hasCorrect: 0, q: "skriver"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "krig"}],
    ["c3", "Question", {hasCorrect: 0, q: "vegg"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "nøkkel"}],
    ["c3", "Question", {hasCorrect: 0, q: "butikk"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "skygge"}],
    ["c3", "Question", {hasCorrect: 0, q: "koffert"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "stein"}],
    ["c3", "Question", {hasCorrect: 0, q: "munn"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "stol"}],
    ["c3", "Question", {hasCorrect: 0, q: "stemme"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "sykkel"}],


    ["c4", "Question", {hasCorrect: 2, q: "fortid"}],
    ["c4-2", "Question", {hasCorrect: 2, q: "elv"}],
    ["c4", "Question", {hasCorrect: 2, q: "lønn"}],
    ["c4-2", "Question", {hasCorrect: 2, q: "fremtid"}],
    ["c4", "Question", {hasCorrect: 2, q: "avis"}],
    ["c4-2", "Question", {hasCorrect: 2, q: "vekt"}],
    ["c4", "Question", {hasCorrect: 2, q: "bok"}],
    ["c4-2", "Question", {hasCorrect: 2, q: "lue"}],
    ["c4", "Question", {hasCorrect: 2, q: "bygd"}],
    ["c4-2", "Question", {hasCorrect: 2, q: "skulder"}],
    ["c4", "Question", {hasCorrect: 2, q: "leppe"}],
    ["c4-2", "Question", {hasCorrect: 2, q: "tann"}],
    ["c4", "Question", {hasCorrect: 2, q: "skinke"}],
    ["c4-2", "Question", {hasCorrect: 2, q: "veske"}],
    ["c4", "Question", {hasCorrect: 2, q: "tromme"}],
    ["c4-2", "Question", {hasCorrect: 2, q: "vifte"}],


    ["c5", "Question", {hasCorrect: 1, q: "egg"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "hår"}],
    ["c5", "Question", {hasCorrect: 1, q: "gulv"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "kjøleskap"}],
    ["c5", "Question", {hasCorrect: 1, q: "klesskap"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "skrivebord"}],
    ["c5", "Question", {hasCorrect: 1, q: "hjørne"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "belte"}],
    ["c5", "Question", {hasCorrect: 1, q: "tre"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "forsøk"}],
    ["c5", "Question", {hasCorrect: 1, q: "ønske"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "kyss"}],
    ["c5", "Question", {hasCorrect: 1, q: "øyeblikk"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "tastatur"}],
    ["c5", "Question", {hasCorrect: 1, q: "år"}],
    ["c5-2", "Question", {hasCorrect: 1, q: "tog"}],


    ["c6", "Question", {hasCorrect: 1, q: "fengsel"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "skjørt"}],
    ["c6", "Question", {hasCorrect: 1, q: "kne"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "besøk"}],
    ["c6", "Question", {hasCorrect: 1, q: "basseng"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "bord"}],
    ["c6", "Question", {hasCorrect: 1, q: "blad"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "bryllup"}],
    ["c6", "Question", {hasCorrect: 1, q: "jordbær"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "flagg"}],
    ["c6", "Question", {hasCorrect: 1, q: "kontor"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "hode"}],
    ["c6", "Question", {hasCorrect: 1, q: "slips"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "kjøkken"}],
    ["c6", "Question", {hasCorrect: 1, q: "vindu"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "øre"}]


];
