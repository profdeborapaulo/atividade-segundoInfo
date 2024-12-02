// Definição da classe Timer
export default class Timer {
    constructor(root) {
        // Obtém os elementos DOM que representam as partes do temporizador
        this.el = {
            years: root.querySelector(".timer__part--years"), // Anos
            days: root.querySelector(".timer__part--days"),   // Dias
            hours: root.querySelector(".timer__part--hours"), // Horas
            minutes: root.querySelector(".timer__part--minutes"), // Minutos
            seconds: root.querySelector(".timer__part--seconds"), // Segundos
            control: root.querySelector(".timer__btn--control"), // Botão de controle (iniciar/pausar)
            reset: root.querySelector(".timer__btn--reset"), // Botão de reset
        };

        this.interval = null; // Inicializa a variável de controle do intervalo
        this.targetDate = null; // Inicializa a data alvo (data futura)

        // Adiciona um evento de clique ao botão de controle (iniciar/pausar)
        if (this.el.control) {
            this.el.control.addEventListener("click", () => {
                if (this.interval === null) {
                    this.start(); // Inicia o temporizador
                } else {
                    this.stop(); // Pausa o temporizador
                }
            });
        }

        // Adiciona um evento de clique ao botão de reset
        if (this.el.reset) {
            this.el.reset.addEventListener("click", () => {
                this.stop(); // Para o temporizador
                this.updateInterfaceTime(0); // Reseta o tempo exibido para 0
            });
        }
    }

    // Atualiza a interface com o tempo restante em segundos
    updateInterfaceTime(remainingSeconds) {
        const years = Math.floor(remainingSeconds / (365 * 24 * 60 * 60)); // Calcula anos
        const days = Math.floor((remainingSeconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)); // Calcula dias
        const hours = Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60)); // Calcula horas
        const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60); // Calcula minutos
        const seconds = remainingSeconds % 60; // Calcula segundos

        // Atualiza os elementos da interface com os valores calculados
        this.el.years.textContent = years.toString().padStart(2, "0");
        this.el.days.textContent = days.toString().padStart(2, "0");
        this.el.hours.textContent = hours.toString().padStart(2, "0");
        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    // Inicia a contagem regressiva
    start() {
        if (!this.targetDate) return; // Se não houver data alvo, não faz nada

        this.interval = setInterval(() => {
            const currentDate = new Date(); // Data atual
            const diffInSeconds = Math.floor((this.targetDate - currentDate) / 1000); // Diferença em segundos

            if (diffInSeconds <= 0) {
                this.stop(); // Para o temporizador quando chega a 0
                this.updateInterfaceTime(0); // Atualiza a interface para 0
                alert("A cápsula do tempo chegou ao destino!"); // Alerta o usuário
                window.location.href = "exibir_capsula.html"; // Redireciona para outra página
            } else {
                this.updateInterfaceTime(diffInSeconds); // Atualiza o tempo restante na interface
            }
        }, 1000); // Atualiza a cada 1 segundo

        this.updateInterfaceControls(); // Atualiza os controles da interface
    }

    // Para o temporizador
    stop() {
        clearInterval(this.interval); // Limpa o intervalo
        this.interval = null; // Reseta a variável de intervalo
        this.updateInterfaceControls(); // Atualiza os controles da interface
    }

    // Atualiza os controles da interface (botões de iniciar/pausar)
    updateInterfaceControls() {
        if (this.el.control) {
            if (this.interval === null) {
                this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`; // Muda ícone para "play"
                this.el.control.classList.add("timer__btn--start");
                this.el.control.classList.remove("timer__btn--stop");
            } else {
                this.el.control.innerHTML = `<span class="material-icons">pause</span>`; // Muda ícone para "pause"
                this.el.control.classList.add("timer__btn--stop");
                this.el.control.classList.remove("timer__btn--start");
            }
        }
    }
}

// Inicializa o Timer
const root = document.getElementById("timer"); // Obtém o elemento de raiz
const timer = new Timer(root); // Cria uma nova instância do Timer

// Recupera dados do usuário ativo armazenados no localStorage
const usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
const usuarioAtivo = localStorage.getItem("usuarioAtivo");
const usuario = usuarios.find(user => user.email === usuarioAtivo);

// Verifica se a data alvo existe e é válida
if (usuario && usuario.futureDate) {
    const targetDate = new Date(usuario.futureDate);

    if (targetDate > new Date()) {
        timer.targetDate = targetDate; // Define a data alvo no Timer

        const diffInSeconds = Math.floor((targetDate - new Date()) / 1000);
        timer.updateInterfaceTime(diffInSeconds); // Atualiza o tempo na interface
        timer.start(); // Inicia a contagem regressiva
    } else {
        alert("A data futura já passou. Redefina sua cápsula do tempo.");
        window.location.href = "criar_capsula.html"; // Redireciona para a página de criação
    }
} else {
    alert("Nenhuma data configurada. Por favor, configure sua cápsula do tempo.");
    window.location.href = "criar_capsula.html"; // Redireciona para a página de criação
}
