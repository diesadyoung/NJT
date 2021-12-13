const {
    v4: uuid
  } = require('uuid');
  
  class Schedule {
    constructor({
      id = uuid(),
      productId = '1',
      isActive = true,
      startDate = 10/02/2021,
      endDate = 24/02/2021,
      createdAt = 02/01/2021,
      updatedAt = 05/02/2021
    } = {}) {
      this.id = id;
      this.productId = productId;
      this.isActive = isActive;
      this.startDate = startDate;
      this.endDate = endDate;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    static toResponse(schedule) {
      const {
        id,
        productId,
        isActive,
        startDate,
        endDate,
        createdAt,
        updatedAt
      } = Price;
      return {
        id,
        productId,
        isActive,
        startDate,
        endDate,
        createdAt,
        updatedAt
      };
    }
  }
  
  module.exports = Schedule;