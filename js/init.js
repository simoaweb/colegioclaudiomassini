(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('select').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space
paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe',
          
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          'plan_id': 'P-0T2408869C774372AL4XMT7Y'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID);
      }
  }).render('#paypal-button-container');
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });