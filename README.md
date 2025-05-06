# 📝 Manual CMS de Landing Tácticas: Instalación para poder documentar

Este proyecto usa [MkDocs](https://www.mkdocs.org/) para documentar la configuración y uso del CMS del equipo.

## 🚀 Requisitos para comenzar

### 1. ¿Qué es `pip`?

`pip` es el sistema de gestión de paquetes para Python. Permite instalar librerías externas como MkDocs y sus plugins.
Cuando instalas Python desde su sitio oficial o por Homebrew, `pip` suele venir incluido automáticamente.

### 2. 🔧 Instalación de Python y pip

#### ✅ En macOS

1. Verifica si tienes Homebrew instalado:

```bash
   brew --version
```

Si no lo tienes, instálalo con:

```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```

2. Instala Python (viene con `pip` incluido):

```bash
brew install python

```

3. Verifica que se instaló correctamente:

```bash
  python3 --version
  pip3 --version

```

### 🐍 Instalación de Python y pip en macOS sin Homebrew:

#### 🔹 Opción: Usar el instalador oficial de Python

1. Ve al sitio oficial:
   [https://www.python.org/downloads/mac-osx/](https://www.python.org/downloads/mac-osx/)

2. Descarga la versión recomendada para Mac (por ejemplo, “macOS 64-bit universal2 installer”).
3. Ejecuta el archivo `.pkg` descargado e instala Python como cualquier app de Mac.
4. Al finalizar, abre Terminal y verifica que se instaló correctamente:

```bash
  python3 --version
  pip3 --version

```

> ⚠️ Importante: puede que el sistema tenga una versión antigua de Python 2 preinstalada. Siempre usa `python3` y `pip3`.

### ✅ ¿Qué instala este método?

- Instala **Python 3** y su gestor de paquetes pip.
- Lo añade automáticamente al `PATH` en `/usr/local/bin/`.

#### ✅ En Windows

1. Descarga el instalador desde [Python: Instalación](https://www.python.org/downloads/)
2. Durante la instalación, activa la casilla que dice:

```text
✅ Add Python to PATH

```

3. Luego, desde PowerShell o CMD:

```cmd
  python --version
  pip --version

```

### 3. 📦 Instalación del proyecto

1. Clona este repositorio:

```bash
  git clone https://github.com/carlostrujilloneyra/manual-usuario-cms.git
  cd manual-cms
```

2. Instala las dependencias del proyecto:

```cmd
  pip install -r requirements.txt
```

3. Levanta el sitio en local:

```cmd
  mkdcos serve
```

4. Luego, abre tu navegador en:
   👉 [http://127.0.0.1:8000](http://127.0.0.1:8000)

### 4. 🏗️ Construir el sitio estático

Para generar los archivos HTML listos para publicar:

```bash
  mkdocs build
```

Esto crea la carpeta `site/` con todo el contenido generado.

### 5. 📁 Estructura del proyecto

```text
MANUAL-CMS/
├── docs/                  # Archivos Markdown con el contenido de la documentación
│   ├── index.md
│   └── ...
├── mkdocs.yml            # Configuración de MkDocs (tema, navegación, plugins)
├── requirements.txt      # Lista de dependencias del proyecto
└── README.md             # Este archivo
```

### 6. 📁 Recursos útiles

- [Documentación oficial de MkDocs](https://www.mkdocs.org/)
- [Tema Material para MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Guía de instalación de Python](https://www.python.org/about/gettingstarted/)
