import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const persons = [
      {
        id: 1,
        firstName: 'fir1',
        secondName: 'sec1',
        phone: '1454444',
        adress: 'adress1',
        createAt: new Date()
      },{
        id: 2,
        firstName: 'fir2',
        secondName: 'sec2',
        phone: '1487451',
        adress: 'adress2',
        createAt: new Date()
      },
      {
        id: 3,
        firstName: 'fir3',
        secondName: 'sec3',
        phone: '548765',
        adress: 'adress3',
        createAt: new Date()
      },
      {
        id: 4,
        firstName: 'fir4',
        secondName: 'sec4',
        phone: '4542154',
        adress: 'adress4',
        createAt: new Date()
      },
      {
        id: 5,
        firstName: 'fir5',
        secondName: 'sec5',
        phone: '4587216',
        adress: 'adress5',
        createAt: new Date()
      },
      {
        id: 6,
        firstName: 'fir6',
        secondName: 'sec6',
        phone: '5465745',
        adress: 'adress6',
        createAt: new Date()
      },
      {
        id: 7,
        firstName: 'fir7',
        secondName: 'sec7',
        phone: 'phone7',
        adress: 'adress7',
        createAt: new Date()
      }
    ];
    return {persons};
  }
}
