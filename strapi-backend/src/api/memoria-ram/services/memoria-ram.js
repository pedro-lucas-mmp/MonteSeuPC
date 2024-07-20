'use strict';

/**
 * memoria-ram service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::memoria-ram.memoria-ram');
