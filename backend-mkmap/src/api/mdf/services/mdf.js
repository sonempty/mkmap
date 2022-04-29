'use strict';

/**
 * mdf service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mdf.mdf');
