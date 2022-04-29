'use strict';

/**
 * olt service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::olt.olt');
