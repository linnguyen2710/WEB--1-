// POPUP NAME 

(async () => {
  const { value: name } = await Swal.fire({
    title: 'Chúng tớ có thể gọi cậu là?',
    input: 'text',
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'Đừng bỏ trống nhé!'
      }
    }
  });
    if (name) {
      Swal.fire(`Hãy tận hưởng nhé, ${name}!`);
    }
  
})();


// popup welcom 
var button = document.getElementById('myButton');

// Thêm sự kiện click vào button
button.addEventListener('click', function() {
  // Swal.fire được gọi khi button được click
  Swal.fire({
    title: 'Welcome to our world..',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `  }).then((result) => {
        if (result.isConfirmed) {
          // Chuyển hướng sang trang index.html
          window.location.href = 'index.html';
        }
  });
});
