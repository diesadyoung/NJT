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
      createdAt = new Date(),
      updatedAt = new Date()
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
  
  module.exports = Tour;