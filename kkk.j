let url = document.URL;
if (url === "https://www.nuvemshopdozero.com.br/perguntas-frequentes/") {
  function commonQuestions() {
    let box_principal = document.querySelector(".user-content .container");
    box_principal.innerHTML = "";

    let conteudo = `
                  <details id="linha">
                    <summary>
                      Qual é o custo de envio?
                    </summary>
                    <p>O custo de envio será mostrado com base ao total da compra e sua localização, no checkout, no momento antes da compra.</p>
                  </details>

                  <details id="linha">
                    <summary>
                      Qual é o custo de envio?
                    </summary>
                    <p>O custo de envio será mostrado com base ao total da compra e sua localização, no checkout, no momento antes da compra.</p>
                  </details>

                  <details id="linha">
                    <summary>
                      Qual é o custo de envio?
                    </summary>
                    <p>O custo de envio será mostrado com base ao total da compra e sua localização, no checkout, no momento antes da compra.</p>
                  </details>

                  <details id="linha">
                    <summary>
                      Qual é o custo de envio?
                    </summary>
                    <p>O custo de envio será mostrado com base ao total da compra e sua localização, no checkout, no momento antes da compra.</p>
                  </details>
        `;
    box_principal.innerHTML += conteudo;
  }

  commonQuestions();
}