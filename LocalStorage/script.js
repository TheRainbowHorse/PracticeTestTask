let isDark = false;

isDark = localStorage.getItem('isDark');
document.getElementById('switch-theme').checked = isDark;
if (isDark)
        document.body.setAttribute('dark', '');
    else
        document.body.removeAttribute('dark');

function switchTheme(isChecked) {
    if (isChecked)
        document.body.setAttribute('dark', '');
    else
        document.body.removeAttribute('dark');
    isDark = isChecked;
    if (isDark)
        localStorage.setItem('isDark', isDark);
    else
        localStorage.setItem('isDark', '');
}