'use strict';

/**
 * cpu-cooler router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cpu-cooler.cpu-cooler');
