document.addEventListener('DOMContentLoaded', () => {
  const orderBtn = document.getElementById('orderBtn');
  const cartButtons = document.querySelectorAll('.add-cart');

  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      alert('Terima kasih! Silakan hubungi kami via WhatsApp 💕');
    });
  }

  cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Produk ditambahkan ke keranjang 🧁');
    });
  });
});
