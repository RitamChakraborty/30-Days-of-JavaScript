const calculateAgeBtn = document.querySelector('#calculate-age')
const dobInput = document.querySelector('#dob');
const ageElm = document.querySelector('#age');

calculateAgeBtn.addEventListener('click', handleCalcualteAgeBtnClick);
dobInput.addEventListener('change', handleDobInputChange);

function handleCalcualteAgeBtnClick() {
    const dob = dobInput.value;
    if (!dob) return;
    const ageTxt = calculateAge(dob);
    ageElm.textContent = ageTxt;
}

function handleDobInputChange() {
    ageElm.textContent = '';
}

function calculateAge(dateString) {
    const now = new Date();
    const yearNow = now.getYear();
    const monthNow = now.getMonth();
    const dateNow = now.getDate();
    const dob = new Date(dateString);
    const yearDob = dob.getYear();
    const monthDob = dob.getMonth();
    const dateDob = dob.getDate();
    let age = {};
    let ageString = "";
    let yearString = "";
    let monthString = "";
    let dayString = "";
    let yearAge = yearNow - yearDob;

    if (monthNow >= monthDob)
        var monthAge = monthNow - monthDob;
    else {
        yearAge--;
        var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob) {
        var dateAge = dateNow - dateDob;
    } else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDob;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };

    if (age.years > 1) yearString = " years";
    else yearString = " year";
    if (age.months > 1) monthString = " months";
    else monthString = " month";
    if (age.days > 1) dayString = " days";
    else dayString = " day";


    if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = "Only " + age.days + dayString + " old!";
    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        ageString = age.years + yearString + " old. Happy Birthday!!";
    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = age.years + yearString + " and " + age.months + monthString + " old.";
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + monthString + " and " + age.days + dayString + " old.";
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = age.years + yearString + " and " + age.days + dayString + " old.";
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = age.months + monthString + " old.";
    else ageString = "Oops! Could not calculate age!";

    return ageString;
}
