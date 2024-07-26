function processadorCompatible(cartHardware, processador) {
    let incompatibilidades = [];
    let retorno = [];
    retorno = processadorVSplaca_mae(cartHardware, processador)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    retorno = processadorVideoIntegrado(cartHardware, processador);
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    return incompatibilidades;
}
function processadorVideoIntegrado(cartHardware, processador){
    const incompatibilidades = [];
    const placa_de_videoCart = cartHardware?.placa_de_video?.data?.attributes;
    const processadorCart = cartHardware?.processador?.data?.attributes;
    if (!placa_de_videoCart) {
        if (processadorCart == processador && processador.grafico_integrado === false){
            incompatibilidades.push("Processador não possui vídeo integrado, selecione uma Placa de Vídeo.");
        }
        return incompatibilidades;
    }
    return incompatibilidades;
}
function processadorVSplaca_mae(cartHardware, processador){
    let incompatibilidades = [];
    let retorno = [];
    retorno = validarSocketProcessador(cartHardware, processador);
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    retorno = validarGeracaoProcessador(cartHardware, processador);
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    return incompatibilidades;
}
function validarSocketProcessador(cartHardware, processador){
    const incompatibilidades = [];
    const placa_maeCart = cartHardware?.placa_mae?.data;

    if (!placa_maeCart) {
        // incompatibilidades.push("Placa mãe não selecionada para verificar compatibilidade");
        return incompatibilidades;
    }
    if (placa_maeCart.attributes.socket !== processador.socket) {
        incompatibilidades.push(`Socket do processador (${processador.socket}) é incompatível com o socket da placa-mãe (${placa_maeCart.attributes.socket}).`);
    }
    return incompatibilidades;
}
function validarGeracaoProcessador(cartHardware, processador){
    const incompatibilidades = [];
    const placa_maeCart = cartHardware?.placa_mae?.data;
    if (placa_maeCart){
        // const geracaoProcessador = processador.geracao;
        // const geracoesCompativeis = placa_maeCart.attributes.geracoes_compativeis
        if (!placa_maeCart.attributes.geracoes_compativeis[processador.geracao]) {
            incompatibilidades.push("Geração do processador é incompatível com a geração da placa-mãe.");}
    }
    // else{incompatibilidades.push("Processador não selecionado para verificar compatibilidade");}
    return incompatibilidades;
}
//////////////////////////////////////////////////////PROCESSADOR\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function placa_maeCompatible(cartHardware, placa_mae) {
    let incompatibilidades = [];
    let retorno = [];
    retorno = placa_maeVSprocessador(cartHardware, placa_mae)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    retorno = placa_maeVSarmazenamento(cartHardware, placa_mae)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    return incompatibilidades;
}
function placa_maeVSprocessador(cartHardware, placa_mae){
    let incompatibilidades = [];
    let retorno = [];
    retorno = validarSocketPlaca_mae(cartHardware, placa_mae);
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    retorno = validarGeracaoPlaca_mae(cartHardware, placa_mae);
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    return incompatibilidades;
}
function validarGeracaoPlaca_mae(cartHardware, placa_mae){
    const incompatibilidades = [];
    const processadorCart = cartHardware?.processador?.data;
    if (processadorCart){
        if (!placa_mae.geracoes_compativeis[processadorCart.attributes.geracao]) {
            incompatibilidades.push("Geração da placa-mãe é incompatível com a geração do processador.");}
    }
    // else{incompatibilidades.push("Processador não selecionado para verificar compatibilidade");}
    return incompatibilidades;
}
function validarSocketPlaca_mae(cartHardware, placa_mae){
    const incompatibilidades = [];
    const processadorCart = cartHardware?.processador?.data;
    if (processadorCart){
        if (processadorCart.attributes.socket !== placa_mae.socket) {
            incompatibilidades.push("Socket da placa-mãe é incompatível com o processador.");}
    }
    // else{incompatibilidades.push("Processador não selecionado para verificar compatibilidade");}
    return incompatibilidades;
}
function placa_maeVSarmazenamento(cartHardware, placa_mae){
    const incompatibilidades = [];
    
    if (!!cartHardware?.armazenamento?.data?.attributes){
        const armazenamento = cartHardware.armazenamento.data.attributes
        const { conectores_armazenamento_sata, conectores_armazenamento_m2 } = placa_mae;
    if ((armazenamento.tipo === "SSD NVME" || armazenamento.tipo === "SSD M.2 Sata") && conectores_armazenamento_m2 <= 0) {
        incompatibilidades.push("Placa-mãe não possui conectores M.2 suficientes para SSD M.2.");
    }
    if ((armazenamento.tipo !== "SSD NVME" || armazenamento.tipo !== "SSD M.2 Sata") && conectores_armazenamento_sata <= 0) {
        incompatibilidades.push("Placa-mãe não possui conectores SATA suficientes para o armazenamento.");
    }}else {
        // incompatibilidades.push("Placa mãe não selecionada para verificar compatibilidade.");
    }
    return incompatibilidades;
}
//////////////////////////////////////////////////////PLACA_MAE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function memoriaRamCompatible(cartHardware, memoriaRam) {
    let incompatibilidades = [];
    incompatibilidades = memoria_ramVSplaca_mae(cartHardware, memoriaRam)
    return incompatibilidades;
}
function memoria_ramVSplaca_mae(cartHardware, memoriaRam){
    const incompatibilidades = [];
    const placa_maeCart = cartHardware?.placa_mae?.data;
    if (placa_maeCart){
        if (placa_maeCart.attributes.tipo_memoria !== memoriaRam.tipo_memoria) {
            incompatibilidades.push("Tipo de memória RAM é incompatível com a placa-mãe.");}
    }
    // else{incompatibilidades.push("Placa mãe não selecionada para verificar compatibilidade");}
    return incompatibilidades;
}

