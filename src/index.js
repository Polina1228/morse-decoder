const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let x = expr
        .split('**********')
        .map(el => el.match(/.{1,10}/g))

    for (let i = 0; i < x.length; i++) {
        x[i] = x[i]
            .map(
                (el => el.match(/.{1,2}/g))
            )
    };

    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            x[i][j] = x[i][j].map((function(item) {
                if (item == '00') { return '' } else
                if (item == '10') { return '.' } else
                if (item == '11') { return '-' }
            })).join('')

        }
    }

    for (let i = 0; i < x.length; i++) {
        x[i] = x[i]
            .map(
                b => MORSE_TABLE[b]
            ).join('')
    };

    return x.join(' ')
}

module.exports = {
    decode
}