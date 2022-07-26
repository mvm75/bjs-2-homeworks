'use strict'

// Задача 1

function parseCount(count) {
    const result = Number.parseInt(count);
    if (Number.isNaN(result)) {
        throw new Error('Невалидное значение');
    }

    return result;
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}

// Задача 2

class Triangle {
    constructor (a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
           throw new Error('Треугольник с такими сторонами не существует');
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        const getError = function() {
            return 'Ошибка! Треугольник не существует';            
        }

        return {
            getArea: getError,
            getPerimeter: getError,
        }
    }
}