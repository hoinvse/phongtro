var Mobilepenel = {
    init : function (){
        this.toggleMobilepanel();
    },
    toggleMobilepanel()
    {
        let $body = $('body'),
            $mobilepenel = $('.mobile-panel'),
            $backdrop = $('.panel-backdrop');
        $body.on('click', '.js-mobile-panel', function(){
            $mobilepenel.addClass('mobile-panel-active');
            $body.addClass('body-mb-active');
            $backdrop.addClass('backdrop-active');
        });
        $body.on('click', '.panel-backdrop', function(){
            $mobilepenel.removeClass('mobile-panel-active');
            $body.removeClass('body-mb-active');
            $backdrop.removeClass('backdrop-active');
        });
    },
};

$( function (){
    Mobilepenel.init()
});
