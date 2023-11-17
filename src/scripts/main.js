AOS.init();

const dataDoAniversario = new Date("sep 21, 2024 19:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciAteOAniversario = timeStampDoAniversario - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOAniversario = Math.floor(distanciAteOAniversario / diaEmMS);
    const horasAteOAniversario = Math.floor((distanciAteOAniversario % diaEmMS) / horaEmMs);
    const minutosAteOAniversario = Math.floor((distanciAteOAniversario % horaEmMs) / minutoEmMs);
    const segundosAteOAniversario = Math.floor((distanciAteOAniversario % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if(distanciAteOAniversario < 0){
        document.getElementById('contador').innerHTML = 'Evento expirado!';
    }

}, 1000);