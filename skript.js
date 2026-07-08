// Функция показа правил
function showDetail(el, title, text, imgName) {
    const panel = document.getElementById('detailPanel');
    const img = document.getElementById('detailImg');
    const link = document.getElementById('dLink');
    
    document.getElementById('dTitle').innerText = title;
    document.getElementById('dText').innerText = text;
    img.src = imgName + '.jpg';
    img.style.display = 'block';
    link.style.display = 'none';
    
    // Сброс активных кнопок
    document.querySelectorAll('.rule-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-box').forEach(box => box.classList.remove('active'));
    
    el.classList.add('active');
    panel.classList.add('active');
}

// Функция показа администратора
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
    
    // Сброс активных кнопок правил
    document.querySelectorAll('.rule-btn').forEach(btn => btn.classList.remove('active'));
    
    panel.classList.add('active');
}

// Закрытие панели при клике на фон
document.getElementById('detailPanel').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        // Убираем подсветку со всех элементов
        document.querySelectorAll('.rule-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.admin-box').forEach(box => box.classList.remove('active'));
    }
});