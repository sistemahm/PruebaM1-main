const {
    obtenerMayor,
    mayoriaDeEdad,
    conection,
    saludo,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    multiplicarArgumentos,
    empiezaConNueve
} = require('../index');

describe('obtenerMayor(x, y)', function() {
    it('should return x if it is larger than y', function() {
      expect(obtenerMayor(10, 5)).toBe(10);
    });
    it('should return y if it is larger than x', function() {
      expect(obtenerMayor(50, 100)).toBe(100);
    });
    it('should return either one if they are the same', function() {
      expect(obtenerMayor(1000, 1000)).toBe(1000);
    });
});

describe('mayoriaDeEdad(edad)', function() {
    it('should return \'Allowed\'if edad is equal or greater than 18', function() {
      expect(mayoriaDeEdad(18)).toBe('Allowed');
      expect(mayoriaDeEdad(35)).toBe('Allowed');
    });
    it('should return \'Not allowed\'if edad is less than 18', function() {
      expect(mayoriaDeEdad(7)).toBe('Not allowed');
    });
});

describe('conection(status)', function() {
    it('should return the conection state of user', function() {
      expect(conection(1)).toBe('Online');
      expect(conection(2)).toBe('Away');
      expect(conection(3)).toBe('Offline');
      expect(conection()).toBe('Offline');
    });
});

describe('saludo(idioma)', function() {
    it('should return \'Guten Tag!\' for aleman', function() {
      expect(saludo('aleman')).toBe('Guten Tag!');
    });
    it('should return \'Hola!\' for ingles', function() {
      expect(saludo('ingles')).toBe('Hello!');
    });
    it('should return \'Ni Hao!\' for mandarin', function() {
      expect(saludo('mandarin')).toBe('Ni Hao!');
    });
    it('should return \'Hola!\' if no argument is passed in or if a idioma beyond ingles, mandarin, and aleman is passed in.', function() {
      expect(saludo('frances')).toBe('Hola!');
      expect(saludo()).toBe('Hola!');
    });
});

describe('fizzBuzz(num)', function() {
    it('should return fizz if divisible by 3', function() {
      expect(fizzBuzz(9)).toBe('fizz');
    });
    it('should return buzz if divisible by 5', function() {
      expect(fizzBuzz(10)).toBe('buzz');
    });
    it('should return fizzbuzz if divisible by 3 and 5', function() {
      expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('should return num if not divisible by 3 or 5', function() {
      expect(fizzBuzz(4)).toBe(4);
    });
});

describe('operadoresLogicos(num1, num2, num3)', function() {
    it('should return \'Número 1 es mayor y positivo\' if num1 is positive and if it is greater than num2 and num3', function() {
      expect(operadoresLogicos(50, 2, 15)).toBe('Número 1 es mayor y positivo');
    });
    it('should return \'Hay negativos\' if any of the arguments are negative', function() {
      expect(operadoresLogicos(80, -1, 2)).toBe('Hay negativos');
    });
    it('should return num3 + 1 if num3 is greater than num1 and num2', function() {
      expect(operadoresLogicos(1, 3, 10)).toBe(11);
    });
    it('should return \'Error\' if any of the arguments are equal 0', function() {
      expect(operadoresLogicos(1, 0, 10)).toBe('Error');
    });
    it('should return false if none of the conditions are met', function() {
      expect(operadoresLogicos(10, 30, 6)).toBe(false);
    });
});

describe('esPrimo(num)', function() {
    it('should return true if num is prime', function() {
      expect(esPrimo(7)).toBe(true);
      expect(esPrimo(97)).toBe(true);
      expect(esPrimo(11)).toBe(true);
    });
    it('should return false if num is not prime', function() {
      expect(esPrimo(9)).toBe(false);
      expect(esPrimo(4)).toBe(false);
      expect(esPrimo(10)).toBe(false);
      expect(esPrimo(100)).toBe(false);
      expect(esPrimo(0)).toBe(false);
      expect(esPrimo(1)).toBe(false);
    });
});

describe('multiplicarArgumentos()', function () {
    it('should return the product of all the arguments', function () {
      const product = multiplicarArgumentos(5, 5);
      const product2 = multiplicarArgumentos();
      const product3 = multiplicarArgumentos(3, 3, 3, 3);
      const product4 = multiplicarArgumentos(1);
      const product5 = multiplicarArgumentos(10, 0, 10);
      expect(product).toBe(25);
      expect(product2).toBe(0);
      expect(product3).toBe(81);
      expect(product4).toBe(1);
      expect(product5).toBe(0);
    });
});

describe('empiezaConNueve(n))', function() {
    it('should return true or false in case the received number starts with nine', function() {
      expect(empiezaConNueve(98)).toBe(true);
      expect(empiezaConNueve(9)).toBe(true);
      expect(empiezaConNueve(2)).toBe(false);
      expect(empiezaConNueve(7)).toBe(false);
      expect(empiezaConNueve(-5)).toBe(false);
    });
});
