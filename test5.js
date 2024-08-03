function PrintDataSiswa(data) {
    for (let i = 0; i < data.students.length; i++) {
      let siswa = data.students[i];
      console.log(`# Siswa ${i + 1}`);
      console.log(` - no: ${siswa[0]}`);
      console.log(` - nama: ${siswa[1]}`);
      console.log(` - tempat, tanggal lahir: ${siswa[2]}, ${formatTanggal(siswa[3])}`);
      console.log(` - hobi: ${Array.isArray(siswa[4]) ? siswa[4].join(", ") : siswa[4]}`);
      console.log();
    }
  }
  
  function formatTanggal(tanggal) {
    const bulan = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    let [day, month, year] = tanggal.split("/");
    return `${day} ${bulan[parseInt(month) - 1]} ${year}`;
  }
  
  const data = {
    students: [
      ["0001", "Ade Alamsyah", "Jakarta", "21/05/2000", ["Membaca", "melukis", "menari"]],
      ["0002", "Roman Alamsyah", "Bandung", "15/01/1996", "Sepak bola"],
      ["0003", "Ira Alamsyah", "Bandar Lampung", "01/08/1999", ["Memasak", "berkebun"]],
    ],
    total: 3,
  };
  
  PrintDataSiswa(data);
  