//////////////////////////////////////////////////////MEMORIA_RAM\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function cpuCoolerCompatible(cartHardware, cpuCooler) {
    let incompatibilidades = [];
    incompatibilidades = cpu_coolerVSprocessador(cartHardware, cpuCooler)
    return incompatibilidades;
}
function cpu_coolerVSprocessador(cartHardware, cpuCooler){
    const incompatibilidades = [];
    const processadorCart = cartHardware?.processador?.data?.attributes;
    const placa_maeCart = cartHardware?.placa_mae?.data?.attributes;

    const processadorPresente = !!cartHardware?.processador?.data;
    const placaMaePresente = !!cartHardware?.placa_mae?.data;

    if (processadorPresente && placaMaePresente) {
        if (!cpuCooler.socket_compatibility[processadorCart.socket]) {
            incompatibilidades.push("CPU cooler é incompatível com o socket do Processador.");
        }
        if (!cpuCooler.socket_compatibility[placa_maeCart.socket]) {
            incompatibilidades.push("CPU cooler é incompatível com o socket da Placa mãe.");
        }
        if (processadorCart.tdp > cpuCooler.tdp){
            incompatibilidades.push("CPU cooler possui má dissipação para o Processador selecionado.");
        }
    } else if (processadorPresente) {
        if (!cpuCooler.socket_compatibility[processadorCart.socket]) {
            incompatibilidades.push("CPU cooler é incompatível com o socket do Processador.");
        }
        if (processadorCart.tdp > cpuCooler.tdp){
            incompatibilidades.push("CPU cooler possui má dissipação para o Processador selecionado.");
        }
    } else if (placaMaePresente) {
        if (!cpuCooler.socket_compatibility[placa_maeCart.socket]) {
            incompatibilidades.push("CPU cooler é incompatível com o socket da Placa mãe.");
        }
    } else {
        // incompatibilidades.push("Processador e Placa mãe não selecionados para verificar compatibilidade.");
    }

    return incompatibilidades;
}
//////////////////////////////////////////////////////CPU_COOLER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function armazenamentoCompatible(cartHardware, armazenamento) {
    let incompatibilidades = [];
    incompatibilidades = armazenamentoVSplaca_mae(cartHardware, armazenamento)
    return incompatibilidades;
}

