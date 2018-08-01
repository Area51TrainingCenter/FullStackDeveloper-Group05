import { CantanteModule } from './cantante.module';

describe('CantanteModule', () => {
  let cantanteModule: CantanteModule;

  beforeEach(() => {
    cantanteModule = new CantanteModule();
  });

  it('should create an instance', () => {
    expect(cantanteModule).toBeTruthy();
  });
});
