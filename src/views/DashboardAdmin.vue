<template>
<div>
  Device Unique ID: 
  <input v-model="cihazBilgileri.uid" type="text" placeholder="DUID" class="mb-0" />
  Slave ID: 
  <input v-model="cihazBilgileri.slaid" type="text" placeholder="SID" class="mb-0" />
  IO NAME: 
  <input v-model="cihazBilgileri.dname" type="text" placeholder="IO NAME" class="mb-0" />
  IO VALUE: 
  <input v-model="cihazBilgileri.diginp" type="text" placeholder="IO VALUE" class="mb-0" />
  <button  @click="emir2" color="primary" class="px-4">PUSH ORDER</button>
</div>
<CRow>


  
<CTable responsive="xl">
  <CTableHead>
    <CTableRow>
    <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Master Unique ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Slave Unique ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Master Slave ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Slave Slave ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Master IO Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Slave IO Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Last Value</CTableHeaderCell>
      <CTableHeaderCell scope="col">Description</CTableHeaderCell>
    </CTableRow>
  </CTableHead>

<CTableBody v-for="veri in tableData">
    <CTableRow>
    <CTableHeaderCell scope="row">#</CTableHeaderCell>
    <CTableDataCell>{{veri.ioScriptId}}</CTableDataCell>
      <CTableDataCell>{{veri.masterDeviceUID}}</CTableDataCell>
      <CTableDataCell>{{veri.slaveDeviceUID}}</CTableDataCell>
      <CTableDataCell>{{veri.masterSlaveId}}</CTableDataCell>
      <CTableDataCell>{{veri.slaveSlaveId}}</CTableDataCell>
      <CTableDataCell>{{veri.masterIOName}}</CTableDataCell>
      <CTableDataCell>{{veri.slaveIOName}}</CTableDataCell>
      <CTableDataCell>{{veri.lastValue}}</CTableDataCell>
      <CTableDataCell>{{veri.description}}</CTableDataCell>

    </CTableRow>
    
  </CTableBody>
  </CTable>
  </CRow>
<br>
<br>
<h1>Devices History Logs</h1>
  <CRow>


  
<CTable responsive="xl">
  <CTableHead>
    <CTableRow>
    <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Alert ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Message</CTableHeaderCell>
      <CTableHeaderCell scope="col">DeviceTelemetry ID</CTableHeaderCell>
      
    </CTableRow>
  </CTableHead>

<CTableBody v-for="veri in tableDataOrder">
    <CTableRow>
    <CTableHeaderCell scope="row">#</CTableHeaderCell>
      <CTableDataCell>{{veri.alertId}}</CTableDataCell>
      <CTableDataCell>{{veri.message}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceTelemetryId}}</CTableDataCell>
      

    </CTableRow>
    
  </CTableBody>
  </CTable>
  </CRow>

</template>









<script>

//import data from '@/views/Login'

import axios from 'axios';


export default {
  name: 'Dashboard',
  data() {
    return {
      cihazBilgileri: {
        
      
        uid:null,
        
        slaid:null,
        dname:null,
        diginp:null,
        date:"",
        mid:0
      },
      tableData: [],
      tableDataOrder: [],
      
    };},
  
  components: {
   // data,
    
  },
   methods: {
     
     emir(){
      this.cihazBilgileri.date=new Date()
        this.$appAxios
        .post(`/DeviceTelemetry`, {deviceUID:this.cihazBilgileri.uid, slaveId:this.cihazBilgileri.slaid, 
          messageId:this.cihazBilgileri.mid ,iOName:this.cihazBilgileri.dname,
        value:this.cihazBilgileri.diginp,date:this.cihazBilgileri.date}); 
        alert("Emir Verildi")

      


        
        
        .then(login_response => {
          if (login_response?.data?.length > 0) {
            
            this.tableData=login_response.data;
            
            
          }
           else {
            alert("Kayıtlı Device Yok");
            
          }
        })
        .catch(e => console.log(e));
        
     },
     emir2(){
     this.cihazBilgileri.date=new Date()
      axios.post('http://localhost:3003/ioset',{UID:this.cihazBilgileri.uid, SLAVEID:this.cihazBilgileri.slaid, 
          messageId:this.cihazBilgileri.mid ,DNAME:this.cihazBilgileri.dname,
        DID:this.cihazBilgileri.diginp,date:this.cihazBilgileri.date})
        .then(response => {
          
        }).catch(e => console.log(e));
     },
     refreshIOSData(){
        this.$appAxios
      .get(`/iOScript`) 

      .then(login_response => {
          this.tableData=login_response.data;
          if (login_response?.data?.length > 0) {
            
            //this.tableData=login_response.data;
           // console.log(login_response.data)
            
            
          }
           else {
            alert("Kayıtlı IO Bağlantısı Verisi Bulunamadı !!!");
            
          }
        })
        .catch(e => console.log(e));
       },
       refreshAlertData(){
        this.$appAxios
      .get(`/DeviceAlertTelemetry`) 

      .then(login_response => {
          this.tableDataOrder=login_response.data;
          if (login_response?.data?.length > 0) {
            
            //this.tableData=login_response.data;
           // console.log(login_response.data)
            
            
          }
           else {
            alert("Kayıtlı Alarm Verisi Bulunamadı !!!");
            
          }
        })
        .catch(e => console.log(e));
       }
     
     
  
    
    

    
  },
  
      created: function(){
        this.refreshIOSData();
        this.refreshAlertData();

    }
    
    
 
  
}
</script>
