<template>
  <div>
  Project ID:
  <input v-model="baglantiData.baglantiid" type="text" placeholder="ProjectID" class=" mb-0" />
  <button  @click="bilgilerigetir(baglantiData.baglantiid)" color="primary" class="px-4">Fetch</button>
  <button  @click="sil(baglantiData.baglantiid)" color="primary" class="px-4">Delete</button>
  <br>
  <br>
  Key:
  <input v-model="baglantiData.searchkey" type="text" placeholder="Key" class=" mb-0" />
  Name:
  <input v-model="baglantiData.searchname" type="text" placeholder="Name" class=" mb-0" />

  <button  @click="bilgilerigetirname(baglantiData.searchkey,baglantiData.searchname)" color="primary" class="px-4">Search</button>
  <br>
  <br>
  Project Name:
  <input v-model="baglantiData.projectname" type="text" placeholder="ProjectName" class=" mb-0" />
  User ID:
  <input v-model="baglantiData.userid" type="text" placeholder="UserID" class=" mb-0" />
  Master DID:
  <input v-model="baglantiData.masterdeviceid" type="text" placeholder="MasterDeviceID" class=" mb-0" />
  Slave DID:
  <input v-model="baglantiData.slavedeviceid" type="text" placeholder="SlaveDeviceID" class=" mb-0" />

  <button  @click="guncelle(baglantiData.baglantiid)" color="primary" class="px-4">Update</button>
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
      <CTableHeaderCell scope="col">Project ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Project Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">User ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Master Device ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Slave Device ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Options</CTableHeaderCell>
    </CTableRow>
  </CTableHead>

<CTableBody v-for="veri in tableData">
    <CTableRow>
    <CTableHeaderCell scope="row">#</CTableHeaderCell>
      <CTableDataCell>{{veri.projectId}}</CTableDataCell>
      <CTableDataCell>{{veri.projectName}}</CTableDataCell>
      <CTableDataCell>{{veri.userId}}</CTableDataCell>
      <CTableDataCell>{{veri.masterDeviceId}}</CTableDataCell>
      <CTableDataCell>{{veri.slaveDeviceId}}</CTableDataCell>
      <CTableDataCell>
                          <button type="button"
                            class="btn btn-light mr-1"
                            @click="bilgilerigetir(veri.projectId)" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                          </button>
                          <button type="button" @click="sil(veri.projectId)"
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
  name: 'ProjectList',
  data() {
    return {
      baglantiData: {
        searchkey:"",
        searchname:"",
        baglantiid: null,
        projectname: null,
        userid: null,
        masterdeviceid: null,
        slavedeviceid: null
        
      },
      tableData:[],
      userOne:[]
    };
  },
  components: {
    
  },
   methods: {

            bilgilerigetirname(key,project){

                  
                          
        this.$appAxios
        .get(`/Project/search/`+key+"?name="+project)
        .then(login_response => {
          
          this.userOne=login_response.data;
          this.getDataUO();
          
          


        })
        .catch(e => alert(e.response.data));






        },

       sil(id){
           
          this.$appAxios
          .delete(`/Project/`+id) 
          .then(login_response => {
          
            //this.tableData=login_response.data;
            this.refreshProjectData();
           
        })
        .catch(e => console.log(e));

   

       },


       getDataUO(){
        this.baglantiData.baglantiid = this.userOne.projectId
            this.baglantiData.projectname = this.userOne.projectName
            this.baglantiData.userid = this.userOne.userId
            this.baglantiData.masterdeviceid = this.userOne.masterDeviceId
            this.baglantiData.slavedeviceid = this.userOne.slaveDeviceId
       },

       bilgilerigetir(id){

           
           
          this.$appAxios
          .get(`/Project/`+id) 
          .then(login_response => {
          
            this.userOne=login_response.data;
            //console.log(this.userOne[0])
            this.getDataUO();
            
            
          
        })
        .catch(e => alert(e.response.data));
        
        
          

   

       },
       guncelle(id){
          let value = {projectId:this.baglantiData.baglantiid,projectName:this.baglantiData.projectname,
          userId:this.baglantiData.userid,masterDeviceId:this.baglantiData.masterdeviceid,slaveDeviceId:this.baglantiData.slavedeviceid}
         // console.log("value", value);
           this.$appAxios
          .put(`/Project/`+id, value)

            .then(login_response => {
              this.refreshProjectData();
            alert("Cihaz Bağlantısı Güncellendi")
            
            
           
        })
        .catch(e => console.log(e));
       },
       refreshProjectData(){
        this.$appAxios
      .get(`/Project`)

      .then(login_response => {
          if (login_response?.data?.length > 0) {
            
            this.tableData=login_response.data;
            
          }
           else {
            alert(" Kayıtlı herhangi bir Project Verisi Yok");
            
          }
        })
        .catch(e => console.log(e));
       }
    
    
    

    
  },
  created: function(){
         this.refreshProjectData();
    }
  
}
</script>
