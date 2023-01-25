**Para empezar con el proyecto:**
1-Clonarlo el proyecto con git
2-Ir desde una terminal a la carpeta base del proyecto y luego ejecutar el comando "npm install", esto instalara las dependencias
3-Por ultimo para ejectura el proyecto, usar el comando npm run start

Una vez hecho esto ya se puede comenzar a hacer cambios en el proyecto.

**Para subir los cambios desde local al repositorio en github:**
1-Crear una nueva rama con el nombre de la tarjeta de jira. Ej con comando: git branch -b "componente-button"
2-Guardar los cambios y subir esos cambios a la rama remota. Usar los siguientes comandos:
  a- git add .
  b- git commit -m "nuevos cambios"
  c- git push origin "componente-button"
3- Con esto la rama ya se encuentra en el repositorio remoto.


**Para hacer un pull de nuestra rama con la rama principal "main": **
1- Ir a este link https://github.com/nicotolini/Ong-Project/pulls
2- Clickear en el boton de New pull Request o nuevo pull request
3- Clickear en el boton pequeño con texto "base" y buscar nuestra rama. Siguiendo el ej: "componente-button"
4- Clickear en el boton pequeño con texto "compare" y seleccionar main.
5- Clickear create pull request
6- Avisar al dueño del repositorio para que revise y confirme nuestro pull request en caso de que este todo ok
