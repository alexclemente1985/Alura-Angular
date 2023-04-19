import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable(
  {
    providedIn: "root"
  }
)
export class UniqueServiceId {

  private numberOfGeneratedIds = 0;

  constructor() { }

  public generatedUniqueIdWithPrefix(prefix: string): string {
    if(!prefix){
      throw Error('Prefix can not be empty');
    }
    const uniqueId = this.generatedUniqueId();

    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generatedUniqueId(): string | null{
    return uuidv4();
  }
}
