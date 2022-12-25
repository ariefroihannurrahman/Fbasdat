# Dokumentasi Splunk

*Download Image Splunk untuk docker dengan cara membuka terminal lalu masukan

  ```sh
  $ docker pull splunk/splunk:latest
  ```
  
  *lalu buat container menggunakan command
  
  
  ```sh
  $ docker run -d -p 8000:8000 -e "SPLUNK_START_ARGS=--accept-license" -e "SPLUNK_PASSWORD=<password>" --name splunk splunk/splunk:latest
  ```
  
  <password> diganti menyesuaikan kebutuhan
  
 *Setelah container dibuat lalu run container tersebut
  
 *Setelah container di run masuk ke splunk web lalu akan mun cul tampilan berikut 
  ![image](https://user-images.githubusercontent.com/114714669/209470847-651cc0c6-a2d4-4a61-b4ab-41f6ca477ad5.png)
 masukan username admin lalu password sesuai dengan yang kita buat
  
  *Setelah Login akan muncul tampilan berikut
  https://github.com/ariefroihannurrahman/Fbasdat.git
  
  Lalu Klik Add data kemudian pilih yang monitor maka akan muncul tampilan berikut
  ![image](https://user-images.githubusercontent.com/114714669/209471071-628bbcc7-32e6-47f8-b4fe-7115bb214d7f.png)
  
  Kemudian pilih REST maka akn muncul tampilan seperti dibawah
  ![image](https://user-images.githubusercontent.com/114714669/209471122-1a967240-88e3-47bc-9747-e8bf06b0cac5.png)
Isi form sesuai dengan kebutuhan lalu klik Next maka akan muncul tampilan :
  ![image](https://user-images.githubusercontent.com/114714669/209471200-0e4d694c-ccfe-4cfa-8108-8a9dba55966d.png)
Lalu kemudian kita klik start searching maka akan diarahkan ke halaman berikut 
  ![image](https://user-images.githubusercontent.com/114714669/209471237-575aa971-71de-4bad-9635-b070fc96d25e.png)
pada kolom search ketikan inputan untuk mencari data contoh nya seperti berikut 
  ![image](https://user-images.githubusercontent.com/114714669/209471258-48b2ce0c-2df3-4b49-bcb1-cd77cd1d699b.png)
lalu klik search maka akan tampil event event yang berkaitan dengan yang kita input 
  ![image](https://user-images.githubusercontent.com/114714669/209471295-6e087190-8363-42da-bfaa-318c96ede7c1.png)

  
  
  
