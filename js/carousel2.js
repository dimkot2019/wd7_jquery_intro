(function($){

    const defaultConfig = {
      imgWidth: 600,
      imgPadding: 30,
      containerWidth: '80%',
      containerHeight: '400px',
      activeImage: 0,
    }
  
    function formatWidth(val) {
      if (typeof val === 'number') {
        return `${val}px`;
      }
      return config.imgWidth;
    }
  
    $.fn.myCarousel = function (imageList = [], config = defaultConfig) {
  
      console.log('Params', this); // this указывает на элемент выборки
  
      const root = this.addClass('carousel');
  
      const carouselContainer = $('<div>').addClass('carousel__container').appendTo(root);
  
      const carouselList = $('<ul>').addClass('carousel__list').appendTo(carouselContainer);
  
      imageList.forEach((imagePath, index) => {
        const carouselItem = $('<li>').addClass('carousel__item').appendTo(carouselList);
  
        $('<img>')
          .attr('src', imagePath)
          .css({
            width: formatWidth(config.imgWidth)
          })
          .on('load', function () {
            $(this).appendTo(carouselItem);
  
            if (1) {
              // если активная картинка из конфига равна индексу загружаемой картинки
              // тогда делаем для нее выравнивание
              const imgWidth = $(this).width();
              const containerWidth = carouselContainer.width();
              const diff = containerWidth - imgWidth;
  
              $(this).css({
                marginLeft: `${ diff/2 }px`,
                marginRight: `${ diff/2 }px`,
              })
            }
  
          })
          .on('error', () => {
            console.log('Carousel report: failed to load image - ', imagePath)
            $(carouselItem).remove();
          })
      });
  
      const leftBtn = $('<i>').addClass('fas fa-arrow-left').appendTo(carouselContainer);
      const rightBtn = $('<i>').addClass('fas fa-arrow-right').appendTo(carouselContainer);
  
      //////////// PART 2
  
      const imgList = root.find('.carousel__list');
  
      const totalImages = root.find('.carousel__list li').length; // сколько всего картинок в карусели
  
      let currentLeft = 0; // смещение блока с картинками для отображения активной картинки
  
      const oneImageWidth = carouselContainer.width();
  
      let activeImage = 1;
  
      leftBtn.on('click', function() {
        if (activeImage > 1 ) {
          currentLeft += oneImageWidth;
          imgList.animate({ left : `${currentLeft}px`}, 200);
          activeImage--;
        }
      });
  
      rightBtn.on('click', function() {
        if (activeImage < totalImages) {
          currentLeft -= oneImageWidth;
          imgList.animate({ left : `${currentLeft}px`}, 200);
          activeImage++;
        }
      });
    }
  })($);