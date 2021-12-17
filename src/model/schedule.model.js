const {
    v4: uuid
  } = require('uuid');
  
  class Schedule {
    constructor({
      id = uuid(), 
      productId = '1',
      isActive = true,
      startDate = new Date(),
      endDate = new Date(),
      createdAt = new Date(),
      updatedAt = new Date()
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
      } = schedule;
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