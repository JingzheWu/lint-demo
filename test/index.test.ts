import { sum } from '../src';

/**
 * 单测示例
 * @author JingzheWu
 */
describe('index.ts 单元测试', () => {
  it('sum', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
