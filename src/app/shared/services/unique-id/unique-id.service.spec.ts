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

    expect(id).toContain('app-');
  })
});
