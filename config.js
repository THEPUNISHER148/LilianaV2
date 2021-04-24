const ownerNumber = ["5217443211396@s.whatsapp.net"] 
// Tú número

const OriginalOwner = '527443211396' 
// Tú número x2

const apikeyporn = 'fc8fe174f018b95cdae9272493f1a12f'
// sua key do imgbb para ativar o antiporn

const cr = ' ℒᏆℒᏆ؀ᎦᎪ᪲ᎷᎪ᪲\n' 
// texto del menu

const prefix = '!' 
// prefixo

const blockedmsg = '*Tu número esta baneado con el bot*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*Este comando está bloqueado*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Bang!!*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Aunque sea admin no diga malas palabras :3*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = '*Pervertido...*'
// mensagem de ban no antiporn

const adminmsgporn = '*Vaya vaya un admin pervertido*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = '*Bang!!*'
// mensagem de ban no antilink

const adminmsglink = '*Te salvaste por ser admin :3*'
// mensagem de quando adm manda link

const adminmsgpalavra = '*Te salvaste por ser admin :3*'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = '*Bang!!*'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Wenos días guap@ uwu'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Un caffe ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Que tengas un buen dia uwu'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Gomenasai ocurrio un error intentalo nuevamente'
// mensagem de erro

// MENSAGENS DE AUTOREPLY

const botlindo = 'Aritato...'
const linkbotlindo = 'https://i.pinimg.com/originals/e5/53/ac/e553ac91451db654c4cef6fe3bff5259.jpg'
const botfeio = 'Calla virgen'
const cadebot = 'Me llamó onii-chan 👉👈?'
const botfdp = 'Calla cagada'
const botgostoso = 'Ojo uwu'
const botfofo = 'Ojo uwu'
const botbaianor = 'La tuya'
const botcorno = 'Come verga'
const botputa = 'Tu mamá UwU'
const botgay = 'Tu papá UwU'
const botviado = 'Calla pvto'
const numbotfeio = 'dama tu madre'
// KEYS

const apiTobz = 'key'
// pra pegar a key do Tobz va até o numero 
//wa.me/447418349954 se registre no bot
// e depois escreva #generateapikey que o 
//bot do tobz vai gerar sua key

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: 'Esperame unos momentos',
    success: 'Con exito',
    error: {
        stick: 'No se pudo convertir a sticker',
        Iv: 'Link inválido'
    },
    only: {
        group: 'Este comando solo puede ser usado en grupos!',
        ownerG: 'Este comando solo puede ser usado por el dueño del grupo!',
        ownerB: 'Este comando solo puede ser usado por el dueño del bot!',
        admin: 'Calla miembro no pudes usar este comando, solo es para admin facheros',
        Badmin: 'Solo pude ser usado cuando el bot es admin'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Mi creador\n' 
+ 'ORG:ᕈປຖᏆᎦℎℇᏒ;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=5217443211396:+52 1 744 321 1396\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyporn = apikeyporn
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.apiTobz = apiTobz
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
