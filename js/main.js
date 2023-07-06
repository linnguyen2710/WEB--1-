// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");

menuButton.addEventListener('click', () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
});

const btnOpen = document.querySelector(".banner__btn");
const btnOpen1 = document.querySelector(".podcast__btn");
const btnOpen2 = document.querySelector(".mess__btn");
const btnOpen3 = document.querySelector(".diary__btn");
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const iconClose = document.querySelector(".fa-solid fa-xmark");



btnOpen.addEventListener('click', () => {
    modal.classList.toggle('hide');
    iconClose.classList.toggle('hide');
});

modal.addEventListener('click', function(e){
    if(e.target = e.currentTarget){
        modal.classList.toggle('hide')
    }
})

btnOpen1.addEventListener('click', () => {
  modal1.classList.toggle('hide');
  iconClose.classList.toggle('hide');
});

modal1.addEventListener('click', function(e){
  if(e.target = e.currentTarget){
      modal1.classList.toggle('hide')
  }
})

btnOpen2.addEventListener('click', () => {
  modal2.classList.toggle('hide');
  iconClose.classList.toggle('hide');
});

modal2.addEventListener('click', function(e){
  if(e.target = e.currentTarget){
      modal2.classList.toggle('hide')
  }
})

btnOpen3.addEventListener('click', () => {
  modal3.classList.toggle('hide');
  iconClose.classList.toggle('hide');
});

modal3.addEventListener('click', function(e){
  if(e.target = e.currentTarget){
      modal3.classList.toggle('hide')
  }
})

const container = document.querySelector(".modal-body");
const container1 = document.querySelector(".modal-body1");
const cards = document.querySelector(".cards");
const card = document.querySelector(".cards1");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

/* keep track of user's mouse down and up */
let isPressedDown1 = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace1;

container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
    container.style.cursor = "grabbing";
});

container1.addEventListener("mousedown", (e) => {
  isPressedDown1 = true;
  cursorXSpace1 = e.offsetX - card.offsetLeft;
  container1.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
    container.style.cursor = "grab";
});

container1.addEventListener("mouseup", () => {
  container1.style.cursor = "grab";
});
  
  window.addEventListener("mouseup", () => {
    isPressedDown = false;
  });

  window.addEventListener("mouseup", () => {
    isPressedDown1 = false;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXSpace}px`;
    boundCards();
  });

  container1.addEventListener("mousemove", (e) => {
    if (!isPressedDown1) return;
    e.preventDefault();
    card.style.left = `${e.offsetX - cursorXSpace1}px`;
    boundCards();
  });

  function boundCards() {
    const container_rect = container.getBoundingClientRect();
    const container1_rect = container1.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();
    const card_rect = card.getBoundingClientRect();
  
    if (parseInt(cards.style.left) > 0) {
      cards.style.left = 0;
    } else if (cards_rect.right < container_rect.right) {
      cards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }

    if (parseInt(card.style.left) > 0) {
      card.style.left = 0;
    } else if (cards_rect.right < container1_rect.right) {
      cards.style.left = `-${cards_rect.width - container1_rect.width}px`;
    }
  }

  



  var form = document.getElementById('login-form');
  
  // Thêm sự kiện submit cho form
  form.addEventListener('submit', function(event) {
    // Ngăn chặn hành động mặc định của form (không gửi đi và tải lại trang)
    event.preventDefault();
    // Kiểm tra trạng thái hiển thị của pop-up
    if (!Swal.isVisible()) {
      // Hiển thị pop-up thành công
      document.getElementById('login').addEventListener('click', function() {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Đăng nhập thành công!',
        showConfirmButton: false,
        timer: 1500
      })
      });
   
    
    // Gọi hàm xử lý dữ liệu hoặc thực hiện các hành động khác
    processData();
    }
  });
  
  // Hàm xử lý dữ liệu form
  function processData() {
     // Xử lý dữ liệu form
     var name = form.elements.name.value;
     var password = form.elements.password.value;
    // Xử lý dữ liệu form theo ý muốn
    console.log('Tên:', name);
    console.log('Mật khẩu:', password);
    
    // Chuyển hướng tới trang khác (nếu cần)
    
    window.location.href = './index.html';
  }

  document.getElementById('login').addEventListener('click', function() {
    window.location.href = './index.html';
  });

  document.getElementById('sign').addEventListener('click', function() {
    redirectToLogin();
  });
 
  // POPUP SIGNUP
  function redirectToSign() {
    if (!Swal.isVisible()) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Đăng kí thành công!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  
    // Chuyển hướng đến trang Login.html
    setTimeout(function() {
      window.location.href = './Login.html';
    }, 2000);
  }


  
  document.getElementById('login').addEventListener('click', function() {
    redirectToLogin();
  });
 
  // POPUP Login
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
        title: 'Signed in successfully'
      })
    }
  
    // Chuyển hướng đến trang menu.html
    setTimeout(function() {
      window.location.href = './menu.html';
    }, 2000);
  }
  

  function playSound() {
    var audio = document.getElementById("audio");
    audio.play();
  }




     