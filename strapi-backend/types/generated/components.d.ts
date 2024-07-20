import type { Schema, Attribute } from '@strapi/strapi';

export interface ConectoresAlimentacaoConectoresAlimentacao
  extends Schema.Component {
  collectionName: 'components_conectores_alimentacao_conectores_alimentacaos';
  info: {
    displayName: 'conectores_alimenta\u00E7\u00E3o';
    description: '';
  };
  attributes: {
    mobo_24pin: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    cpu4pin: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    sata7pin: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    pcie6pin: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    pcie8pin: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    pcie12pin: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    molex4pin: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

export interface DimensaoDimensao extends Schema.Component {
  collectionName: 'components_dimensao_dimensaos';
  info: {
    displayName: 'dimensao';
    description: '';
  };
  attributes: {
    comprimento: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    largura: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    altura: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

export interface GeracoesGeracoes extends Schema.Component {
  collectionName: 'components_geracoes_geracoes';
  info: {
    displayName: 'geracoes';
  };
  attributes: {
    primeira: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    segunda: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    terceira: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    quarta: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    quinta: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    sexta: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    setima: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    oitava: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    nona: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    decima: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    decima_primeira: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    decima_segunda: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    decima_terceira: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    decima_quarta: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    decima_quinta: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PlacaMaeCompatibilityPlacaMaeCompatibility
  extends Schema.Component {
  collectionName: 'components_placa_mae_compatibility_placa_mae_compatibilities';
  info: {
    displayName: 'placa_mae_compatibility';
  };
  attributes: {
    ATX: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    Micro_ATX: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Mini_ITX: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    EATX: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    XL_ATX: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    Flex_ATX: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    WTX: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    Mini_STX: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Nano_ITX: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Pico_ITX: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface RadiadorCompatibilityRadiadorCompatibility
  extends Schema.Component {
  collectionName: 'components_radiador_compatibility_radiador_compatibilities';
  info: {
    displayName: 'Radiador_compatibility';
    description: '';
  };
  attributes: {
    radiador_120: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    radiador_140: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    radiador_240: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    radiador_280: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    radiador_360: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SocketSocket extends Schema.Component {
  collectionName: 'components_socket_sockets';
  info: {
    displayName: 'Socket_Compatibility';
    description: '';
  };
  attributes: {
    AM3: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    AM3_Plus: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    AM4: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    AM5: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    LGA1151: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    LGA1200: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    LGA1700: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    LGA1150: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    LGA1155: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    sTRX4: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    sTR4: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    LGA2011: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'conectores-alimentacao.conectores-alimentacao': ConectoresAlimentacaoConectoresAlimentacao;
      'dimensao.dimensao': DimensaoDimensao;
      'geracoes.geracoes': GeracoesGeracoes;
      'placa-mae-compatibility.placa-mae-compatibility': PlacaMaeCompatibilityPlacaMaeCompatibility;
      'radiador-compatibility.radiador-compatibility': RadiadorCompatibilityRadiadorCompatibility;
      'socket.socket': SocketSocket;
    }
  }
}
