// BASE DE DATOS DE FRASES
const bookQuotes = [
    { text: "La innovación la hacen las personas para las personas.", cat: "La Semilla" },
    { text: "No hay empresas innovadoras, sin personas innovadoras.", cat: "La Semilla" },
    { text: "Una idea que no se prueba es solo un buen deseo que no se cumplirá.", cat: "Ideación" },
    { text: "El fracaso es un maestro caro, pero sus lecciones duran toda la vida.", cat: "Aprendizaje" },
    { text: "Validar una idea no es buscar que esté bien, es buscar en qué está mal.", cat: "Acción" },
    { text: "Innovar es construir lo que no existe, con lo que ya tienes.", cat: "Lanzamiento" },
    { text: "El cambio no se impone, se invita.", cat: "Impacto" },
    { text: "La curiosidad es el primer acto de rebelión contra lo establecido.", cat: "La Semilla" },
    { text: "Un prototipo es la forma más efectiva de conversar con la realidad.", cat: "Ideación" },
    { text: "Innovar no es controlar la incertidumbre, es aprender a bailar con ella.", cat: "Acción" }
];

// GENERADOR DE FRASES
function generateQuotes() {
    const display = document.getElementById('quote-display');
    if (!display) return; // Previene errores si el script carga donde no debe
    
    display.innerHTML = '';
    
    const shuffled = [...bookQuotes].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    selected.forEach(q => {
        display.innerHTML += `
            <div class="quote-box">
                <p class="quote-text">"${q.text}"</p>
                <p class="quote-tag">${q.cat}</p>
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
function handleDownload(e) {
    e.preventDefault();
    alert("Registro exitoso. El ebook se enviará a su correo.");
    e.target.reset();
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', generateQuotes);