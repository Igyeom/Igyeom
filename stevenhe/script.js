var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
var alertTrigger2 = document.getElementById('liveAlertBtnn')
var alertTrigger3 = document.getElementById('liveAlertBtnnn')
var id = -1

function alert(message, type) {
  id += 1
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert" id="alert-' + id + '">' + message + '<button type="button" class="btn-close" onclick="document.getElementById(\'alert-' + id + '\').hidden = true;" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Successfully added to cart. Happy shopping!', 'success')
  })
}

if (alertTrigger2) {
  alertTrigger2.addEventListener('click', function () {
    alert('Successfully added to cart. Happy shopping!', 'success')
  })
}

if (alertTrigger3) {
  alertTrigger3.addEventListener('click', function () {
    alert('Successfully added to cart. Happy shopping!', 'success')
  })
}