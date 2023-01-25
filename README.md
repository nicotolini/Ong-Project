**Para empezar con el proyecto:**<br />
1-Clonarlo el proyecto con git<br />
2-Ir desde una terminal a la carpeta base del proyecto y luego ejecutar el comando "npm install", esto instalara las dependencias<br />
3-Por ultimo para ejectura el proyecto, usar el comando npm run start<br /><br />
Una vez hecho esto ya se puede comenzar a hacer cambios en el proyecto.<br /><br />

**Para subir los cambios desde local al repositorio en github:** <br />
1-Crear una nueva rama con el nombre de la tarjeta de jira. Ej con comando: git branch -b "componente-button"<br />
2-Guardar los cambios y subir esos cambios a la rama remota. Usar los siguientes comandos:<br />
  a- git add .<br />
  b- git commit -m "nuevos cambios"<br />
  c- git push origin "componente-button"<br />
3- Con esto la rama ya se encuentra en el repositorio remoto.<br /><br />


**Para hacer un pull de nuestra rama con la rama principal "main":** <br />
1- Ir a este link https://github.com/nicotolini/Ong-Project/pulls<br />
2- Clickear en el boton de New pull Request o nuevo pull request<br />
3- Clickear en el boton pequeño con texto "base" y buscar nuestra rama. Siguiendo el ej: "componente-button"<br />
4- Clickear en el boton pequeño con texto "compare" y seleccionar main.<br />
5- Clickear create pull request<br />
6- Avisar al dueño del repositorio para que revise y confirme nuestro pull request en caso de que este todo ok<br />
