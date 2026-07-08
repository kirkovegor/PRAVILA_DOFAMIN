@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap');

:root {
    --gold: #c8a96a;
    --bg-deep: #050505;
    --glass: rgba(15, 15, 15, 0.7);
    --border: 1px solid rgba(255, 255, 255, 0.08);
}

* { box-sizing: border-box; }
body { margin: 0; background: radial-gradient(circle at top, #181818 0%, #090909 35%, #050505 100%); color: #fff; font-family: 'Satoshi', sans-serif; padding: 60px 20px; display: flex; justify-content: center; min-height: 100vh; }
.wrapper { display: grid; grid-template-columns: 320px 450px; gap: 40px; max-width: 900px; width: 100%; animation: fade 0.7s ease; }
body::before { content: ""; position: fixed; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); opacity: 0.03; pointer-events: none; z-index: 999; }
.admin-sidebar, .content-box { background: var(--glass); backdrop-filter: blur(20px); border: var(--border); border-radius: 24px; padding: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.admin-sidebar { display: flex; flex-direction: column; gap: 15px; }
.admin-box { display: flex; align-items: center; gap: 15px; transition: 0.3s; cursor: pointer; padding: 5px; border-radius: 12px; }
.admin-box:hover { background: rgba(255,255,255,0.05); }
.admin-avatar { width: 45px; height: 45px; border-radius: 12px; object-fit: cover; }
.admin-rank { color: var(--gold); font-size: 0.6rem; text-transform: uppercase; letter-spacing: 2px; }
.admin-name { font-weight: 500; font-size: 0.9rem; }
.admin-tag { font-size: 0.65rem; color: #666; }
.content-box { text-align: center; }
.avatar { width: 100px; height: 100px; margin: 0 auto 20px; border-radius: 24px; overflow: hidden; border: 1px solid #333; }
.avatar img { width: 100%; height: 100%; object-fit: cover; }
h1 { font-family: 'Playfair Display', serif; font-size: 1.6rem; letter-spacing: 1px; color: var(--gold); margin: 0; }
.sub-h1 { color: #555; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 25px; }
.cta-btn { display: block; width: 100%; padding: 18px; background: linear-gradient(135deg, #d4af37, #b8860b); color: #000; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; border-radius: 14px; margin-bottom: 30px; transition: 0.4s; font-size: 0.85rem; border: none; cursor: pointer; }
.cta-btn:hover { transform: scale(1.02); box-shadow: 0 15px 30px rgba(200, 169, 106, 0.4); }
.welcome-msg { background: rgba(200, 169, 106, 0.05); border: 1px solid rgba(200, 169, 106, 0.2); border-radius: 12px; padding: 16px; font-size: 0.85rem; color: var(--gold); margin-bottom: 20px; }
#list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 25px; }
.rule-btn { background: rgba(255,255,255,0.03); border: var(--border); padding: 14px; cursor: pointer; border-radius: 14px; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 1px; transition: 0.4s; }
.rule-btn:hover { border-color: #666; }
.rule-btn.active { border-color: var(--gold); color: var(--gold); background: rgba(200, 169, 106, 0.1); }
.ps-msg { font-size: 0.65rem; color: #555; text-transform: uppercase; letter-spacing: 1.5px; margin: 25px 0 0 0; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px; font-style: italic; }
.detail-panel { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: 0.4s; z-index: 1000; }
.detail-panel.active { opacity: 1; visibility: visible; }.panel-inner { background: #000; border: 1px solid var(--gold); width: 90%; max-width: 400px; padding: 30px; border-radius: 24px; transform: scale(0.9); transition: 0.4s; }
.detail-panel.active .panel-inner { transform: scale(1); }
#detailImg { width: 100%; border-radius: 16px; margin-bottom: 20px; }
.detail-title { font-size: 1.4rem; color: var(--gold); margin-bottom: 15px; }
.detail-text { font-size: 0.9rem; line-height: 1.6; color: #aaa; white-space: pre-line; }
@media (max-width: 800px) { .wrapper { grid-template-columns: 1fr; } }
@keyframes fade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }.admin-box.active {
    background: rgba(200, 169, 106, 0.1);
    border: 1px solid var(--gold);
}
