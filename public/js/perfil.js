const fotoUsuario = document.querySelector(".perfil__foto-background");
const perfilNome = document.querySelector(".perfil__nome");
const perfilEmail = document.querySelector(".perfil__email");
const perfilTelefone = document.querySelector(".perfil__telefone");
const perfilCep = document.querySelector(".perfil__cep");
const perfilEndereco = document.querySelector(".perfil__endereco");
const perfilComplemento = document.querySelector(".perfil__complemento");

const btnSair = document.querySelector(".perfil__btn-submit");

const bearerToke = JSON.parse(localStorage.getItem("token_usuario")) || null;

async function pegarInformacoesDoPerfil() {
  try {
    const rawResponse = await fetch(`http://localhost:3000/usuario`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToke}`,
      },
    });

    const response = await rawResponse.json();

    if (rawResponse.status !== 200) {
      window.location.href = "/erro500";
    }

    if (rawResponse.status === 200) {
      fotoUsuario.src = response.imagem;
      perfilNome.innerHTML = response.nome;
      perfilEmail.innerHTML = response.email;
      perfilTelefone.innerHTML = response.telefone;
      perfilCep.innerHTML = response.cep;
      perfilEndereco.innerHTML = response.endereco;
      perfilComplemento.innerHTML = response.complemento;
    }
  } catch (error) {
    window.location.href = "/erro500";
  }
}

pegarInformacoesDoPerfil();

btnSair.addEventListener("click", () => {
  localStorage.removeItem("token_usuario");
  window.location.href = "/";
});
