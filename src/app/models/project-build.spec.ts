import { ProjectBuild } from './project-build';

describe('ProjectBuild', () => {
  let model;
  it('has required properties ', () => {
    model = new ProjectBuild('honey bee', '0xabcdefg');
    expect(model.name).toBe('honey bee');
    expect(model.id).toBe('0xabcdefg');
  });
});
