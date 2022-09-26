let formValidate = () => {
  let fname = document.getElementById('uName').value
  let mobile = document.getElementById('Pnum').value
  let email = document.getElementById('Email').value
  // let password = document.getElementById('paswd').value

  if (fname == '') {
    document.getElementById('uMessage').innerHTML = 'idiot enter full name'
  } else if (fname.length < 4) {
    document.getElementById('uMessage').innerHTML =
      'Mentalku enter above 5 chartacter'
  }

  if (mobile == '') {
    document.getElementById('umob').innerHTML = 'mental enter mobile number'
  } else if (mobile.length < 10) {
    document.getElementById('umob').innerHTML =
      'dai / di Enter 10 Digits number'
  }

  if (email == '') {
    document.getElementById('uer').innerHTML = 'fool enter mail id'
  } else if (email.indexOf('@') <= 0) {
    document.getElementById('uer').innerHTML =
      'Please provide a valid email address'
  }
  return false
}
