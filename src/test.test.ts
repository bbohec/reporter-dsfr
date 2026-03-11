import { expect, test } from 'vitest';

test('mon test de démonstration', () => {
  expect(1 + 1).toBe(2);
});

test('un test qui échoue pour voir le reporter', () => {
  expect(true).toBe(false);
});