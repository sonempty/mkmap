'use strict';

/**
 * closure service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::closure.closure');
