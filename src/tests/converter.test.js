import Converter from '../converter';
import Mocks from '../mocks';

test('Converter converts source to target value', () => {
  const conversionTable = Mocks.currenciesTable;
  const wjsConverter = new Converter(conversionTable);
  expect(wjsConverter.convert('usd', 'pln', 100)).toBe('359.00');
  expect(wjsConverter.convert('pln', 'usd', 1)).toBe('0.28');
  expect(wjsConverter.convert('gbp', 'pln', 100)).toBe('462.00');
  expect(wjsConverter.convert('pln', 'chf', 100)).toBe('27.00');
  expect(wjsConverter.convert('eur', 'gbp', 1)).toBe('0.92');
  expect(wjsConverter.convert('eur', 'eur', 1)).toBe('1.00');
  expect(wjsConverter.convert('eur', 'yen', 10)).toBeNull();
});