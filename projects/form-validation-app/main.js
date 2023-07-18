const formDefs = [
    {
        label: 'Full Name',
        type: 'input',
        placeholder: 'Enter your name',
        errorPattern: /\w+\s\w+/,
        errorMsg: (value) => 'Wirte full name'
    },
    {
        label: 'Phone No.',
        type: 'input',
        placeholder: '987 654 3210',
        errorPattern: /^\d{10}$/,
        errorMsg: (value) => 'Should be 10 digits'
    },
    {
        label: 'Email Id',
        type: 'input',
        placeholder: 'Enter Email',
        errorPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        errorMsg: (value) => 'Email Invalid'
    },
    {
        label: 'Your Message',
        type: 'textarea',
        placeholder: 'Enter you message',
        errorPattern: /\w{30}/,
        errorMsg: (value) => {
            const maxSize = 30;
            return `${maxSize - value.length} more characters required`;
        }
    }
];

const form = document.querySelector('#form');

for (const formDef of formDefs) {
    const label = document.createElement('label');
    label.innerHTML = `<p>${formDef.label}</p>`;
    const inputElm = document.createElement('div');
    inputElm.classList.add('input');
    const successElm = document.createElement('span');
    successElm.classList.add('success');
    successElm.hidden = true;
    successElm.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    const errorElm = document.createElement('span');
    errorElm.classList.add('error');
    errorElm.hidden = true;
    const inputField = document.createElement(formDef.type);
    inputField.placeholder = formDef.placeholder;
    inputField.addEventListener('input', (e) => {
        const value = e.target.value;
        
        if (!value || value.length === 0) {
            successElm.hidden = true;
            errorElm.hidden = true;
            return;
        }

        let isValid = value.match(formDef.errorPattern);
        
        if (isValid) {
            successElm.hidden = false;
            errorElm.hidden = true;
        } else {
            successElm.hidden = true;
            errorElm.hidden = false;
            errorElm.textContent = formDef.errorMsg(value);
        }
    });
    inputElm.append(inputField, successElm, errorElm);
    form.append(label, inputElm);
}