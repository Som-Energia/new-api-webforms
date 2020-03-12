'use strict';

angular.module('SomEnergiaWebForms')
    .config(function($translateProvider) {
        $translateProvider
            .translations('eu', {
                SELECCIONA: 'Aukera ezazu',
                PARTICULAR: 'Pertsona fisikoa',
                EMPRESA: 'Pertsona juridikoa',
                OBLIGATORI: 'Derrigorrezkoa',
                IDIOMA: 'Hizkuntza',
                SELECCIONA_IDIOMA: 'Aukera ezazu hizkuntza',
                NOM: 'Izena',
                COGNOMS: 'Abizenak',
                RAO_SOCIAL: 'Izen-soziala',
                PERSONA_REPRESENTANT: 'Legezko ordezkaria',
                REPETEIX_EMAIL: 'Emaila errepikatu',
                TELEFON: 'Telefonoa',
                ADRECA: 'Helbidea',
                CODI_POSTAL: 'Posta-kodea',
                PROVINCIA: 'Probintzia',
                POBLACIO: 'Herria',
                METODE_PAGAMENT: 'Ordainketa-era',
                REBUT_BANCARI: 'Banku-ordainagiria',
                TARGETA_CREDIT: 'Kreditu-txartela',
                COST: 'kooperatibarako kostua',
                INFO_APORTACIO: 'Bazkide izateko ekarpena 100 €-koa da<br/>100€ behin ordaintzen dira, ez dago urteko kuotarik eta kooperatiban baja eman ezkero bueltan itzuliko dira.',
                FINALITZA_PROCES: 'Prozesuarekin jarraitzeko',
                FORMULARI_NO_DISPONIBLE: 'Formularioa ez dago eskuragarri, barkatu eragozpenak.',
                INVALID: 'Baliogabea',
                EMAIL_NO_IGUALS: 'Email desberdinak',
                DIGITS_LENGTH_5: '5 digituko zenbakia izan behar du',
                REGISTRE_EXISTENT: 'Badago erregistroa',
                REGISTRE_OK: 'Zorionak!',
                REGISTRE_OK_MSG: 'Erregistroa zuzen amaitu duzu',
                ACCEDINT_SERVEI_PAGAMENT: 'Ordainketa-zerbitzura sartzen',
                FORMULARI_CONTRACTACIO: 'Kontratatzeko formularioa',
                NUMERO_SOCI: 'Bazkide zenbakia',
                HELP_POPOVER_IDIOMA: 'Hemendik aurrera elkarrekin harremanetan jartzeko hizkuntza hau izango da',
                CARREGAR_DADES_SOCI_VINCULAT: 'Elkartutako bazkidearen datuak kargatu',
                SOCI_VINCULAT: 'Elkartutako bazkidea',
                NO_TROBEM_CAP_SOCI_VINCULAT: 'Ez da datu hauetara inolako elkartutako bazkiderik aurkitu!',
                NO_ETS_SOCI_FES_TE_AQUI: 'Oraindik ez zara bazkide? Egin zaitez bazkide <a href="//www.somenergia.coop/eu/izan-zaitez-bazkide/" target="_blank">hemen</a>!',
                INICIAR_CONTRACTACIO: 'Kontratazioa hasi',
                DADES_PUNT_SUBMINISTRAMENT: 'Hornidura-puntuaren datuak',
                NUMERO_DE_CUPS: 'CUPS-en zenbakia',
                HELP_POPOVER_CNAE: 'Etxebizitzen kasuan 9820 da. Ohar garrantzitsua: etxebizitza ez bada, adierazi jarduera ekonomikoaren EJSN. Informazio gehiago ikusteko, jo <a target="_blank" href="https://eu.support.somenergia.coop/article/332-zein-da-nire-cnae-zenbakia">esteka honetara</a>.',
                ES_UN_HABITATGE: 'Etxebizitza bat da?',
                QUINA_POTENCIA_TENS_CONTRACTADA: 'Zer potentzia daukazu oraingo kontratuan?',
                HELP_POPOVER_POWER: 'Idatz ezazu zure kontratuaren ORAINGO potentzia',
                QUINA_TARIFA_TENS_CONTRACTADA: 'Zer tarifa daukazu oraingo kontratuan?',
                SELECCIONAR: 'Aukera ezazu',
                INFORMACIO_OPCIONAL: 'Aukerako informazioa',
                ADJUNTAR_ULTIMA_FACTURA: 'Gehi ezazu azkenengo faktura elektrikoa (PDF edo JPG) – Gehienezko 10Mb',
                BAD_EXTENSION: 'Gehi ezazu PDF edo JPG soilik',
                OVERFLOW_FILE: 'Atxikitako artxiboak EZIN ditu 10 Mb baino handiagoa izan',
                SEGUENT_PAS: 'Hurrengo pausoa',
                PAS_ANTERIOR: 'Aurreko pausoa',
                AVIS_CANVI_TITULAR: '<span class="glyphicon glyphicon-warning-sign"></span>&nbsp;Adi: Hainbat kasutan, instalazio-buletina iraungita badago (20 urte), enpresa banatzaileak berritzea eskatuko du. Informazio gehiago <a target="_blank" href="http://eu.support.somenergia.coop/article/555-boletin-electrico">hemen</a>',
                SI: 'Bai',
                NO: 'Ez',
                DADES_PAGAMENT: 'Ordainketa egiteko datuak',
                TITULAR_CONTRACTE_ELECTRICITAT: 'Elektrizitate-kontratuaren titularra',
                SOCI_SOM_ENERGIA: 'Som Energiaren bazkidea',
                ALTRE_TITULAR: 'Beste titular batek',
                NUM_COMPTE: 'Banku-kontuaren zenbakia',
                IBAN_EXEMPLE: 'esate IBAN',
                BANC: 'Bankua',
                OFICINA: 'Bulegoa',
                COMPTE: 'Kontuaren zenbakia',
                CONFIRMO_TITULAR_COMPTE_ACCEPTA_DOMICILIACIO: 'Banku-kontuaren titularrak onartzen duela elektrizitate-fakturen helbideratzea ziurtatzen dut',
                SOM_UNA_COOPERATIVA_SENSE_ANIM_DE_LUCRE: 'Irabazi-asmorik gabeko kooperatiba gara eredu energetikoa aldatzeko asmoz',
                VOLS_PARTICIPAR_AMB_LA_TEVA_ENERGIA: 'Parte hartu nahi duzu zure energiarekin helburu hau lortzeko?',
                DONATIU_VOLUNTARI: 'Borondatezko ekarpena',
                ELS_SOCIS_I_SOCIES_QUE_HO_DESITGIN_PODEN_REALITZAR_UN_DONATIU_VOLUNTARI: 'Nahi duten bazkideek 0,01 €/kWhko ekarpen boluntarioa egin dezakete lurraldean zehar zabaldurik dauden 50 talde lokal baino gehiagoren sutengu eta laguntza gisa. Batazbesteko kontsumo bateko familia baten kasuan ( 300 kWh/hilabeteko), hilean 3 euroko igoera suposatzen du. Nahi duzunean aktibatu edo desaktibatu ahal da laguntza hau momentuan bertan bulego birtualean.',
                CONFIRMAR_CONTRACTACIO: 'Kontratazioa baieztatu',
                SENDING: 'Datuak bidaltzen...',
                ENVIANT_DADES: 'Faktura bat gehitzekotan prozesua amaitzeak denbora dexente iraun lezake, arxtibategiaren pisuaren edota zure Internet-konexioaren arabera. Anima zaitez eta energia on, ia amaitu duzu! :)',
                REVISIO_CONFIRMACIO_DADES: 'Datuak errepasatu eta konfirmatu',
                EL_CONTRACTE_CANVIA_TITULAR: 'Kontratua titularrez aldatzen al da?',
                TARIFA: 'Tarifa',
                POTENCIA_CONTRACTADA: 'Potentzia kontratatua',
                NOM_O_RAO_SOCIAL: 'Enpresa izena edo izen soziala',
                SI_TOT_CORRECTE: 'Bai, dena zuzena da',

                HELP_POPOVER_SOCIA: 'Zure bazkidearen zenbakia ez duzu gogoratzen? Asma ezazu web orriaren "Datu pertsonalak" atalean <a target="_blank" href="https://oficinavirtual.somenergia.coop/">Bulego Birtuala</a>.',
                HELP_POPOVER_NIF: 'Adibide IFZ: 12345678P (amaierako letrarekin)',
                SOCIA_TROBADA: 'Bazkide aurkituta',
                VALIDANT_ID: 'Nortasun-agiria balioztatzen...',
                IDENTIFICANT_SOCIA: 'Bazkidea identifikatzen...',
                NIF_INVALID: 'Nortasun-agiriaren kode okerra',
                SERVER_ERROR: 'Hutsegitea serbidorean sartzen:',
                INICIAR_INVERSIO: 'Hasi zure ekarpena egiten',
                FORMULARI_D_INVERSIO: 'Ekarpen-<b>formularioa</b>',
                BENVINGUDA: 'Ongi etorri, <b>{{name}}</b>!',
                QUANT_VOLS_INVERTIR: 'Zenbateko ekarpena egin <b>nahi duzu</b>? <br/> <small>Kapital sozialerako borondatezko ekarpenak</small>',
                RECORDA: 'Gogora ezazu: ',
                AMOUNT_HELPER_MIN: 'Gutxieneko ekarpena {{amount}}€',
                AMOUNT_HELPER_MAX: 'Gehieneko ekarpena {{amount}}€',
                AMOUNT_HELPER_STEP: 'Zenbatekoa {{amount}}en multiploa',
                NUMERO_DE_COMPTE_FORMAT_IBAN: 'Kontu-korrontearen zenbakia IBAN formatuan. Adibidez: ES11 2222 3333 4444 5555 6666',
                CONFIRMO_CONDICIONS_INVERSIO: 'Kontu-korrontearen titularra naizela ziurtatzen dut, helbideratzea baimentzen dut eta onartzen ditut <a target="_blank" href="https://somenergia.coop/es/condiciones-generales-inversion">inbertsioaren baldintza-orokorrak</a> eta baita <a target="_blank" href="https://www.somenergia.coop/es/politica-de-privacidad-cookies-y-aviso-legal/">pribatutasun-politika ere</a>',
                CONFIRMAR_INVERSIO: 'Egiaztatu ekarpena',
                COMPROVANT: 'Egiaztatzen...',
                CORRECTE: 'Zuzena',
                INVEST_OK_REDIRECT_URL: 'https://www.somenergia.coop/eu/aportacion-realizada-correctamente/', // TODO: Translate url
                CONTRACT_OK_REDIRECT_URL: 'https://www.somenergia.coop/eu/contratacion-realizada/',
                GENERATION_OK_REDIRECT_URL: 'https://www.generationkwh.org/eu/egindako-ekarpena/',
                MAX_INVESTMENT: 'Se ha superado la aportación máxima',
                CLOSED_INVESTMENT: 'Aportación cerrada',

                // Added or changed since 1.2.6
                CODI_IBAN_DEL_COMPTE: 'Kontu-korrontearen IBAN kodea',
                EXEMPLE_IBAN: 'Adibidez: ES11 2222 3333 4444 5555 6666',
                REQUERIT: 'Nahitaezkoa.',
                DES_DE_QUIN_COMPTE: 'Zein <b>kontu-korrontetik?</b>', // Actualizar
                FORMULARI_D_INVERSIO_GKWH: 'Generation kWh ekimenerako ekarpen-formularioa',
                QUANTES_ACCIONS_ENERGETIQUES_VOLS: 'Zenbat <b>akzio energetiko</b> nahi dituzu?',
                COST_PER_ACCIO_ENERGETICA: '{{ preuperaccio }}€ akzio energetiko bakoitzeko.',
                KWH_PER_ACCIO_ENERGETICA: '<a href="{{url}}" target="_blank">Uneko aurreikuspena:</a> {{ kwhperaccio }} kWh akzio energetiko bakoitzeko',
                CARREGANT_INFORMACIO_DELS_TEUS_CONTRACTES: 'Zure kontratuen informazioa kargatzen...',
                CONTRACTE: 'Kontratua',
                PUNT_DE_SUBMINISTRAMENT: 'Hornidura-puntua',
                US_ANUAL: 'Urteko erabilera',
                TOTAL_US_ANUAL_ESTIMAT: 'Batez besteko urteko erabilera guztira',
                PERCENTATGE_ASSOLIT: 'Autoprodukzio-portzentajea erabilera osoari dagokionez',
                GENERATION_RECOMANACIO_PERCENT: 'Nahi duzuna produzitu dezakezu, baina gogoan izan kasuaren arabera %{{ percent }}a ez gainditzea <a href="{{ url }}" target="_blank">gomendatzen dugula</a>.',
                GENERATION_RECOMANACIO_PERCENT_URL: 'http://bit.ly/maxGkWhES', // Points to 'http://es.support.somenergia.coop/article/591-existe-una-cantidad-minima-y-maxima-a-aportar'
                GENERATION_ACCEPTO_DOMICILIACIO: 'Kontu-korrontearen titularra naizela ziurtatzen dut eta helbideratzea onartzen dut',
                GENERATION_ACCEPTO_CONDICIONS: '<a target="_blank" href="{{url}}">Ekarpenaren baldintza orokorrak</a> onartzen ditut',
                GENERATION_CONDICIONS_URL: 'http://www.generationkwh.org/wp-content/uploads/Condiciones-Generales-Contrato-Autoproduccion-Colectiva-Generation-kWh_ES.pdf',
                NO_HA_ESTAT_TROBAT: 'Ez da aurkitu',
                FENT_SERVIR_RESIDENCIA_MITJANA: 'Hartutako erreferentzia etxebizitza arrunt baten elektrizitate-erabilera da',
                ADDICIONAL_FERSE_SOCIA: '<b>Adi:</b> Bazkide izateko, ekarpenaz gain, <b>100€</b>ko ekarpena egin behar duzu kapital sozialera, zeina baja eman ezkero <b>itzuli egingo zaizun</b>.',
                ERROR_POST_INVERSIO: 'Akatsa gertatu da ekarpena egitean',
                ERROR_POST_NOVASOCIA: 'Akatsa gertatu da bazkidea erregistratzean',
                ERROR_CANT_CONTRACT: 'Ezin da kontratazioa egin.<p><p>Informazio gehiago jasotzeko, jar zaitez harremanetan Som Energiarekin <a href="mailto:info@somenergia.coop" style="font-weight: bold;">info@somenergia.coop</a> helbidera idatziz edo 872.202.550 zenbakira deituz, 9:00etatik 14:00etara astelehenetik ostiralera, jaiegunetan izan ezik.',
                ERROR_REQUIRED_FIELD: 'Nahitaezko parametroa falta da: {{field}}',
                ERROR_INVALID_FIELD: 'Parametroaren balioa okerra da: {{field}}, arrazoia: {{reason}}',
                CARREC_ADICIONAL_NOVA_SOCIA: 'Zenbatekoa guztira: {{total}}€ ({{ aportaciosoci }}€ + {{ costaccions }}€)',
                JA_SOC_SOCIA: 'Dagoeneko bazkidea naiz',
                EM_VULL_FER_SOCIA: 'Bazkide izan nahi dut',
                GENERATION_REQUERIMENT_SER_SOCIA: 'Ekarpen honetan parte hartzeko Som Energiako bazkidea izan behar duzu. Zein da zure egoera?',
                APORTACIO_REQUERIMENT_SER_SOCIA: '<p>Ekarpen honetan parte hartzeko Som Energiako bazkidea izan behar duzu.</p><h3>Zein da zure egoera?</h3>',
                APORTACIO_CONDICIONS_URL: 'https://www.somenergia.coop/eu/condiciones-generales-aportacion/',
                DADES_ALTA: 'Kooperatiban altan emandako datuak',
                HELP_JURIDICA: 'Pertsona juridikoak entrepresa, elkarte eta bestelako erakundeak dira. Pertsona fisikoak hezur eta haragizkoak gara.',
                COM_CONTACTEM: 'Kontakturako datuak',
                DOMICILI: 'Helbidea',
                TELEFON_ALTERNATIU: 'Ordezko telefonoa',
                APORTACIO_CORRESPONENT: 'Dagokion ekarpena',
                AUTOPRODUCCIO_ANUAL: 'Autoekoizpena urteko',
                PREVISIO_GENERATION_URL: 'http://es.support.somenergia.coop/article/589-que-representa-una-accion-energetica',

                // Added or changed since 1.3.2

                CARREGANT_OPCIONS: 'Auerak kargatzen...',
                OPCIONAL: 'Aukerakoa',
                HI_HA_LLUM_AL_PUNT_DE_SUBMINISTRAMENT: 'Egun badago argirik?',
                AVIS_CANVI_COMERCIALITZADORA: 'Badago argia. <br/>Beste enpresa merkaturatzaile batekin eta Som Energia-ra aldatu nahi dut.',
                AVIS_ALTA_DE_SERVEI: 'Ez dago argirik.<br/>Som Energia-rekin zuzenean alta eman nahi dut.',
                HELP_POPOVER_CUPS: 'Oraingo fakturan aurkituko duzue. ES0031031321313W0F gisako kodea da.',
                HELP_POPOVER_CUPS_ALTA: 'Fakturan agertzen den kodea da, ES0031031321313W0F gisakoa.<br/>Ez badaukazu, erabili <a target="_blank" href="{{url}}">hurrengo esteka</a>',
                HELP_POPOVER_CUPS_ALTA_URL: 'http://es.support.somenergia.coop/article/245-no-tengo-luz-actualmente-puedo-solicitar-un-nuevo-punto-de-consumo',
                REFERENCIA_CADASTRAL: 'Higiezinaren katastro-erreferentzia',
                HELP_POPOVER_REFERENCIA_CADASTRAL: 'Aukerakoa da, erabilgarri zaigu datuetan inkongruentziarik egonez gero.<br/>Hemen bila dezakezu:<br/><a target="_blank" href="https://www1.sedecatastro.gob.es/OVCFrames.aspx?TIPO=CONSULTA">España</a><br/><a target="_blank" href="http://www.bizkaia.net/home2/Temas/DetalleTema.asp?Tem_Codigo=5181&Idioma=CA">Bizkaia</a><br/><a target="_blank" href="http://catastroalava.tracasa.es/navegar/?lang=es">Araba</a><br/><a target="_blank" href="http://www4.gipuzkoa.net/ogasuna/catastro/presenta.asp">Guipuzkoa</a><br/><a target="_blank" href="https://catastro.navarra.es/">Navarra</a>',
                TARIFA_I_POTENCIA: 'Tarifa eta potentzia',
                TIPUS_INSTALLACIO: 'Zer instalazio mota daukazu?',
                MONOFASICA_NORMAL: 'Monofasikoa (Ohikoa)',
                TRIFASICA: 'Trifasikoa',
                HELP_INSTALL_TYPE: 'Nola jakin instalazioa <a target="_blank" href="{{url}}">trifasikoa ala monofasikoa den</a>',
                HELP_INSTALL_TYPE_URL: 'http://es.support.somenergia.coop/article/483-como-puedo-saber-si-tengo-una-instalacion-monofasica-o-trifasica',
                POTENCIA_A_CONTRACTAR: 'Zer potentzia kontratatu nahi duzu?',
                MES_GRAN_DE_15KW: '15kW baino gehiago',
                HELP_POTENCIA: 'Nola jakin <a target="_blank" href="{{url}}">zein potentzia behar dudan</a>',
                HELP_POTENCIA_URL: 'http://es.support.somenergia.coop/article/282-como-puedo-saber-la-potencia-que-necesito',
                DISCRIMINACIO_HORARIA: 'Ordukako diskriminazioa nahi duzu?',
                SENSE_DISCRIMINACIO_HORARIA: 'Ordukako diskriminaziorik gabe',
                AMB_DISCRIMINACIO_HORARIA: 'Ordukako diskriminazioa nahi dut',
                HELP_DISCRIMINACIO_HORARIA: 'Nola jakin dezaket <a target="_blank" href="{{url}}"> ordukako diskriminazioa komeni zaidan ala ez</a>',
                HELP_DISCRIMINACIO_HORARIA_URL: 'http://es.support.somenergia.coop/article/283-como-puedo-saber-si-me-sale-a-cuenta-tener-discriminacion-horaria',
                ESCULL_LA_POTENCIA_DE_CADA_PERIODE: 'Periodo bakoitzaren potentzia aukeratu',
                HELP_POWER_30: '<a target="_blank" href="{{url}}">3.0 periodoei buruzko informazio gehiago</a>',
                HELP_POWER_30_URL: 'http://es.support.somenergia.coop/article/176-que-horarios-tienen-los-periodos-de-la-tarifa-3-0a',
                HELP_TARIFA_CANVI_COMERCIALITZADORA: 'Izapide-arazoak ekiditeko, ipini <b> oraingo fakturan agertzen diren tarifa eta potentzia berdinak </b>. Tarifa edo potentzia aldaketa eskatu ahal izango duzu behin kontratua gurekin aktibatuta.',
                HELP_TARIFA_ALTA: 'Hurrengo eremuak betetzeko laguntza botoiak erabiltzea gomendatzen dizugu.',
                DADES_TITULAR_NOU_CONTRACTE: 'Kontratuaren titularra',
                QUI_ES_LA_PERSONA_TITULAR: 'Nor izango da titularra?',
                ALTRA_PERSONA: 'Beste pertsona bat',
                QUI_ES_TITULAR_COMPTE_BANCARI: 'Noren izenean dago ordainagiriak pasatuko diren kontua?',
                ALGUN_DELS_TRES_PERIODES_MAJOR_QUE_15: 'Hiru periodoetako batek 15kW baino gehiago izan behar du',
                CUPS_EXISTENT: 'Dagoeneko badaukagu kontratua CUPS kode horrekin',
                CAP_ARXIU_SELECCIONAT: 'Ez da fitxategirik aukeratu',
                HELPER_ADJUNTAR_ULTIMA_FACTURA: 'Oraingo enpresa banatzailearekin daukazun azken faktura eskaneatuz gero, sartu dituzun datuetan egon daitekeen edozein hutsegite egiaztatzen lagunduko digu',
                ADJUNTAR_BUTLLETI: 'Hornidura-altarako dokumentazioa atxiki (PDF o JPG) - gehienez 10Mb',
                HELP_ADJUNTAR_BUTLLETI: 'Hainbat fitxategi atxiki ditzakezu. Gehienetan buletin elektrikoa eskatzen da baina hurrengo estekan informazio gehiago aurki dezakezu <a target="_blank" href={{url}}></a>',
                HELP_ADJUNTAR_BUTLLETI_URL: 'http://es.support.somenergia.coop/article/245-no-tengo-luz-actualmente-puedo-solicitar-un-nuevo-punto-de-consumo',
                HELP_POPOVER_RATE: 'Oraingo fakturan aurkituko duzu. Batzuetan "Peaje de acceso" gisa.<br/> Laguntza zentroan informazio gehiago topa dezakezu <a target="_blank" href="{{url}}"></a>',
                HELP_POPOVER_RATE_URL: 'http://es.support.somenergia.coop/article/240-que-tarifas-ofrece-la-cooperativa-y-a-que-precio',
                TIPUS_DE_CONTRACTACIO: 'Kontratazio mota',
                ALTA: 'Hornidurarik ez duen puntu bateko alta',
                CANVI_DE_COMERCIALITZADORA_I_TITULAR: 'Enpresa merkaturatzailea eta titularra aldatu',
                CANVI_DE_COMERCIALITZADORA: 'Enpresa merkaturatzailea aldatu baina titularra mantendu',
                ERROR_POST_CONTRACTE: 'Errorea kontratua bidaltzean',

                INCOMPLETE_PREVIOUS_STEP: 'Ez duzu aurreko pausoa amaitu',
                UNSELECTED_NEW_SUPPLY_POINT: 'Ez duzu zehaztu beste enpresa merkaturatzailerekiko argirik egotekotan edo argirik gabeko hornidura-puntu berria izatekotan',
                NO_SUPPLY_POINT_ADDRESS: 'Ez duzu hornidura-puntuaren helbidea zehaztu',
                NO_SUPPLY_POINT_STATE: 'Ez duzu hornidura-puntuaren <b>probintzia</b> zehaztu',
                NO_SUPPLY_POINT_CITY: 'Ez duzu hornidura-puntuaren <b>udalerria</b> zehaztu',
                INVALID_SUPPLY_POINT_CUPS: 'Ez duzu hornidura-punturako <b>CUPS-en zenbaki</b> baliogarria zehaztu',
                NO_IS_HOUSING: 'Ez duzu zehaztu helbidea etxebizitza batena ote den',
                INVALID_CNAE_NO_HOUSING: 'Hornidura-puntua ez da etxebizitza bat. EJSN zenbakiak ezin du izan 9820',
                INVALID_SUPPLY_POINT_CNAE: 'Ez duzu hornidura-punturako <b>CNAE kode</b> baliogarria zehaztu',
                INVALID_SUPPLY_POINT_ATTACHMENT: 'Atxikitako artxiboa 10Mb baino handiagoa da',
                NO_MONOPHASE_CHOICE: 'Ez duzu zehaztu instalazioa monofasikoa edo trifasikoa den ala ez',
                NO_FARE_CHOSEN: 'Ez duzu tarifa zehaztu',
                NO_POWER_CHOSEN: 'Ez duzu potentzia zehaztu',
                NO_POWER_CHOSEN_P2: 'Ez duzu P2 aldirako potentzia zehaztu',
                NO_POWER_CHOSEN_P3: 'Ez duzu P3 aldirako potentzia zehaztu',
                INVALID_POWER_20: '2.0 tarifarako potentzia 10kW baino txikiagoa izan behar da',
                INVALID_POWER_21: '2.1 tarifarako potentzia 10kW-ren eta 15 kW-ren artean egon behar da',
                INVALID_POWER_30: 'Gutxienez aldi batek 15kW baino potentzia handiago edo berdina izan behar du',
                NO_HOURLY_DISCRIMINATION_CHOSEN: 'Ez duzu ordukako diskriminazioa nahi izatekotan  zehaztu',
                OWNER_CHANGED_NOT_CHOSEN: 'Oraingo kontratuaren titularra jarraitzekotan adierazi behar da',
                UNACCEPTED_GENERAL_CONDITIONS: 'Kontratuaren baldintza orokorrak onartu behar dira',
                INVALID_PAYER_IBAN: 'Ez duzu ordainagiriaren kontu-korrontearen <b>IBAN</b> zuzen zehaztu',
                NO_VOLUNTARY_DONATION_CHOICE_TAKEN: 'Borondatezko ekarpena egin nahi izatekotan adierazi behar da',
                UNCONFIRMED_ACCOUNT_OWNER: 'Laukia markatu behar da kontu-korrontearen titularra pertsona egokiena izatekotan baieztatzeko',
                UNACCEPTED_GENERAL_CONDITIONS_NON_OWNER_PAYER: 'Ordaintzailea titularra desberdin izatekotan, kontratuaren baldintza orokorrak onartu behar ditu laukia markatuz',
                NO_PERSON_TYPE: 'Ez duzu pertsona fisikoa edo juridikoa izatekotan zehaztu',
                NO_NAME: 'Ez duzu izena zehaztu',
                NO_SURNAME: 'Ez dituzu izen-abizenak zehaztu',
                NO_NIF: 'Ez duzu NAN zehaztu',
                NO_PROXY_NAME: 'Ez duzu ordezkariaren izena zehaztu',
                NO_PROXY_NIF: 'Ez duzu ordezkariaren NAN zehaztu',
                NO_ADDRESS: 'Ez duzu helbidea zehaztu',
                NO_POSTALCODE: 'Ez duzu posta-kode zuzena zehaztu',
                NO_STATE: 'Ez duzu probintzia zehaztu',
                NO_CITY: 'Ez duzu udalerria zehaztu',
                NO_EMAIL: 'Ez duzu posta-elektroniko zuzena zehaztu',
                NO_REPEATED_EMAIL: 'Ez duzu posta-elektronikoa zuzen errepikatu',
                NO_PHONE: 'Ez duzu telefono zuzena zehaztu',
                NO_LANGUAGE: 'Ez duzu hizkuntza zehaztu',
                UNACCEPTED_PRIVACY_POLICY: 'Pribatutasun-politika onartu behar da',
                NEW_MEMBER_FORM: 'Bazkide berria',
                MEMBER_CONTRIBUTION_PAYMENT: 'Ekarpenaren ordainketa',
                DIRECT_DEBIT: 'Ordainagiri helbideratua',
                NEWMEMBER_OK_REDIRECT_URL: 'https://www.somenergia.coop/eu/pago-realizado/',
                NEWMEMBER_KO_REDIRECT_URL: 'https://www.somenergia.coop/eu/pago-cancelado/',

                CONTRACT_MODIFICATION_FORM: 'Potentziaren edota tarifaren aldaketak',
                MODIFY_POTTAR_INTRO_TITLE: 'Garrantzi handiko oharra',
                MODIFY_POTTAR_INTRO: '<p>Zure eskualdeko banatzaileak <a target="_blank" href={{url}}>potentziaren edota tarifaren aldaketa onartzen, jartzen eta kobratzen du (gure fakturaren zehar)</a>. <b>Koste arautua</b> da:</p><ul><li>10,94&nbsp;€ (BEZ barne) eskaera batetik. Eskaera bakarrean potentzia eta tarifa aldi berean aldatzea posiblea da.</li><li>Baldin potentzia <b>handitzen bada</b>, 44,86&nbsp;€ gehikuntzaren kW-tik.</li></ul><p>Banatzaileak onar lezake <b>12 hilabetean behiko aldaketa-eskaera bat</b>.</p>',
                HELP_CONTACT_INFO: 'Zure eskualdeko banatzaileak <a target="_blank" href="{{url}}">kontaktu-informazioa erabiliko du</a> teknikaria zure kontadorera atzituz gero abisua emateko.',
                MODIFY_POTTAR_SELECT_TITLE: 'Aukera itzazu tarifa eta potentzia',
                MODIFY_POTTAR_CONTACT_TITLE: 'Kontaktu-informazioa kontadorera atzitzeko',
                HELP_CONTACT_INFO_URL: 'http://eu.support.somenergia.coop/article/657-las-distribuidoras-de-elctricidad',
                MODIFY_POTTAR_SUCCESS_TITTLE: 'Zorionak!. Berehala zure eskaeraren informazioarekiko posta elektronikoa jasoko duzu.',
                MODIFY_POTTAR_SUCCESS_MESSAGE: 'Zure eskualdeko banatzaileari zure eskaera bidaliko diogu. Horrek baieztatuko eta martxan jarriko du. Beharrezkoa izanez gero, bidal iezaguzu tramite honekin erlazionatuta dagoen dokumentazioa, eta hori minutu gutxi barru jasoko duzun posta elektronikoari gehituko diozun guri berriro bidaltzeko.',
                ERROR_POST_MODIFY: 'Akats bat aurkitu da',
                MODIFY_POTTAR_ONGOING_PROCESS: 'Kontratua erabakitzeko dago beste prozesu batean.',
                MODIFY_POTTAR_ONGOING_PROCESS_DETAILS: 'Ezin dira prozesu berririk hasi zabalik daudenak oraindik amaitzeko zain izatekotan. Saia zaitez berriro prozesuaren berriren bat posta elektronikoz jaso eta gero.',
                MODIFY_POTTAR_NOT_ALLOWED: 'Ez duzu lan hori egiteko eskurik.',
                MODIFY_POTTAR_NOT_ALLOWED_DETAILS: 'Gurekin lan egin nahi al duzu? ;-)',
                MODIFY_POTTAR_INACTIVE_CONTRACT: 'Aldatzeko kontratua ez dago alta hartuta.',
                MODIFY_POTTAR_INACTIVE_CONTRACT_DETAILS: 'Alta hartuta dauden kontratuak soilik aldatu daitezke.',
                MODIFY_POTTAR_BAD_TOKEN: 'Saioa amaitu egin da.',
                MODIFY_POTTAR_BAD_TOKEN_DETAILS:'Kontratu-zerrendatik berriro sartzea gomendatzen zaitugu eta berriro saiatzea.',
                MODIFY_POTTAR_UNEXPECTED: 'Ustekabeko akatsa gertatu egin da.',
                MODIFY_POTTAR_UNEXPECTED_DETAILS: 'Jar zaitez harremanetan modifica@somenergia.coop posta elektronikoarekin zuri laguntzeko. Zure NAN eta aldatu nahi duzun kontratu zenbakia behar ditugu zu identifikatzeko.',
                API_SERVER_ERROR: 'Akats zerbitzariarekin konektatzean.',
                API_SERVER_ERROR_DETAILS: 'Zure nabigatzaileak Som Energiaren web orriarekin konektatzeko arazoak ditu. Egiazta ezazu konexioa ondo dabilela. Beste arazo mota izango balitz, konekta ezazu Som Energiarekin tramitea zuzen egin ahal izatekotan egiaztatzeko.',
                API_SERVER_OFFLINE: 'Gure zerbitzariek ez dute erantzuten.',
                API_SERVER_OFFLINE_DETAILS: 'Mantentze-lanak. Saia zaitez lasterrago. Barkatu eragozpenak.',
                MODIFY_POTTAR_INVALID_FIELD: 'Datuak ez dira zuzenak.',
                MODIFY_POTTAR_REQUIRED_FIELD: 'Datu batzuk falta dira.',
                POTENCIA: 'Potentzia',
                MODIFY_POTTAR: 'Tarifa edota Potentzia aldatzeko eskaera',
                CONTACT_PHONE: 'Kontaktu-telefonoa kontadorera heltzeko',
                ENVIAR: 'Bidali',
                ENVIANT: 'Bidaltzen',
                REVIEW_DATA_AND_CONFIRM: 'Birpasa itzazu datuak. Egiaztatzeko, klika ezazu azkeneko botoian.',
                LA_TEVA_TARIFA_ES: 'Zure tarifa hauxe izango da',
                ACCEPTO_CONDICIONS_GENERALS: '<strong><a target="_blank" href="{{url}}">Kontratuaren baldintza orokorrak</a> irakurri eta onartzen ditut</strong>',
                ACCEPTO_CONDICIONS_GENERALS_URL: '//www.somenergia.coop/es/condiciones-del-contrato-de-som-energia/',
                ACCEPTO_POLITICA_PRIVACITAT: 'Som Energiaren <strong><a target="_blank" href="//www.somenergia.coop/eu/pribatutasun-politika-cookie-ak-eta-lege-oharra/">pribatutasun-politika</a></strong> irakurri eta onartzen dut',

                INDICAR_COMPTE_REBUTS: 'Ordainagiriak helbideratzeko kontu zenbakia adierazi',

                // UNTRANSLATED
                POTENCIA_CUSTOM: 'Si quieres contratar una potencia distinta a estas, nos la puedes indicar respondiendo el correo electrónico que recibirás una vez rellenado el formulario',
                OWNER_IS_MEMBER_NOT_CHOSEN: 'No has indicado qué persona será la titular del contrato.',
                VOLS_MANTENIR_EL_TITULAR: 'Kontratuaren titularra aldatu nahi duzu?',
                NO_CANVI_DE_TITULAR: 'Ez dut nahi.',
                SI_CANVI_DE_TITULAR: 'Bai, nahi dut.',
                NIF: 'IFZ'
            })
        ;
    });

