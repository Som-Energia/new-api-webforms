'use strict';

angular.module('newSomEnergiaWebformsApp')
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
                CODI_POSTAL: 'Codi postal',
                PROVINCIA: 'Província',
                POBLACIO: 'Municipi',
                ACCEPTO_POLITICA_PRIVACITAT: 'Accepto la <strong><a target="_blank" href="//www.somenergia.coop/ca/politica-de-privacitat-cookies-i-avis-legal/">política de privacitat</a></strong> de Som Energia',
                ACCEPTO_CONDICIONS_I_POLITICA_PRIVACITAT: 'Accepto les <strong><a target="_blank" href="//www.somenergia.coop/ca/condicions-del-contracte-de-som-energia/">condicions generals del contracte</a></strong> i la <strong><a target="_blank" href="//www.somenergia.coop/ca/politica-de-privacitat-cookies-i-avis-legal/">política de privacidad</a></strong>',
                METODE_PAGAMENT: 'Mètode de pagament',
                REBUT_BANCARI: 'Rebut bancari',
                TARGETA_CREDIT: 'Targeta de crèdit',
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
                DADES_PUNT_SUBMINISTRAMENT: 'Dades del punt de subministrament',
                NUMERO_DE_CUPS: 'Número de CUPS',
                HELP_POPOVER_CNAE: 'En cas d\'habitatges: 9820. En cas d\'empreses el de la vostra activitat econòmica',
                QUINA_POTENCIA_TENS_CONTRACTADA: 'Quina potència tens contractada?',
                HELP_POPOVER_POWER: 'Anota la potència ACTUAL del teu contracte',
                QUINA_TARIFA_TENS_CONTRACTADA: 'Quina tarifa tens contractada?',
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
                SI_LES_DADES_SON_CORRECTES: 'Si les dades són correctes premi Sí per finalitzar el procés de contractació',
                SI_TOT_CORRECTE: 'Sí, tot correcte',

                HELP_POPOVER_SOCIA: 'No recordes el teu número? El pots veure dins l\'apartat "Dades Personals" de l\'<a target="_blank" href="https://oficinavirtual.somenergia.coop/">Oficina Virtual</a>.',
                HELP_POPOVER_DNI: 'Exemple DNI: 12345678P (amb lletra final)',
                SOCIA_TROBADA: 'Soci/sòcia trobat/da!',
                VALIDANT_ID: 'Validant document d\'identificació...',
                IDENTIFICANT_SOCIA: 'Identificant soci/sòcia...',
                DNI_INVALID: 'Codi del DNI/NIE/CIF invàlid.',
                SERVER_ERROR: 'Error accedint al servidor:',
                INICIAR_INVERSIO: 'Iniciar Inversió',
                FORMULARI_D_INVERSIO: 'Formulari d\'<b>inversió</b>',
                BENVINGUDA: 'Benvingut/da, <b>{{name}}</b>!',
                QUANT_VOLS_INVERTIR: 'Quant vols <b>invertir</b>?<br/><small>En aportació voluntària al capital social</small>',
                RECORDA: 'Recorda: ',
                AMOUNT_HELPER_MIN: 'Mínima aportació 100€',
                AMOUNT_HELPER_MAX: 'Màxima aportació 25.000€',
                AMOUNT_HELPER_STEP: 'Quantitat múltiple de 100€',
                NUMERO_DE_COMPTE_FORMAT_IBAN: 'Número de compte en format IBAN. Exemple: ES11 2222 3333 4444 5555 6666',
                CONFIRMO_CONDICIONS_INVERSIO: 'Confirmo que sóc titular del compte corrent, autoritzo la domiciliació i accepto les <a target="_blank" href="https://somenergia.coop/ca/condicions-generals-inversio">condicions generals de la inversió</a> i la <a target="_blank" href="https://www.somenergia.coop/ca/politica-de-privacitat-cookies-i-avis-legal/">política de privacitat</a>',
                CONFIRMAR_INVERSIO: 'Confirmar inversió',
                COMPROVANT: 'Comprovant...',
                CORRECTE: 'Correcte',
                INVEST_OK_REDIRECT_URL: 'https://www.somenergia.coop/ca/aportacio-realitzada-correctament/',
                CONTRACT_OK_REDIRECT_URL: 'https://www.somenergia.coop/es/contratacion-realizada/',
                GENERATION_OK_REDIRECT_URL: 'http://www.generationkwh.org/ca/inversio-realitzada/',

                // Added or changed since 1.2.6
                CODI_IBAN_DEL_COMPTE: 'Codi IBAN del compte',
                EXEMPLE_IBAN: 'Exemple: ES11 2222 3333 4444 5555 6666',
                REQUERIT: 'Requerit.',
                DES_DE_QUIN_COMPTE: 'Des de quin <b>compte bancari</b>?',
                FORMULARI_D_INVERSIO_GKWH: 'Formulari d\'inversió pel Generation kWh',
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
                GENERATION_ACCEPTO_DOMICILIACIO: 'Confirmo que sóc titular del compte corrent i autoritzo la domiciliació',
                GENERATION_ACCEPTO_CONDICIONS: 'Accepto les <a target="_blank" href="{{url}}">condicions generals de la inversió</a>',
                GENERATION_CONDICIONS_URL: 'http://www.generationkwh.org/wp-content/uploads/Condicions-Generals-Contracte-Autoproduccio-Col_lectiva-Generation-kWh_CA.pdf',
                NO_HA_ESTAT_TROBAT: 'No ha estat trobat',
                FENT_SERVIR_RESIDENCIA_MITJANA: 'S\'està fent servir com a referència l\'ús d\'electricitat d\'una residència mitjana',
                ADDICIONAL_FERSE_SOCIA: '<b>Atenció:</b> A banda de la quantitat que decideixis invertir, per ser soci/sòcia s’ha de fer una aportació al capital social de <b>100€</b> que <b>es retornen</b> si et dones de baixa.',
                ERROR_POST_INVERSIO: 'Error realitzant la inversió',
                ERROR_POST_NOVASOCIA: 'Error registrant el/la socio/a',
                ERROR_REQUIRED_FIELD: 'Falta paràmetre requerit: {{field}}',
                ERROR_INVALID_FIELD: 'Valor invàlid del paràmetre: {{field}}, motiu: {{reason}}',
                CARREC_ADICIONAL_NOVA_SOCIA: 'Import total: {{total}}€ ({{ aportaciosoci }}€ + {{ costaccions }}€)',
                JA_SOC_SOCIA: 'Ja sóc soci/a',
                EM_VULL_FER_SOCIA: 'Em vull fer soci/a',
                GENERATION_REQUERIMENT_SER_SOCIA: 'Per a participar en aquesta inversió cal ser de Som Energia. Quin és el teu cas?',
                APORTACIO_REQUERIMENT_SER_SOCIA: 'Per a participar en aquesta inversió cal ser de Som Energia. Quin és el teu cas?',
                APORTACIO_CONDICIONS_URL: 'https://somenergia.coop/ca/condicions-generals-inversio',
                DADES_ALTA: 'Dades de l\'alta a la cooperativa',
                HELP_JURIDICA: 'Persones jurídiques són les empreses, associacions i d\'altres entitats. Les persones físiques som les persones de carn i óssos.',
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
                HELP_POPOVER_CUPS: 'Ho trobareu a la vostra factura actual. És un codi de l\'estil ES0031031321313W0F.',
                HELP_POPOVER_CUPS_ALTA: 'És un codi que s\'indica a la factura, de l\'estil ES0031031321313W0F.<br/>Si no el tens, clica <a target="_blank" href="{{url}}">aquest enllaç</a>',
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
                LA_TEVA_TARIFA_ES: 'La teva tarifa és',
                HELP_TARIFA_CANVI_COMERCIALITZADORA: 'Per evitar problemes de tramitació, poseu <b>la mateixa tarifa i potència que apareix a la factura actual</b>. Ens podreu sol·licitar canvis de tarifa o potència una vegada estigui el contracte activat amb nosaltres.',
                HELP_TARIFA_ALTA: 'Per completar els següents camps us recomanem clicar als botons d\'ajuda.',
                DADES_TITULAR_NOU_CONTRACTE: 'Titular del contracte',
                VOLS_MANTENIR_EL_TITULAR: 'Es manté la persona titular de l\'actual contracte?',
                NO_CANVI_DE_TITULAR: 'Si.<br/>No vull canviar el titular',
                SI_CANVI_DE_TITULAR: 'No.<br/>Vull canviar la persona titular aprofitant el canvi a Som Energia',
                QUI_ES_LA_PERSONA_TITULAR: 'Qui serà la persona titular?',
                ALTRA_PERSONA: 'Una altra persona',
                ACCEPTO_CONDICIONS_GENERALS: 'Accepto les <strong><a target="_blank" href="{{url}}">condicions generals del contracte</a></strong>',
                ACCEPTO_CONDICIONS_GENERALS_URL: '//www.somenergia.coop/ca/condicions-del-contracte-de-som-energia/',
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

                // Under development

            })
        ;
    });

