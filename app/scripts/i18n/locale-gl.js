'use strict';

angular.module('SomEnergiaWebForms')
    .config(function($translateProvider) {
        $translateProvider
            .translations('gl', {
                SELECCIONA: 'Selecciona',
                PARTICULAR: 'Persoa física',
                EMPRESA: 'Persoa xurídica',
                OBLIGATORI: 'Obrigatorio',
                IDIOMA: 'Idioma',
                SELECCIONA_IDIOMA: 'Selecciona idioma',
                NOM: 'Nome',
                COGNOMS: 'Apelidos',
                RAO_SOCIAL: 'Razón social',
                PERSONA_REPRESENTANT: 'Persoa representante',
                REPETEIX_EMAIL: 'Repetir email',
                TELEFON: 'Teléfono',
                ADRECA: 'Enderezo',
                CODI_POSTAL: 'Código postal',
                PROVINCIA: 'Provincia',
                POBLACIO: 'Poboación',
                METODE_PAGAMENT: 'Forma de pagamento',
                REBUT_BANCARI: 'Recibo bancario',
                TARGETA_CREDIT: 'Tarxeta de crédito/débito',
                COST: 'custo para a cooperativa',
                INFO_APORTACIO: 'A achega para ser socio/a é de 100€<br/>Os 100€ páganse unha soa vez, non hai cota anual e devólvense se te dás de baixa.',
                FINALITZA_PROCES: 'Continuar o proceso',
                FORMULARI_NO_DISPONIBLE: 'Formulario non dispoñible, desculpen as molestias.',
                INVALID: 'Inválido',
                EMAIL_NO_IGUALS: 'Emails diferentes',
                DIGITS_LENGTH_5: 'Ten que ser un número de 5 díxitos',
                REGISTRE_EXISTENT: 'Este rexistro xa existe',
                REGISTRE_OK: 'Parabéns!',
                REGISTRE_OK_MSG: 'Completaches o rexistro correctamente',
                ACCEDINT_SERVEI_PAGAMENT: 'A acceder ao servizo de pago',
                FORMULARI_CONTRACTACIO: 'Formulario de contratación',
                NUMERO_SOCI: 'Número de socio/a',
                HELP_POPOVER_IDIOMA: 'Este será o idioma co que nos comunicaremos a partir de agora',
                CARREGAR_DADES_SOCI_VINCULAT: 'Cargar datos do/a socio/a vinculado',
                SOCI_VINCULAT: 'Socio vinculado',
                NO_TROBEM_CAP_SOCI_VINCULAT: 'Non se atopou ningún socio/a vinculado a estos datos!',
                NO_ETS_SOCI_FES_TE_AQUI: 'Non es socio/a? Faite socio/a <a href="//www.somenergia.coop/gl/faite-socio-a/" target="_blank">aquí</a>!',
                INICIAR_CONTRACTACIO: 'Iniciar contratación',
                DADES_PUNT_SUBMINISTRAMENT: 'Datos do punto de subministro',
                NUMERO_DE_CUPS: 'Número de CUPS',
                HELP_POPOVER_CNAE: 'No caso de vivendas é o 9820. Importante: se non é unha vivenda, deberedes introducir o CNAE da vosa actividade económica. Para máis información, consultade <a target="_blank" href="https://gl.support.somenergia.coop/article/392-cal-e-o-meu-numero-de-cnae">esta ligazón</a>.',
                ES_UN_HABITATGE: 'É unha vivenda?',
                QUINA_POTENCIA_TENS_CONTRACTADA: 'Que potencia tes contratada?',
                HELP_POPOVER_POWER: 'Anota a potencia ACTUAL do teu contrato',
                QUINA_TARIFA_TENS_CONTRACTADA: 'Que tarifa tes contratada?',
                SELECCIONAR: 'Seleccionar',
                INFORMACIO_OPCIONAL: 'Información opcional',
                ADJUNTAR_ULTIMA_FACTURA: 'Anexar a última factura eléctrica (PDF ou JPG) - 10Mb máximo',
                BAD_EXTENSION: 'Anexar só PDF ou JPG',
                OVERFLOW_FILE: 'O ficheiro anexo NON pode ocupar máis de 10Mb',
                SEGUENT_PAS: 'Seguinte paso',
                PAS_ANTERIOR: 'Paso anterior',
                AVIS_CANVI_TITULAR: '<span class="glyphicon glyphicon-warning-sign"></span>&nbsp;Atención: En certos casos a distribuidora pode solicitar a renovación do Boletín de Instalación se este está caducado (20 anos). Máis información <a target="_blank" href="http://gl.support.somenergia.coop/article/556-boletin-electrico">aquí</a>',
                SI: 'Si',
                NO: 'Non',
                DADES_PAGAMENT: 'Datos de pago',
                TITULAR_CONTRACTE_ELECTRICITAT: 'Titular do contrato de electricidade',
                SOCI_SOM_ENERGIA: 'Socio/a de Som Energia',
                ALTRE_TITULAR: 'Outra titular',
                NUM_COMPTE: 'Número de conta bancaria',
                IBAN_EXEMPLE: 'exemplo IBAN',
                BANC: 'Banco',
                OFICINA: 'Oficina',
                COMPTE: 'Número de conta',
                CONFIRMO_TITULAR_COMPTE_ACCEPTA_DOMICILIACIO: 'Confirmo que a persoa titular da conta bancaria autoriza a domiciliación das facturas de electricidade',
                SOM_UNA_COOPERATIVA_SENSE_ANIM_DE_LUCRE: 'Somos unha Cooperativa sen ánimo de lucro co obxectivo firme de mudar o modelo enerxético',
                VOLS_PARTICIPAR_AMB_LA_TEVA_ENERGIA: 'Queres participar coa túa enerxía a facelo posible?',
                DONATIU_VOLUNTARI: 'Donativo voluntario',
                ELS_SOCIS_I_SOCIES_QUE_HO_DESITGIN_PODEN_REALITZAR_UN_DONATIU_VOLUNTARI: 'As persoas socias que o desexen poden realizar unha doazón voluntaria de 0,01 €/kWh destinada a apoiar e facilitar a acción social e voluntaria dos máis de 50 Grupos Locais repartidos polo territorio. Para un consumo medio dunha familia (aproximadamente 300kWh/mes) isto representa un incremento de 3€ mensuais. Sempre o que desexes poderás activar ou desactivar esta doazón ao instante desde a Oficina Virtual.',
                CONFIRMAR_CONTRACTACIO: 'Confirmar contratación',
                SENDING: 'A enviar os datos...',
                ENVIANT_DADES: 'Se anexaches unha factura este proceso pode demorar un tempo e este tempo dependerá do peso do ficheiro e da túa conexión a internet. Ánimo e boa enerxía, que xa case o conseguiches! :)',
                REVISIO_CONFIRMACIO_DADES: 'Revisión e confirmación dos datos',
                EL_CONTRACTE_CANVIA_TITULAR: 'O contrato cambia de titular?',
                TARIFA: 'Tarifa',
                POTENCIA_CONTRACTADA: 'Potencia contratada',
                NOM_O_RAO_SOCIAL: 'Nome ou razón social',
                SI_TOT_CORRECTE: 'Si, todo correcto',

                HELP_POPOVER_SOCIA: 'Non lembras o teu nº de socio/a? Búscao no apartado "Datos Persoais" da <a target="_blank" href="https://oficinavirtual.somenergia.coop/">Oficina Virtual</a>.',
                HELP_POPOVER_NIF: 'Exemplo NIF: 12345678P (con letra final)',
                SOCIA_TROBADA: 'Socio/a encontrado/a',
                VALIDANT_ID: 'A validar o documento de identificación...',
                IDENTIFICANT_SOCIA: 'A identificar socio/a...',
                NIF_INVALID: 'Código de NIF incorrecto',
                SERVER_ERROR: 'Houbo un erro ao acceder ao servidor:',
                INICIAR_INVERSIO: 'Iniciar Achega',
                FORMULARI_D_INVERSIO: 'Formulario de <b>achega</b>',
                BENVINGUDA: 'Benvido/a, <b>{{name}}</b>!',
                QUANT_VOLS_INVERTIR: 'Canto queres <b>achegar</b>? <br/> <small>En achega voluntaria ao capital social</small>',
                RECORDA: 'Lembra: ',
                AMOUNT_HELPER_MIN: 'Achega mínima {{amount}}€',
                AMOUNT_HELPER_MAX: 'Achega máxima  {{amount}}€',
                AMOUNT_HELPER_STEP: 'Cantidade múltiple de {{amount}}€',
                NUMERO_DE_COMPTE_FORMAT_IBAN: 'Número de conta en formato IBAN. Exemplo: ES11 2222 3333 4444 5555 6666',
                CONFIRMO_CONDICIONS_INVERSIO: 'Confirmo que son titular da conta corrente, autorizo a domiciliación e acepto as <a target="_blank" href="https://www.somenergia.coop/gl/condicions-xerais-achega">condicións xerais da achega</a> e a <a target="_blank" href="https://www.somenergia.coop/gl/aviso-legal/#politica-de-privacidade">política de privacidade</a>',
                CONFIRMAR_INVERSIO: 'Confirmar achega',
                COMPROVANT: 'A comprobar...',
                CORRECTE: 'Correcto',
                INVEST_OK_REDIRECT_URL: 'https://www.somenergia.coop/gl/aportacion-realizada-correctamente/', // TODO: Translate url
                CONTRACT_OK_REDIRECT_URL: 'https://www.somenergia.coop/gl/contratacion-realizada/',
                GENERATION_OK_REDIRECT_URL: 'https://www.generationkwh.org/gl/achega-realizada/',
                MAX_INVESTMENT: 'Se ha superado la aportación máxima',
                CLOSED_INVESTMENT: 'Aportación cerrada',

                // Added or changed since 1.2.6
                CODI_IBAN_DEL_COMPTE: 'Código IBAN da conta',
                EXEMPLE_IBAN: 'Exemplo: ES11 2222 3333 4444 5555 6666',
                REQUERIT: 'Requirido.',
                DES_DE_QUIN_COMPTE: 'Desde que <b>conta?</b>', // Actualizar
                FORMULARI_D_INVERSIO_GKWH: 'Formulario de achega para o Generation kWh',
                QUANTES_ACCIONS_ENERGETIQUES_VOLS: 'Cantas <b>accións enerxéticas</b> queres?',
                COST_PER_ACCIO_ENERGETICA: '{{ preuperaccio }}€ por acción enerxética.',
                KWH_PER_ACCIO_ENERGETICA: '<a href="{{url}}" target="_blank">Previsión actual:</a> {{ kwhperaccio }} kWh por acción enerxética',
                CARREGANT_INFORMACIO_DELS_TEUS_CONTRACTES: 'Estase a cargar a información dos teus contratos...',
                CONTRACTE: 'Contrato',
                PUNT_DE_SUBMINISTRAMENT: 'Punto de subministración',
                US_ANUAL: 'Uso anual',
                TOTAL_US_ANUAL_ESTIMAT: 'Uso anual estimado total',
                PERCENTATGE_ASSOLIT: 'Porcentaxe de autoprodución sobre o teu uso total',
                GENERATION_RECOMANACIO_PERCENT: 'Podes autoproducir o que queiras. A nosa <a href="{{ url }}" target="_blank">recomendación</a> é non superar o {{ percent }}% segundo o caso.',
                GENERATION_RECOMANACIO_PERCENT_URL: 'http://bit.ly/maxGkWhES', // Points to 'http://es.support.somenergia.coop/article/591-existe-una-cantidad-minima-y-maxima-a-aportar'
                GENERATION_ACCEPTO_DOMICILIACIO: 'Confirmo que son titular da conta corrente e autorizo a domiciliación',
                GENERATION_ACCEPTO_CONDICIONS: 'Acepto as <a target="_blank" href="{{url}}">condicións xerais da achega</a>',
                GENERATION_CONDICIONS_URL: 'http://www.generationkwh.org/wp-content/uploads/Condiciones-Generales-Contrato-Autoproduccion-Colectiva-Generation-kWh_ES.pdf',
                NO_HA_ESTAT_TROBAT: 'Non se atopou',
                FENT_SERVIR_RESIDENCIA_MITJANA: 'Estase a tomar a modo de referencia o uso de electricidade duhna residencia media',
                ADDICIONAL_FERSE_SOCIA: '<b>Atención:</b> Ademais da cantidade que decidas investir, para ser socio/a tes que facer unha achega ao capital social de <b>100 €</b> que <b>se devolven</b> se te das de baixa.',
                ERROR_POST_INVERSIO: 'Houbo un erro ao realizar o investimento',
                ERROR_POST_NOVASOCIA: 'Houbo un erro ao rexistrar o/a socio/a',
                ERROR_REQUIRED_FIELD: 'Falta un parámetro requirido: {{field}}',
                ERROR_INVALID_FIELD: 'Valor inválido do parámetro: {{field}}, motivo: {{reason}}',
                ERROR_CANT_CONTRACT: 'Non é posíbel realizar a contratación.<p><p>Se desexas máis información, podes pórte en contacto con Som Energia mandando un correo a <a href="mailto:info@somenergia.coop" style="font-weight: bold;">info@somenergia.coop</a> ou chamando ao 872.202.550 de 9.00h a 14.00h de luns a venres, agás festivos.',
                CARREC_ADICIONAL_NOVA_SOCIA: 'Importe total: {{total}}€ ({{ aportaciosoci }}€ + {{ costaccions }}€)',
                JA_SOC_SOCIA: 'Xa son socio/a',
                EM_VULL_FER_SOCIA: 'Quero ser socio/a',
                GENERATION_REQUERIMENT_SER_SOCIA: 'Para participar neste investimento hai que ser de Som Energia. Cal é o teu caso?',
                APORTACIO_REQUERIMENT_SER_SOCIA: '<p>Para participar neste investimento hai que ser de Som Energia.</p><h3>Cal é o teu caso?</h3>',
                APORTACIO_CONDICIONS_URL: 'https://www.somenergia.coop/es/condiciones-generales-aportacion/',
                DADES_ALTA: 'Datos de alta na cooperativa',
                HELP_JURIDICA: 'Persoas xurídicas son as empresas, asociacións e outras entidades. As persoas físicas somos as persoas de carne e óso.',
                COM_CONTACTEM: 'Datos de contacto',
                DOMICILI: 'Domicilio',
                TELEFON_ALTERNATIU: 'Teléfono alternativo',
                APORTACIO_CORRESPONENT: 'Achega correspondente',
                AUTOPRODUCCIO_ANUAL: 'Autoproducción anual',
                PREVISIO_GENERATION_URL: 'http://es.support.somenergia.coop/article/589-que-representa-una-accion-energetica',

                // Added or changed since 1.3.2

                CARREGANT_OPCIONS: 'Estanse a cargar as opcións...',
                OPCIONAL: 'Opcional',
                HI_HA_LLUM_AL_PUNT_DE_SUBMINISTRAMENT: 'Hai luz actualmente?',
                AVIS_CANVI_COMERCIALITZADORA: 'Si hai luz. <br/>Con outra comercializadora e quero mudar a Som Energia.',
                AVIS_ALTA_DE_SERVEI: 'Non hai luz.<br/>Quero dala de alta directamente con Som Energia.',
                HELP_POPOVER_CUPS: 'Encontrarédelo na vosa factura actual. É un código do estilo ES0031031321313W0F.',
                HELP_POPOVER_CUPS_ALTA: 'É un código que se indica na factura, do estilo ES0031031321313W0F.<br/>Se non o tes, segue <a target="_blank" href="{{url}}">este enlace</a>',
                HELP_POPOVER_CUPS_ALTA_URL: 'http://es.support.somenergia.coop/article/245-no-tengo-luz-actualmente-puedo-solicitar-un-nuevo-punto-de-consumo',
                REFERENCIA_CADASTRAL: 'Referencia catastral do inmoble',
                HELP_POPOVER_REFERENCIA_CADASTRAL: 'É opcional, resúltanos de utilidade para resolver incongruencias nos datos.<br/>Podes buscala aquí:<br/><a target="_blank" href="https://www1.sedecatastro.gob.es/OVCFrames.aspx?TIPO=CONSULTA">España</a><br/><a target="_blank" href="http://www.bizkaia.net/home2/Temas/DetalleTema.asp?Tem_Codigo=5181&Idioma=CA">Bizkaia</a><br/><a target="_blank" href="http://catastroalava.tracasa.es/navegar/?lang=es">Araba</a><br/><a target="_blank" href="http://www4.gipuzkoa.net/ogasuna/catastro/presenta.asp">Guipuzkoa</a><br/><a target="_blank" href="https://catastro.navarra.es/">Navarra</a>',
                TARIFA_I_POTENCIA: 'Tarifa e potencia',
                TIPUS_INSTALLACIO: 'Que tipo de instalación tes?',
                MONOFASICA_NORMAL: 'Monofásica (Normal)',
                TRIFASICA: 'Trifásica',
                HELP_INSTALL_TYPE: 'Como identificar se unha instalación é <a target="_blank" href="{{url}}">trifásica ou monofásica</a>',
                HELP_INSTALL_TYPE_URL: 'http://es.support.somenergia.coop/article/483-como-puedo-saber-si-tengo-una-instalacion-monofasica-o-trifasica',
                POTENCIA_A_CONTRACTAR: 'Que potencia queres contratar?',
                MES_GRAN_DE_15KW: 'Superior a 15kW',
                HELP_POTENCIA: 'Como averiguar <a target="_blank" href="{{url}}">a potencia que necesito</a>',
                HELP_POTENCIA_URL: 'http://es.support.somenergia.coop/article/282-como-puedo-saber-la-potencia-que-necesito',
                DISCRIMINACIO_HORARIA: 'Queres discriminación horaria?',
                SENSE_DISCRIMINACIO_HORARIA: 'Sen discriminación horaria',
                AMB_DISCRIMINACIO_HORARIA: 'Con discriminación horaria',
                HELP_DISCRIMINACIO_HORARIA: 'Como podo saber <a target="_blank" href="{{url}}">se me convén discriminación horaria ou non</a>',
                HELP_DISCRIMINACIO_HORARIA_URL: 'http://es.support.somenergia.coop/article/283-como-puedo-saber-si-me-sale-a-cuenta-tener-discriminacion-horaria',
                ESCULL_LA_POTENCIA_DE_CADA_PERIODE: 'Escolle a potencia de cada periodo',
                HELP_POWER_30: 'Mais información sobre os <a target="_blank" href="{{url}}">periodos da 3.0</a>',
                HELP_POWER_30_URL: 'http://es.support.somenergia.coop/article/176-que-horarios-tienen-los-periodos-de-la-tarifa-3-0a',
                HELP_TARIFA_CANVI_COMERCIALITZADORA: 'Para evitar problemas de tramitación, poña <b>a mesma tarifa e potencia que aparece na factura actual</b>. Poderá solicitar o cambio de tarifa ou potencia unha vez teña o contrato activado con nos.',
                HELP_TARIFA_ALTA: 'Para completar os campos seguintes recomendámosche premer nos botóns de axuda.',
                DADES_TITULAR_NOU_CONTRACTE: 'Titular do contrato',
                QUI_ES_LA_PERSONA_TITULAR: 'Quen será a persoa titular?',
                ALTRA_PERSONA: 'Outra persona',
                QUI_ES_TITULAR_COMPTE_BANCARI: 'A nome de quen está a conta onde se domiciliarán os recibos?',
                ALGUN_DELS_TRES_PERIODES_MAJOR_QUE_15: 'Algún dos tres periodos debe ter mais de 15kW',
                CUPS_EXISTENT: 'Xa temos un contrato con ese código CUPS',
                CAP_ARXIU_SELECCIONAT: 'Non se seleccionou ningún arquivo',
                HELPER_ADJUNTAR_ULTIMA_FACTURA: 'Un escaneado da última factura coa actual distribuidora axudaranos a comprobar calquera inconsitencia nos datos que introduciches',
                ADJUNTAR_BUTLLETI: 'Anexar a documentación para a alta de subministro (PDF ou JPG) - 10Mb máximo',
                HELP_ADJUNTAR_BUTLLETI: 'Poderá anexar diversos ficheiros. Na maioría de casos pídese o boletín eléctrico mais pode atopar mais información <a target="_blank" href={{url}}>neste enlace</a>',
                HELP_ADJUNTAR_BUTLLETI_URL: 'http://es.support.somenergia.coop/article/245-no-tengo-luz-actualmente-puedo-solicitar-un-nuevo-punto-de-consumo',
                HELP_POPOVER_RATE: 'Podes atopalo na túa factura actual. Ás veces como "Peaxe de acceso".<br/>Podes encontrar mais información no <a target="_blank" href="{{url}}">centro de soporte</a>',
                HELP_POPOVER_RATE_URL: 'http://es.support.somenergia.coop/article/240-que-tarifas-ofrece-la-cooperativa-y-a-que-precio',
                TIPUS_DE_CONTRACTACIO: 'Tipo de contratación',
                ALTA: 'Alta dun punto sen subministro',
                CANVI_DE_COMERCIALITZADORA_I_TITULAR: 'Cambio de comercializadora modificando a persoa titular',
                CANVI_DE_COMERCIALITZADORA: 'Cambio de comercializadora mantendo a persoa titular',
                ERROR_POST_CONTRACTE: 'Houbo un erro ao enviar o contrato',

                INCOMPLETE_PREVIOUS_STEP: 'Non completaches o paso anterior',
                UNSELECTED_NEW_SUPPLY_POINT: 'Non especificaches se xa hai luz con outra comercializadora ou é un novo punto de subministración sen luz',
                NO_SUPPLY_POINT_ADDRESS: 'Non especificaches o enderezo do punto de subministración',
                NO_SUPPLY_POINT_STATE: 'Non especificaches a <b>provincia</b> do punto de subministración',
                NO_SUPPLY_POINT_CITY: 'Non especificaches o <b>municipio</b> do punto de subministración',
                INVALID_SUPPLY_POINT_CUPS: 'Non especificaches un <b>identificador CUPS</b> válido para o punto de subministración',
                NO_IS_HOUSING: 'Non especificaches se o enderezo corresponde a unha vivenda',
                INVALID_CNAE_NO_HOUSING: 'El punto de suministro no és una vivienda, el CNAE no puede ser 9820',
                INVALID_SUPPLY_POINT_CNAE: 'Non especificaches un <b>codi CNAE</b> válido para o punto de subministración',
                INVALID_SUPPLY_POINT_ATTACHMENT: 'O arquivo adxunto supera o límite de 10Mbytes',
                NO_MONOPHASE_CHOICE: 'Non especificaches se a instalación é de tipo monofásico ou trifásico',
                NO_FARE_CHOSEN: 'Non especificaches a tarifa',
                NO_POWER_CHOSEN: 'Non especificaches a potencia',
                NO_POWER_CHOSEN_P2: 'Non especificaches a potencia para o período P2',
                NO_POWER_CHOSEN_P3: 'Non especificaches a potencia para o período P3',
                INVALID_POWER_20: 'A potencia para tarifas 2.0 ten que ser inferior a 10kW',
                INVALID_POWER_21: 'A potencia para tarifas 2.1 tería que estar entre 10kW e 15kW',
                INVALID_POWER_30: 'Polo menos un período ten que ter unha potencia superior ou igual a 15kW',
                NO_HOURLY_DISCRIMINATION_CHOSEN: 'Non especificaches se queres discriminación horaria',
                OWNER_CHANGED_NOT_CHOSEN: 'Hai que indicar se se mantén a actual persoa titular do contrato',
                UNACCEPTED_GENERAL_CONDITIONS: 'Hai que aceptar as condicións xerais do contrato',
                INVALID_PAYER_IBAN: 'Non especificaches correctamente o <b>IBAN</b> da conta onde domiciliar',
                NO_VOLUNTARY_DONATION_CHOICE_TAKEN: 'Hai que indicar se queres ou non facer o donativo voluntario',
                UNCONFIRMED_ACCOUNT_OWNER: 'Hai que marcar a casiña para confirmar que a persoa indicada é a persoa titular da conta',
                UNACCEPTED_GENERAL_CONDITIONS_NON_OWNER_PAYER: 'Se a persoa pagadora é diferente da titular, tamén terá que aceptar as condicións xerais do contrato marcando a casiña',
                NO_PERSON_TYPE: 'Non especificaches se é unha persoa física ou xurídica',
                NO_NAME: 'Non especificaches o nome',
                NO_SURNAME: 'Non especificaches os apelidos',
                NO_NIF: 'Non especificaches o NIF',
                NO_PROXY_NAME: 'Non especificaches o nome da persoa representante',
                NO_PROXY_NIF: 'Non especificaches o NIF da persoa representante',
                NO_ADDRESS: 'Non especificaches o enderezo',
                NO_POSTALCODE: 'Non especificaches un código postal correcto',
                NO_STATE: 'Non especificaches a provincia',
                NO_CITY: 'Non especificaches o municipio',
                NO_EMAIL: 'Non especificaches un correo electrónico correcto',
                NO_REPEATED_EMAIL: 'Non repetiches o correo electrónico correctamente',
                NO_PHONE: 'Non especificaches un teléfono correcto',
                NO_LANGUAGE: 'Non especificaches o idioma',
                UNACCEPTED_PRIVACY_POLICY: 'Hai que aceptar a política de privacidade',
                NEW_MEMBER_FORM: 'Nova persoa socia',
                MEMBER_CONTRIBUTION_PAYMENT: 'Pagamento da aportación',
                DIRECT_DEBIT: 'Recibo domiciliado',
                NEWMEMBER_OK_REDIRECT_URL: 'https://www.somenergia.coop/es/pago-realizado/',
                NEWMEMBER_KO_REDIRECT_URL: 'https://www.somenergia.coop/es/pago-cancelado/',

                CONTRACT_MODIFICATION_FORM: 'Modificacións de potencia e/ou tarifa',
                MODIFY_POTTAR_INTRO_TITLE: 'Aviso importante',
                MODIFY_POTTAR_INTRO: '<p>A mudanza de potencia e/ou tarifa valídao, aplica e cobra (a través da nosa factura) a <a target="_blank" href={{url}}>distribuidora da túa zona</a>. O <b>custo regulado</b> é:</p><ul><li>10,94&nbsp;€ (IVE incluído) por solicitude. É posíbel mudar á vez a tarifa e a potencia nunha única solicitude.</li><li>No caso de <b>aumentar a potencia</b>, 44,86&nbsp;€ por kW de incremento.</li></ul><p>A distribuidora só está obrigada a aceptar <b>unha única solicitude de mudanza cada 12 meses</b>.</p>',
                HELP_CONTACT_INFO: 'Os datos de contacto utilizaraos a <a target="_blank" href="{{url}}">distribuidora da zona</a> para avisarte no caso de que o técnico encargado precise acceder ao contador',
                MODIFY_POTTAR_SELECT_TITLE: 'Escolle tarifa e potencia',
                MODIFY_POTTAR_CONTACT_TITLE: 'Datos de contacto, para acceder ao contador',
                HELP_CONTACT_INFO_URL: 'http://gl.support.somenergia.coop/article/658-las-distribuidoras-de-electricidad',
                MODIFY_POTTAR_SUCCESS_TITTLE: 'Parabens. En breve recibirás un correo electrónico cos datos da túa solicitude.',
                MODIFY_POTTAR_SUCCESS_MESSAGE: 'Enviaremos a túa solicitude á distribuidora da túa zona que se encargará de validala e facela efectiva. De ser preciso, fainos chegar a documentación relacionada con este trámite, achegándoa respondendo ao correo de confirmación que recibirás en poucos minutos',
                ERROR_POST_MODIFY: 'Detectóuse un erro',
                MODIFY_POTTAR_ONGOING_PROCESS: 'O contrato indicado ten outro proceso pendente de resolución',
                MODIFY_POTTAR_ONGOING_PROCESS_DETAILS: 'Non se poden comezar novos procesos se existen casos pendentes. Volve tentalo unha vez que recibas por correo a resolución do proceso pendente.',
                MODIFY_POTTAR_NOT_ALLOWED: 'Non estás autorizado/a para facer esta operación.',
                MODIFY_POTTAR_NOT_ALLOWED_DETAILS: '¿Ves traballar connosco? ;-)',
                MODIFY_POTTAR_INACTIVE_CONTRACT: 'O contrato a modificar non está dado de alta.',
                MODIFY_POTTAR_INACTIVE_CONTRACT_DETAILS: 'Só se poden modificar contratos que estan dados de alta.',
                MODIFY_POTTAR_BAD_TOKEN: 'A sesión rematou.',
                MODIFY_POTTAR_BAD_TOKEN_DETAILS:'Recomendámosche tornar a acceder dende a lista de contratos e tentalo outra vez.',
                MODIFY_POTTAR_UNEXPECTED: 'Produciuse un erro inesperado.',
                MODIFY_POTTAR_UNEXPECTED_DETAILS: 'Ponte en contacto con modifica@somenergia.coop para que che podamos botar unha man. Para identificarte precisaremos do teu NIF e o número do contrato que queres modificar.',
                API_SERVER_ERROR: 'Erro conectando ao servidor.',
                API_SERVER_ERROR_DETAILS: 'O teu navegador ten problemas para conectarse á web de Som Energia. Comproba que a conexión a internet funcione correctamente. Se non fose ese o problema, contacta con Som Energia para verificar se se puido procesar o trámite correctamente.',
                API_SERVER_OFFLINE: 'Os nosos servidores non responden.',
                API_SERVER_OFFLINE_DETAILS: 'É posíbel que se estean facendo tarefas de mantemento. Téntao máis tarde. Perdoa as molestias.',
                MODIFY_POTTAR_INVALID_FIELD: 'Os datos non son correctos.',
                MODIFY_POTTAR_REQUIRED_FIELD: 'Faltan datos.',
                POTENCIA: 'Potencia',
                MODIFY_POTTAR: 'Petición de cambio de Tarifa e/ou Potencia',
                CONTACT_PHONE: 'Teléfono de contacto para acceder ao contador',
                ENVIAR: 'Enviar',
                ENVIANT: 'Enviando',
                REVIEW_DATA_AND_CONFIRM: 'Revisa os datos. Para confirmalos, preme o botón do final.',
                LA_TEVA_TARIFA_ES: 'A túa tarifa será',
                ACCEPTO_CONDICIONS_GENERALS: 'Lin e acepto as <strong><a target="_blank" href="{{url}}">condicións xerais do contrato</a></strong>',
                ACCEPTO_CONDICIONS_GENERALS_URL: '//www.somenergia.coop/es/condiciones-del-contrato-de-som-energia/',
                ACCEPTO_POLITICA_PRIVACITAT: 'Lin e acepto a <strong><a target="_blank" href="//www.somenergia.coop/gl/politica-de-privacidade-cookies-y-aviso-legal/">política de privacidade</a></strong> de Som Energia',

                INDICAR_COMPTE_REBUTS: 'Indica o número de conta onde se domiciliarán os recibos',

                // UNTRANSLATED
                POTENCIA_CUSTOM: 'Si quieres contratar una potencia distinta a estas, nos la puedes indicar respondiendo el correo electrónico que recibirás una vez rellenado el formulario',
                OWNER_IS_MEMBER_NOT_CHOSEN: 'No has indicado qué persona será la titular del contrato.',
                VOLS_MANTENIR_EL_TITULAR: 'Queres mudala persoa titular do contrato?',
                NO_CANVI_DE_TITULAR: 'No, no quiero.',
                SI_CANVI_DE_TITULAR: 'Sí, sí quiero.'
            })
        ;
    });

