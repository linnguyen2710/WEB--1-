
document.getElementById('sign').addEventListener('click', function() {
    redirectToLogin();
  });
  
  // POPUP Signup
  function redirectToLogin() {
    if (!Swal.isVisible()) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed up successfully'
      })
    }
  
    // Chuyển hướng đến trang menu.html
    setTimeout(function() {
      window.location.href = './Login.html';
    }, 2000);
  }
  
  