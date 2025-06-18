const traducciones = {
  es: {
    pageTitle: "ECUALIMPIEZA",
    tituloPrincipal: "Transformamos la limpieza con estándares europeos...",
    descripcionPrincipal: "En Ecualimpieza aplicamos los conocimientos adquiridos en los Países Bajos...",
    botonCotizacion: "Solicita una cotización gratuita",
    tituloAreas: "Nuestras Áreas de Trabajo",
    areaCorporativos: "Edificios Corporativos",
    areaCasas: "Casas y Departamentos",
    areaHospitales: "Hospitales y Clínicas",
    areaHoteles: "Hoteles",
    areaCentros: "Centros Comerciales",
    areaBancos: "Instituciones Bancarias",
    footerContactTitle: "CONTÁCTANOS",
    footerPhone: "+593996845893",
    footerEmail: "ecualimpieza2021@gmail.com",
    footerAddress: "Guayaquil - Ecuador",
    footerHoursWeekday: "Lunes - Viernes: 8:30 - 17:30",
    footerHoursWeekend: "Sábado - Domingo: Cerrado",
    footerSocialTitle: "SÍGUENOS EN:",
    footerSubscribeTitle: "SUSCRÍBETE",
    subscribeEmailInputPlaceholder: "Correo electrónico",
    subscribeButton: "Suscribirse",
    footerCopyright:
      "&copy; 2025 Sitio web desarrollado por ARpcsoluciones",
  },
  it: {
    pageTitle: "ECUALIMPIEZA",
    tituloPrincipal:
      "Trasformiamo la pulizia con standard europei di qualità...",
    descripcionPrincipal:
      "In Ecualimpieza, applichiamo le conoscenze acquisite nei Paesi Bassi...",
    botonCotizacion: "Richiedi un preventivo gratuito",
    tituloAreas: "Le Nostre Aree di Lavoro",
    areaCorporativos: "Edifici Aziendali",
    areaCasas: "Case e Appartamenti",
    areaHospitales: "Ospedali e Cliniche",
    areaHoteles: "Hotel",
    areaCentros: "Centri Commerciali",
    areaBancos: "Istituzioni Bancarie",
    footerContactTitle: "CONTATTACI",
    footerPhone: "+593996845893",
    footerEmail: "ecualimpieza2021@gmail.com",
    footerAddress: "Guayaquil - Ecuador",
    footerHoursWeekday: "Lunedì - Venerdì: 8:30 - 17:30",
    footerHoursWeekend: "Sabato - Domenica: Chiuso",
    footerSocialTitle: "SEGUICI SU:",
    footerSubscribeTitle: "ISCRIVITI",
    subscribeEmailInputPlaceholder: "Indirizzo email",
    subscribeButton: "Iscriviti",
    footerCopyright:
      "&copy; 2025 Sito web sviluppato da ARpcsoluciones",
  },
  pt: {
    pageTitle: "ECUALIMPIEZA",
    tituloPrincipal:
      "Transformamos a limpeza com padrões europeus de qualidade...",
    descripcionPrincipal:
      "Na Ecualimpieza, aplicamos o conhecimento adquirido na Holanda...",
    botonCotizacion: "Solicite um orçamento gratuito",
    tituloAreas: "Nossas Áreas de Trabalho",
    areaCorporativos: "Edifícios Corporativos",
    areaCasas: "Casas e Apartamentos",
    areaHospitales: "Hospitais e Clínicas",
    areaHoteles: "Hotéis",
    areaCentros: "Centros Comerciais",
    areaBancos: "Instituições Bancárias",
    footerContactTitle: "CONTATO",
    footerPhone: "+593996845893",
    footerEmail: "ecualimpieza2021@gmail.com",
    footerAddress: "Guayaquil - Equador",
    footerHoursWeekday: "Segunda - Sexta: 8:30 às 17:30",
    footerHoursWeekend: "Sábado - Domingo: Fechado",
    footerSocialTitle: "SIGA-NOS EM:",
    footerSubscribeTitle: "ASSINE",
    subscribeEmailInputPlaceholder: "Endereço de email",
    subscribeButton: "Assinar",
    footerCopyright:
      "&copy; 2025 Site desenvolvido por ARpcsoluciones",
  },
  de: {
    pageTitle: "ECUALIMPIEZA",
    tituloPrincipal:
      "Wir transformieren Reinigung mit europäischen Standards...",
    descripcionPrincipal:
      "Bei Ecualimpieza wenden wir in den Niederlanden erworbenes Wissen an...",
    botonCotizacion: "Fordern Sie ein kostenloses Angebot an",
    tituloAreas: "Unsere Arbeitsbereiche",
    areaCorporativos: "Bürogebäude",
    areaCasas: "Häuser und Wohnungen",
    areaHospitales: "Krankenhäuser und Kliniken",
    areaHoteles: "Hotels",
    areaCentros: "Einkaufszentren",
    areaBancos: "Bankinstitute",
    footerContactTitle: "KONTAKT",
    footerPhone: "+593996845893",
    footerEmail: "ecualimpieza2021@gmail.com",
    footerAddress: "Guayaquil - Ecuador",
    footerHoursWeekday: "Montag - Freitag: 8:30 - 17:30 Uhr",
    footerHoursWeekend: "Samstag - Sonntag: Geschlossen",
    footerSocialTitle: "FOLGE UNS AUF:",
    footerSubscribeTitle: "ABONNIEREN",
    subscribeEmailInputPlaceholder: "E-Mail-Adresse",
    subscribeButton: "Abonnieren",
    footerCopyright:
      "&copy; 2025 Website entwickelt von ARpcsoluciones",
  },
};

function cambiarIdioma(lang) {
  const t = traducciones?.[lang];
  if (!t) return;

  for (const key in t) {
    const el = document.getElementById(key);
    if (el) {
      if (key === "subscribeEmailInputPlaceholder") {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  }

  localStorage.setItem("selectedLang", lang);
  const select = document.querySelector(".idiomas select");
  if (select) select.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("selectedLang") || "es";
  cambiarIdioma(lang);
});
