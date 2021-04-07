//Javascript for transatlantic-translate
$(document).ready(function(){
    $('#menu').click(function(){
        alert('clicked');
        $('#openmenu').css('width', '280px');
    });
    let britishAmerican = 'AMERICAN';
    let americanBritish = 'BRITISH';
    American = ['chip','french fries', 'french fry', 'frenchfry', 'frenchfries', 'fries', 'cart', 'carriage', 'dude', 'trunk', 'hood', 'wow', 'candies', 'candy', 'cookie', 'cause', 'sup', 'fufil', 'program', 'offense', 'defense', 'aluminum', 'wastepaper', 'trash', 'balls', 'subway', 'line', 'friend', 'bathroom', 'toilet', 'diaper', 'diapers', 'overall', 'tennisshoe', 'eggplant', 'sweater', 'ketchup', 'underpant', 'underwear','pants', 'guy','tir', 'silly', 'sillily', 'silliest', 'sillier', 'fantastic', 'freaking','youalright', 'you alright', 'you alright', 'what\'s up', 'whatsup', 'math', 'color', 'gray', 'grayest', 'grayer', 'flavor', 'behavior', 'harbor', 'honor', 'humor', 'labor', 'neighbor', 'rumor', 'splendor', 'favor', 'favorite', 'caliber', 'fiber', 'centre', 'goiter', 'liter', 'meter', 'ocher', 'reconnoiter', 'saber', 'sepulcher', 'somber', 'specter', 'theater', 'titer', 'centimeter', 'nanometer', 'milimeter', 'license', 'practice', 'kilometer', 'professionalize', 'intellectualize', 'mischaracterize', 'photosynthesize', 'departmentalize', 'deindustrialize', 'conventionalize', 'reindustrialize', 'governmentalize', 'reconceptualize', 'recontextualize', 'totalitarianize', 'sensationalize', 'sentimentalize', 'overgeneralize', 'underemphasize', 'overcapitalize', 'territorialize', 'overspecialize', 'traditionalize', 'photosensitize', 'hypersensitize', 'transparentize', 'overcentralize', 'despiritualize', 'respiritualize', 'pinealectomize', 'proletarianize', 'overhomogenize', 'commercialize', 'revolutionize', 'individualize', 'conceptualize', 'contextualize', 'collateralize', 'overemphasize', 'industrialize', 'decriminalize', 'demythologize', 'depersonalize', 'particularize', 'dematerialize', 'overdramatize', 'monumentalize', 'recrystallize', 'fractionalize', 'bureaucratize', 'ventriloquize', 'renationalize', 'epithelialize', 'theatricalize', 'denationalize', 'republicanize', 'platitudinize', 'structuralize', 'provincialize', 'subspecialize', 'anagrammatize', 'epigrammatize', 'hyposensitize', 'impersonalize', 'immaterialize', 'occidentalize', 'hyperpolarize', 'transistorize', 'subcategorize', 'overglamorize', 'hyperimmunize', 'splenectomize', 'nephrectomize', 'rehospitalize', 'overfertilize', 'rematerialize', 'orthogonalize', 'remythologize', 'substantivize', 'reacclimatize', 'melodramatize', 'resystematize', 'characterize', 'recapitalize', 'decentralize', 'propagandize', 'philosophize', 'universalize', 'depoliticize', 'essentialize', 'underutilize', 'editorialize', 'parameterize', 'demilitarize', 'fictionalize', 'contemporize', 'legitimatize', 'copolymerize', 'spiritualize', 'aestheticize', 'collectivize', 'depressurize', 'psychologize', 'denaturalize', 'containerize', 'depolymerize', 'denuclearize', 'anathematize', 'pictorialize', 'technologize', 'municipalize', 'emotionalize', 'demineralize', 'apostrophize', 'attitudinize', 'parenthesize', 'conservatize', 'remilitarize', 'disharmonize', 'reflectorize', 'diphthongize', 'politicalize', 'technicalize', 'overidealize', 'photooxidize', 'tranquillize', 'presterilize', 'insolubilize', 'repopularize', 'porcelainize', 'sectarianize', 'overorganize', 'thymectomize', 'misemphasize', 'repressurize', 'resynthesize', 'subjectivize', 'materialize', 'standardize', 'rationalize', 'personalize', 'synchronize', 'familiarize', 'destabilize', 'crystallize', 'hypothesize', 'democratize', 'memorialize', 'internalize', 'computerize', 'cannibalize', 'romanticize', 'proselytize', 'marginalize', 'accessorize', 'incentivize', 'metastasize', 'criminalize', 'systematize', 'externalize', 'nationalize', 'miniaturize', 'historicize', 'regionalize', 'immortalize', 'desensitize', 'anesthetize', 'acclimatize', 'hospitalize', 'circularize', 'mythologize', 'disorganize', 'tranquilize', 'dichotomize', 'masculinize', 'emblematize', 'anthologize', 'catheterize', 'alphabetize', 'demagnetize', 'interiorize', 'infantilize', 'desulfurize', 'exteriorize', 'desexualize', 'deglamorize', 'extemporize', 'skeletonize', 'civilianize', 'hyperbolize', 'hierarchize', 'apotheosize', 'soliloquize', 'phagocytize', 'fragmentize', 'desacralize', 'catholicize', 'suburbanize', 'phosphatize', 'hypostatize', 'mathematize', 'decarbonize', 'singularize', 'cosmeticize', 'gourmandize', 'etymologize', 'etherealize', 'detribalize', 'subvocalize', 'communalize', 'orientalize', 'formularize', 'decarburize', 'vasectomize', 'achromatize', 'schismatize', 'euthanatize', 'reprivatize', 'reemphasize', 'rehypnotize', 'resensitize', 'prussianize', 'outorganize', 'suboptimize', 'photoionize', 'parametrize', 'conveyorize', 'reauthorize', 'overutilize', 'restabilize', 'temporalize', 'deformalize', 'diagonalize', 'colonialize', 'parfocalize', 'tropicalize', 'capitalize', 'specialize', 'jeopardize', 'prioritize', 'reorganize', 'revitalize', 'categorize', 'generalize', 'neutralize', 'synthesize', 'centralize', 'scrutinize', 'sympathize', 'securitize', 'strategize', 'legitimize', 'metabolize', 'evangelize', 'monopolize', 'liberalize', 'antagonize', 'popularize', 'politicize', 'stigmatize', 'homogenize', 'initialize', 'demoralize', 'immobilize', 'trivialize', 'moisturize', 'dehumanize', 'pressurize', 'naturalize', 'regularize', 'polymerize', 'demobilize', 'secularize', 'traumatize', 'caramelize', 'radicalize', 'scandalize', 'federalize', 'volatilize', 'burglarize', 'plagiarize', 'pasteurize', 'militarize', 'allegorize', 'relativize', 'concretize', 'recolonize', 'fraternize', 'parasitize', 'weatherize', 'decolonize', 'crystalize', 'rhapsodize', 'aggrandize', 'digitalize', 'channelize', 'plasticize', 'westernize', 'literalize', 'mineralize', 'solubilize', 'depolarize', 'absolutize', 'schematize', 'theologize', 'bastardize', 'polemicize', 'apostatize', 'definitize', 'automatize', 'eternalize', 'missionize', 'bowdlerize', 'lobotomize', 'syncretize', 'remonetize', 'slenderize', 'repolarize', 'lyophilize', 'catabolize', 'sensualize', 'musicalize', 'delocalize', 'illegalize', 'classicize', 'devitalize', 'symmetrize', 'geometrize', 'gelatinize', 'cinematize', 'axiomatize', 'demonetize', 'graphitize', 'concertize', 'keratinize', 'defeminize', 'recognize', 'customize', 'emphasize', 'stabilize', 'criticize', 'apologize', 'visualize', 'summarize', 'authorize', 'modernize', 'subsidize', 'publicize', 'symbolize', 'privatize', 'harmonize', 'normalize', 'formalize', 'globalize', 'socialize', 'patronize', 'empathize', 'sterilize', 'epitomize', 'dramatize', 'verbalize', 'galvanize', 'economize', 'fertilize', 'pulverize', 'terrorize', 'fantasize', 'actualize', 'sensitize', 'victimize', 'glamorize', 'euthanize', 'mechanize', 'tantalize', 'vandalize', 'hybridize', 'randomize', 'ostracize', 'mesmerize', 'brutalize', 'hypnotize', 'annualize', 'winterize', 'vulcanize', 'pelletize', 'fetishize', 'serialize', 'analogize', 'systemize', 'tyrannize', 'cauterize', 'deodorize', 'eroticize', 'ritualize', 'fossilize', 'sexualize', 'linearize', 'solemnize', 'tenderize', 'italicize', 'reutilize', 'sermonize', 'routinize', 'sacralize', 'racialize', 'synopsize', 'ghettoize', 'weaponize', 'temporize', 'magnetize', 'expertize', 'vulgarize', 'capsulize', 'anatomize', 'pluralize', 'palletize', 'texturize', 'catechize', 'poeticize', 'communize', 'pauperize', 'micronize', 'alchemize', 'euphemize', 'sloganize', 'carbonize', 'deoxidize', 'metallize', 'mutualize', 'cartelize', 'marbleize', 'genderize', 'formulize', 'liquidize', 'maximize', 'organize', 'minimize', 'optimize', 'monetize', 'mobilize', 'amortize', 'finalize', 'digitize', 'memorize', 'energize', 'penalize', 'equalize', 'demonize', 'legalize', 'immunize', 'unionize', 'theorize', 'localize', 'vaporize', 'colonize', 'sanitize', 'humanize', 'polarize', 'idealize', 'satirize', 'civilize', 'vocalize', 'canonize', 'valorize', 'vitalize', 'moralize', 'eulogize', 'feminize', 'exorcize', 'notarize', 'urbanize', 'deputize', 'colorize', 'fluidize', 'totalize', 'sodomize', 'focalize', 'solarize', 'motorize', 'dimerize', 'divinize', 'womanize', 'robotize', 'canalize', 'novelize', 'quantize', 'fiberize', 'etherize', 'arborize', 'simonize', 'tetanize', 'deionize', 'alkalize', 'lyricize', 'archaize', 'francize', 'faradize', 'melodize', 'disseize', 'ruralize', 'nasalize', 'vowelize', 'cutinize', 'botanize', 'salinize', 'nebulize', 'creolize', 'paganize', 'eternize', 'opsonize', 'velarize', 'curarize', 'suberize', 'aphorize', 'disprize', 'misprize', 'surprize', 'comprize', 'calorize', 'soberize', 'laterize', 'caponize', 'avianize', 'melanize', 'romanize', 'pyrolize', 'chromize', 'polemize', 'racemize', 'japanize', 'latinize', 'realize', 'utilize', 'itemize', 'outsize', 'oxidize', 'agonize', 'baptize', 'capsize', 'idolize', 'stylize', 'atomize', 'lionize', 'ironize', 'anodize', 'laicize', 'unitize', 'cognize', 'heroize', 'poetize', 'elegize', 'cyclize', 'apprize', 'odorize', 'ozonize', 'kyanize', 'ebonize', 'obelize', 'erotize', 'peptize', 'azotize', 'agatize', 'pectize', 'dualize', 'reseize', 'grecize', 'arabize', 'agenize', 'bromize', 'emprize', 'assize', 'ionize', 'iodize', 'braize', 'agnize', 'catalyze', 'paralyze', 'pyrolyze', 'autolyze', 'hemolyze', 'analyze', 'dialyze', 'hydrolyze', 'photolyze', 'reanalyze', 'plasmolyze', 'overanalyze', 'electrolyze', 'psycoanalyze']; 
    British = ['crisp','chips', 'chip', 'chip', 'chips', 'chips', 'trolley', 'pram', 'lad', 'boot', 'bonnet', 'blimey', 'lollies', 'lolly', 'biscuit', 'cos', 'alright', 'fufill', 'programme', 'offence', 'defence', 'aluminium', 'rubbish', 'rubbish', 'bollocks', 'tube', 'que', 'mate', 'loo', 'loo', 'nappy', 'nappies', 'dungaree', 'trainer', 'aubergene', 'jumper','tomatosauce', 'knicker', 'pants','trousers','lad', 'knacker', 'cheeky', 'cheekily', 'cheekiest', 'cheekier',  'brilliant', 'bloody','what\s up', 'whatsup',  'what\'sup', 'youalright', 'you alright', 'maths', 'colour', 'grey', 'greyest', 'greyer', 'flavour', 'behaviour', 'harbour', 'honour', 'humour', 'labour', 'neighbour', 'rumour', 'splendour','favour', 'favourite', 'calibre', 'fibre', 'center', 'goitre', 'litre', 'metre', 'ochre', 'reconnoitre', 'sabre', 'sepulchre', 'sombre', 'spectre', 'theatre', 'titre', 'centimetre', 'nanometre', 'milimetre', 'licence', 'practise', 'kilometre', 'professionalise', 'intellectualise', 'mischaracterise', 'photosynthesise', 'departmentalise', 'deindustrialise', 'conventionalise', 'reindustrialise', 'governmentalise', 'reconceptualise', 'recontextualise', 'totalitarianise', 'sensationalise', 'sentimentalise', 'overgeneralise', 'underemphasise', 'overcapitalise', 'territorialise', 'overspecialise', 'traditionalise', 'photosensitise', 'hypersensitise', 'transparentise', 'overcentralise', 'despiritualise', 'respiritualise', 'pinealectomise', 'proletarianise', 'overhomogenise', 'commercialise', 'revolutionise', 'individualise', 'conceptualise', 'contextualise', 'collateralise', 'overemphasise', 'industrialise', 'decriminalise', 'demythologise', 'depersonalise', 'particularise', 'dematerialise', 'overdramatise', 'monumentalise', 'recrystallise', 'fractionalise', 'bureaucratise', 'ventriloquise', 'renationalise', 'epithelialise', 'theatricalise', 'denationalise', 'republicanise', 'platitudinise', 'structuralise', 'provincialise', 'subspecialise', 'anagrammatise', 'epigrammatise', 'hyposensitise', 'impersonalise', 'immaterialise', 'occidentalise', 'hyperpolarise', 'transistorise', 'subcategorise', 'overglamorise', 'hyperimmunise', 'splenectomise', 'nephrectomise', 'rehospitalise', 'overfertilise', 'rematerialise', 'orthogonalise', 'remythologise', 'substantivise', 'reacclimatise', 'melodramatise', 'resystematise', 'characterise', 'recapitalise', 'decentralise', 'propagandise', 'philosophise', 'universalise', 'depoliticise', 'essentialise', 'underutilise', 'editorialise', 'parameterise', 'demilitarise', 'fictionalise', 'contemporise', 'legitimatise', 'copolymerise', 'spiritualise', 'aestheticise', 'collectivise', 'depressurise', 'psychologise', 'denaturalise', 'containerise', 'depolymerise', 'denuclearise', 'anathematise', 'pictorialise', 'technologise', 'municipalise', 'emotionalise', 'demineralise', 'apostrophise', 'attitudinise', 'parenthesise', 'conservatise', 'remilitarise', 'disharmonise', 'reflectorise', 'diphthongise', 'politicalise', 'technicalise', 'overidealise', 'photooxidise', 'tranquillise', 'presterilise', 'insolubilise', 'repopularise', 'porcelainise', 'sectarianise', 'overorganise', 'thymectomise', 'misemphasise', 'repressurise', 'resynthesise', 'subjectivise', 'materialise', 'standardise', 'rationalise', 'personalise', 'synchronise', 'familiarise', 'destabilise', 'crystallise', 'hypothesise', 'democratise', 'memorialise', 'internalise', 'computerise', 'cannibalise', 'romanticise', 'proselytise', 'marginalise', 'accessorise', 'incentivise', 'metastasise', 'criminalise', 'systematise', 'externalise', 'nationalise', 'miniaturise', 'historicise', 'regionalise', 'immortalise', 'desensitise', 'anesthetise', 'acclimatise', 'hospitalise', 'circularise', 'mythologise', 'disorganise', 'tranquilise', 'dichotomise', 'masculinise', 'emblematise', 'anthologise', 'catheterise', 'alphabetise', 'demagnetise', 'interiorise', 'infantilise', 'desulfurise', 'exteriorise', 'desexualise', 'deglamorise', 'extemporise', 'skeletonise', 'civilianise', 'hyperbolise', 'hierarchise', 'apotheosise', 'soliloquise', 'phagocytise', 'fragmentise', 'desacralise', 'catholicise', 'suburbanise', 'phosphatise', 'hypostatise', 'mathematise', 'decarbonise', 'singularise', 'cosmeticise', 'gourmandise', 'etymologise', 'etherealise', 'detribalise', 'subvocalise', 'communalise', 'orientalise', 'formularise', 'decarburise', 'vasectomise', 'achromatise', 'schismatise', 'euthanatise', 'reprivatise', 'reemphasise', 'rehypnotise', 'resensitise', 'prussianise', 'outorganise', 'suboptimise', 'photoionise', 'parametrise', 'conveyorise', 'reauthorise', 'overutilise', 'restabilise', 'temporalise', 'deformalise', 'diagonalise', 'colonialise', 'parfocalise', 'tropicalise', 'capitalise', 'specialise', 'jeopardise', 'prioritise', 'reorganise', 'revitalise', 'categorise', 'generalise', 'neutralise', 'synthesise', 'centralise', 'scrutinise', 'sympathise', 'securitise', 'strategise', 'legitimise', 'metabolise', 'evangelise', 'monopolise', 'liberalise', 'antagonise', 'popularise', 'politicise', 'stigmatise', 'homogenise', 'initialise', 'demoralise', 'immobilise', 'trivialise', 'moisturise', 'dehumanise', 'pressurise', 'naturalise', 'regularise', 'polymerise', 'demobilise', 'secularise', 'traumatise', 'caramelise', 'radicalise', 'scandalise', 'federalise', 'volatilise', 'burglarise', 'plagiarise', 'pasteurise', 'militarise', 'allegorise', 'relativise', 'concretise', 'recolonise', 'fraternise', 'parasitise', 'weatherise', 'decolonise', 'crystalise', 'rhapsodise', 'aggrandise', 'digitalise', 'channelise', 'plasticise', 'westernise', 'literalise', 'mineralise', 'solubilise', 'depolarise', 'absolutise', 'schematise', 'theologise', 'bastardise', 'polemicise', 'apostatise', 'definitise', 'automatise', 'eternalise', 'missionise', 'bowdlerise', 'lobotomise', 'syncretise', 'remonetise', 'slenderise', 'repolarise', 'lyophilise', 'catabolise', 'sensualise', 'musicalise', 'delocalise', 'illegalise', 'classicise', 'devitalise', 'symmetrise', 'geometrise', 'gelatinise', 'cinematise', 'axiomatise', 'demonetise', 'graphitise', 'concertise', 'keratinise', 'defeminise', 'recognise', 'customise', 'emphasise', 'stabilise', 'criticise', 'apologise', 'visualise', 'summarise', 'authorise', 'modernise', 'subsidise', 'publicise', 'symbolise', 'privatise', 'harmonise', 'normalise', 'formalise', 'globalise', 'socialise', 'patronise', 'empathise', 'sterilise', 'epitomise', 'dramatise', 'verbalise', 'galvanise', 'economise', 'fertilise', 'pulverise', 'terrorise', 'fantasise', 'actualise', 'sensitise', 'victimise', 'glamorise', 'euthanise', 'mechanise', 'tantalise', 'vandalise', 'hybridise', 'randomise', 'ostracise', 'mesmerise', 'brutalise', 'hypnotise', 'annualise', 'winterise', 'vulcanise', 'pelletise', 'fetishise', 'serialise', 'analogise', 'systemise', 'tyrannise', 'cauterise', 'deodorise', 'eroticise', 'ritualise', 'fossilise', 'sexualise', 'linearise', 'solemnise', 'tenderise', 'italicise', 'reutilise', 'sermonise', 'routinise', 'sacralise', 'racialise', 'synopsise', 'ghettoise', 'weaponise', 'temporise', 'magnetise', 'expertise', 'vulgarise', 'capsulise', 'anatomise', 'pluralise', 'palletise', 'texturise', 'catechise', 'poeticise', 'communise', 'pauperise', 'micronise', 'alchemise', 'euphemise', 'sloganise', 'carbonise', 'deoxidise', 'metallise', 'mutualise', 'cartelise', 'marbleise', 'genderise', 'formulise', 'liquidise', 'maximise', 'organise', 'minimise', 'optimise', 'monetise', 'mobilise', 'amortise', 'finalise', 'digitise', 'memorise', 'energise', 'penalise', 'equalise', 'demonise', 'legalise', 'immunise', 'unionise', 'theorise', 'localise', 'vaporise', 'colonise', 'sanitise', 'humanise', 'polarise', 'idealise', 'satirise', 'civilise', 'vocalise', 'canonise', 'valorise', 'vitalise', 'moralise', 'eulogise', 'feminise', 'exorcise', 'notarise', 'urbanise', 'deputise', 'colorise', 'fluidise', 'totalise', 'sodomise', 'focalise', 'solarise', 'motorise', 'dimerise', 'divinise', 'womanise', 'robotise', 'canalise', 'novelise', 'quantise', 'fiberise', 'etherise', 'arborise', 'simonise', 'tetanise', 'deionise', 'alkalise', 'lyricise', 'archaise', 'francise', 'faradise', 'melodise', 'disseise', 'ruralise', 'nasalise', 'vowelise', 'cutinise', 'botanise', 'salinise', 'nebulise', 'creolise', 'paganise', 'eternise', 'opsonise', 'velarise', 'curarise', 'suberise', 'aphorise', 'disprise', 'misprise', 'surprise', 'comprise', 'calorise', 'soberise', 'laterise', 'caponise', 'avianise', 'melanise', 'romanise', 'pyrolise', 'chromise', 'polemise', 'racemise', 'japanise', 'latinise', 'realise', 'utilise', 'itemise', 'outsise', 'oxidise', 'agonise', 'baptise', 'capsise', 'idolise', 'stylise', 'atomise', 'lionise', 'ironise', 'anodise', 'laicise', 'unitise', 'cognise', 'heroise', 'poetise', 'elegise', 'cyclise', 'apprise', 'odorise', 'ozonise', 'kyanise', 'ebonise', 'obelise', 'erotise', 'peptise', 'azotise', 'agatise', 'pectise', 'dualise', 'reseise', 'grecise', 'arabise', 'agenise', 'bromise', 'emprise', 'assise', 'ionise', 'iodise', 'braise', 'agnise', 'catalyse',  'paralyse', 'pyrolyse', 'autolyse', 'hemolyse', 'analyse', 'dialyse', 'hydrolyse','photolyse', 'reanalyse', 'plasmolyse', 'overanalyse', 'electrolyse', 'psycoanalyse' ];   
    keywords = American;
    newKeywords = British;
    function switcheroo(){
        if(britishAmerican == 'BRITISH'){
            keywords = American;
            newKeywords = British;
            britishAmerican = 'AMERICAN';
            americanBritish = 'BRITISH';
        } else {
            keywords = British;
            newKeywords = American;
            britishAmerican = 'BRITISH';
            americanBritish = 'AMERICAN';
        }
        function swap(id) {
            $(id).toggleClass('currentlang notused');
        }

        swap('#title1');
        swap('#title2');
        swap('#opptitle1');
        swap('#opptitle2');
        if($('#myInput').text() != ''){
            let typed = $('#myInput').text();
            $('#myInput').text($('#myInput2').text());
            $('#myInput2').text(typed);
        } else {
            $('#myInput').text('');
            $('#myInput2').text('Translation');
        }
    }   

    function click(idname) {
        $(idname).click(function() {
            switcheroo();
        });
    }

    click('#title1');
    click('#title2');
    click('#opptitle1');
    click('#opptitle2');
    click('#switch');

    $("#myInput").keyup(function(event){
        input = $("#myInput").text();
        input = input.trim();
        var noCapsInput = input.toLowerCase();
        function spaceRemoval(whichWord) {
            if(noCapsInput.includes(whichWord)){
                function nope(item1){
                    input = input.replace(item1, item1.replace(' ', ''));
                }
                input = input.replace('what\'s up', 'whatsup');
                nope(whichWord);
            } else{}
        }

        spaceRemoval('whats up');
        spaceRemoval('what\'s up');
        spaceRemoval('you alright');
        spaceRemoval('tomato sauce');
        spaceRemoval('french fries');
        spaceRemoval('french fry');

        var wordList = input.split(" ");
        let output = input;
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            output = output + ' ';
        }
        const punctuation = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '\'', '"', ':', ';', ',', '.', '?', '/', '<', '>', '+', '-', '_', '{', '}', '[', ']', '|', '\\', '`', '~'];
        for(word = 0; word < wordList.length; word ++){
            let currentWord = wordList[word];
            let subtractE = 0;
            let minusE = 0;
            let addAnE = 0;
            let currentLetters = currentWord.split('');
            for(letter = 0; letter < currentLetters.length; letter++){ //removes all punctuation touching word
                let currentLetter = currentLetters[letter]; 
                if(punctuation.includes(currentLetter)){ 
                    currentWord = currentWord.replace(currentLetter, '');
                } else{}
        }
            currentLetters = currentWord.split('');
            let capSetting = 0; //0 is lower, 1 is upper, 2 is first letter
            if(currentWord.toUpperCase() == currentWord){ //is it in all caps
                capSetting = 1;
            } else if(currentLetters[0].toUpperCase() == currentLetters[0]){
                capSetting = 2;
            } else{
                capSetting = 0;
            }
            noCapsCurrentWord = currentWord.toLowerCase();
            currentWord = currentWord.trim();
            lastOne = noCapsCurrentWord.slice(-1); 
            lastTwo = noCapsCurrentWord.slice(-2);
            lastThree = noCapsCurrentWord.slice(-3);
            lastFour = noCapsCurrentWord.slice(-4);
            lastFive = noCapsCurrentWord.slice(-5);
            function newOutput() {
                if(subtractE == 0 && minusE == 0 && addAnE == 0){
                    let position = keywords.indexOf(noCapsCurrentWord); //where in the keyword list it is
                    var newWord = newKeywords[position]; //British word
                    if(capSetting == 1){
                        newWord = newWord.toUpperCase();
                    } else if(capSetting == 2){
                        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
                    } else{}
                    output = output.replace(currentWord, newWord); 
                } else if(minusE == 1){
                    let position = keywords.indexOf(noCapsCurrentWord); //where in the keyword list it is
                    var newWord = newKeywords[position]; //British word 
                    if(newWord.slice(-1) == 'e'){
                        newWord = newWord.slice(0, -1);
                    } else{}
                    if(capSetting == 1){
                        newWord = newWord.toUpperCase();
                    } else if(capSetting == 2){
                        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
                    } else{}
                    output = output.replace(currentWord, newWord);                                 
                } else if(addAnE == 1){
                    let position = keywords.indexOf(noCapsCurrentWord); //where in the keyword list it is
                    var newWord = newKeywords[position]; //British word
                    if(capSetting == 1){
                        newWord = newWord.toUpperCase();
                    } else if(capSetting == 2){
                        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
                    } else{}
                    if(newWord.slice(-1) == 'e'){
                        output = output.replace(currentWord, newWord);
                    }else{
                        output = output.replace(currentWord.slice(0, -1), newWord);
                    }
                }else{
                    let position = keywords.indexOf(noCapsCurrentWord); //where in the keyword list it is
                    var newWord = newKeywords[position]; //British word
                    if(capSetting == 1){
                        newWord = newWord.toUpperCase();
                    } else if(capSetting == 2){
                        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
                    } else{}
                    output = output.replace(currentWord.slice(0, -1), newWord.slice(0, -1));             
                }
            }
            if(keywords.includes(noCapsCurrentWord)){
                newOutput();
                continue;
            } else {}
            if(lastOne == 's'){ //-S
                if(currentWord == 'maths'){
                } else {
                    currentWord = currentWord.slice(0, -1);
                    noCapsCurrentWord = noCapsCurrentWord.slice(0, -1);
                }
            }  else{}
            lastOne = noCapsCurrentWord.slice(-1); 
            lastTwo = noCapsCurrentWord.slice(-2);
            lastThree = noCapsCurrentWord.slice(-3);
            lastFour = noCapsCurrentWord.slice(-4);
            lastFive = noCapsCurrentWord.slice(-5);
                if(noCapsCurrentWord.slice(-2) == 'ed'){ // -ED
                    currentWord = currentWord.slice(0, -1); //organize
                    noCapsCurrentWord = noCapsCurrentWord.slice(0, -1); //organize
                    if(keywords.includes(noCapsCurrentWord)){
                        if(noCapsCurrentWord.slice(-1) == 'e'){
                            addAnE = 1; 
                        } else{}
                    } else {
                        currentWord = currentWord.slice(0, -1); 
                        noCapsCurrentWord = noCapsCurrentWord.slice(0, -1);
                        minusE = 1;
                    }
                } else if(lastThree == 'ing'){ // -ING
                    currentWord = currentWord.slice(0, -3); 
                    noCapsCurrentWord = noCapsCurrentWord.slice(0, -3);
                        if(keywords.includes(noCapsCurrentWord)){
                        } else{
                            currentWord = currentWord + 'e'; //organize
                            noCapsCurrentWord = noCapsCurrentWord + 'e';
                            subtractE = 1;
                        }
                } else if(lastFive == 'fully'){ //-FULLY
                    currentWord = currentWord.slice(0, -5);
                    noCapsCurrentWord = noCapsCurrentWord.slice(0, -5);
                } else if(lastThree == 'ful'){ //-FUL
                    currentWord = currentWord.slice(0, -3);
                    noCapsCurrentWord = noCapsCurrentWord.slice(0, -3);
                } else if(lastFour == 'tion'){ //-TION
                    function addE(){
                        if(keywords.includes(noCapsCurrentWord)){
                        } else{
                            currentWord = currentWord + 'e'; //organize
                            noCapsCurrentWord = noCapsCurrentWord + 'e';
                            subtractE = 1;
                        }
                    }
                    if(lastFive == 'ation'){
                        currentWord = currentWord.slice(0, -5); 
                        noCapsCurrentWord = noCapsCurrentWord.slice(0, -5);
                        addE();
                    } else {
                        currentWord = currentWord.slice(0, -4);
                        noCapsCurrentWord = noCapsCurrentWord.slice(0, -4);
                        addE();
                    }
                } else {}
                if(keywords.includes(noCapsCurrentWord)){
                    newOutput();
                } else if(input == ''){
                    output = 'Translation';
                } else{}
        
        } //end of for loop
            $('#myInput2').text(output);
            if($('#myInput2').text() != 'Translation'){
                $("#myInput2").css("background-color", "#f5f5f5");
                $("#myInput2").css("color", "#000000");
            } else{
                $("#myInput2").css("background-color", "#ffffff");
                $("#myInput2").css("color", "rgb(135,135,135");
            }

            let boxHeight = $('#myInput').css('height');
            boxHeight = (parseInt(boxHeight.slice(0, -2)) + 90).toString() + 'px';
            $('#box').css('height', boxHeight);
            $('#feedback').css('top', boxHeight);
    });


});

