// Fungsi untuk mendapatkan nilai dari query string
    function getQueryParameter(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    // Ambil rute dari query string
    const rute = getQueryParameter('rute');

    // Isi input 'route' dengan nilai rute jika ada
    if (rute) {
      const routeInput = document.getElementById('route');
      if (routeInput) {
        routeInput.value = rute;
      }
    }