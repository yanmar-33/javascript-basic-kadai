//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.querySelector("#btn");

//textというid遠持つHTML要素を取得し、定数に代入する
const text = document.querySelector("#text");
console.log(text);

//HTML要素がクリックされた時にイベントを処理する
btn.addEventListener('click', () =>{


    //textの文字を編集する
    text.textContent = 'ボタンがクリックされました。';
    
    
    });




