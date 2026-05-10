// BASE DE DATOS DE FRASES
const bookQuotes = [
    { text: "La innovación la hacen las personas para las personas.", cat: "La Semilla" },
    { text: "No hay empresas innovadoras, sin personas innovadoras.", cat: "La Semilla" },
    { text: "Una idea que no se prueba es solo un buen deseo que no se cumplirá.", cat: "Ideación y Exploración" },
    { text: "El fracaso es un maestro caro, pero sus lecciones duran toda la vida.", cat: "Aprendizaje y Evolución" },
    { text: "Validar una idea no es buscar que esté bien, es buscar en qué está mal.", cat: "Desarrollo y Validación" },
    { text: "Innovar es construir lo que no existe, con lo que ya tienes.", cat: "Implementación y Escalabilidad" },
    { text: "El cambio no se impone, se invita.", cat: "Implementación y Escalabilidad" },
    { text: "La curiosidad es el primer acto de rebelión contra lo establecido.", cat: "La Semilla" },
    { text: "Un prototipo es la forma más efectiva de conversar con la realidad.", cat: "Ideación y Exploración" },
    { text: "Innovar no es controlar la incertidumbre, es aprender a bailar con ella.", cat: "Desarrollo y Validación" }
];

// GENERADOR DE FRASES

    
 function generateQuotes() {
    const categoryColors = {
        "La Semilla": "#4a7c59",
        "Ideación y Exploración": "#d4a017",
        "Desarrollo y Validación": "#113cd6",
        "Implementación y Escalabilidad": "#ff8833",
        "Aprendizaje y Evolución": "#8e44ad"
    };
    
    const display = document.getElementById('quote-display');
    if (!display) return; 
    
    display.innerHTML = '';
    
    const shuffled = [...bookQuotes].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    const rotations = ['-rotate-1', 'rotate-2', '-rotate-2'];

    selected.forEach((q, index) => {
        const catColor = categoryColors[q.cat] || '#2c3e50';
        
        // Asignamos una rotación diferente a cada tarjeta
        const rotationClass = rotations[index % 3];

        display.innerHTML += `
            <div class="relative overflow-hidden border border-gray-100 border-l-4 p-6 sm:p-8 bg-white rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-full transform ${rotationClass} hover:rotate-0" style="border-left-color: ${catColor}">
                
                <span class="absolute top-[-10px] left-2 text-[140px] text-gray-50 font-serif leading-none select-none z-0 pointer-events-none opacity-60">
                    "
                </span>

                <div class="relative z-10 mb-6 mt-4 flex-grow flex items-center">
                    <p class="text-lg md:text-xl font-serif font-bold italic leading-relaxed" style="color: ${catColor}">
                        "${q.text}"
                    </p>
                </div>
                
                <div class="relative z-10 text-left mt-auto">
                    <p class="inline-block text-[11px] bg-white px-3 py-1.5 rounded-md uppercase font-extrabold tracking-widest shadow-sm border border-gray-100" style="color: ${catColor}">
                        ${q.cat}
                    </p>
                </div>
            </div>
        `;
    });
}

// EXPORTAR IMAGEN
    function exportImage() {
        const area = document.getElementById('capture-zone');
        html2canvas(area).then(canvas => {
            const link = document.createElement('a');
            link.download = 'mindset-frases.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }

// SIMULACIÓN DE REGISTRO
    // SIMULACIÓN DE REGISTRO -> AHORA ES REAL
function handleDownload(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const submitBtn = e.target.querySelector('button[type="submit"]');
    
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "ENVIANDO...";
    submitBtn.disabled = true;

    // 🔴 ASEGÚRATE DE MANTENER TU URL DE APPS SCRIPT AQUÍ
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxAlzGXu2fWu_rFyujLOv0G2CjFMdX75Ck70e8FPMUzvb5DKoGZ8eqt6TMIHotoyRY/exec';

    const formData = new FormData();
    formData.append('nombre', name);
    formData.append('correo', email);

    fetch(scriptURL, { 
        method: 'POST', 
        body: formData,
        mode: 'no-cors' 
    })
    .then(() => {
        // 1. Limpiamos el formulario y restauramos el botón
        e.target.reset();
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;

        // 2. Seleccionamos el modal y personalizamos el texto
        const modal = document.getElementById('success-modal');
        const modalContent = document.getElementById('success-modal-content');
        const modalMessage = document.getElementById('modal-message');
        
        modalMessage.innerHTML = `¡Gracias por tu interés, <strong>${name}</strong>!<br>Hemos enviado la copia oficial en PDF a tu bandeja de entrada.<br><br><span class="text-xs text-gray-400 italic">Por favor, revisa tu carpeta de Spam o Promociones si no lo encuentras en los próximos minutos.</span>`;
        // 3. Mostramos el modal con animación (quitamos opacity-0)
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');

        // 4. Lógica para cerrar el modal al hacer clic en el botón
        document.getElementById('close-modal-btn').onclick = function() {
            modal.classList.add('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
        };
    })
    .catch(error => {
        // Solo dejamos el alert normal para errores de conexión
        alert("Hubo un error de conexión al enviar tus datos. Intenta nuevamente.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    });
}


// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', generateQuotes);