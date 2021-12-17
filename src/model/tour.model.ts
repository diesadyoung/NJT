import {
    v4 as uuid
  } from 'uuid';

import {ITour, IBaseTourPartial, IBaseTourResponse} from '../interface/tour.interface';
  
  class Tour {
      id: string;
      title: string;
      slug: string;
      description: string;
      isActive:boolean;
      createdAt = new Date();
      updatedAt = new Date();

      constructor({
         title = 'Egypt',
         slug = "Egypt,5Stars,lowPrice",
         description = "Some Text is here!",
         isActive = true,
         createdAt = new Date(),
         updatedAt = new Date()
      }: IBaseTourPartial = {}) {
      this.id = uuid();
      this.title = title;
      this.isActive = isActive;
      this.slug = slug;
      this.description = description;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    static toResponse(tour: ITour): IBaseTourResponse {
      const {
        id,
        title,
        isActive,
        slug,
        description,
        createdAt,
        updatedAt
      } = tour;
      return {
        id,
        title,
        isActive,
        slug,
        description,
        createdAt,
        updatedAt
      };
    }
  }
  
export default Tour;