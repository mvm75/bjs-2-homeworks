//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *=1.5;
    }

    set state(number) {
        if (number < 0) {
            this.state = 0;
        }

        if (number > 100) {
            this.state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача 2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books =[];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }    
    }
    
    findBookBy(type, value) {
        const book = this.books.find(book => book[type] === value);
        if (book === undefined) {
            return null;
        } else {
            return book;
        }
    }

    giveBookByName(bookName) {
        const indexBook = this.books.findIndex(i => i.name === bookName);
        if (indexBook === -1) {
            return null;
        } else { 
            const book = this.books[indexBook];
            this.books.splice(indexBook, 1);
            return book;
        }
    }
}

//Задача 3

class Student {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.journal = {};
    }   

    addSubject(subject) {
        if (!(subject in this.journal)) {
            this.journal[subject] = [];
        }
    }   

    addMark(mark, subject) {
        this.addSubject(subject);

        if (mark >= 1 && mark <= 5) {
            this.journal[subject].push(mark);
        } else {
            console.log('Ошибка, оценка должна быть числом от 1 до 5');
        }
    }   

    getAverageBySubject(subject) {
        if (!(subject in this.journal)) {
            console.log(`Несуществующий предмет "${subject}"`);
            return;
        }

        return this.journal[subject].reduce((sum, item, idx, arr) => {
            if (idx === arr.length - 1) {
                return + ((sum + item) / arr.length).toFixed(2);
            } else {
                return sum + item;
            }
        }, 0)
    }   

    getAverage() {
        const count = Object.entries(this.journal).reduce((sum, item) => sum + item[1].length, 0);
        const  sum = Object.entries(this.journal).reduce((sum, item) => sum + item[1].reduce((sum, item) => sum + item, 0), 0);

        return + (sum / count).toFixed(2);
    }   

    exclude(reason) {
        delete this.journal;
        this.excluded = reason;
    }   
} 