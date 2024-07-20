'use strict';

/**
 * cpu-cooler service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cpu-cooler.cpu-cooler');
