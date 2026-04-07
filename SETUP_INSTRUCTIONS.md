# AnithUncommon - Setup Instructions

## ✅ System Completado

### Funcionalidades Implementadas:

1. **15 Subjects Completos** ✅
   - History
   - Literature
   - Philosophy
   - Biology
   - Economics
   - Art History
   - Math
   - Chemistry
   - Physics
   - English Literature
   - Geology
   - Political Theory
   - World History
   - Criminology
   - Physiology

2. **13 Mentores Configurados con sus Materias** ✅
   - Todos los mentores están asignados a sus subjects correspondientes
   - Nombres clickeables en las tarjetas de Subject
   - Navegación funcional a perfiles individuales de mentores

3. **Formulario de Contacto Completo** ✅
   - Contact/Collaborate with Us con First Name, Last Name, Email, Message
   - Sistema mailto integrado

4. **Perfil Individual de Mentores** ✅
   - Página dedicada para cada mentor
   - Muestra subjects, bio, email, y recursos
   - Sistema de navegación completo

---

## 📦 Recursos de Mentores - Cómo Agregar PDFs

### Archivos Pendientes por Subir:

Los siguientes PDFs necesitan ser agregados manualmente:

#### 1. **Martina Marques**
- **Archivo original**: `INT. Filo y Socio.pdf`
- **Ubicación**: Sube a `/public/resources/INT-Filo-y-Socio.pdf`
- **Nota**: Usa guiones en lugar de espacios y puntos

#### 2. **Ishraq**
- **Archivo original**: `A married state.pdf`
- **Ubicación**: Sube a `/public/resources/A-married-state.pdf`
- **Nota**: Usa guiones en lugar de espacios

#### 3. **Megan Lee** ✅ **COMPLETO**
- Sus imágenes ya están integradas usando `figma:asset`
- `megancardresource.jpeg` → Integrado
- `meganpresentation1.jpeg` → Integrado

---

## 🔄 Cómo Subir los PDFs

### Paso 1: Preparar los archivos
1. Renombra los archivos usando guiones en lugar de espacios:
   - `INT. Filo y Socio.pdf` → `INT-Filo-y-Socio.pdf`
   - `A married state.pdf` → `A-married-state.pdf`

### Paso 2: Subir a la carpeta correcta
1. Crea la carpeta `/public/resources/` si no existe
2. Sube los PDFs renombrados a esa carpeta

### Paso 3: Verificar
Una vez subidos, los PDFs estarán automáticamente disponibles en:
- El perfil del mentor correspondiente
- Sección "Teaching Resources"
- Clickeables para ver/descargar

---

## 🎯 Navegación del Sistema

### Flujo de Usuario:

1. **Página Principal** → Click en Subject Card
2. **Subject View** → Ver todos los topics del subject
3. **Mentor Names** (en Subject Card) → Click en nombre del mentor
4. **Mentor Profile** → Ver información completa del mentor + recursos

### Enlaces de Mentores:

Los nombres de mentores en las tarjetas de subject son clickeables:
- **Hover**: Fondo cambia a #0A1926, texto a #D9D7CC
- **Click**: Navega al perfil individual del mentor
- **Recursos**: Se muestran con iconos y descripciones

---

## 📊 Estructura de Datos

### Archivo: `/src/app/data/mentors.ts`

```typescript
{
  id: "mentor-id",
  name: "Nombre del Mentor",
  email: "email@example.com",
  role: "Rol/Posición",
  subjects: ["Subject 1", "Subject 2"],
  bio: "Biografía del mentor",
  resources: [
    {
      title: "Título del Recurso",
      type: "pdf" | "image" | "document",
      description: "Descripción del recurso",
      file: "/resources/archivo.pdf", // Ruta desde /public/
      relatedTopics: ["Topic 1", "Topic 2"] // Opcional
    }
  ]
}
```

---

## 🎨 Diseño y Colores

### Paleta de Colores:
- **Primary Dark**: #0A1926
- **Secondary Dark**: #0B1F26
- **Medium Gray**: #626E73
- **Light Gray**: #A1A6A5
- **Background**: #D9D7CC

### Componentes:
- **SubjectCard**: Tarjeta con imagen, descripción, mentores, y topics
- **MentorProfile**: Página completa del perfil del mentor
- **Contact Form**: Formulario de contacto con validación

---

## 🚀 Funcionalidades Adicionales

### Ya Implementado:
✅ 15 Subjects con descripciones únicas
✅ Asignación de mentores por materia
✅ Nombres de mentores clickeables
✅ Navegación a perfiles individuales
✅ Sistema de recursos (PDF + imágenes)
✅ Formulario de contacto completo
✅ Responsive design
✅ Efectos hover y transiciones

### Pendiente:
⏳ Subir PDFs de Martina e Ishraq
⏳ Conectar recursos PDF a topics específicos (cuando los topics estén activos)

---

## 📝 Notas Importantes

1. **PDFs**: Los PDFs deben estar en `/public/resources/` para que las rutas funcionen
2. **Imágenes de Megan**: Ya integradas usando `figma:asset`
3. **Topics**: Actualmente muestran "Coming Soon" - cuando estén listos, los recursos aparecerán ahí
4. **Mentores sin Email**: Algunos mentores no tienen email listado (Yassmin, Avighnaa, MJ)

---

## ✨ Características del Sistema

- **Click en Mentor Name** → Navega a su perfil
- **Recursos Clickeables** → Abre PDF o imagen en nueva tab
- **Back Button** → Regresa a la página principal
- **Responsive** → Funciona en móvil y desktop
- **Animaciones** → Hover effects y transiciones suaves

---

## 🎯 Testing Checklist

- [ ] Subir PDFs a `/public/resources/`
- [ ] Click en nombre de mentor → Abre perfil correcto
- [ ] Recursos visibles en perfil del mentor
- [ ] PDFs se abren al hacer click
- [ ] Formulario de contacto funciona
- [ ] Navegación "Back" funciona
- [ ] Responsive en móvil

---

## 💡 Para Agregar Más Recursos en el Futuro

1. Edita `/src/app/data/mentors.ts`
2. Encuentra el mentor en el array `mentorsData`
3. Agrega un nuevo objeto en el array `resources`:

```typescript
{
  title: "Nombre del Recurso",
  type: "pdf", // o "image" o "document"
  description: "Descripción breve",
  file: "/resources/nombre-archivo.pdf",
  relatedTopics: ["Topic donde aparece"] // Opcional
}
```

4. Sube el archivo a `/public/resources/`

---

🎉 **Sistema Completo y Listo para Usar!**
