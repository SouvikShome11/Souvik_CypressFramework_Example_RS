import shopPage from '../PageObject/shopPage';

class Util {
  getCartTotal() {
    const totalCartPrice = 0;
    shopPage
      .getEachCartItemPrice()
      .each(($el, index, $list) => {
        let actualPrice = $el.text();
        actualPrice = this.getPriceInInteger(actualPrice);
        totalCartPrice += actualPrice;
        cy.log(totalCartPrice);
      })
      .then(function (totalCartPrice) {
        cy.log(totalCartPrice);
        return totalCartPrice;
      });
  }

  getPriceInInteger(priceInString) {
    const regex = /\d+/;
    const match = priceInString.match(regex);
    if (match) {
      const actualPriceInInt = parseInt(match[0], 10);
      return actualPriceInInt;
    } else {
      console.log('No match found');
      return 0;
    }
  }
}

export default Util;
