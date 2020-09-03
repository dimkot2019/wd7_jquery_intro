const img1 = $('<img>', {
    src: '/img/kitty.png',
    alt: 'Изображение кошки',
    title: 'Котейка',
    click: () => console.log('Клик по изображению кошки')
  }).css({
    cursor: 'pointer',
    border: '1px solid #asd908',
    padding: '10px',
    width: '350px'
  });
  
  const img2 = $('<img>', { // альтернативный вариант добавления CSS-свойств
    src: '/img/kitty.png',
    alt: 'Изображение кошки',
    title: 'Котейка',
    click: () => console.log('Клик по изображению кошки')
  }).addClass('kitty');
  
  $('#content').append(img2); // appendChild
  
  console.log('IMG', img2);
  
  // все делаем через jQuery
  // 1) создать заголовок h1 с текстом Hello jQuery и прикрепить его к body
  // 2) создать <div> внутри которого будет тег <p> с произвольным текстом новости, а так же
  // картинка (произвольная), для картинки задать стили: ширина, высота, бордюр, прозрачность 0.5
  // 3) в конце (после картинки добавить кнопку <button> с текстом  done! и обработчиком события
  // при клике на кнопку - вывести в косоль Hellow
  
  
  // const elements = $();
  
  $('#content').append($('<h1>Hello jQuery!!!</h1>'));
  $('#content').append($('<div>The .append() and .appendTo() methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With .append(), the selector expression preceding the method is the container into which the content is inserted. With .appendTo(), </div>'));
  $('#content').append($('<button>Done!</button>'))
  //$('#content').append($('<button></button>', {
    //   type: 'button',
    //   text: 'Hello',
    //   click: () => console.log('Hellow')
    // }))
  
  $('#content').find('div').append($('<img>', {src: '/img/kitty.png'}).addClass('kitty'));
  $('#content').find('div').append($('<p>Какой-то интересный текст про котиков</p>'));
  $('#content').find('button').click(function() {
      $('p').remove(":contains('Какой-то интересный текст про котиков')");
      $('#content').find('div').append($('<p>Какой-то </p>'))});