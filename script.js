
/* =========================================
   MENU DE NAVEGAÇÃO
========================================= */

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {

    menuBtn.addEventListener('click', () => {
        const aberto = nav.classList.toggle('open');

        menuBtn.setAttribute('aria-expanded', String(aberto));
        menuBtn.setAttribute(
            'aria-label',
            aberto ? 'Fechar menu' : 'Abrir menu'
        );

        menuBtn.textContent = aberto ? '✕' : '☰';
    });

    // Fecha o menu ao selecionar uma seção.
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-label', 'Abrir menu');
            menuBtn.textContent = '☰';
        });
    });

    // Fecha o menu ao pressionar ESC.
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            nav.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-label', 'Abrir menu');
            menuBtn.textContent = '☰';
        }
    });

}


/* =========================================
   DOWNLOAD DO APLICATIVO
========================================= */

// Quando o APK oficial estiver hospedado,
// coloque o endereço direto entre as aspas.

const APK_URL = '';

const btn = document.getElementById('downloadBtn');
const status = document.getElementById('status');

if (btn && status) {

    if (APK_URL.trim() !== '') {

        btn.disabled = false;
        btn.innerHTML = 'Baixar LITMIND <span>↓</span>';

        status.textContent = 'Arquivo oficial disponível para Android.';

        btn.addEventListener('click', () => {
            window.location.href = APK_URL;
        });

    } else {

        btn.disabled = true;

        status.textContent =
            'O link oficial de instalação será disponibilizado aqui.';

    }

}


/* =========================================
   REPRODUÇÃO AUTOMÁTICA DOS VÍDEOS
========================================= */

const videos = document.querySelectorAll('.cinematic-video');

videos.forEach(video => {

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // Tenta iniciar a reprodução automaticamente.
    const iniciarVideo = () => {
        const reproducao = video.play();

        if (reproducao !== undefined) {
            reproducao.catch(() => {
                // Alguns navegadores podem bloquear autoplay.
                // O vídeo continuará disponível para reprodução.
            });
        }
    };

    if (video.readyState >= 2) {
        iniciarVideo();
    } else {
        video.addEventListener('canplay', iniciarVideo, {
            once: true
        });
    }

});


/* =========================================
   ANO AUTOMÁTICO NO RODAPÉ
========================================= */

const anoAtual = new Date().getFullYear();

const rodape = document.querySelector('.footer-bottom');

if (rodape) {
    const textoAno = rodape.querySelector('span');

    if (textoAno) {
        textoAno.textContent =
            `© ${anoAtual} LITMIND. Projeto acadêmico.`;
    }
}
