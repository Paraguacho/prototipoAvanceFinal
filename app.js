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
            <div class="relative overflow-hidden border border-gray-200 border-l-4 border-l-secondary p-6 sm:p-8 bg-white rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                
                <span class="absolute top-[-20px] left-4 text-[140px] text-gray-100 font-serif leading-none select-none z-0 pointer-events-none">
                    "
                </span>

                <div class="relative z-10 mb-8 mt-2">
                    <p class="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed">
                        "${q.text}"
                    </p>
                </div>
                
                <div class="relative z-10 text-left mt-auto">
                    <p class="inline-block text-[11px] text-primary bg-gray-100 px-3 py-1 rounded-md uppercase font-bold tracking-wide">
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
function handleDownload(e) {
    e.preventDefault();
    alert("Registro exitoso. El ebook se enviará a su correo.");
    e.target.reset();
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', generateQuotes);