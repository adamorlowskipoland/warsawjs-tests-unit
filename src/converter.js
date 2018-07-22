import utilities from './utilities'

class Converter {
  constructor(conversionTable) {
    this.conversionTable = conversionTable;
    console.log('🐟 fish');
  }
  convert(sourceCurrency, targetCurrency, value) {
    if (!this.conversionTable[targetCurrency] || !this.conversionTable[sourceCurrency]) {
      return null;
    }
    const rate = sourceCurrency === targetCurrency ? 1 : this.conversionTable[targetCurrency][sourceCurrency];
    return utilities.toCurr(rate * value);
  }
}

export default Converter;
