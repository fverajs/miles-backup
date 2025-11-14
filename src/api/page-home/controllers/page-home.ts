/**
 * page-home controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::page-home.page-home', ({ strapi }) => ({
  async find(ctx) {
    // Default deep populate so clients don't need to pass query params
    const defaultPopulate = '*';

    const query = {
      ...ctx.query,
      populate: ctx.query?.populate ?? defaultPopulate,
    };

    const entity = await strapi.entityService.findMany('api::page-home.page-home', query);

    return { data: entity };
  }
}));
