import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    cart: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::cart.cart'
    >;
    postImagem: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArmazenamentoArmazenamento extends Schema.CollectionType {
  collectionName: 'armazenamentos';
  info: {
    singularName: 'armazenamento';
    pluralName: 'armazenamentos';
    displayName: 'Armazenamento';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tier: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    nome: Attribute.String & Attribute.Required;
    marca: Attribute.Enumeration<
      [
        'Samsung',
        'Western Digital',
        'Crucial',
        'ADATA',
        'Kingston',
        'Seagate',
        'SanDisk',
        'Intel',
        'Corsair',
        'PNY',
        'Toshiba',
        'Transcend',
        'Team Group',
        'Gigabyte',
        'Lexar',
        'Hitachi',
        'LaCie',
        'Maxtor',
        'OCZ',
        'Patriot',
        'HP',
        'Fujitsu'
      ]
    > &
      Attribute.Required;
    tipo: Attribute.Enumeration<
      ['SSD Sata', 'SSD M.2 Sata', 'SSD NVME', 'HDD 3.5"', 'HDD 2.5"']
    > &
      Attribute.Required;
    capacidade_GB: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    imagem: Attribute.Media & Attribute.Required;
    link: Attribute.String;
    preco: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::armazenamento.armazenamento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::armazenamento.armazenamento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCartCart extends Schema.CollectionType {
  collectionName: 'carts';
  info: {
    singularName: 'cart';
    pluralName: 'carts';
    displayName: 'Cart';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    placa_mae: Attribute.Relation<
      'api::cart.cart',
      'oneToOne',
      'api::placa-mae.placa-mae'
    >;
    processador: Attribute.Relation<
      'api::cart.cart',
      'oneToOne',
      'api::processador.processador'
    >;
    memoria_ram: Attribute.Relation<
      'api::cart.cart',
      'oneToOne',
      'api::memoria-ram.memoria-ram'
    >;
    armazenamento: Attribute.Relation<
      'api::cart.cart',
      'oneToOne',
      'api::armazenamento.armazenamento'
    >;
    placa_de_video: Attribute.Relation<
      'api::cart.cart',
      'oneToOne',
      'api::placa-de-video.placa-de-video'
    >;
    gabinete: Attribute.Relation<
      'api::cart.cart',
      'oneToOne',
      'api::gabinete.gabinete'
    >;
    fonte: Attribute.Relation<'api::cart.cart', 'oneToOne', 'api::fonte.fonte'>;
    cpu_cooler: Attribute.Relation<
      'api::cart.cart',
      'oneToOne',
      'api::cpu-cooler.cpu-cooler'
    >;
    user: Attribute.Relation<
      'api::cart.cart',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCpuCoolerCpuCooler extends Schema.CollectionType {
  collectionName: 'cpu_coolers';
  info: {
    singularName: 'cpu-cooler';
    pluralName: 'cpu-coolers';
    displayName: 'cpu_cooler';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tier: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    nome: Attribute.String & Attribute.Required;
    marca: Attribute.Enumeration<
      [
        'Noctua',
        'Montech',
        'AMD',
        'INTEL',
        'Cooler Master',
        'Corsair',
        'DeepCool',
        'NZXT',
        'Be Quiet!',
        'Thermaltake',
        'Arctic',
        'Deepcool',
        'Scythe',
        'Cryorig',
        'Fractal Design',
        'EVGA',
        'Raijintek',
        'Silverstone',
        'ID-Cooling',
        'Enermax',
        'Antec',
        'Zalman',
        'Phanteks',
        'Akasa'
      ]
    > &
      Attribute.Required;
    tipo: Attribute.Enumeration<['Air Cooler', 'Water Cooler']> &
      Attribute.Required;
    socket_compatibility: Attribute.Component<'socket.socket'> &
      Attribute.Required;
    dimensao_radiador_dissipador: Attribute.Component<'dimensao.dimensao'> &
      Attribute.Required;
    quantidade_ventoinha: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    tdp: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    imagem: Attribute.Media & Attribute.Required;
    radiador_nominal: Attribute.Enumeration<
      [
        'non_radiador',
        'radiador_120',
        'radiador_140',
        'radiador_240',
        'radiador_280',
        'radiador_360'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'non_radiador'>;
    link: Attribute.String;
    preco: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cpu-cooler.cpu-cooler',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cpu-cooler.cpu-cooler',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFonteFonte extends Schema.CollectionType {
  collectionName: 'fontes';
  info: {
    singularName: 'fonte';
    pluralName: 'fontes';
    displayName: 'Fonte';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tier: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    nome: Attribute.String & Attribute.Required;
    marca: Attribute.Enumeration<
      [
        'Adata',
        'Corsair',
        'EVGA',
        'Seasonic',
        'Thermaltake',
        'Cooler Master',
        'Antec',
        'NZXT',
        'Be Quiet!',
        'Silverstone',
        'FSP',
        'XFX',
        'Super Flower',
        'Rosewill',
        'BitFenix',
        'Deepcool',
        'Fractal Design',
        'Aerocool',
        'Cougar',
        'Riotoro',
        'Fortrek'
      ]
    > &
      Attribute.Required;
    potencia_watts: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    selo_eficiencia: Attribute.Enumeration<
      [
        'Generic',
        'PLUS 80 White',
        'PLUS 80 Bronze',
        'PLUS 80 Silver',
        'PLUS 80 Gold',
        'PLUS 80 Platinum',
        'PLUS 80 Titanium'
      ]
    > &
      Attribute.Required;
    tipo: Attribute.Enumeration<['ATX', 'Micro ATX', 'SFX']> &
      Attribute.Required;
    modularidade: Attribute.Enumeration<
      ['Full Modular', 'Semi Modular', 'Non Modular']
    > &
      Attribute.Required;
    conectores_alimentacao: Attribute.Component<'conectores-alimentacao.conectores-alimentacao'>;
    dimensao: Attribute.Component<'dimensao.dimensao'>;
    imagem: Attribute.Media & Attribute.Required;
    link: Attribute.String;
    preco: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fonte.fonte',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fonte.fonte',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGabineteGabinete extends Schema.CollectionType {
  collectionName: 'gabinetes';
  info: {
    singularName: 'gabinete';
    pluralName: 'gabinetes';
    displayName: 'Gabinete';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nome: Attribute.String & Attribute.Required;
    marca: Attribute.Enumeration<
      [
        'Montech',
        'Corsair',
        'NZXT',
        'Cooler Master',
        'Thermaltake',
        'Fractal Design',
        'Phanteks',
        'Be Quiet!',
        'Lian Li',
        'Antec',
        'Silverstone',
        'Deepcool',
        'Cougar',
        'Rosewill',
        'InWin',
        'BitFenix',
        'AeroCool',
        'Raidmax',
        'Xigmatek',
        'Zalman',
        'Chieftec',
        'TGT'
      ]
    > &
      Attribute.Required;
    tipo: Attribute.Enumeration<
      [
        'Full Tower',
        'Mid Tower',
        'Mini Tower',
        'Micro Tower',
        'Mini ITX',
        'Micro ATX',
        'Cube Case',
        'Small Form Factor (SFF)',
        'Ultra Tower'
      ]
    > &
      Attribute.Required;
    placa_mae_compatibility: Attribute.Component<'placa-mae-compatibility.placa-mae-compatibility'>;
    dimensao: Attribute.Component<'dimensao.dimensao'>;
    tipo_fonte: Attribute.Enumeration<['ATX', 'Micro ATX', 'SFX']> &
      Attribute.Required;
    baias_2_5_armazenamento: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    baias_3_5_armazenamento: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    imagem: Attribute.Media & Attribute.Required;
    comprimento_gpu: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    comprimento_psu: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    altura_cpu_cooler: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    radiador_compatibility: Attribute.Component<'radiador-compatibility.radiador-compatibility'> &
      Attribute.Required;
    link: Attribute.String;
    preco: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gabinete.gabinete',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gabinete.gabinete',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMemoriaRamMemoriaRam extends Schema.CollectionType {
  collectionName: 'memoria_rams';
  info: {
    singularName: 'memoria-ram';
    pluralName: 'memoria-rams';
    displayName: 'Mem\u00F3ria Ram';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tier: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    nome: Attribute.String & Attribute.Required;
    marca: Attribute.Enumeration<
      [
        'Corsair',
        'G.Skill',
        'Kingston',
        'Crucial',
        'Patriot',
        'ADATA',
        'TeamGroup',
        'Samsung',
        'PNY',
        'Mushkin',
        'Silicon Power',
        'GeIL',
        'Ballistix'
      ]
    > &
      Attribute.Required;
    tipo_memoria: Attribute.Enumeration<['DDR3', 'DDR4', 'DDR5']> &
      Attribute.Required;
    capacidade_memoria: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 64;
        },
        number
      > &
      Attribute.DefaultTo<4>;
    freq_memoria: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: '0';
        },
        string
      >;
    latencia: Attribute.Enumeration<
      [
        'CL14',
        'CL15',
        'CL16',
        'CL17',
        'CL18',
        'CL19',
        'CL20',
        'CL21',
        'CL22',
        'CL23',
        'CL24',
        'CL25',
        'CL26',
        'CL27',
        'CL28',
        'CL29',
        'CL30',
        'CL31',
        'CL32',
        'CL33',
        'CL34',
        'CL35',
        'CL36',
        'CL37',
        'CL38',
        'CL39',
        'CL40',
        'CL41',
        'CL42',
        'CL43',
        'CL44',
        'CL45',
        'CL46',
        'CL47',
        'CL48',
        'CL49',
        'CL50',
        'CL51',
        'CL52',
        'CL53',
        'CL54'
      ]
    > &
      Attribute.Required;
    formato: Attribute.Enumeration<['DIMM', 'SO-DIMM']> & Attribute.Required;
    perfil_xmp: Attribute.Boolean & Attribute.Required;
    imagem: Attribute.Media & Attribute.Required;
    link: Attribute.String;
    preco: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::memoria-ram.memoria-ram',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::memoria-ram.memoria-ram',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPlacaDeVideoPlacaDeVideo extends Schema.CollectionType {
  collectionName: 'placa_de_videos';
  info: {
    singularName: 'placa-de-video';
    pluralName: 'placa-de-videos';
    displayName: 'Placa de V\u00EDdeo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tier: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    nome: Attribute.String & Attribute.Required;
    plataforma: Attribute.Enumeration<['NVIDIA', 'AMD']> & Attribute.Required;
    marca: Attribute.Enumeration<
      [
        'NVIDIA',
        'AMD',
        'ASUS',
        'MSI ',
        'GALAX',
        'Gigabyte',
        'EVGA',
        'ZOTAC',
        'Sapphire',
        'XFX',
        'PowerColor',
        'PNY',
        'ASRock',
        'Inno3D',
        'Palit',
        'Gainward',
        'Colorful',
        'PCYes'
      ]
    > &
      Attribute.Required;
    chipset: Attribute.String & Attribute.Required;
    memoria: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    interface_memoria: Attribute.Enumeration<
      ['GDDR3', 'GDDR4', 'GDDR5', 'GDDR5X', 'GDDR6', 'GDDR6X']
    > &
      Attribute.Required;
    tdp: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    dimensao: Attribute.Component<'dimensao.dimensao'>;
    imagem: Attribute.Media & Attribute.Required;
    conectores_alimentacao: Attribute.Component<'conectores-alimentacao.conectores-alimentacao'>;
    preco: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    link: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::placa-de-video.placa-de-video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::placa-de-video.placa-de-video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPlacaMaePlacaMae extends Schema.CollectionType {
  collectionName: 'placa_maes';
  info: {
    singularName: 'placa-mae';
    pluralName: 'placa-maes';
    displayName: 'Placa m\u00E3e';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tier: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    nome: Attribute.String & Attribute.Required;
    marca: Attribute.Enumeration<
      [
        'ASUS',
        'MSI',
        'Gigabyte',
        'ASRock',
        'EVGA',
        'Biostar',
        'Zotac',
        'Supermicro',
        'Intel',
        'Colorful'
      ]
    > &
      Attribute.Required;
    socket: Attribute.String & Attribute.Required;
    chipset: Attribute.String & Attribute.Required;
    tipo: Attribute.Enumeration<
      [
        'ATX',
        'Micro_ATX',
        'Mini_ITX',
        'Nano_ITX',
        'Pico_ITX',
        'EATX',
        'XL_ATX',
        'Flex_ATX',
        'WTX',
        'Mini_STX'
      ]
    > &
      Attribute.Required;
    slots_memoria: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 8;
        },
        number
      > &
      Attribute.DefaultTo<2>;
    tipo_memoria: Attribute.Enumeration<['DDR3', 'DDR4', 'DDR5']> &
      Attribute.Required;
    freq_memoria_suportada: Attribute.BigInteger & Attribute.Required;
    slots_pciex16: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    slots_pciex8: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    slots_pciex4: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    conectores_armazenamento_sata: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    conectores_armazenamento_m2: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    saida_video: Attribute.Boolean & Attribute.Required;
    wifi_bluetooth: Attribute.Boolean & Attribute.Required;
    imagem: Attribute.Media;
    slots_pciex1: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    plataforma: Attribute.Enumeration<['AMD', 'Intel']> & Attribute.Required;
    dimensao: Attribute.Component<'dimensao.dimensao'>;
    conectores_alimentacao: Attribute.Component<'conectores-alimentacao.conectores-alimentacao'>;
    preco: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    link: Attribute.String;
    geracoes_compativeis: Attribute.Component<'geracoes.geracoes'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::placa-mae.placa-mae',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::placa-mae.placa-mae',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcessadorProcessador extends Schema.CollectionType {
  collectionName: 'processadores';
  info: {
    singularName: 'processador';
    pluralName: 'processadores';
    displayName: 'Processador';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tier: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    nome: Attribute.String & Attribute.Required;
    plataforma: Attribute.Enumeration<['AMD', 'Intel']> & Attribute.Required;
    familia: Attribute.Enumeration<
      [
        'Ryzen 3',
        'Ryzen 5',
        'Ryzen 7',
        'Ryzen 9',
        'Core i3',
        'Core i5',
        'Core i7',
        'Core i9'
      ]
    > &
      Attribute.Required;
    modelo: Attribute.String & Attribute.Required;
    socket: Attribute.String & Attribute.Required;
    tdp: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    grafico_integrado: Attribute.Boolean & Attribute.Required;
    barramento_ram: Attribute.Enumeration<['DDR3', 'DDR4', 'DDR5']> &
      Attribute.Required;
    frequencia_ram: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: '1';
        },
        string
      >;
    imagem: Attribute.Media;
    preco: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    link: Attribute.String;
    geracao: Attribute.Enumeration<
      [
        'primeira',
        'segunda',
        'terceira',
        'quarta',
        'quinta',
        'sexta',
        'setima',
        'oitava',
        'nona',
        'decima',
        'decima_primeira',
        'decima_segunda',
        'decima_terceira',
        'decima_quarta',
        'decima_quinta'
      ]
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::processador.processador',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::processador.processador',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::armazenamento.armazenamento': ApiArmazenamentoArmazenamento;
      'api::cart.cart': ApiCartCart;
      'api::cpu-cooler.cpu-cooler': ApiCpuCoolerCpuCooler;
      'api::fonte.fonte': ApiFonteFonte;
      'api::gabinete.gabinete': ApiGabineteGabinete;
      'api::memoria-ram.memoria-ram': ApiMemoriaRamMemoriaRam;
      'api::placa-de-video.placa-de-video': ApiPlacaDeVideoPlacaDeVideo;
      'api::placa-mae.placa-mae': ApiPlacaMaePlacaMae;
      'api::processador.processador': ApiProcessadorProcessador;
    }
  }
}
