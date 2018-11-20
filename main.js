let forms = document.getElementsByTagName('form');


class Rules {
    constructor() {
        this.email = /^\w{1,}@\w{1,}\w{2,}$/,
            this.test = "test"
    }

    required(el) {
        if (el.value != '') {
            return true;
        }
        return false;
    }

    mail(el) {
        let reg = /^\w{1,}@\w{1,}\.\w{1,}$/;
        return reg.test(el.value);


    }
}

let rul = new Rules();

for (let form of forms) {

    form.addEventListener('click', validator);
}

function showErrors(arr) {
    console.log(arr);
}

function validator(e) {
    e.preventDefault();
    let inputs = this.elements;
    let errors = [];
    for (let input of inputs) {
        let rulesList = input.dataset.rule;
        rulesList = rulesList.split(' ');
        for (let rule of rulesList) {
            if (input.tagName != 'BUTTON') {
                if (rule in rul) {
                    if (!rul[rule](input)) {
                        errors.push({
                            name: input.name,
                            error: rule
                        })
                    }
                }
            }
        }
    }
    if (errors.length > 0) {
        e.preventDefault();
        showErrors(errors);
    }
}







































