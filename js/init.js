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
          label: 'paypal'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: 'P-0T2408869C774372AL4XMT7Y'
        });
      },
      onApprove: function(data, actions) {
        alertalert('Mensalidade recebida com sucesso ' + data.subscriptionID); // You can add optional success message for the subscriber here
      }
  }).render('#paypal-button-container-P-0T2408869C774372AL4XMT7Y'); // Renders the PayPal button
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });