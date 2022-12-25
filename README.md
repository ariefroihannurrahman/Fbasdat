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
  
  
  
