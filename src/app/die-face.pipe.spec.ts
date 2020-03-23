import { DieFacePipe } from './die-face.pipe';

describe('DieFacePipe', () => {
  it('create an instance', () => {
    const pipe = new DieFacePipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe = new DieFacePipe();
    expect(pipe).toBeTruthy();
  });

  it('convert dice roll value', () => {
    const pipe = new DieFacePipe();
    expect([0, 1, 2, 3, 4, 5, 6, 7].map(value => pipe.transform(value))).toEqual(
      [0, '⚀', '⚁', '⚂', '⚃', '⚄', '⚅', 7]
    );
  });

});
