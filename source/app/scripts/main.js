const element = document.querySelector('#date')

const currentYear = (new Date()).getFullYear()

element.append(currentYear);
