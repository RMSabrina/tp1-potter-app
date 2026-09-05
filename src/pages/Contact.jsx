// ============================================================
// ContactPage.jsx (actualizado con sección mágica)
// ============================================================

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Contact.css';

// ------------------------------------------------------------
// 1. Fix icono de marcador (bug conocido de Leaflet + bundlers)
// ------------------------------------------------------------
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// ------------------------------------------------------------
// 2. Datos del desarrollador/estudio (editar según corresponda)
// ------------------------------------------------------------
const DEVELOPER_INFO = {
  name: 'Sabrina R.', // <-- completar
  role: 'Desarrolladora Frontend',
  email: 'contacto@ejemplo.com', // <-- completar
  phone: '+54 11 0000-0000', // <-- completar
  github: 'https://github.com/RMSabrina',
};

// Coordenadas fijas pedidas por la consigna (Catedral de La Plata)
const OFFICE_LOCATION = {
  lat: -34.9215,
  lng: -57.9536,
  label: 'Catedral de La Plata',
};

// Estado inicial del formulario mágico
const INITIAL_FORM_STATE = {
  name: '',
  house: '',
  email: '',
  message: '',
};

// ------------------------------------------------------------
// 3. Componente principal
// ------------------------------------------------------------
function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [sent, setSent] = useState(false);

  // -- 3.0 Handlers del formulario --
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integración pendiente: reemplazar por llamada real a API/backend
    console.log('Lechuza enviada con:', formData);
    setSent(true);
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <section className="contact-page">
      <h1>Contacto</h1>

      {/* --- 3.1 Datos del desarrollador --- */}
      <div className="contact-info">
        <p><strong>{DEVELOPER_INFO.name}</strong> | {DEVELOPER_INFO.role}</p>
        <p>Email: <a href={`mailto:${DEVELOPER_INFO.email}`}>{DEVELOPER_INFO.email}</a></p>
        <p>Teléfono: {DEVELOPER_INFO.phone}</p>
        <p>
          GitHub:{' '}
          <a href={DEVELOPER_INFO.github} target="_blank" rel="noreferrer">
            {DEVELOPER_INFO.github}
          </a>
        </p>
      </div>

      {/* --- 3.2 Mapa de ubicación --- */}
      <div className="contact-map">
        <MapContainer
          center={[OFFICE_LOCATION.lat, OFFICE_LOCATION.lng]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: '350px', width: '100%', borderRadius: '8px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[OFFICE_LOCATION.lat, OFFICE_LOCATION.lng]}>
            <Popup>{OFFICE_LOCATION.label}</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* --- 3.3 Formulario mágico "Envianos tu lechuza" --- */}
      <div className="owl-post">
        <h2>🦉 Envianos tu lechuza</h2>
        <p className="owl-post-subtitle">
          ¿Tenés una consulta, sugerencia o querés unirte a la Orden?
          Completá el pergamino y tu mensaje volará directo a nosotros.
        </p>

        {sent ? (
          <p className="owl-post-success">
            ¡Tu lechuza partió! Esperá su respuesta, puede tardar
            un par de días si atraviesa tormenta mágica. 🌩️
          </p>
        ) : (
          <form className="owl-post-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre de mago/bruja</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: Hermione Granger"
              required
            />

            <label htmlFor="house">Casa de Hogwarts</label>
            <select
              id="house"
              name="house"
              value={formData.house}
              onChange={handleChange}
              required
            >
              <option value="">Seleccioná tu casa</option>
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
            </select>

            <label htmlFor="email">Lechuza de retorno (email)</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              required
            />

            <label htmlFor="message">Tu mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribí tu consulta aquí..."
              required
            />

            <button type="submit" className="owl-post-submit">
              Enviar lechuza ✉️
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;