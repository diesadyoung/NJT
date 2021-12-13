const {
    v4: uuid
  } = require('uuid');
  
  class Price {
    constructor({
      id = uuid(),
      scheduleld = '1',
      priceValue = 1400,
      priceCurrency = EUR,
      createdAt = 02/01/2021,
      updatedAt = 05/02/2021
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
      } = Price;
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