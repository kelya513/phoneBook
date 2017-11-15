import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  // createDb() {
  //   const persons = [
  //     {
  //       id: 1,
  //       firstName: 'fir1',
  //       secondName: 'sec1',
  //       phone: '1454444',
  //       address: 'adress1',
  //       createdAt: new Date()
  //     },{
  //       id: 2,
  //       firstName: 'fir2',
  //       secondName: 'sec2',
  //       phone: '1487451',
  //       address: 'adress2',
  //       createdAt: new Date()
  //     },
  //     {
  //       id: 3,
  //       firstName: 'fir3',
  //       secondName: 'sec3',
  //       phone: '548765',
  //       address: 'adress3',
  //       createdAt: new Date()
  //     },
  //     {
  //       id: 4,
  //       firstName: 'fir4',
  //       secondName: 'sec4',
  //       phone: '4542154',
  //       address: 'adress4',
  //       createdAt: new Date()
  //     },
  //     {
  //       id: 5,
  //       firstName: 'fir5',
  //       secondName: 'sec5',
  //       phone: '4587216',
  //       address: 'adress5',
  //       createdAt: new Date()
  //     },
  //     {
  //       id: 6,
  //       firstName: 'fir6',
  //       secondName: 'sec6',
  //       phone: '5465745',
  //       address: 'adress6',
  //       createdAt: new Date()
  //     },
  //     {
  //       id: 7,
  //       firstName: 'fir7',
  //       secondName: 'sec7',
  //       phone: 'phone7',
  //       address: 'adress7',
  //       createdAt: new Date()
  //     }
  //   ];
  //   return {persons};
  // }
  createDb() {
    const phones = [
      {"id":"171","firstName":"firstName 171","secondName":"secondName 171","phone":"phone 171","address":"address 171","createdAt":1509692449},
      {"id":"172","firstName":"Vasya4rk4r","secondName":"Pupok","phone":"09832342","address":"fwfw","createdAt":"efe"},
      {"id":"174","firstName":"12","secondName":"2","phone":"1234567","address":"fdvff","createdAt":"fdvdvf"},
      {"id":"175","firstName":"sfsfd","secondName":"sdf","phone":"7654321","address":"dfs","createdAt":"sdf"},
      {"id":"176","firstName":"fsdsfsdfsdf","secondName":"sdf","phone":"8876788900","address":"sdcdsc","createdAt":"sdc"},
      {"id":"177","firstName":"Alex","secondName":"Alex","phone":"12345678","address":"ui934rj","createdAt":"r3jrfi3nf"},
      {"id":"178","firstName":"Alex","secondName":"Alex","phone":"6677889","address":"10.10.10","createdAt":"3213123"},
      {"id":"179","firstName":"firstName 179","secondName":"secondName 179","phone":"phone 179","address":"address 179","createdAt":1509943485},
      {"id":"180","firstName":"eewfwefew","secondName":"wefwe","phone":"wefwef","address":"efwf","createdAt":"efew"},
      {"id":"181","firstName":"1","secondName":"2","phone":"3","address":"4","createdAt":"5"},
      {"id":"182","firstName":"tgrg","secondName":"rferg","phone":"1234567","address":"trhrt","createdAt":"rthtrh"},
      {"id":"183","firstName":"firstName 183","secondName":"secondName 183","phone":"phone 183","address":"address 183","createdAt":1509943642},
      {"id":"184","firstName":"ioop","secondName":"llk","phone":"1112334","address":"vdfv","createdAt":"fdvf"},
      {"id":"185","firstName":"alex","secondName":"alex","phone":"5566778","address":"sllkl","createdAt":"1kl"},
      {"id":"186","firstName":"alex","secondName":"alex","phone":"1122334","address":"alex","createdAt":1510034403},
      {"id":"187","firstName":"erg","secondName":"erg","phone":"gre","address":"reg","createdAt":"reg"},
      {"id":"188","firstName":"Alex","secondName":"Alex","phone":"4445566","address":"243243","createdAt":""}
    ];
    return {phones};
  }
}
