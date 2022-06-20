'use strict';

const { 
    BinarioADecimal,
    counter,
    getNombreInstructor,
    getNombreAlumno,
    sortPaddockTypeByTotalArea,
    sortFarmManagerByAdminArea,
    farmManagerPaddocks,
    newManagerRanking,
    isAncestor
} = require('../index');


describe('#1 BinarioADecimal(num)', function() {
    it('debe retornar 2', function() {
      expect(BinarioADecimal('10')).toBe(2);
    });
    it('debe retornar 7', function() {
      expect(BinarioADecimal('111')).toBe(7);
    });
});


describe('#2 counter', () => {
    it('debe retornar una function', () => {
      expect(typeof counter()).toBe('function');
    });
    it('debe retornar 1 cuando la función es invucada por primera vez', () => {
      expect(counter()()).toBe(1);
    });
    it('debe retornar un numero con un incremento de 1 en cada invocación', () => {
      const counterFunction = counter();
      expect(counterFunction()).toBe(1);
      expect(counterFunction()).toBe(2);
      expect(counterFunction()).toBe(3);
      expect(counterFunction()).toBe(4);
      expect(counterFunction()).toBe(5);
    });
    it('debe retornar diferentes valores cuando se hacer dos ejecuciones de la función', () => {
      const counterOne = counter();
      const counterTwo = counter();
      expect(counterOne()).toBe(1);
      expect(counterOne()).toBe(2);
      expect(counterOne()).toBe(3);
      expect(counterOne()).toBe(4);
      expect(counterTwo()).toBe(1);
      expect(counterTwo()).toBe(2);
    });
});

describe('#3 Bind', function() {
    it('Debe retornar el nombre de HOMER', function() {
      expect(getNombreInstructor()).toEqual('HOMER');
    });
    it('Debe retornar el nombre del alumno "Ethan"', function() {
      expect(getNombreAlumno()).toEqual('Ethan');
    });
});


describe('#4 PaddockTypeByTotalArea', function () {
    it('Debe retornar un arreglo con los nombres de cada cultivo, ordenados decrecientemente', function () {
        expect(sortPaddockTypeByTotalArea()).toMatchObject([ 'AVELLANOS', 'PALTOS', 'CEREZAS', 'NOGALES' ])
    });

    it('El arreglo resultante debe tener la longitud de 4', function () {
        expect(sortPaddockTypeByTotalArea().length).toEqual(4);
    })
})

describe('#5 FarmManagerByAdminArea', function () {
    it('Debe retornar un arreglo con el nombre de los administradores', function () {
        expect(sortFarmManagerByAdminArea()).toMatchObject([
            'OSCAR PEREZ ZUÑIGA',
            'CARLOS PEREZ GONZALEZ',
            'EFRAIN SOTO VERA',
            'JOAQUIN ANDRADE SANDOVAL',
            'JUAN TAPIA BURGOS',
            'ANDRES VIÑALES CIENFUEGOS'
        ])
    });

    it('El arreglo resultante debe tener la longitud de ', function () {
        expect(sortFarmManagerByAdminArea().length).toEqual(6);
    })
});

describe('#6 farmManagerPaddocks', function () {
    it('Las llaves deben de ser el nombre de los administradores', function () {
        expect(Object.keys(farmManagerPaddocks())).toMatchObject([
            'JUAN TAPIA BURGOS',
            'EFRAIN SOTO VERA',
            'CARLOS PEREZ GONZALEZ',
            'ANDRES VIÑALES CIENFUEGOS',
            'OSCAR PEREZ ZUÑIGA',
            'JOAQUIN ANDRADE SANDOVAL'
        ]);
    })

    it('Debe retornar un objeto con el nombre de los administradores', function () {
        expect(farmManagerPaddocks()).toMatchObject({
            'JUAN TAPIA BURGOS': [ 'FORESTAL Y AGRICOLA LO ENCINA', 'VINA SANTA PAULA' ],
            'EFRAIN SOTO VERA': [
              'AGRICOLA SANTA ANA',
              'FORESTAL Y AGRICOLA LO ENCINA',
              'VINA SANTA PAULA'
            ],
            'CARLOS PEREZ GONZALEZ': [
              'AGRICOLA SANTA ANA',
              'FORESTAL Y AGRICOLA LO ENCINA',
              'VINA SANTA PAULA'
            ],
            'ANDRES VIÑALES CIENFUEGOS': [ 'FORESTAL Y AGRICOLA LO ENCINA' ],
            'OSCAR PEREZ ZUÑIGA': [
              'AGRICOLA SANTA ANA',
              'FORESTAL Y AGRICOLA LO ENCINA',
              'VINA SANTA PAULA'
            ],
            'JOAQUIN ANDRADE SANDOVAL': [ 'AGRICOLA SANTA ANA' ]
        });
    });

})

describe('#7 newManagerRanking', function () {
    it('Debe retornar un número', function () {
        expect(!isNaN(newManagerRanking())).toEqual(true)
    });

    it('Debe retornar el ranking #7 del nuevo administrador', function () {
        expect(newManagerRanking()).toEqual(7)
    });
});

describe('#8 isAncestor', function() {
    const genealogyTree = {
      "Mona Simpson": [],
      "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
      "Jacqueline Bouvier": ['Patty Bouvier', 'Marge Simpson', 'Selma Bouvier'],
      "Patty Bouvier": [],
      "Selma Bouvier": ["Ling Bouvier"],
      "Edwina": ["Abigail Simpson"],
      "Lisa Simpson": [],
      "Maggie Simpson": [],
      "Ling Bouvier": [],
      "Abigail Simpson": []
    }
    it('Debería devolver true si la primer persona es ancestro de la segunda', function() {
      expect(isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")).toEqual(true);
    });
    it('Debería devolver false si la primer persona no es ancestro de la segunda', function() {
      expect(isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")).toEqual(false);
    });
    it('No es posible buscar en el sentido inverso', function() {
      expect(isAncestor(genealogyTree, "Maggie Simpson", "Jacqueline Bouvier")).toEqual(false);
    });
});