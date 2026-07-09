window.onload = function() {
    // Проверяем, есть ли разрешение на вход
    if (localStorage.getItem('ageAccess') === 'granted') {
        document.getElementById('ageGate').style.display = 'none';
    } 
    // Проверяем, не истек ли срок блокировки (24 часа)
    else {
        const banTime = localStorage.getItem('banTime');
        if (banTime) {
            const now = new Date().getTime();
            // Если прошло меньше 24 часов (259200000 мс), держим экран закрытым
            if (now - banTime < 259200000) {
                document.getElementById('gateStep1').style.display = 'none';
                document.getElementById('gateStep2').style.display = 'none';
                document.getElementById('gateStep3').style.display = 'block';
            } else {
                // Если 24 часа прошли, удаляем метку бана
                localStorage.removeItem('banTime');
            }
        }
    }
};

function confirmAge() {
    const age = document.getElementById('ageInput').value;
    if (!age) { alert("Введите возраст"); return; }
    
    document.getElementById('confirmText').innerText = "Вам точно " + age + " лет?";
    document.getElementById('gateStep1').style.display = 'none';
    document.getElementById('gateStep2').style.display = 'block';
}

function grantAccess() {
    const age = document.getElementById('ageInput').value;
    
    if (parseInt(age) < 16) {
        // Записываем время бана в миллисекундах
        localStorage.setItem('banTime', new Date().getTime());
        
        document.getElementById('gateStep2').style.display = 'none';
        document.getElementById('gateStep3').style.display = 'block';
        return;
    }

    localStorage.setItem('ageAccess', 'granted');
    document.getElementById('ageGate').style.display = 'none';
}

function resetAge() {
    document.getElementById('gateStep1').style.display = 'block';
    document.getElementById('gateStep2').style.display = 'none';
}

// ... (функции showDetail, showAdmin и обработчик клика оставляем без изменений)
function showDetail(el, title, text, imgName) {
    const panel = document.getElementById('detailPanel');
    const img = document.getElementById('detailImg');
    const link = document.getElementById('dLink');
    document.getElementById('dTitle').innerText = title;
    document.getElementById('dText').innerText = text;
    img.src = imgName + '.jpg';
    img.style.display = 'block';
    link.style.display = 'none';
    document.querySelectorAll('.rule-btn, .admin-box').forEach(el => el.classList.remove('active'));
    el.classList.add('active');
    panel.classList.add('active');
}

function showAdmin(name, tag, imgPath, linkUrl) {
    const panel = document.getElementById('detailPanel');
    const img = document.getElementById('detailImg');
    const link = document.getElementById('dLink');
    document.getElementById('dTitle').innerText = name;
    document.getElementById('dText').innerText = "Должность: " + tag;
    img.src = imgPath;
    img.style.display = 'block';
    link.href = linkUrl;
    link.style.display = 'block';
    document.querySelectorAll('.rule-btn, .admin-box').forEach(el => el.classList.remove('active'));
    panel.classList.add('active');
}

document.getElementById('detailPanel').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.querySelectorAll('.rule-btn, .admin-box').forEach(el => el.classList.remove('active'));
    }
});