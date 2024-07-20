'use strict';

/**
 * memoria-ram router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::memoria-ram.memoria-ram');
