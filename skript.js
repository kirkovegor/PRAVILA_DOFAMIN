function showDetail(el, title, text, imgName) {
    const panel = document.getElementById('detailPanel');
    const img = document.getElementById('detailImg');
    
    document.getElementById('dTitle').innerText = title;
    document.getElementById('dText').innerText = text;
    
    img.src = imgName + '.jpg';
    img.style.display = 'block'; 
    
    document.querySelectorAll('.rule-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');
    
    panel.classList.add('active');
}