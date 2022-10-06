<template>
  <div>
  Conn ID: 
  <input v-model="connData.connid" type="text" placeholder="Conn ID" class="mb-0" />
  <!--<button  @click="gotoconn" color="primary" class="px-4">GotoConn</button> -->
  <button  @click="bilgilerigetir(connData.connid)" color="primary" class="px-4">Fetch</button>
  <button  @click="sil(connData.connid)" color="primary" class="px-4">Delete</button>
  <br>
  Master Device UID: 
  <input v-model="connData.keyuid" type="text" placeholder="MASTER DUID" class=" mb-0" />
  Key: 
  <input v-model="connData.keysearch" type="text" placeholder="SLAVE DUID" class=" mb-0" />
  <button  @click="bilgilerigetirname(connData.keysearch,connData.keyuid)" color="primary" class="px-4">Search</button>
  <br>
  Master Device UID: 
  <input v-model="connData.masteruid" type="text" placeholder="MASTER DUID" class=" mb-0" />
  Slave Device UID: 
  <input v-model="connData.slaveuid" type="text" placeholder="SLAVE DUID" class=" mb-0" />
  Master Slave ID: 
  <input v-model="connData.mastersid" type="text" placeholder="MASTERSID" class=" mb-0" />
  <br>
  Slave Slave ID: 
  <input v-model="connData.slavesid" type="text" placeholder="SLAVESID" class=" mb-0" />
  Master IO Name: 
  <input v-model="connData.mioname" type="text" placeholder="MIONAME" class=" mb-0" />
  Slave IO Name: 
  <input v-model="connData.sioname" type="text" placeholder="SIONAME" class=" mb-0" />
  <br>
  Last Value: 
  <input v-model="connData.lastvalue" type="text" placeholder="LastValue" class=" mb-0" />
  Description: 
  <input v-model="connData.descript" type="text" placeholder="Description" class=" mb-0" />
  <button  @click="guncelle(connData.connid)" color="primary" class="px-4">Update</button>
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
      <CTableHeaderCell scope="col">ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Master Unique ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Slave Unique ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Master Slave ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Slave Slave ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Master IO Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Slave IO Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Last Value</CTableHeaderCell>
      <CTableHeaderCell scope="col">Description</CTableHeaderCell>
      <CTableHeaderCell scope="col">Options</CTableHeaderCell>
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
      <CTableDataCell>
                          <button type="button"
                            class="btn btn-light mr-1"
                            @click="bilgilerigetir(veri.ioScriptId)" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                          </button>
                          <button type="button" @click="sil(veri.ioScriptId)"
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
  name: 'ConnList',
  data() {
    return {
      connData: {
        keysearch:"",
        keyuid:"",
        connid: null,
        masteruid: null,
        slaveuid: null,
        mastersid: null,
        slavesid: null,
        mioname: null,
        sioname: null,
        lastvalue: null,
        descript:null
      },
      tableData: [],
      userOne: []
    };
  },
  components: {
    
  },
   methods: {


     /////////////////////////////////////
      /* gotoconn(){

           this.$router.push({ name: "CONN INFO" ,connid:this.connData.connid});
      
      
      
      },*/




////////////////////////////////////////////////////////
       sil(id){
           
          this.$appAxios
          .delete(`/IOScript/`+id)
          .then(login_response => {
          this.refreshIOSData();
        })
        .catch(e => console.log(e));

   

       },


       getConnData(){
       
        this.connData.connid = this.userOne.ioScriptId
            this.connData.masteruid = this.userOne.masterDeviceUID
            this.connData.slaveuid = this.userOne.slaveDeviceUID
            this.connData.mastersid = this.userOne.masterSlaveId

            this.connData.slavesid = this.userOne.slaveSlaveId
            this.connData.mioname = this.userOne.masterIOName
            this.connData.sioname = this.userOne.slaveIOName
            this.connData.lastvalue = this.userOne.lastValue
            this.connData.descript = this.userOne.description
       },

       bilgilerigetir(id){

           
           
          this.$appAxios
          .get(`/IOScript/`+id)
          .then(login_response => {
            
            this.userOne=login_response.data;
            this.getConnData();
            
            
          
           
        })
        .catch(e => alert(e.response.data));
        
        
        

   

       },
       bilgilerigetirname(key,mioname){

          
                  
        this.$appAxios
        .get(`/IOScript/search/`+key+"?masterdeviceuid="+mioname)
        .then(login_response => {
          
          this.userOne=login_response.data;
          this.getConnData();
          
          

        
        })
        .catch(e => alert(e.response.data));






        },
       guncelle(id){
          
          let value = {iOScriptId:this.connData.connid,masterDeviceUID:this.connData.masteruid,
          slaveDeviceUID:this.connData.slaveuid, masterSlaveId:this.connData.mastersid,
          slaveSlaveId:this.connData.slavesid, masterIOName:this.connData.mioname,
          slaveIOName:this.connData.sioname,lastValue:this.connData.lastvalue,description:this.connData.descript}
          
           this.$appAxios
          .put(`/IOScript/`+id, value)

            .then(login_response => {
         
            this.tableData=login_response.data;
            this.refreshIOSData()
            alert("Güncelleme İşlemi Tamamlandı...")
            
          
        })
        .catch(e => console.log(e));
        
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
       }
    
    
    

    
  },
  created: function(){
         this.refreshIOSData();
    }
  
}
</script>
