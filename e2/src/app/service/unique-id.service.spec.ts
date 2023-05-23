  // import { startWith } from 'rxjs';
  // import { UniqueIdService } from './unique-id.service';

  // describe(UniqueIdService.name, () => {

  //   let service: UniqueIdService

  //   beforeEach(() => {
  //     service = new UniqueIdService()
  //   });

  //   it('should return the number of generatedIds when called', () => {
  //     service.generateUniqueIdWithPrefix('suamae')
  //     service.generateUniqueIdWithPrefix('suamae')
  //     expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
  //   })

  //   it(`should generate id when called with prefix`, () => {
  //     const id = service.generateUniqueIdWithPrefix('suamae')
  //     expect(id.startsWith('suamae')).toBeTrue()
  //   });

  //   it(`should not generate duplicate IDs when called multiple times`, () => {
  //     const ids = []
  //     for(let c = 0; c < 100; c++){
  //       ids.push(service.generateUniqueIdWithPrefix('suamae'))
  //     }
  //     let teste = ids.filter((z, i) => ids.indexOf(z) === i);
  //     expect(teste.length).toBe(ids.length)
  //   });

  //   it(`should throw when called with empty`, () => {
  //     const errors = ['0', '', null, undefined, ' ']
  //     for (let value of errors) {
  //       expect(() => {service.generateUniqueIdWithPrefix(value)}).toThrow()
  //     }
  //   });
  // });
