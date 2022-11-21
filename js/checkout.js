var cartList = [];

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())

window.addEventListener('load', function (e) {
  cartList = JSON.parse(localStorage.getItem('cartList')) ?? [];
});

function addCheckoutItems() {
  var totalPrice = 0;
  $("#purchase-item-checkout-list").empty()
  for (var i = 0; i < cartList.length; i++) {
    $("#purchase-item-checkout-list").append(`<li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">${cartList[i].title}</h6>
                <small class="text-muted">${cartList[i].price_cond[0].condition} condition</small>
            </div>
            <span class="text-muted">$${cartList[i].price_cond[0].price.toFixed(2)}</span>
          </li>`);
    totalPrice += cartList[i].price_cond[0].price;
  }
  $("#purchase-item-checkout-list").append(`<li class="list-group-item d-flex justify-content-between">
  <span>Total (CAD)</span>
  <strong>$${totalPrice.toFixed(2)}</strong>
</li>`)
}

$(document).ready(function () {
  cartList = JSON.parse(localStorage.getItem('cartList')) ?? [];
  addCheckoutItems();
});
