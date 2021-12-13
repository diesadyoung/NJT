const {
    v4: uuid
  } = require('uuid');
  
  class Tour {
    constructor({
      id = uuid(),
      title = 'Egypt',
      slug = "Egypt,5Stars,lowPrice",
      description = "Some Text is here!",
      isActive = true,
      createdAt = 02/01/2021,
      updatedAt = 05/02/2021
    } = {}) {
      this.id = id;
      this.title = title;
      this.isActive = isActive;
      this.slug = slug;
      this.description = description;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    static toResponse(tour) {
      const {
        id,
        title,
        isActive,
        slug,
        description,
        createdAt,
        updatedAt
      } = Price;
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
  
  module.exports = Tour;