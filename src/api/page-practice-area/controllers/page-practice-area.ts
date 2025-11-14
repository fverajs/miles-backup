/**
 * page-practice-area controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::page-practice-area.page-practice-area', ({ strapi }) => ({
  async find(ctx) {
    // Allow public access to page-practice-area with deep population of all related data
    const entity = await strapi.entityService.findMany('api::page-practice-area.page-practice-area', {
      ...ctx.query,
      populate: {
        page_header: {
          populate: {
            backgroundImage: true,
            Buttons: {
              populate: '*'
            }
          }
        },
        metadata: {
          populate: '*'
        }
      }
    });
    
    return { data: entity };
  }
}));
