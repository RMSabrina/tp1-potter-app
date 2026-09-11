import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import owlImage from '../../img/howl.png';
import './Contact.css';

const sealIcon = L.divIcon({
  className: 'map-seal-icon',
  html: '<span class="map-seal-icon-dot"></span>',
  iconSize: [22, 22],
  iconAnchor: [11, 11],
  popupAnchor: [0, -12],
});

const DEVELOPER_INFO = {
  name: 'Lumos Logic Studios',
  role: 'Invocadores de Código & Diseño',
  email: 'russellsabrinam@gmail.com',
  phone: '+54 11 0000-0000',
  github: 'https://github.com/RMSabrina',
};

const OFFICE_LOCATION = {
  lat: -34.9215,
  lng: -57.9536,
  label: 'Catedral de La Plata',
};

const INITIAL_FORM_STATE = {
  name: '',
  house: '',
  email: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lechuza enviada con:', formData);
    setSent(true);
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <section className="contact-page">
      <h1 className='contact-title'>Contacto</h1>

      {/* Sobre la empresa */}
      <div className="about-company">
        <h2>Sobre {DEVELOPER_INFO.name}</h2>
        <p><em>"Donde la antigua magia se encuentra con el código moderno."</em></p>
        <p>
          Somos un estudio independiente apasionado por tejer hechizos en forma de aplicaciones.
          Nuestra base de operaciones está celosamente camuflada bajo las imponentes torres
          de la Catedral de La Plata. Dicen que nuestra oficina es mucho más grande por
          dentro de lo que parece por fuera.
        </p>
      </div>

      {/* Datos del desarrollador */}
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
          <Marker position={[OFFICE_LOCATION.lat, OFFICE_LOCATION.lng]} icon={sealIcon}>
            <Popup>{OFFICE_LOCATION.label}</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Formulario mágico "Envianos tu lechuza" */}
      <div className="owl-post">
        <h2>
          <img src={owlImage} alt="Lechuza mensajera" className="owl-icon" />
          Envianos tu lechuza
        </h2>
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