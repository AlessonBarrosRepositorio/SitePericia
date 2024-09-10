
document.addEventListener('DOMContentLoaded', function() {
    cards();

});



function cards() {
    var containerEventos = document.getElementById('areaSlide');
    if (containerEventos) {
        containerEventos.innerHTML = `
  
                    <div class="carta" id="carta01">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882200/teste-link/xd90p4eelwkdcdmbxxpg.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            assistente técnico
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882202/teste-link/c0zdhg54tfos2yquwbow.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            perícia Grafotécnica
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725885603/teste-link/k23wetcl7l7uhyifnyrw.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            autenticidade
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725885602/teste-link/eiumwtvldsdxbj0xenud.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            assinatura
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/gfiiuqei7eoa6jnzohie.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            documentos
                        </h2>
                    </div>

                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/pxpjaephtwonwe5oddvx.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            laudos técnicos
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882200/teste-link/ypvev4uhpha7ix8exuao.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            análise de documentos
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/ehpvf5hxndcvy6lkhexh.jpg" alt="fraude" class="imgCarta">
                        <h2 class="h2Carta">
                            fraude
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725885603/teste-link/wy02haibqlyxqxatzdam.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            falsificação
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/vahcxozvdddwdj2sbn9o.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            parecer técnico
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882202/teste-link/vtfurokuofvkkovrdlpo.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            suporte técnico
                        </h2>
                    </div>
  
        
        `;
    }
}