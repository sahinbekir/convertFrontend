<template>
  


  <CRow>


  
<CTable responsive="xl">
  <CTableHead>
    <CTableRow>
    <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Project ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Project Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Master Device ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Slave Device ID</CTableHeaderCell>
    </CTableRow>
  </CTableHead>

<CTableBody v-for="veri in tableData">
    <CTableRow>
    <CTableHeaderCell scope="row">#</CTableHeaderCell>
    <CTableDataCell>{{veri.projectId}}</CTableDataCell>
      <CTableDataCell>{{veri.projectName}}</CTableDataCell>
      <CTableDataCell>{{veri.masterDeviceId}}</CTableDataCell>
      <CTableDataCell>{{veri.slaveDeviceId}}</CTableDataCell>
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
      baglantiId: {
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
    



    
  },
  created: function(){
    this.$appAxios
      .get(`/Project`)

      .then(login_response => {
          if (login_response?.data?.length > 0) {
            
            this.tableData=login_response.data;
            
          }
           else {
            alert(" Kayıtlı Project Veriniz Yok");
            
          }
        })
        .catch(e => console.log(e));
    }
  
}
</script>
