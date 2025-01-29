const $button = document.getElementById('top_button');
const $form = document.getElementById('form');

$button.addEventListener('click', e => {
    $form.scrollIntoView({ 
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
    });
});


function openPopup() {
    var openPopup = document.querySelector('.popup')
    openPopup.style.display = 'flex'
    openPopup.style.top = '50%'
    openPopup.style.transition = '2s'
}

function closePopup() {
    var closePopup = document.querySelector('.popup')
    closePopup.style.display = 'none'
}



function sendData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerHTML = data;
    });
}













(function($) {
    var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewAfter = $(".view-after");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);
// Если нет желания использовать jQuery UI, который обеспечивает перетаскивание ползунка мышкой, можно его не подключать. В этом случае слайдер будет меняться только по клику на нем мышки. Для этого нужно удалить код:

// $dragMe.draggable({
// 	containment: "parent",
// 	drag: function() {
// 		$viewAfter.css({
// 			width: $(this).css('left')
// 		});
// 	}
// });
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// $dragMe.draggable({
//     containment: "parent",
//     drag: function() {
//         $viewAfter.css({
//             width: $(this).css('left')
//         });
//     }
// });

// $(".zima").hover(function(){
//     animateTo("100%");
// })    
// $(".leto").click(function(){
//     animateTo(-10);
// })