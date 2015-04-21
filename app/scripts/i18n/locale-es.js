'use strict';

angular.module('newSomEnergiaWebformsApp')
    .config(function($translateProvider) {
        $translateProvider
            .translations('es', {
                SELECCIONA: 'Selecciona',
                PARTICULAR: 'Persona física',
                EMPRESA: 'Persona jurídica',
                OBLIGATORI: 'Obligatorio',
                IDIOMA: 'Idioma',
                SELECCIONA_IDIOMA: 'Selecciona idioma',
                NOM: 'Nombre',
                COGNOMS: 'Apellidos',
                RAO_SOCIAL: 'Razón social',
                PERSONA_REPRESENTANT: 'Persona representante',
                REPETEIX_EMAIL: 'Repetir email',
                TELEFON: 'Teléfono',
                ADRECA: 'Dirección',
                CODI_POSTAL: 'Código postal',
                PROVINCIA: 'Provincia',
                POBLACIO: 'Municipio',
                ACCEPTO_POLITICA_PRIVACITAT: 'Acepto la <strong><a target="_blank" href="//www.somenergia.coop/es/politica-de-privacidad-cookies-y-aviso-legal/">política de privacidad</a></strong> de Som Energia',
                ACCEPTO_CONDICIONS_I_POLITICA_PRIVACITAT: 'Acepto las <strong><a target="_blank" href="//www.somenergia.coop/es/condiciones-del-contracto-de-som-energia/">condiciones generales del contrato</a></strong> i la <strong><a target="_blank" href="//www.somenergia.coop/es/politica-de-privacidad-cookies-y-aviso-legal/">política de privacidad</a></strong>',
                METODE_PAGAMENT: 'Forma de pago',
                REBUT_BANCARI: 'Recibo bancario',
                TARGETA_CREDIT: 'Tarjeta de crédito',
                COST: 'coste para la cooperativa',
                INFO_APORTACIO: 'La aportación para ser socio/a es de 100€<br/>Los 100€ se pagan una sola vez, no hay cuota anual y son retornables si te das de baja.',
                FINALITZA_PROCES: 'Continuar el proceso',
                FORMULARI_NO_DISPONIBLE: 'Formulario no disponible, disculpen las molestias.',
                INVALID: 'Inválido',
                EMAIL_NO_IGUALS: 'Emails diferentes',
                DIGITS_LENGTH_5: 'Tiene que ser un número de 5 dígitos',
                REGISTRE_EXISTENT: 'Este registro ya existe',
                REGISTRE_OK: 'Felicidades!',
                REGISTRE_OK_MSG: 'Has completado el registro correctamente',
                ACCEDINT_SERVEI_PAGAMENT: 'Acediendo al servicio de pago',
                FORMULARI_CONTRACTACIO: 'Formulario de contratación',
                NUMERO_SOCI: 'Número de socio/a',
                HELP_POPOVER_IDIOMA: 'Éste será el idioma con el que nos comunicaremos a partir de ahora',
                CARREGAR_DADES_SOCI_VINCULAT: 'Cargar datos del socio/a viculado',
                SOCI_VINCULAT: 'Socio vinculado',
                NO_TROBEM_CAP_SOCI_VINCULAT: 'No se ha encontrado ningún socio/a vinculado a estos datos!',
                NO_ETS_SOCI_FES_TE_AQUI: '¿No eres socio? Hazte socio/a <a href="//www.somenergia.coop/es/hazte-socio-a/" target="_blank">aquí</a>!',
                INICIAR_CONTRACTACIO: 'Iniciar contratación',
                DADES_PUNT_SUBMINISTRAMENT: 'Datos del punto de suministro',
                DADES_PUNT_SUBMINISTRAMENT_HELPER: 'Poner los datos tal cual estan en vuestra factura actual. Si queréis hacer cambios de tarifa o poténcia, hace falta que os esperéis a tener primero el contrato con Som Energia para luego solicitarlos. Si queréis hacer un cambio en el titular del contrato, lo podréis hacer en el paso núm.2 de este formulario.',
                NUMERO_DE_CUPS: 'Número de CUPS',
                HELP_POPOVER_CUPS: 'Lo encontrarás en tu factura actual. Es un codigo de 20 o 22 cifras y letras. Ejemplo: ES0031031321313W0F',
                HELP_POPOVER_CNAE: 'En caso de ser una vivienda poned: 9820. En caso de ser una empresa poned el de vuestra actividad económica.',
                QUINA_POTENCIA_TENS_CONTRACTADA: '¿Qué potencia tienes contratada?',
                HELP_POPOVER_POWER: 'Anota la poténcia ACTUAL de tu contrato',
                QUINA_TARIFA_TENS_CONTRACTADA: '¿Qué tarifa tienes contratada?',
                SELECCIONAR: 'Seleccionar',
                HELP_POPOVER_RATE: 'Lo encontraréis en vuestra factura actual. Para más información consultar el apartado de Ayuda de la web.',
                INFORMACIO_OPCIONAL: 'Información opcional',
                HELP_POPOVER_OPTIONAL_INFO: 'Los datos de consumo anual podrían ser útiles para emitir nuestras primeras facturas.',
                CONSUM_ANUAL_ESTIMAT: 'Consumo anual estimado',
                REFERENCIA_CATASTRAL: 'Referencia catastral del inmueble',
                HELP_POPOVER_REFERENCIA_CATASTRAL: 'Mas información aquí:<br/><a target="_blank" href="https://www1.sedecatastro.gob.es/OVCFrames.aspx?TIPO=CONSULTA">España</a><br/><a target="_blank" href="http://www.bizkaia.net/home2/Temas/DetalleTema.asp?Tem_Codigo=5181&Idioma=CA">Bizkaia</a><br/><a target="_blank" href="http://catastroalava.tracasa.es/navegar/?lang=es">Araba</a><br/><a target="_blank" href="http://www4.gipuzkoa.net/ogasuna/catastro/presenta.asp">Guipuzkoa</a><br/><a target="_blank" href="https://catastro.navarra.es/">Navarra</a>',
                ADJUNTAR_ULTIMA_FACTURA: 'Adjuntar la última factura eléctrica (PDF o JPG) - 10Mb máximo',
                BAD_EXTENSION: 'Adjuntar sólo archivos PDF o JPG',
                OVERFLOW_FILE: 'El archivo adjunto NO puede ocupar más de 10Mb',
                SEGUENT_PAS: 'Siguiente paso',
                PAS_ANTERIOR: 'Paso anterior',
                DADES_TITULAR_NOU_CONTRACTE: 'Datos del titular del contrato',
                DADES_TITULAR_NOU_CONTRACTE_HELPER: 'Poner los datos de quien va a ser el titular del nuevo contrato con Som Energia. Puede ser el mismo que aparece en vuestro contrato anterior o podéis aprovechar ahora para cambiarlo.',
                VOLS_FER_CANVI_TITULAR: '¿Quieres hacer un cambio de titular?',
                AVIS_CANVI_TITULAR: '<span class="glyphicon glyphicon-warning-sign"></span>&nbsp;Atención: En ciertos casos, la distribuidora puede solicitar la renovación del Boletín de la Instalación, si este está caducado (20 años). Más información <a target="_blank" href="http://es.support.somenergia.coop/article/505-que-es-el-boletin-electrico">aquí</a>',
                SI: 'Si',
                NO: 'No',
                HELP_POPOVER_OWNER: '¿Comparado con tu contracto actual, en el nuevo contrato quieres poner a otra persona de titular?',
                EL_TITULAR_ES: 'El titular es',
                EL_TITULAR_ES_SOCI_VINCULAT_AL_CONTRACTE: '¿El titular es socio/a vinculado al contrato?',
                DADES_PAGAMENT: 'Datos de pago',
                QUI_ES_TITULAR_COMPTE_BANCARI: 'Quién es el titular de la cuenta bancaria?',
                TITULAR_CONTRACTE_ELECTRICITAT: 'Titular del contrato de electricidad',
                SOCI_SOM_ENERGIA: 'Socio/a de Som Energia',
                ALTRE_TITULAR: 'Otro titular',
                NUM_COMPTE: 'Número de cuenta bancaria',
                IBAN_EXEMPLE: 'ejemplo IBAN',
                BANC: 'Banco',
                OFICINA: 'Oficina',
                COMPTE: 'Número cuenta',
                CONFIRMO_TITULAR_COMPTE_ACCEPTA_DOMICILIACIO: 'Confirmo que el titular de la cuenta bancaria autoriza la domicilación de las facturas de electricidad',
                SOM_UNA_COOPERATIVA_SENSE_ANIM_DE_LUCRE: 'Somos una Cooperativa sin ánimo de lucro con el objetivo firme de cambiar el modelo energético',
                VOLS_PARTICIPAR_AMB_LA_TEVA_ENERGIA: '¿Quieres participar con tu energia a hacerlo posible?',
                DONATIU_VOLUNTARI: 'Donativo voluntario 0,01€/kWh',
                ELS_SOCIS_I_SOCIES_QUE_HO_DESITGIN_PODEN_REALITZAR_UN_DONATIU_VOLUNTARI: 'Los socios que lo deseen pueden realizar un donativo voluntario de 0,01€/kWh destinado a apoyar y facilitar la acción social y voluntaria de los más de 50 Grupos Locales repartidos por el territorio. Para un consumo medio de una familia (aproximadamente 300kWh/mes) esto representa un incremento de 3€ mensuales. Siempre que lo desees podrás activar o desactivar este donativo al instante desde la Oficinal Virtual.',
                CONFIRMAR_CONTRACTACIO: 'Confirmar contratación',
                LOADING: 'Enviando datos...',
                ENVIANT_DADES: 'Si has adjuntado una factura este proceso puede tardar un tiempo y este tiempo dependerá del peso del archivo y de tu conexión a internet. Ánimos y buenas energías, que ya casi lo has conseguido! :)',
                REVISIO_CONFIRMACIO_DADES: 'Revisión y confirmación de los datos',
                EL_CONTRACTE_CANVIA_TITULAR: '¿El contrato cambia de titular?',
                TARIFA: 'Tarifa',
                POTENCIA_CONTRACTADA: 'Potencia contratada',
                NOM_O_RAO_SOCIAL: 'Nombre o razón social',
                SI_LES_DADES_SON_CORRECTES: 'Si los datos son correctos pulse Sí para finalizar el proceso de contratación',
                SI_TOT_CORRECTE: 'Sí, todo correcto',


                HELP_POPOVER_SOCIA: '¿No recuerdas tu nº de socio/a? Averígualo en el apartado "Datos Personales" de la <a href="https://oficinavirtual.somenergia.coop/">Oficina Virtual</a>.',
                HELP_POPOVER_DNI: 'Ejemplo DNI: 12345678P (con letra final)',
                SOCIA_TROBADA: 'Soci/a encontrado/a',
                VALIDANT_ID: 'Validando documento de identificación...',
                IDENTIFICANT_SOCIA: 'Identificando socio/a...',
                DNI_INVALID: 'Código de DNI/NIE/CIF inválido.',
                SERVER_ERRROR: 'Error accediendo al servidor:',
                INICIAR_INVERSIO: 'Iniciar Inversión',
                FORMULARI_D_INVERSIO: 'Formulario de <b>inversión</b>',
                BENVINGUDA: 'Bienvenido/a, ',
                QUANT_VOLS_INVERTIR: '¿Cuánto quieres <b>invertir</b>? <br/> <small>En aportación voluntaria</small>',
                RECORDA: 'Recuerda: ',
                AMOUNT_HELPER_MIN: 'Mínima aportación 100€',
                AMOUNT_HELPER_MAX: 'Máxima aportación 25.000€',
                AMOUNT_HELPER_STEP: 'Cantidad múltiple de 100€',
                DES_DE_QUIN_COMPTE: '¿Desde qué <b>cuenta?</b>',
                NUMERO_DE_COMPTE_FORMAT_IBAN: 'Número de cuenta en formato IBAN. Ejemplo: ES11 2222 3333 4444 5555 6666',
                CONFIRMO_CONDICIONS_INVERSIO: 'Confirmo que soy el titular de la cuenta corriente, autorizo la domiciliación y acepto las <a href="http://somenergia.coop/es/condiciones-generales-inversion">condiciones generales de la inversión</a> y la <a href="https://www.somenergia.coop/es/politica-de-privacidad-cookies-y-aviso-legal/">política de privacidad</a>',
                CONFIRMAR_INVERSIO: 'Confirmar inversión',
                COMPROVANT: 'Comprovando...',
                CORRECTE: 'Correcto.',
                INVEST_OK_REDIRECT_URL: 'https://www.somenergia.coop/es/inversion-realizada',
                CONTRACT_OK_REDIRECT_URL: 'https://www.somenergia.coop/es/contratacion-realizada/',
            })
        ;
    });

