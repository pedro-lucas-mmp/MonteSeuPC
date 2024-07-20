'use strict';

/**
 * processador service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processador.processador');