function armazenamentoVSplaca_mae(cartHardware, armazenamento){
    const incompatibilidades = [];
    
    if (!!cartHardware?.placa_mae?.data?.attributes){
        const { conectores_armazenamento_sata, conectores_armazenamento_m2 } = cartHardware.placa_mae.data.attributes;
    if ((armazenamento.tipo === "SSD NVME" || armazenamento.tipo === "SSD M.2 Sata") && conectores_armazenamento_m2 <= 0) {
        incompatibilidades.push("Placa-mãe não possui conectores M.2 suficientes para SSD M.2.");
    }
    if ((armazenamento.tipo !== "SSD NVME" || armazenamento.tipo !== "SSD M.2 Sata") && conectores_armazenamento_sata <= 0) {
        incompatibilidades.push("Placa-mãe não possui conectores SATA suficientes para o armazenamento.");
    }}else {
        // incompatibilidades.push("Placa mãe não selecionada para verificar compatibilidade.");
    }
    return incompatibilidades;
}
//////////////////////////////////////////////////////ARMAZENAMENTO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function placaVideoCompatible(cartHardware, placaVideo) {
    let incompatibilidades = [];
    let retorno = [];
    retorno = placa_de_videoVSplaca_mae(cartHardware, placaVideo)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    retorno = validarComprimentoPlaca_de_videoGabinete(cartHardware, placaVideo)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    return incompatibilidades;
}
function validarComprimentoPlaca_de_videoGabinete(cartHardware, placaVideo) {
    const incompatibilidades = [];
    const gabineteCart = cartHardware?.gabinete?.data?.attributes;
    if (!!gabineteCart){
        if (placaVideo.dimensao.comprimento > gabineteCart.comprimento_gpu){
            incompatibilidades.push("Placa de Vídeo é comprida demais para o Gabinete.");
        }else{
           
        }
    }else{
        return incompatibilidades;
    }
    return incompatibilidades;
}
function placa_de_videoVSplaca_mae(cartHardware, placaVideo){
    const incompatibilidades = []
    if (!!cartHardware?.placa_mae?.data?.attributes){
    const slotsPCIE = cartHardware.placa_mae.data.attributes.slots_pciex16;
    if (slotsPCIE <= 0) {
        incompatibilidades.push("Placa-mãe não possui slots PCIe x16 suficientes para a placa de vídeo.");
    }}else{
        // incompatibilidades.push("Placa mãe não selecionada para verificar compatibilidade")
    }
    return incompatibilidades;
}
//////////////////////////////////////////////////////FONTE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function fonteCompatible(cartHardware, fonte) {
    const incompatibilidades = [];
    
    const { processador, placa_de_video, placa_mae, armazenamento } = cartHardware;
    const totalTDP = (processador?.data?.attributes?.tdp ? processador.data.attributes.tdp : 0) + (placa_de_video?.data?.attributes?.tdp ? placa_de_video.data.attributes.tdp : 0);

    const eficiencia =  fonte.selo_eficiencia === 'Generic' ? 0.75 :
                        fonte.selo_eficiencia === 'PLUS 80 White' ? 0.8 : 
                        fonte.selo_eficiencia === 'PLUS 80 Bronze' ? 0.82 :
                        fonte.selo_eficiencia === 'PLUS 80 Silver' ? 0.85 :
                        fonte.selo_eficiencia === 'PLUS 80 Gold' ? 0.87 :
                        fonte.selo_eficiencia === 'PLUS 80 Platinum' ? 0.89 :
                        fonte.selo_eficiencia === 'PLUS 80 Titanium' ? 0.92 : 1;
    const potenciaEficiente = fonte.potencia_watts * eficiencia;
    if (potenciaEficiente < totalTDP) {
        incompatibilidades.push("Potência da fonte não é suficiente considerando a eficiência.");
    }


    const conectoresNecessarios = {
        'mobo_24pin': 0,
        'cpu4pin': 0,
        'sata7pin': 0,
        'pcie6pin': 0,
        'pcie8pin': 0,
        'pcie12pin': 0,
        'molex4pin': 0
    };
    if (placa_mae?.data?.attributes?.conectores_alimentacao) {
        Object.keys(placa_mae?.data?.attributes?.conectores_alimentacao).forEach(key => {
            if (key !== 'id') {
                conectoresNecessarios[key] += placa_mae?.data?.attributes?.conectores_alimentacao[key];
            }
        });
    }
    if (placa_de_video?.data?.attributes?.conectores_alimentacao) {
        Object.keys(placa_de_video?.data?.attributes?.conectores_alimentacao).forEach(key => {
            if (key !== 'id') {
                conectoresNecessarios[key] += placa_de_video?.data.attributes?.conectores_alimentacao[key];
            }
        });
    }
    if (armazenamento?.data) { 
        if (armazenamento?.data?.attributes?.tipo === 'SATA') {
            conectoresNecessarios['sata7pin']++;
        }
    }
    const conectoresFonte = fonte.conectores_alimentacao;
    Object.keys(conectoresNecessarios).forEach(conector => {
        if (conectoresFonte[conector] < conectoresNecessarios[conector]) {
            incompatibilidades.push(`Fonte não possui conectores ${conector} suficientes.`);
        }
    });
    return incompatibilidades;
}
//////////////////////////////////////////////////////GABINETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function gabineteCompatible(cartHardware, gabinete) {
    let incompatibilidades = [];
    let retorno = [];

    retorno = gabineteVSplaca_mae(cartHardware, gabinete)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    retorno = gabineteVScpu_cooler(cartHardware, gabinete)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    retorno = gabineteVSplaca_de_video(cartHardware, gabinete)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    
    return incompatibilidades;
}
function gabineteVSplaca_mae(cartHardware, gabinete){
    const incompatibilidades = []
    if (!!cartHardware?.placa_mae?.data?.attributes){
        const placaMaeFormato = cartHardware.placa_mae.data.attributes.tipo;
        if (!gabinete.placa_mae_compatibility[placaMaeFormato]) {
            incompatibilidades.push("Gabinete não é compatível com o formato da Placa mãe.");
        }}else{
            // incompatibilidades.push("Placa mãe não selecionada para verificar compatibilidade")
        }
    return incompatibilidades;
}
function gabineteVSplaca_de_video(cartHardware, gabinete){
    let incompatibilidades = [];
    let retorno = [];

    retorno = validarComprimentoGabinetePlaca_de_video(cartHardware, gabinete)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    return incompatibilidades;
}

