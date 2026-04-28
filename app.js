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
        
        selected.forEach(q => {
            // Obtenemos el color correspondiente o un gris por defecto
            const catColor = categoryColors[q.cat] || '#2c3e50';

            display.innerHTML += `
                <div class="relative overflow-hidden border border-gray-200 border-l-4 p-8 sm:p-10 bg-white rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full" style="border-left-color: ${catColor}">
                    
                    <span class="absolute top-[-20px] left-4 text-[160px] text-gray-100 font-serif leading-none select-none z-0 pointer-events-none">
                        "
                    </span>

                    <div class="relative z-10 mb-10 mt-4">
                        <p class="text-2xl md:text-3xl font-semibold text-primary italic leading-tight">
                            "${q.text}"
                        </p>
                    </div>
                    
                    <div class="relative z-10 text-left mt-auto">
                        <p class="inline-block text-[12px] bg-gray-50 px-4 py-1.5 rounded-md uppercase font-bold tracking-widest" style="color: ${catColor}">
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
        
        // Capturamos el nombre ingresado
        const name = document.getElementById('userName').value;
        
        // Mostramos un mensaje personalizado
        alert(`¡Hola ${name}! Registro exitoso. El ebook se enviará a tu correo.`);
        
        // Limpiamos el formulario
        e.target.reset();
    }


// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', generateQuotes);