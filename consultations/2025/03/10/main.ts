// Чи правильно я зрозумів, що перевірка відповідності типів відбувається лише на етапі компіляції?
// Якщо так, то яким чином працює код в рантаймі, як звичайний JS?
// І якщо і це правда то що відбувається при змішуванні типів даних в рантаймі, вибиває помилку чи як і в JS нічого не відбувається?

// function foobar(a: string, b: number): void {
//
// }
//
// foobar(100, 'asdas');


// "Яким чином правильно типізувати подібну струкуру?
// Особливо цікавить поле authors. І чи впринципі це можливо?"

type Author = { name: string, age: number }

type Authors = Author[];

type BookType = {
    title: string;
    pageCount: number;
    genre: string;
    authors: Authors
}


function foobar(book: BookType) {

}


// foobar({})

let arr: (string | number)[];
arr = ['11', '22'];


