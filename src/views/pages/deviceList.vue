<template>
  <div>
  Device ID: 
  <input v-model="deviceData.deviceid" type="text" placeholder="Device ID" class="mb-0" />
  <button  @click="bilgilerigetir(deviceData.deviceid)" color="primary" class="px-4">FETCH</button>
  <button  @click="sil(deviceData.deviceid)" color="primary" class="px-4">DELETE</button>
  <br>
  <br>
  Key UID:
  <input v-model="deviceData.KeyUID" type="text" placeholder="Key Name" class=" mb-0" />
  Device UID:
  <input v-model="deviceData.DevUID" type="text" placeholder="Uniqe Id" class=" mb-0" />
  <button  @click="searchByName(deviceData.DevUID,deviceData.KeyUID)" color="primary" class="px-4">Search</button>
  <br>
  <br>
  User ID: 
  <input v-model="deviceData.userid" type="text" placeholder="User ID" class=" mb-0" />
  Device UID: 
  <input v-model="deviceData.deviceuid" type="text" placeholder="Device UID" class=" mb-0" />
  Device Name: 
  <input v-model="deviceData.devicename" type="text" placeholder="Device Name" class=" mb-0" />
  Is Active?: 
  <input v-model="deviceData.deviceisactive" type="text" placeholder="IsActive?" class=" mb-0" />
  <button  @click="guncelle(deviceData.deviceid)" color="primary" class="px-4">UPDATE</button>
  <br>
  <br>
  
  
  <!--
    <input v-model="userT.username" type="password" placeholder="Sifre" class=" mb-0" />
  <button @click="kayit" color="primary" class="px-4">Ekle Lo</button>
  -->
</div>


  <CRow>


  
<CTable responsive="xl">
  <CTableHead>
    <CTableRow>
    <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">DeviceID</CTableHeaderCell>
      <CTableHeaderCell scope="col">UserID</CTableHeaderCell>
      <CTableHeaderCell scope="col">DeviceUniqueID</CTableHeaderCell>
      <CTableHeaderCell scope="col">DeviceName</CTableHeaderCell>
      <CTableHeaderCell scope="col">DeviceIsActive?</CTableHeaderCell>
      <CTableHeaderCell scope="col">DeviceCreateTime</CTableHeaderCell>
      <CTableHeaderCell scope="col">DeviceUpdateTime</CTableHeaderCell>
      <CTableHeaderCell scope="col">Options</CTableHeaderCell>
    </CTableRow>
  </CTableHead>

<CTableBody v-for="veri in tableData">
    <CTableRow>
    <CTableHeaderCell scope="row">#</CTableHeaderCell>
      <CTableDataCell>{{veri.deviceId}}</CTableDataCell>
      <CTableDataCell>{{veri.userId}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceUID}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceName}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceIsActive}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceCreateTime}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceUpdateTime}}</CTableDataCell>
      <CTableDataCell>
                          <button type="button"
                            class="btn btn-light mr-1"
                            @click="bilgilerigetir(veri.deviceId)" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                          </button>
                          <button type="button" @click="sil(veri.deviceId)"
                            class="btn btn-light mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                          </button>
      </CTableDataCell>
    </CTableRow>
    
  </CTableBody>
  </CTable>
  </CRow>

</template>


<script>




export default {
  name: 'DeviceList',
  data() {
    return {
      deviceData: {
        DevUID:"",
        KeyUID:"",
        deviceid: null,
        userid: null,
        deviceuid: null,
        devicename: null,
        deviceisactive: null,
        devicecreatetime: null,
        deviceupdatetime: null
      },
      tableData: [],
      userOne: []
    };
  },
  components: {
    
  },
   methods: {
    searchByName(id,uid){
      this.$appAxios
          .get(`/Device/search/`+"uid="+uid+"?deviceuid="+id)
          .then(response => {
            this.userOne=response.data;

            this.addDevData();
            
            
          
        })
        .catch(e => alert(e.response.data));
    }
    ,
       sil(id){
           
          this.$appAxios
          .delete(`/Device/`+id)
          .then(response => {
          
            this.refreshDeviceData();
            
          
        })
        .catch(e => console.log(e));

   

       },


       addDevData(){
        this.deviceData.deviceid = this.userOne.deviceId
            this.deviceData.userid = this.userOne.userId
            this.deviceData.deviceuid = this.userOne.deviceUID
            this.deviceData.devicename = this.userOne.deviceName

            this.deviceData.deviceisactive = this.userOne.deviceIsActive
            this.deviceData.devicecreatetime = this.userOne.devicecreatetime
            this.deviceData.deviceupdatetime = this.userOne.deviceupdatetime
       },

       bilgilerigetir(id){

           
           
          this.$appAxios
          .get(`/Device/`+id)
          .then(response => {
            this.userOne=response.data;

            this.addDevData();
            
            
          
        })
        .catch(e => alert(e.response.data));
        
        
          

   

       },
       guncelle(updateDeviceId){
        if (this.deviceData.deviceisactive==="true"||this.deviceData.deviceisactive==="True"||this.deviceData.deviceisactive===true){
        this.deviceData.deviceisactive=true;
      }
      else if(this.deviceData.deviceisactive==="false"||this.deviceData.deviceisactive==="False"||this.deviceData.deviceisactive===false){
        this.deviceData.deviceisactive=false;
      }
      else{
        alert("Hata IsActive")
      }

           this.deviceData.deviceupdatetime = new Date()
          let value = {deviceId:this.deviceData.deviceid,userId:this.deviceData.userid,
          deviceUID:this.deviceData.deviceuid,deviceName:this.deviceData.devicename,
          deviceIsActive:this.deviceData.deviceisactive,deviceCreateTime:this.deviceData.devicecreatetime,
          deviceUpdateTime:this.deviceData.deviceupdatetime}
          
           this.$appAxios
          .put(`/Device/`+updateDeviceId, value)

            .then(login_response => {
              this.refreshDeviceData();
              alert("Güncelleme işlemi yapıldı")
        })
        .catch(e => console.log(e));
        
       },
       refreshDeviceData(){
        this.$appAxios
        .get(`/Device`)
        .then(login_response => {
          if (login_response?.data?.length > 0) {
            this.tableData=login_response.data;
          }
           else {
            alert("Sistemde Cihaz Bulunmamakta... :(");
          }
        })
        .catch(e => console.log(e));
       }
    
    
    

    
  },
  created: function(){
      this.refreshDeviceData();
    }
  
}
</script>
