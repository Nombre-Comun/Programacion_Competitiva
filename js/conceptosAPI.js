function getContent(){
    fetch('./js/conceptos.json').then((result)=>{
        return result.json();
    }).then((data)=>{
        console.log(data.items)
        let contenido = data.items
        let cuerpo = document.querySelector(".cursos")
        for(item of contenido){
            cuerpo.innerHTML += `
            <div class="curso">
            <div class="curso__imagen">
              <img src="${item.imagen}" alt="Imagen del Curso" />
            </div>
    
            <div class="curso__informacion">
              <h4 class="no-margin uppercase">${item.titulo}</h4>
              <p class="curso__label">
                Categoría:
                <span class="curso__info">${item.categoria}</span>
              </p>
              <p class="curso__label">
                Complejidad:
                <span class="curso__info">${item.complejidad}</span>
              </p>
              <p class="curso__descripcion">
                ${item.descripcion}
              </p>
            <p>${item.descripcion2}</p>
            </div>
            <!--.curso__informacion-->
          </div>
            `
        }
        
    })
}
getContent();