import { TestBed } from '@angular/core/testing';

import { UniqueServiceId } from './unique-id.service';

describe(UniqueServiceId.name, () => {
  let service: UniqueServiceId;

  beforeEach(async () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueServiceId);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });

  it(`#${UniqueServiceId.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, async () =>{
    //const service = new UniqueIDService();
    const id = service.generatedUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });
  it(`#${UniqueServiceId.prototype.generatedUniqueIdWithPrefix.name} should not generate duplicate ids when called with multiple times`, () => {
    
    const ids = new Set();

    for(let i = 0; i < 50; i++){
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    /**Explicação: Set não permite adicionar string repetida;
     * se isso acontecer, o conjunto terá um número menor de elementos do que o esperado (50)
     */
    expect(ids.size).toBe(50);
  });
  it(`#${UniqueServiceId.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueServiceId.prototype.generatedUniqueIdWithPrefix.name} should throw when called with empty`,  () =>{
    const emptyValues = [null, undefined, '', '0','1'];

    emptyValues.forEach(v => {
      expect(() => service.generatedUniqueIdWithPrefix(v))
      .withContext(`Empty value: ${v}`)
      .toThrow();
    });
  })
});
