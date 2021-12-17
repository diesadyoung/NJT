const {
    v4: uuid
  } = require('uuid');
  
  class Price {
    constructor({
      id = uuid(),
      scheduleld = null,
      priceValue = 1400,
      priceCurrency = 'EUR',
      createdAt = new Date(),
      updatedAt = new Date()
    } = {}) {
      this.id = id;
      this.scheduleld = scheduleld;
      this.priceValue = priceValue;
      this.priceCurrency = priceCurrency;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    static toResponse(price) {
      const {
        id,
        scheduleld,
        priceValue,
        priceCurrency,
        createdAt,
        updatedAt
      } = price;
      return {
        id,
        scheduleld,
        priceValue,
        priceCurrency,
        createdAt,
        updatedAt
      };
    }
  }
  
  module.exports = Price;