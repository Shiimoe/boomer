Array.prototype.demented_join = function (sep=', ', sep_alt=' ', prob=0.2) {
    let s = "";
    let sep_temp = "";
    for (const e of this) {
        if (!e) continue;

        const l_space = Math.random() < prob ? sep_alt : '';
        const r_space = Math.random() < prob ? sep_alt : '';
        const elem = `${l_space}${e}${r_space}`;
        s += `${sep_temp}${elem}`;
        sep_temp = sep;
    }
    return s;
}

String.prototype.demented_upcase = function (prob=0.2) {
    if (Math.random() < prob)
        return this.toUpperCase() + ((Math.random() < 0.1) ? '!' : '');
    else return this;
}

String.prototype.demented_spelling = function () {
    const given = String(this);
    switch (given) {
        case 'than':
            return 'then';
        case 'then':
            return 'than';
        case 'your':
            return 'yore';
        case 'their':
            return 'there';
        case 'theyre':
            return 'their';
        case 'they\'re':
            return 'their';
        case 'there':
            return 'their';
        case 'you\'re':
            return 'your';
        case 'youre':
            return 'your';
        default:
            break;
    }
    return given;
}


function boomerfy(val, original) {
        if (original.trim().length < 1)
            return boomerfy("Ok, boomer.");


        let string = original;
        if (val > 0) {
            string = string
                .toLowerCase()
                .split(' ')
                .map(e => e.demented_spelling()).join(' ')
                .replace(/(.*)n't(.*)/g, "$1'nt$2")
                .replace(/(.*)'re(.*)/, '$1r$2')
                .replace(/([^\.])\./g, '$1 .');
        } else {
            string = string;
        }

        var max = 5
        if (val < max) {
            string = string.split(/[ ]/)
                .map(s => s.demented_upcase(val*0.1))
                .demented_join(' ', ',', val*0.01);
        } else {
            string = string.split(/[ ]/)
            .map(s => s.demented_upcase(max*0.1))
            .demented_join(' ', ',', max*0.01);
        }

        string = string.split(/[ ]/).demented_join(' ', ' ... ', val*0.01);
        string = string.split(/[ ]/).demented_join(' ', ' ', prob=val*0.02);

        string = string
            .replace(/,/g, ' ,');
        return string;
}