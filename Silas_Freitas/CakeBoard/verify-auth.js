const userId = localStorage.getItem('userId');
const users = JSON.parse(localStorage.getItem('users')) || [];

const user = users.find(user => user.id === userId);

if (!user && !window.location.pathname.includes('/auth/sign-in') && !window.location.pathname.includes('/auth/sign-up') && window.location.pathname !== '/') {
    window.location.href = '/auth/sign-in/';
}

if (user && (window.location.pathname.includes('/auth/sign-in') || window.location.pathname.includes('/auth/sign-up'))) {
    window.location.href = '/dashboard';
};

const root = document.querySelector(':root');

if (user) {
    root.style.setProperty('--primary-color', user.primaryColor);
    
    if (user.theme === 'dark') {
        root.style.setProperty('--bg-color', '#333');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--bg-color-secondary', '#444');
        root.style.setProperty('--thead-bg-color', '#555');
        root.style.setProperty('--item-list-bg-color', '#444');
        root.style.setProperty('--border-color', '#555');
        root.style.setProperty('--header-bg-color', '#222');
    } else {
        root.style.setProperty('--bg-color', '#fff');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--bg-color-secondary', '#f5f5f5');
        root.style.setProperty('--thead-bg-color', '#f0f0f0');
        root.style.setProperty('--item-list-bg-color', '#f5f5f5');
        root.style.setProperty('--border-color', '#e0e0e0');
        root.style.setProperty('--header-bg-color', '#fff');
    }

}


function changeTheme() {
    const theme = user.theme === 'dark' ? 'light' : 'dark';
    user.theme = theme;
    localStorage.setItem('users', JSON.stringify(users));
    if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#333');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--bg-color-secondary', '#444');
        root.style.setProperty('--thead-bg-color', '#555');
        root.style.setProperty('--item-list-bg-color', '#444');
        root.style.setProperty('--border-color', '#555');
        root.style.setProperty('--header-bg-color', '#222');
    } else {
        root.style.setProperty('--bg-color', '#fff');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--bg-color-secondary', '#f5f5f5');
        root.style.setProperty('--thead-bg-color', '#f0f0f0');
        root.style.setProperty('--item-list-bg-color', '#f5f5f5');
        root.style.setProperty('--border-color', '#e0e0e0');
        root.style.setProperty('--header-bg-color', '#fff');
    }
}