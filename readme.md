# Gestor de Tareas Mejorado 🚀 - Portafolio QA

![Programa desplegado](image1.png) 

Aplicación web para gestión de tareas con mejoras de seguridad y accesibilidad. Proyecto demostrativo para perfiles QA funcionales.

## Características Principales ✨

- ✅ Agregar nuevas tareas con validación
- ✔️ Marcar tareas como completadas
- 🗑️ Eliminar tareas individualmente
- 📅 Fecha de creación automática
- 🔄 Contador dinámico de pendientes
- 🧹 Botón para limpiar tareas completadas
- ♿ Etiquetas ARIA para accesibilidad
- 🛡️ Protección básica contra XSS

## Tecnologías Utilizadas 🛠️

| Componente       | Tecnología                 |
|------------------|----------------------------|
| Frontend         | HTML5 Semántico            |
| Estilos          | CSS3 Moderno               |
| Lógica           | JavaScript Vanilla         |
| Accesibilidad    | WAI-ARIA                   |
| Seguridad        | Sanitización básica        |

## Casos de Prueba Manuales 🧪

### TC-01: Agregar tarea válida
1. Ingresar "Revisar documentación técnica"
2. Click en ➕ Agregar  
**Esperado:** Tarea aparece con fecha actual

### TC-02: Tarea vacía
1. Dejar campo vacío  
2. Click en agregar  
**Esperado:** Alerta de error muestra mensaje

### TC-03: Toggle de estado
1. Crear tarea "Prueba de estado"  
2. Marcar checkbox  
**Esperado:** Texto tachado y contador disminuye

### TC-04: Eliminación individual
1. Crear 2 tareas  
2. Click en 🗑️ de una  
**Esperado:** Solo se elimina la tarea seleccionada

### TC-05: Limpieza masiva
1. Marcar 2/3 tareas  
2. Click en 🗑️ Limpiar completadas  
**Esperado:** Solo permanecen tareas pendientes

### TC-06: Persistencia en sesión
1. Recargar página después de operaciones  
**Esperado:** Datos se mantienen (F5) / Se pierden (Ctrl+F5)

### TC-07: Formato de fecha
1. Agregar nueva tarea  
**Esperado:** Muestra fecha en formato local DD/MM/AAAA

## Estructura del Proyecto 📂
gestor-tareas-qa/
├── index.html # Interfaz principal
├── style.css # Estilos visuales
├── app.js # Lógica de la aplicación
└── README.md # Este archivo


## Cómo Ejecutar ▶️

1. Clonar repositorio:

git clone https://github.com/estebanmoyamena/listado_tareas_js.git

## Mejoras Pendientes 💡
Persistencia con localStorage

Tests automatizados con Jest

Sistema de categorías

Búsqueda/filtrado

Exportar a CSV

Lecciones Aprendidas 📚

🔒 La sanitización manual previene vulnerabilidades XSS básicas

♿ La accesibilidad mejora la experiencia para todos los usuarios

📆 El manejo de fechas requiere consideraciones locales

⚡ El renderizado dinámico necesita optimización

🎭 El manejo de eventos complejos requiere planificación