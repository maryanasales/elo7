fetch('https://www.mocky.io/v2/5d6fb6b1310000f89166087b')
  .then(response => response.json())
  .then(data => createList(data.vagas));

function createList(data) {
    const content = document.querySelector('.vagas-lista');

    data.forEach(el => {
        if(el.ativa) {
            const item = document.createElement('li'), 
                    link = document.createElement('a'), 
                    local = document.createElement('p');

            link.target = '_blank'
            link.href = el.link;
            link.title = el.cargo;
            link.innerText = el.cargo;
            local.innerText = getLocal(el.localizacao);

            item.appendChild(link);
            item.appendChild(local);
            content.appendChild(item);
        }
    });
}

function getLocal(data) {
    if(!data) return "Remoto";
    
    return `${data.bairro} - ${data.cidade}, ${data.pais}`;
}