function validarComprimentoGabinetePlaca_de_video(cartHardware, gabinete){
    const incompatibilidades = [];
    const placa_de_videoCart = cartHardware?.placa_de_video?.data?.attributes;
    if (!!placa_de_videoCart){
        if (placa_de_videoCart.dimensao.comprimento > gabinete.comprimento_gpu){
            incompatibilidades.push("Gabinete não comporta comprimento da Placa de Vídeo.");
        }else{
           
        }
    }else{
        return incompatibilidades;
    }
    return incompatibilidades;
}

function gabineteVScpu_cooler(cartHardware, gabinete) {
    let incompatibilidades = [];
    let retorno = [];
    retorno = validarCpu_coolerGabinete(cartHardware, gabinete)
    if (retorno.length > 0) {
        incompatibilidades = incompatibilidades.concat(retorno);
    }
    return incompatibilidades;
}
function validarCpu_coolerGabinete(cartHardware, gabinete){
    const incompatibilidades = [];
    if (!cartHardware?.cpu__cooler?.data?.attributes){
        const cpu_coolerCart = cartHardware?.cpu_cooler?.data?.attributes;
        const cpu_coolerTipo = cartHardware?.cpu_cooler?.data?.attributes.tipo
        if (cpu_coolerTipo == "Water Cooler"){
            if (!gabinete.radiador_compatibility[cpu_coolerCart.radiador_nominal])
                incompatibilidades.push("Gabinete não é compatível com o radiador do Water Cooler.");
        } else{
            if(gabinete?.altura_cpu_cooler < cpu_coolerCart?.dimensao_radiador_dissipador?.altura){
                incompatibilidades.push("Largura do Gabinete não é compatível com a altura do Air Cooler.");
            }
            return incompatibilidades;
        }
        return incompatibilidades;
    }
    return incompatibilidades;
}

export default async function isCompatible(hardware, tipo, CartData) {
    try {
        // const CartResponse = await fetch(`${process.env.API_URL}/api/carts/?${returnPopulateCartFields()}`);
        // const CartData = await CartResponse.json();
        let incompatibilidades = [];
        if (tipo === "processador") {
            incompatibilidades = processadorCompatible(CartData, hardware.attributes);
        }
        if (tipo === "placa_mae") {
            incompatibilidades = placa_maeCompatible(CartData, hardware.attributes);
        }
        if (tipo === "memoria_ram") {
            incompatibilidades = memoriaRamCompatible(CartData, hardware.attributes);
        }
        if (tipo === "cpu_cooler") {
            incompatibilidades = cpuCoolerCompatible(CartData, hardware.attributes);
        }
        if (tipo === "armazenamento") {
            incompatibilidades = armazenamentoCompatible(CartData, hardware.attributes);
        }
        if (tipo === "placa_de_video") {
            incompatibilidades = placaVideoCompatible(CartData, hardware.attributes);
        }
        if (tipo === "fonte") {
            incompatibilidades = fonteCompatible(CartData, hardware.attributes);
        }
        if (tipo === "gabinete") {
            incompatibilidades = gabineteCompatible(CartData, hardware.attributes);
        }
        return incompatibilidades;
    } catch (error) {
        console.error(error);
        return ["Erro ao verificar compatibilidade"];
    }
}

export function returnIncompatibilidadesText(incompatibilidades, style) {
    return (
      incompatibilidades.length > 0 && (
        <div className="incompatibility-div">
          <h3 style={style} >Incompatibilidades</h3>
          <ul>
            {incompatibilidades.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>
      )
    );
  }