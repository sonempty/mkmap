'use strict';

/**
 * closure router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::closure.closure');
