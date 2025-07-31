function tampilkanHasil() {
  const tanggal = new Date().toLocaleString();
  const hasilWindow = window.open("", "_blank");
  const persen = Math.round((score / quizData.length) * 100);
  const status = score >= 35 ? "✅ LULUS" : "❌ TIDAK LULUS";
  const warnaStatus = score >= 35 ? "green" : "red";

  hasilWindow.document.write(`
    <html>
    <head>
      <title>Hasil Kuis</title>
      <style>
        body { font-family: sans-serif; padding: 2rem; background: #f5f5f5; }
        .hasil {
          background: white;
          padding: 2rem;
          max-width: 500px;
          margin: auto;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        h2 { text-align: center; color: #4caf50; }
        p { font-size: 1.1rem; }
        .status { font-weight: bold; color: ${warnaStatus}; font-size: 1.3rem; }
      </style>
    </head>
    <body>
      <div class="hasil">
        <h2>Hasil Kuis</h2>
        <p><strong>Nama:</strong> ${namaPengguna}</p>
        <p><strong>Umur:</strong> ${umurPengguna} tahun</p>
        <p><strong>Tanggal:</strong> ${tanggal}</p>
        <p><strong>Jumlah Benar:</strong> ${score} dari ${quizData.length} soal</p>
        <p><strong>Skor:</strong> ${persen}%</p>
        <p class="status"><strong>Status:</strong> ${status}</p>
      </div>
    </body>
    </html>
  `);
  hasilWindow.document.close();
}
