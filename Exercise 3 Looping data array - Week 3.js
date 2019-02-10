//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

function dataHandling(input){
  for (i = 0; i < input.length; i++){
      nomor =  ('Nomor ID: ' + input[i][0])
      console.log (nomor)
      nama =  ('Nama Lengkap: ' + input[i][1])
      console.log (nama)
      ttl =  ('TTL: ' + input[i][2] + input[i][3])
      console.log (ttl)
      hobi =  ('Hobi: ' + input[i][4] + '\n')
      console.log (hobi)  
  }
      data = nomor + '\n' + nama + '\n' + ttl + '\n' + hobi
      return data
}
 console.log(dataHandling(input))

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca
