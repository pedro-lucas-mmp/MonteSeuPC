'use strict';

/**
 * armazenamento service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::armazenamento.armazenamento');
