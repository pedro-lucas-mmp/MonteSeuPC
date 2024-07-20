'use strict';

/**
 * cpu-cooler controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cpu-cooler.cpu-cooler');
