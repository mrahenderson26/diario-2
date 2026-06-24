import { useState } from 'react';

export default function PerfilUsuario() {
  const [perfil, setPerfil] = useState({
    nombre: '',
    edad: '',
    profesion: ''
  });

  function actualizarPerfil(propiedad, valor) {
    setPerfil({
      // Copiamos el objeto anterior para no borrar las demás propiedades.
      ...perfil,
      // Los corchetes permiten elegir la propiedad usando una variable.
      [propiedad]: valor
    });
  }

  return (
    <>
      <div>
        <input type="text" value={perfil.nombre} onChange={(e) => actualizarPerfil('nombre', e.target.value)} placeholder="Nombre"/>

        <input type="number" value={perfil.edad} onChange={(e) => actualizarPerfil('edad', e.target.value)} placeholder="Edad"/>

        <input type="text" value={perfil.profesion} onChange={(e) => actualizarPerfil('profesion', e.target.value)} placeholder="Profesión"/>
      </div>

      <div>
        <h3>Perfil actualizado</h3>
        <p><strong>Nombre:</strong> {perfil.nombre || '---'}</p>
        <p><strong>Edad:</strong> {perfil.edad || '---'}</p>
        <p><strong>Profesión:</strong> {perfil.profesion || '---'}</p>
      </div>
    </>
  );
}
