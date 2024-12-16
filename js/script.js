$(function () {
  localStorage.setItem('sources', JSON.stringify([]));
  $(".checkbox-print").click(function () {
    Swal.fire({
      title: "",
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen(popup) {
        Swal.showLoading();
      },
    });
    let source = localStorage.getItem('sources') == null ? [] : JSON.parse(localStorage.getItem('sources'));
    let src = $(this).parent().find('img').attr('src');
    if (source.includes(src)) {
      source = source.filter(e => e != src);
    } else {
      source.push(src);
    }
    localStorage.setItem('sources', JSON.stringify(source))
    setTimeout(function () {
      Swal.close()
    }, 700)
  })
  $('.btn-print').click(() => {
    let source = localStorage.getItem('sources') == null ? [] : JSON.parse(localStorage.getItem('sources'));
    if (!source.length) {
      alert("画像を選択してください！");
      return;
    }
    window.open('./print.html', '_blank');
  })
});
