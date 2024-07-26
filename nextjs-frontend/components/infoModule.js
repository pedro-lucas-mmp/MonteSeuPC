const info = (hardware, type='') =>{
    return <>
    {hardware?.attributes?.plataforma && 
    <div className={`item-table-card${type}`}>
      <span className='atributo'>Plataforma:</span>
      <div className='item'>{hardware.attributes.plataforma}</div>
    </div>}

    {hardware?.attributes?.socket && 
    <div className={`item-table-card${type}`}>
      <span className='atributo'>Socket:</span>
      <div className='item'>{hardware.attributes.socket}</div>
    </div>}

    {hardware?.attributes?.tipo_memoria && 
    <div className={`item-table-card${type}`}>
      <span className='atributo'>Barramento:</span>
      <div className='item'>{hardware.attributes.tipo_memoria}</div>
    </div>}

    {hardware?.attributes?.tipo && 
    <div className={`item-table-card${type}`}>
      <span className='atributo'>Tipo:</span>
      <div className='item'>{hardware.attributes.tipo}</div>
    </div>}

    {hardware?.attributes?.freq_memoria && 
    <div className={`item-table-card${type}`}>
      <span className='atributo'>Frequência:</span>
      <div className='item'>{hardware.attributes.freq_memoria}Mhz</div>
    </div>}
    
    {hardware?.attributes?.marca && 
    <div className={`item-table-card${type}`}>
      <span className='atributo'>Marca:</span>
      <div className='item'>{hardware.attributes.marca}</div>
    </div>}

    {hardware?.attributes?.formato && 
    <div className={`item-table-card${type}`}>
      <span className='atributo'>Formato:</span>
      <div className='item'>{hardware.attributes.formato}</div>
    </div>}

    {hardware?.attributes?.selo_eficiencia && 
    <div className={`item-table-card${type}`}>
      <span className='atributo'>Selo:</span>
      <div className='item'>{hardware.attributes.selo_eficiencia}</div>
    </div>}

    {hardware?.attributes?.potencia_watts !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Potência:</span>
        <div className='item'>{hardware.attributes.potencia_watts}W</div>
      </div>}
    {type && (
      <>
      {hardware?.attributes?.familia && 
        <div className={`item-table-card${type}`}>
          <span className='atributo'>Família:</span>
          <div className='item'>{hardware.attributes.familia}</div>
        </div>}
      
      {hardware?.attributes?.tdp && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>TDP:</span>
        <div className='item'>{hardware.attributes.tdp}W</div>
      </div>}

      {hardware?.attributes?.grafico_integrado && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Gráfico Integrado:</span>
        <div className='item'>{"Sim"}</div>
      </div>}
     
      {hardware?.attributes?.grafico_integrado == false &&
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Gráfico Integrado:</span>
        <div className='item'>{"Não"}</div>
      </div>}

      {hardware?.attributes?.barramento_ram && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Barramento de Mem. RAM:</span>
        <div className='item'>{hardware.attributes.barramento_ram}</div>
      </div>}

      {hardware?.attributes?.frequencia_ram && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Freq. Máx. de Mem. RAM:</span>
        <div className='item'>{hardware.attributes.frequencia_ram}Mhz</div>
      </div>}

      {hardware?.attributes?.chipset && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Chipset:</span>
        <div className='item'>{hardware.attributes.chipset}</div>
      </div>}

      {hardware?.attributes?.slots_memoria && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Qtd. de slots RAM:</span>
        <div className='item'>{hardware.attributes.slots_memoria}</div>
      </div>}

      {hardware?.attributes?.tipo_memoria && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Barramento de Mem. RAM:</span>
        <div className='item'>{hardware.attributes.tipo_memoria}</div>
      </div>}

      {hardware?.attributes?.freq_memoria_suportada && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Freq. Máx. de Mem. RAM:</span>
        <div className='item'>{hardware.attributes.freq_memoria_suportada}Mhz</div>
      </div>}

      {hardware?.attributes?.slots_pciex16 !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Qtd. de Slots PCIEX16:</span>
        <div className='item'>{hardware.attributes.slots_pciex16}</div>
      </div>}
      {hardware?.attributes?.slots_pciex8 !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Qtd. de Slots PCIEX8:</span>
        <div className='item'>{hardware.attributes.slots_pciex8}</div>
      </div>}
      {hardware?.attributes?.slots_pciex4 !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Qtd. de Slots PCIEX4:</span>
        <div className='item'>{hardware.attributes.slots_pciex4}</div>
      </div>}
      {hardware?.attributes?.slots_pciex1 !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Qtd. de Slots PCIEX1:</span>
        <div className='item'>{hardware.attributes.slots_pciex1}</div>
      </div>}

      {hardware?.attributes?.conectores_armazenamento_sata !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Qtd. de Slots Sata:</span>
        <div className='item'>{hardware.attributes.conectores_armazenamento_sata}</div>
      </div>}

      {hardware?.attributes?.conectores_armazenamento_m2 !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Qtd. de Slots M2:</span>
        <div className='item'>{hardware.attributes.conectores_armazenamento_m2}</div>
      </div>}

      {hardware?.attributes?.saida_video !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Saídas de Vídeo:</span>
        <div className='item'>{hardware.attributes.saida_video ? "Sim" : "Não"}</div>
      </div>}

      {hardware?.attributes?.wifi_bluetooth !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Wifi/Bluetooth:</span>
        <div className='item'>{hardware.attributes.wifi_bluetooth ? "Sim" : "Não"}</div>
      </div>}

      {hardware?.attributes?.capacidade_memoria !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Capacidade:</span>
        <div className='item'>{hardware.attributes.capacidade_memoria}GB</div>
      </div>}

      {hardware?.attributes?.latencia !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Latencia:</span>
        <div className='item'>{hardware.attributes.latencia}</div>
      </div>}

      {hardware?.attributes?.perfil_xmp !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Perfil XMP:</span>
        <div className='item'>{hardware.attributes.perfil_xmp ? "Sim" : "Não"}</div>
      </div>}
      
      {hardware?.attributes?.socket_compatibility !== undefined && (
      <div id="item-table-list" className={`item-table-card${type}`}>
        <span className='atributo'>Sockets Compatíveis</span>
        <ul className='item'>
          {Object.entries(hardware.attributes.socket_compatibility)
            .filter(([key, valor]) => key !== 'id' && valor)
            .map(([socket]) => (
              <li key={socket}>{socket}</li>
            ))}
        </ul>
      </div>)}
    
      {hardware?.attributes?.memoria !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Memória Gráfica:</span>
        <div className='item'>{hardware.attributes.memoria}GB</div>
      </div>}

      {hardware?.attributes?.interface_memoria !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Interface de Memória:</span>
        <div className='item'>{hardware.attributes.interface_memoria}</div>
      </div>}

      {hardware?.attributes?.capacidade_GB !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Capacidade:</span>
        <div className='item'>{hardware.attributes.capacidade_GB}GB</div>
      </div>}

      {hardware?.attributes?.modularidade !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Modularidade:</span>
        <div className='item'>{hardware.attributes.modularidade ? "Sim" : "Não"}</div>
      </div>}

      {hardware?.attributes?.conectores_alimentacao !== undefined &&  (
      <div id="item-table-list" className={`item-table-card${type}`}>
        <span className='atributo'>Conectores de Alimentação</span>
        <ul className='item'>
          {Object.entries(hardware.attributes.conectores_alimentacao)
            .filter(([key, valor]) => key !== 'id' && valor)
            .map(([key, socket]) => (
              <li key={socket}>{key}: {socket}</li>
            ))}
        </ul>
      </div>)}

      {hardware?.attributes?.placa_mae_compatibility !== undefined && (
      <div id="item-table-list" className={`item-table-card${type}`}>
        <span className='atributo'>Placas Mãe Compatíveis</span>
        <ul className='item'>
          {Object.entries(hardware.attributes.placa_mae_compatibility)
            .filter(([key, valor]) => key !== 'id' && valor)
            .map(([socket]) => (
              <li key={socket}>{socket}</li>
            ))}
        </ul>
      </div>)}

      {hardware?.attributes?.tipo_fonte !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Fonte Compatível:</span>
        <div className='item'>{hardware.attributes.tipo_fonte}</div>
      </div>}

      {hardware?.attributes?.baias_2_5_armazenamento !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Baias 2.5":</span>
        <div className='item'>{hardware.attributes.baias_2_5_armazenamento}</div>
      </div>}

      {hardware?.attributes?.baias_3_5_armazenamento !== undefined && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'>Baias 3.5":</span>
        <div className='item'>{hardware.attributes.baias_3_5_armazenamento}</div>
      </div>}

      {hardware?.attributes?.radiador_compatibility !== undefined &&  (
      <div id="item-table-list" className={`item-table-card${type}`}>
        <span className='atributo'>Radiadores Compatíveis</span>
        <ul className='item'>
          {Object.entries(hardware.attributes.radiador_compatibility)
            .filter(([key, valor]) => key !== 'id' && valor)
            .map(([socket]) => (
              <li key={socket}>{socket}mm</li>
            ))}
        </ul>
      </div>)}

      {hardware?.attributes?.link !== null && 
      <div className={`item-table-card${type}`}>
        <span className='atributo'><a href={hardware.attributes.link} target="_blank" rel="noopener noreferrer">Ir para o Site da Fabricante</a></span>
      </div>}

      </>
    )}

    </>}

  function valorEmBRL(valor) {
    let valorNumerico = parseFloat(valor);

    let valorFormatado = valorNumerico.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    return valorFormatado;
  }
module.exports ={
    info,
    valorEmBRL
}