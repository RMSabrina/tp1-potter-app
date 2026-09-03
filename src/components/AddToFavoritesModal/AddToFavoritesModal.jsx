// src/components/AddToFavoritesModal/AddToFavoritesModal.jsx
import { useState } from 'react';
import './AddToFavoritesModal.css';

const NOTE_MAX_LENGTH = 280;

export default function AddToFavoritesModal({
  item,            // { id, entity, name, image }
  defaultCategory, // sugerido desde ENTITY_CONFIG (ej: "Personajes")
  onConfirm,       // (formData) => void
  onClose          // () => void
}) {
  const [priority, setPriority] = useState('');
  const [category, setCategory] = useState(defaultCategory || '');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState({});

  // Paso del modal: 'form' -> 'success'
  const [step, setStep] = useState('form');

  
  // Validación de campos requeridos
  const validate = () => {
    const nextErrors = {};

    const numericPriority = Number(priority);

    if (priority === '' || Number.isNaN(numericPriority)) {
      nextErrors.priority = 'Ingresá un valor numérico.';
    } else if (numericPriority <= 0) {
      nextErrors.priority = 'La prioridad debe ser mayor a cero.';
    }

    if (!category.trim()) {
      nextErrors.category = 'La categoría es obligatoria.';
    }

    if (note.length > NOTE_MAX_LENGTH) {
      nextErrors.note = `La nota supera el límite de ${NOTE_MAX_LENGTH} caracteres.`;
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onConfirm({
      priority: Number(priority),
      category: category.trim(),
      note: note.trim() || null
    });

    setStep('success');
  };

  // ------------------------------------------------------------
  // Estado de confirmación (se muestra tras guardar con éxito)
  // ------------------------------------------------------------
  if (step === 'success') {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content modal-content--success"
          onClick={(e) => e.stopPropagation()}
          role="alertdialog"
          aria-live="polite"
        >
          <span className="modal-seal" aria-hidden="true">✦</span>
          <h2>Agregado a favoritos</h2>
          <p className="modal-success-text">
            <strong>{item.name}</strong> ya forma parte de tus favoritos.
          </p>
          <button className="modal-btn modal-btn--secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="favorite-modal-title"
      >
        <span className="modal-ornament" aria-hidden="true">◆</span>
        <h2 id="favorite-modal-title">Agregar a favoritos</h2>
        <p className="modal-item-name">{item.name}</p>

        <form onSubmit={handleSubmit} noValidate>
          {/* ---------------- Prioridad ---------------- */}
          <div className="modal-field">
            <label htmlFor="priority">Prioridad *</label>
            <input
              id="priority"
              type="number"
              min="1"
              step="1"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              placeholder="Ej: 1"
              aria-invalid={Boolean(errors.priority)}
              aria-describedby={errors.priority ? 'priority-error' : undefined}
            />
            {errors.priority && (
              <span className="modal-error" id="priority-error">
                {errors.priority}
              </span>
            )}
          </div>

          {/* ---------------- Categoría ---------------- */}
          <div className="modal-field">
            <label htmlFor="category">Categoría *</label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Ej: Personajes favoritos"
              aria-invalid={Boolean(errors.category)}
              aria-describedby={errors.category ? 'category-error' : undefined}
            />
            {errors.category && (
              <span className="modal-error" id="category-error">
                {errors.category}
              </span>
            )}
          </div>

          {/* ---------------- Nota ---------------- */}
          <div className="modal-field">
            <label htmlFor="note">Nota personal (opcional)</label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="¿Por qué lo agregás a favoritos?"
              maxLength={NOTE_MAX_LENGTH}
              aria-invalid={Boolean(errors.note)}
              aria-describedby="note-counter"
            />
            <span className="modal-counter" id="note-counter">
              {note.length}/{NOTE_MAX_LENGTH}
            </span>
            {errors.note && <span className="modal-error">{errors.note}</span>}
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="modal-btn modal-btn--ghost"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className="modal-btn modal-btn--seal">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}