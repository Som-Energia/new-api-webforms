'use strict';

angular.module('SomEnergiaWebForms')
    .config(function($translateProvider) {
        $translateProvider
            .translations('ca', {
                SELECCIONA: 'Selecciona',
                PARTICULAR: 'Persona física',
                EMPRESA: 'Persona jurídica',
                OBLIGATORI: 'Obligatori',
                IDIOMA: 'Idioma',
                SELECCIONA_IDIOMA: 'Selecciona l\'idioma',
                NOM: 'Nom',
                COGNOMS: 'Cognoms',
                RAO_SOCIAL: 'Raó social',
                PERSONA_REPRESENTANT: 'Persona representant',
                REPETEIX_EMAIL: 'Repeteix email',
                TELEFON: 'Telèfon',
                ADRECA: 'Adreça',
                NUMBER: 'Número',
                FLOOR: 'Pis',
                DOOR: 'Porta',
                CODI_POSTAL: 'Codi postal',
                PROVINCIA: 'Província',
                POBLACIO: 'Municipi',
                METODE_PAGAMENT: 'Mètode de pagament',
                REBUT_BANCARI: 'Rebut bancari',
                TARGETA_CREDIT: 'Targeta de crèdit/dèbit ',
                COST: 'cost per a la cooperativa',
                INFO_APORTACIO: 'L\'aportació per a esdevenir soci/a és de 100€<br/>Els 100€ es paguen una sola vegada, no hi ha quota anual i són retornables si et dones de baixa.',
                FINALITZA_PROCES: 'Continuar el procés',
                FORMULARI_NO_DISPONIBLE: 'Formulari no disponible, disculpeu les molèsties.',
                INVALID: 'Invàlid',
                EMAIL_NO_IGUALS: 'Emails diferents',
                DIGITS_LENGTH_5: 'Ha de ser un número amb 5 dígits',
                REGISTRE_EXISTENT: 'Aquest registre ja existeix',
                REGISTRE_OK: 'Felicitats!',
                REGISTRE_OK_MSG: 'Has completat el registre correctament',
                ACCEDINT_SERVEI_PAGAMENT: 'Accedint al servei de pagament',
                FORMULARI_CONTRACTACIO: 'Formulari de contractació',
                NUMERO_SOCI: 'Número de soci/a',
                HELP_POPOVER_IDIOMA: 'Aquest serà l\'idioma amb el que ens comunicarem amb tu a partir d\'ara',
                CARREGAR_DADES_SOCI_VINCULAT: 'Carregar les dades del soci/a vinculat',
                SOCI_VINCULAT: 'Soci vinculat',
                NO_TROBEM_CAP_SOCI_VINCULAT: 'No trobem cap soci/a vinculat a aquestes dades!',
                NO_ETS_SOCI_FES_TE_AQUI: 'No ets soci/a? Fes-te soci/a <a href="//www.somenergia.coop/ca/fes-te-soci-a/" target="_blank">aquí</a>!',
                INICIAR_CONTRACTACIO: 'Iniciar contractació',
                DADES_PUNT_SUBMINISTRAMENT: 'Punt de subministrament',
                NUMERO_DE_CUPS: 'Número de CUPS',
                ES_UN_HABITATGE: 'És un habitatge?',
                HELP_POPOVER_CNAE: 'En el cas d\'habitatges és el 9820. Important: si no és un habitatge, cal que introduïu el CNAE de la vostra activitat econòmica. Per a més informació, consulteu <a target="_blank" href="https://ca.support.somenergia.coop/article/232-quin-es-el-meu-numero-de-cnae">aquest enllaç</a>.',
                QUINA_POTENCIA_TENS_CONTRACTADA: 'Quina potència tens contractada?',
                HELP_POPOVER_POWER: 'Anota la potència ACTUAL del teu contracte',
                QUINA_TARIFA_TENS_CONTRACTADA: 'Quina tarifa tens contractada?',
                CURRENT_RATE: 'Selecciona la tarifa ACTUAL del teu contracte',
                SELECCIONAR: 'Seleccionar',
                INFORMACIO_OPCIONAL: 'Informació opcional',
                ADJUNTAR_ULTIMA_FACTURA: 'Adjuntar última factura elèctrica (PDF o JPG) - 10Mb màxim',
                BAD_EXTENSION: 'Adjuntar només arxius PDF o JPG',
                OVERFLOW_FILE: 'L\'arxiu adjunt NO pot ocupar més de 10Mb',
                SEGUENT_PAS: 'Següent pas',
                PAS_ANTERIOR: 'Pas anterior',
                AVIS_CANVI_TITULAR: '<span class="glyphicon glyphicon-warning-sign"></span>&nbsp;Atenció: En alguns casos, la distribuïdora pot demanar la renovació del Butlletí de la Instal·lació, si aquest està caducat (20 anys). Més informació <a target="_blank" href="http://ca.support.somenergia.coop/article/500-que-es-el-butlleti-electric">aquí</a>',
                SI: 'Sí',
                NO: 'No',
                DADES_PAGAMENT: 'Dades de pagament',
                TITULAR_CONTRACTE_ELECTRICITAT: 'Titular del contracte d\'electricitat',
                SOCI_SOM_ENERGIA: 'Soci/a de Som Energia',
                ALTRE_TITULAR: 'Un altre titular',
                NUM_COMPTE: 'Número de compte bancari',
                IBAN_EXEMPLE: 'exemple IBAN',
                BANC: 'Banc',
                OFICINA: 'Oficina',
                COMPTE: 'Número compte',
                CONFIRMO_TITULAR_COMPTE_ACCEPTA_DOMICILIACIO: 'Confirmo que la persona titular del compte bancari autoritza la domiciliació de les factures d\'electricitat',
                SOM_UNA_COOPERATIVA_SENSE_ANIM_DE_LUCRE: 'Som una Cooperativa sense ànim de lucre amb l\'objectiu ferm de canviar el model energètic',
                VOLS_PARTICIPAR_AMB_LA_TEVA_ENERGIA: 'Vols participar amb la teva energia a fer-ho possible?',
                DONATIU_VOLUNTARI: 'Donatiu voluntari de 0,01€/kWh',
                ELS_SOCIS_I_SOCIES_QUE_HO_DESITGIN_PODEN_REALITZAR_UN_DONATIU_VOLUNTARI: 'Els socis i sòcies que ho desitgin poden realitzar un donatiu voluntari de 0,01€/kWh destinat a recolzar i facilitar l\'acció social i voluntària dels més de 50 Grups Locals repartits pel territori. Per un consum mitjà d\'una família (aproximadament 300kWh/mes) això representa un increment de 3€ mensuals. Sempre que ho vulguis podràs activar o desactivar aquest donatiu a l\'instant des de l\'Oficinal Virtual.',
                CONFIRMAR_CONTRACTACIO: 'Confirmar contractació',
                SENDING: 'Enviant dades...',
                ENVIANT_DADES: 'Si has adjuntat una factura aquest procès pot tardar una estona i aquesta estona dependrà del pes de l\'arxiu i de la teva connexió a internet. Ànims i bona energia, que ja gairebé ho has aconseguit! :)',
                REVISIO_CONFIRMACIO_DADES: 'Revisió i confirmació de les dades',
                EL_CONTRACTE_CANVIA_TITULAR: 'El contracte canvia de titular?',
                TARIFA: 'Tarifa',
                POTENCIA_CONTRACTADA: 'Potència contractada',
                NOM_O_RAO_SOCIAL: 'Nom o raó social',
                SI_TOT_CORRECTE: 'Sí, tot correcte',

                HELP_POPOVER_SOCIA: 'No recordes el teu número? El pots veure dins l\'apartat "Dades Personals" de l\'<a target="_blank" href="https://oficinavirtual.somenergia.coop/">Oficina Virtual</a>.',
                HELP_POPOVER_NIF: 'Exemple NIF: 12345678P (amb lletra final)',
                SOCIA_TROBADA: 'Soci/sòcia trobat/da!',
                VALIDANT_ID: 'Validant document d\'identificació...',
                IDENTIFICANT_SOCIA: 'Identificant soci/sòcia...',
                NIF_INVALID: 'Codi NIF invàlid',
                SERVER_ERROR: 'Error accedint al servidor:',
                INICIAR_INVERSIO: 'Iniciar aportació',
                FORMULARI_D_INVERSIO: 'Formulari d\'<b>aportació</b>',
                BENVINGUDA: 'Benvingut/da, <b>{{name}}</b>!',
                QUANT_VOLS_INVERTIR: 'Quant vols <b>aportar</b>?<br/><small>En aportació voluntària al capital social</small>',
                RECORDA: 'Recorda: ',
                AMOUNT_HELPER_MIN: 'Mínima aportació {{amount}}€',
                AMOUNT_HELPER_MAX: 'Màxima aportació {{amount}}€',
                AMOUNT_HELPER_STEP: 'Quantitat múltiple de {{amount}}€',
                NUMERO_DE_COMPTE_FORMAT_IBAN: 'Número de compte en format IBAN. Exemple: ES11 2222 3333 4444 5555 6666',
                CONFIRMO_CONDICIONS_INVERSIO: 'Confirmo que soc titular del compte corrent, autoritzo la domiciliació i accepto les <a target="_blank" href="https://somenergia.coop/ca/condicions-generals-aportacio">condicions generals d\'aportació</a> i la <a target="_blank" href="https://www.somenergia.coop/ca/avis-legal/#politica-de-privacitat">política de privacitat</a>',
                CONFIRMAR_INVERSIO: 'Confirmar aportació',
                COMPROVANT: 'Comprovant...',
                CORRECTE: 'Correcte',
                INVEST_OK_REDIRECT_URL: 'https://www.somenergia.coop/ca/aportacio-realitzada-correctament/',
                CONTRACT_OK_REDIRECT_URL: 'https://www.somenergia.coop/ca/contratacio-realitzada/',
                GENERATION_OK_REDIRECT_URL: 'http://www.generationkwh.org/ca/inversio-realitzada/',
                MAX_INVESTMENT: 'S\'ha superat l\'aportació màxima',
                CLOSED_INVESTMENT: 'Aportació tancada',

                // Added or changed since 1.2.6
                CODI_IBAN_DEL_COMPTE: 'Codi IBAN del compte',
                EXEMPLE_IBAN: 'Exemple: ES11 2222 3333 4444 5555 6666',
                REQUERIT: 'Requerit.',
                DES_DE_QUIN_COMPTE: 'Des de quin <b>compte bancari</b>?',
                FORMULARI_D_INVERSIO_GKWH: 'Formulari d\'aportació pel Generation kWh',
                QUANTES_ACCIONS_ENERGETIQUES_VOLS: 'Quantes <b>accions energètiques</b> vols?',
                COST_PER_ACCIO_ENERGETICA: '{{ preuperaccio }}€ per acció energètica.',
                KWH_PER_ACCIO_ENERGETICA: '<a href="{{url}}" target="_blank">Previsió actual:</a> {{ kwhperaccio }} kWh per acció energètica',
                CARREGANT_INFORMACIO_DELS_TEUS_CONTRACTES: 'Carregant la informació dels teus contractes...',
                CONTRACTE: 'Contracte',
                PUNT_DE_SUBMINISTRAMENT: 'Punt de subministrament',
                US_ANUAL: 'Ús anual',
                TOTAL_US_ANUAL_ESTIMAT: 'Ús anual estimat total',
                PERCENTATGE_ASSOLIT: 'Percentatge d\'autoproducció sobre el teu ús total',
                GENERATION_RECOMANACIO_PERCENT: 'Pots autoproduir el que vulguis. La nostra <a href="{{ url }}" target="_blank">recomanació</a> és no superar el {{ percent }}% en segons quins casos.',
                GENERATION_RECOMANACIO_PERCENT_URL: 'http://bit.ly/maxGkWh', // Points to: 'http://ca.support.somenergia.coop/article/584-hi-ha-una-quantitat-minima-o-maxima-a-aportar'
                GENERATION_ACCEPTO_DOMICILIACIO: 'Confirmo que soc titular del compte corrent i autoritzo la domiciliació',
                GENERATION_ACCEPTO_CONDICIONS: 'Accepto les <a target="_blank" href="{{url}}">condicions generals de l\'aportació</a>',
                GENERATION_CONDICIONS_URL: 'http://www.generationkwh.org/wp-content/uploads/Condicions-Generals-Contracte-Autoproduccio-Col_lectiva-Generation-kWh_CA.pdf',
                NO_HA_ESTAT_TROBAT: 'No ha estat trobat',
                FENT_SERVIR_RESIDENCIA_MITJANA: 'S\'està fent servir com a referència l\'ús d\'electricitat d\'una residència mitjana',
                ADDICIONAL_FERSE_SOCIA: '<b>Atenció:</b> A banda de la quantitat que decideixis aportar, per ser soci/sòcia s’ha de fer una aportació al capital social de <b>100€</b> que <b>es retornen</b> si et dones de baixa.',
                ERROR_POST_INVERSIO: 'Error realitzant l\'aportació',
                ERROR_POST_NOVASOCIA: 'Error registrant el/la socio/a',
                ERROR_REQUIRED_FIELD: 'Falta paràmetre requerit: {{field}}',
                ERROR_INVALID_FIELD: 'Valor invàlid del paràmetre: {{field}}, motiu: {{reason}}',
                ERROR_CANT_CONTRACT: 'No és possible realitzar la contractació.<p><p>Si desitges més informació et pots posar en contacte amb Som Energia enviant un correu a <a href="mailto:info@somenergia.coop" style="font-weight: bold;">info@somenergia.coop</a> o trucant al 872.202.550 de 9.00h a 14.00h de dilluns a divendres, excepte festius.',
                CARREC_ADICIONAL_NOVA_SOCIA: 'Import total: {{total}}€ ({{ aportaciosoci }}€ + {{ costaccions }}€)',
                JA_SOC_SOCIA: 'Ja soc soci/a',
                EM_VULL_FER_SOCIA: 'Em vull fer soci/a',
                GENERATION_REQUERIMENT_SER_SOCIA: 'Per a participar en aquesta aportació cal ser de Som Energia. Quin és el teu cas?',
                APORTACIO_REQUERIMENT_SER_SOCIA: '<p>Per a participar en aquesta aportació cal ser de Som Energia.</p><h3>Quin és el teu cas?</h3>',
                APORTACIO_CONDICIONS_URL: 'https://www.somenergia.coop/ca/condicions-generals-aportacio/',
                DADES_ALTA: 'Dades de l\'alta a la cooperativa',
                HELP_JURIDICA: 'Persones jurídiques són les empreses, associacions i d\'altres entitats. Les persones físiques som les persones de carn i ossos.',
                COM_CONTACTEM: 'Dades de contacte',
                DOMICILI: 'Domicili',
                TELEFON_ALTERNATIU: 'Telèfon alternatiu',
                APORTACIO_CORRESPONENT: 'Aportació corresponent',
                AUTOPRODUCCIO_ANUAL: 'Autoproducció anual',
                PREVISIO_GENERATION_URL: 'http://ca.support.somenergia.coop/article/582-que-representa-una-accio-energetica',

                // Added or changed since 1.3.2

                CARREGANT_OPCIONS: 'Carregant opcions...',
                OPCIONAL: 'Opcional',
                HI_HA_LLUM_AL_PUNT_DE_SUBMINISTRAMENT: 'Hi ha llum, actualment?',
                AVIS_CANVI_COMERCIALITZADORA: 'Sí que hi ha llum.<br/>Amb una altra comercialitzadora i vull canviar a Som Energia.',
                AVIS_ALTA_DE_SERVEI: 'No hi ha llum.<br/>Vull donar-la d\'alta directament amb Som Energia.',
                HELP_POPOVER_CUPS: 'Ho trobareu a la vostra factura actual. És un codi de l\'estil ES0031406155637019SB0F.',
                HELP_POPOVER_CUPS_ALTA: 'És un codi que s\'indica a la factura, de l\'estil ES0031406155637019SB0F.<br/>Si no el tens, cliqueu <a target="_blank" href="{{url}}">aquest enllaç</a>',
                HELP_POPOVER_CUPS_ALTA_URL: 'http://ca.support.somenergia.coop/article/225-no-tinc-llum-actualment-puc-sol-licitar-un-nou-punt-de-consum',
                REFERENCIA_CADASTRAL: 'Referència cadastral de l\'immoble',
                HELP_POPOVER_REFERENCIA_CADASTRAL: 'És opcional, ens és útil per resoldre incongruències en les dades.<br/>Pots trobar-la aquí:<br/><a target="_blank" href="https://www1.sedecatastro.gob.es/OVCFrames.aspx?TIPO=CONSULTA">Espanya</a><br/><a target="_blank" href="http://www.bizkaia.net/home2/Temas/DetalleTema.asp?Tem_Codigo=5181&Idioma=CA">Bizkaia</a><br/><a target="_blank" href="http://catastroalava.tracasa.es/navegar/?lang=es">Araba</a><br/><a target="_blank" href="http://www4.gipuzkoa.net/ogasuna/catastro/presenta.asp">Guipuzkoa</a><br/><a target="_blank" href="https://catastro.navarra.es/">Navarra</a>',
                TARIFA_I_POTENCIA: 'Tarifa i potència',
                TIPUS_INSTALLACIO: 'Quin tipus d\'instal·lació tens?',
                MONOFASICA_NORMAL: 'Monofàsica (Normal)',
                TRIFASICA: 'Trifàsica',
                HELP_INSTALL_TYPE: 'Com identificar si una instal·lació és <a target="_blank" href="{{url}}">trifàsica o monofàsica</a>',
                HELP_INSTALL_TYPE_URL: 'http://ca.support.somenergia.coop/article/479-tinc-una-instal-lacio-monofasica-o-trifasica',
                POTENCIA_A_CONTRACTAR: 'Quina potència vols contractar?',
                MES_GRAN_DE_15KW: 'Superior a 15kW',
                HELP_POTENCIA: 'Com esbrinar <a target="_blank" href="{{url}}">la potència que necessito</a>',
                HELP_POTENCIA_URL: 'http://ca.support.somenergia.coop/article/269-com-puc-saber-la-potencia-que-necessito',
                DISCRIMINACIO_HORARIA: 'Vols discriminació horària?',
                SENSE_DISCRIMINACIO_HORARIA: 'Sense discriminació horària',
                AMB_DISCRIMINACIO_HORARIA: 'Amb discriminació horària',
                HELP_DISCRIMINACIO_HORARIA: 'Com puc saber <a target="_blank" href="{{url}}">si em convé discriminació horària o no</a>',
                HELP_DISCRIMINACIO_HORARIA_URL: 'http://ca.support.somenergia.coop/article/270-com-puc-saber-si-em-surt-a-compte-tenir-discriminacio-horaria',
                ESCULL_LA_POTENCIA_DE_CADA_PERIODE: 'Escull la potència de cada període',
                HELP_POWER_30: 'Més informació sobre els <a target="_blank" href="{{url}}">períodes de la 3.0</a>',
                HELP_POWER_30_URL: 'http://ca.support.somenergia.coop/article/255-quins-horaris-tenen-els-periodes-de-la-tarifa-3-0a',
                HELP_TARIFA_CANVI_COMERCIALITZADORA: 'Per evitar problemes de tramitació, poseu <b>la mateixa tarifa i potència que apareix a la factura actual</b>. Ens podreu sol·licitar canvis de tarifa o potència una vegada estigui el contracte activat amb nosaltres.',
                HELP_TARIFA_ALTA: 'Per completar els següents camps us recomanem que cliqueu els botons d\'ajuda.',
                DADES_TITULAR_NOU_CONTRACTE: 'Titular del contracte',
                QUI_ES_LA_PERSONA_TITULAR: 'Qui serà la persona titular?',
                ALTRA_PERSONA: 'Una altra persona',
                QUI_ES_TITULAR_COMPTE_BANCARI: 'A nom de qui està el compte on es domiciliaran els rebuts?',
                ALGUN_DELS_TRES_PERIODES_MAJOR_QUE_15: 'Algun dels tres periodes ha de tenir més de 15kW',
                CUPS_EXISTENT: 'Ja tenim un contracte amb aquest codi CUPS',
                CAP_ARXIU_SELECCIONAT: 'Cap arxiu seleccionat',
                HELPER_ADJUNTAR_ULTIMA_FACTURA: 'Un escanejat de la darrera factura amb l\'actual distribuïdora ens ajuda a comprovar qualsevol inconsistència en les dades que has introduït',
                ADJUNTAR_BUTLLETI: 'Adjuntar la documentació per l\'alta de subministrament (PDF o JPG) - 10Mb màxim',
                HELP_ADJUNTAR_BUTLLETI: 'Podràs adjuntar diversos fitxers. En la majoria de casos demanen el butlletí elèctric però pots trobar més informació en <a target="_blank" href={{url}}>aquest enllaç</a>',
                HELP_ADJUNTAR_BUTLLETI_URL: 'http://ca.support.somenergia.coop/article/225-no-tinc-llum-actualment-puc-sol-licitar-un-nou-punt-de-consum',
                HELP_POPOVER_RATE: 'Ho trobareu a la vostra factura actual. A vegades com a "Peatge d\'accés".<br/>Podeu trobar més informació al <a target="_blank" href="{{url}}">centre de suport</a>',
                HELP_POPOVER_RATE_URL: 'http://ca.support.somenergia.coop/article/220-quines-tarifes-ofereix-la-cooperativa-i-a-quin-preu',
                TIPUS_DE_CONTRACTACIO: 'Tipus de contractació',
                ALTA: 'Alta d\'un punt sense subministrament',
                CANVI_DE_COMERCIALITZADORA_I_TITULAR: 'Canvi de comercialitzadora modificant la persona titular',
                CANVI_DE_COMERCIALITZADORA: 'Canvi de comercialitzadora mantenint la persona titular',
                ERROR_POST_CONTRACTE: 'Error enviant el contracte',

                INCOMPLETE_PREVIOUS_STEP: 'No has completat el pas anterior',
                UNSELECTED_NEW_SUPPLY_POINT: 'No has especificat si ja hi ha llum amb una altra comercialitzadora o és un nou punt de subministrament sense llum',
                NO_SUPPLY_POINT_ADDRESS: 'No has especificat l\'<b>adreça</b> del punt de subministrament',
                NO_SUPPLY_POINT_ADDRESS_NUMBER: 'No has especificat el <b>número</b> a l\'adreça del punt de subministrament',
                NO_SUPPLY_POINT_STATE: 'No has especificat la <b>província</b> del punt de subministrament.',
                NO_SUPPLY_POINT_CITY: 'No has especificat el <b>municipi</b> del punt de subministrament',
                NO_IS_HOUSING: 'No has especificat si l\'adreça correspon a un habitatge',
                INVALID_CNAE_NO_HOUSING: 'El punt de subministrament no és un habitatge, el CNAE no pot ser 9820',
                INVALID_SUPPLY_POINT_CUPS: 'No has especificat un <b>identificador CUPS</b> vàlid pel punt de subministrament',
                INVALID_SUPPLY_POINT_CNAE: 'No has especificat un <b>codi CNAE</b> vàlid pel punt de subministrament',
                INVALID_SUPPLY_POINT_ATTACHMENT: 'L\'arxiu adjunt supera el límit de 10Mbytes',
                NO_MONOPHASE_CHOICE: 'No has especificat si la instal·lació és de tipus monofàsica o trifàsica',
                NO_FARE_CHOSEN: 'No has especificat la tarifa',
                NO_POWER_CHOSEN: 'No has especificat la potència',
                NO_POWER_CHOSEN_P2: 'No has especificat la potència pel període P2',
                NO_POWER_CHOSEN_P3: 'No has especificat la potència pel període P3',
                INVALID_POWER_20: 'La potència per tarifes 2.0 ha de ser inferior a 10kW',
                INVALID_POWER_21: 'La potència per tarifes 2.1 hauria ha d\'estar entre 10kW i 15kW',
                INVALID_POWER_30: 'Al menys un període ha de tenir una potència superior o igual a 15kW',
                NO_HOURLY_DISCRIMINATION_CHOSEN: 'No has especificat si vols fer discriminació horària',
                OWNER_CHANGED_NOT_CHOSEN: 'Cal indicar si es manté l\'actual titular del contracte',
                UNACCEPTED_GENERAL_CONDITIONS: 'Cal acceptar les condicions generals del contracte',
                INVALID_PAYER_IBAN: 'No has especificat correctament l\'<b>IBAN</b> del compte on domiciliar',
                NO_VOLUNTARY_DONATION_CHOICE_TAKEN: 'Cal dir si vols o no fer el donatiu voluntari',
                UNCONFIRMED_ACCOUNT_OWNER: 'Cal marcar la casella per confirmar que la persona indicada és la persona titular del compte',
                UNACCEPTED_GENERAL_CONDITIONS_NON_OWNER_PAYER: 'Si la persona pagadora és diferent de la titular, també ha d\'acceptar les condicions generals del contracte marcant la casella',
                NO_PERSON_TYPE: 'No has especificat si és una persona física o jurídica',
                NO_NAME: 'No has especificat el nom',
                NO_SURNAME: 'No has especificat els cognoms',
                NO_NIF: 'No has especificat el NIF',
                NO_PROXY_NAME: 'No has especificat el nom de la persona representant',
                NO_PROXY_NIF: 'No has especificat el NIF de la persona representant',
                NO_ADDRESS: 'No has especificat l\'adreça',
                NO_POSTALCODE: 'No has especificat un codi postal correcte',
                NO_STATE: 'No has especificat la província',
                NO_CITY: 'No has especificat el municipi',
                NO_EMAIL: 'No has especificat un correu electrònic correcte',
                NO_REPEATED_EMAIL: 'No has repetit el correu electrònic correctament',
                NO_PHONE: 'No has especificat un telèfon correcte',
                NO_LANGUAGE: 'No has especificat l\'idioma',
                UNACCEPTED_PRIVACY_POLICY: 'Has d\'acceptar la política de privacitat',
                NEW_MEMBER_FORM: 'Nova persona sòcia',
                MEMBER_CONTRIBUTION_PAYMENT: 'Pagament de l\'aportació',
                DIRECT_DEBIT: 'Rebut domiciliat',
                NEWMEMBER_OK_REDIRECT_URL: 'https://www.somenergia.coop/ca/pagament-realitzat/',
                NEWMEMBER_KO_REDIRECT_URL: 'https://www.somenergia.coop/ca/pagament-cancellat/',

                CONTRACT_MODIFICATION_FORM: 'Modificacions de potència i/o tarifa',
                MODIFY_POTTAR_INTRO_TITLE: 'Avís important',
                MODIFY_POTTAR_INTRO: '<p>El canvi de potència i/o tarifa el valida, l\'aplica i el cobra (a través de la nostra factura) la <a target="_blank" href={{url}}>distribuïdora de la teva zona</a>. El <b>cost regulat</b> és:</p><ul><li>10,94&nbsp;€ (IVA inclòs) per sol·licitud. Podeu canviar alhora de tarifa i potència en una sola sol·licitud.</li><li>En cas d\'<b>augmentar la potència</b>, 44,86&nbsp;€ per kW d\'increment.</li><li>En el cas d\'haver baixat la potència contractada, durant els següents tres anys es podrà tornar augmentar fins el valor anteriorment contractat pagant 23,84 € per kW d\'augment, en comptes dels 44,86 € comentats anteriorment.</li></ul><p>La distribuïdora només està obligada a acceptar <b>una sol·licitud de canvi cada 12 mesos</b> excepte per augments de potència contractada. En aquest cas, per normativa, la distribuidora no podrà aplicar aquesta limitació.</p><p>En cas d\'augmentar la potència contractada la companyia distribuïdora pot demanar el butlletí o certificat de la instal·lació si aquest ja està caducat o si marca una potència inferior a la nova sol·licitada. Si fos així, t\'ho farem saber per correu electrònic.</p>',
                HELP_CONTACT_INFO: 'Les dades de contacte les utilitzarà la <a target="_blank" href="{{url}}">distribuïdora de la zona</a> per avisar-vos en cas que el tècnic encarregat necessiti accedir al comptador.',
                MODIFY_POTTAR_CONTACT_TITLE: 'Dades de contacte, per accedir al comptador',
                HELP_CONTACT_INFO_URL: 'http://ca.support.somenergia.coop/article/655-les-distribuidores-d-electricitat',
                MODIFY_POTTAR_SUCCESS_TITTLE: 'Enhorabona. En breu rebràs un correu electrònic amb les dades de la teva sol·licitud.',
                MODIFY_POTTAR_SUCCESS_MESSAGE: 'Enviarem la teva sol·licitud a la distribuïdora de la teva zona que s’encarregarà de validar-la i fer-la efectiva. En el cas que sigui necessari fer-nos arribar documentació relacionada amb aquesta tramitació, adjunta-la responent al correu de confirmació que rebràs en pocs minuts.',
                ERROR_POST_MODIFY: 'S\'ha detectat un error',
                MODIFY_POTTAR_ONGOING_PROCESS: 'Aquest contracte té un altre procés pendent de resoldre.',
                MODIFY_POTTAR_ONGOING_PROCESS_DETAILS: 'No es poden començar nous processos si n\'hi ha cap de pendent. Torna a intentar-ho un cop hagis rebut per correu la resolució del procés pendent.',
                MODIFY_POTTAR_NOT_ALLOWED: 'No estàs autoritzat a fer aquesta operació.',
                MODIFY_POTTAR_NOT_ALLOWED_DETAILS: 'Vols venir a treballar amb nosaltres? ;-)',
                MODIFY_POTTAR_INACTIVE_CONTRACT: 'El contracte a modificar no està d\'alta.',
                MODIFY_POTTAR_INACTIVE_CONTRACT_DETAILS: 'Només es poden modificar els contractes que estan d\'alta.',
                MODIFY_POTTAR_BAD_TOKEN: 'La sessió ha expirat.',
                MODIFY_POTTAR_BAD_TOKEN_DETAILS:'Et recomanem tornar a accedir des de la llista de contractes i intentar-ho de nou.',
                MODIFY_POTTAR_UNEXPECTED: 'S\'ha produït un error inesperat.',
                MODIFY_POTTAR_UNEXPECTED_DETAILS: 'Poseu-vos en contacte amb modifica@somenergia.coop per a que us podem donar un cop de mà. Per identificar-vos necessitarem saber el vostre NIF i el número del contracte que voleu modificar.',
                API_SERVER_ERROR: 'Hi ha hagut un error en connectar al servidor.',
                API_SERVER_ERROR_DETAILS: 'El vostre navegador té problemes al connectar-se a la web de Som Energia. Comproveu que la connexió a Internet està funcionant correctament. Si no és aquest el problema, contacteu amb Som Energia per verificar que el tràmit s\'ha processat correctament.',
                API_SERVER_OFFLINE: 'Els nostres servidors no responen.',
                API_SERVER_OFFLINE_DETAILS: 'És possible que estiguem fent tasques de manteniment. Torneu a provar-ho més tard. Perdoneu les molèsties.',
                MODIFY_POTTAR_INVALID_FIELD: 'Les dades no són correctes.',
                MODIFY_POTTAR_REQUIRED_FIELD: 'Falten dades.',
                POTENCIA: 'Potència',
                MODIFY_POTTAR: 'Petició de canvi de Tarifa i/o Potència',
                CONTACT_PHONE: 'Telèfon de contacte per accedir al comptador',
                ENVIAR: 'Enviar',
                ENVIANT: 'Enviant',
                REVIEW_DATA_AND_CONFIRM: 'Reviseu les dades. Per confirmar-les, premeu el botó del final.',
                LA_TEVA_TARIFA_ES: 'La teva tarifa serà',
                ACCEPTO_CONDICIONS_GENERALS: 'He llegit i accepto les <strong><a target="_blank" href="{{url}}">condicions generals del contracte</a></strong>',
                ACCEPTO_CONDICIONS_GENERALS_URL: '//www.somenergia.coop/ca/condicions-del-contracte-de-som-energia/',
                ACCEPTO_POLITICA_PRIVACITAT: 'He llegit i accepto la <strong><a target="_blank" href="//www.somenergia.coop/ca/politica-de-privacitat-cookies-i-avis-legal/">política de privacitat</a></strong> de Som Energia',
                POTENCIA_CUSTOM: 'Si vols contractar una potencia diferent a aquestes, pots indicar-la tot responent el correu electrònic que rebrás un cop complimentat el formulari',

                INDICAR_COMPTE_REBUTS: 'Indica el compte bancari on es domiciliaran els rebuts',
                NIF_CCVV: '<p>Malauradament, la llei catalana de cooperatives (Llei 12/2015, de 9 de juliol) no permet a les comunitats veïnals ser sòcies d\'una cooperativa. Per això, la comunitat no es pot associar a Som Energia.</p><p>Així doncs, per poder contractar la llum de la comunitat caldrà fer-ho utilitzant la invitació d\'una persona sòcia, ja sigui una membre de la comunitat o bé l\'administradora de finques.</p>',

                // UNTRANSLATED
                OWNER_IS_MEMBER_NOT_CHOSEN: 'No has indicat quina persona serà la titular del contracte.',
                VOLS_MANTENIR_EL_TITULAR: 'Vols canviar l\'actual persona titular del contracte?',
                NO_CANVI_DE_TITULAR: 'No, no vull.',
                SI_CANVI_DE_TITULAR: 'Sí, sí vull.',
                CONVIDAT_PER: 'Convidat per {{soci.nom}} {{soci.cognom}}, soci/a de {{soci.peer}}',
                INVALID_INTERCOOP_SESSION: 'Hem perdut l\'enllaç amb l\'origen.',

                MODIFY_POTTAR_SELECT_TITLE: 'Selecciona la modificiació/modificacions que vols',
                MODIFY_ANSWER_INSTAL_TYPE: 'Vols modificar la tensió?',
                MODIFY_ANSWER_POWER: 'Vols modificar la poténcia?',
                MODIFY_ANSWER_FARE: 'Vols modificar la tarifa?',

                PREUS_AMB_IMPOSTOS: 'Preus amb impostos',
                TERME_ENERGIA: 'Terme d’energia',
                GENERATION: 'Generation kWh',
                TERME_POTENCIA: 'Terme de potència',
                AUTOCONSUM: 'Compensació Autoproducció',
                BO_SOCIAL: 'Bo Social',
                CONCEPTES_EXTRES: 'A aquests preus se\'ls ha de sumar els següents conceptes:',
                EXTRA_REACTIVA: 'En determinades condicions de la instal·lació a aquests preus es pot afegir <b>un recàrrec per energia reactiva</b>',
                LLOGUER_COMPTADOR: '<b>Lloguer de comptador</b>: Depèn de cada cas. En general, {{valor}} {{uom}} amb impostos'
            })
        ;
    });
