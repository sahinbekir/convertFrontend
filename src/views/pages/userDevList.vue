<template>


  <CRow>


  
<CTable responsive="xl">
  <CTableHead>
    <CTableRow>
    <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Device ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Device Unique ID</CTableHeaderCell>
      <CTableHeaderCell scope="col">Device Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Device Is Active?</CTableHeaderCell>
      <CTableHeaderCell scope="col">DeviceCreateTime</CTableHeaderCell>
      <CTableHeaderCell scope="col">DeviceUpdateTime</CTableHeaderCell>
    </CTableRow>
  </CTableHead>

<CTableBody v-for="veri in tableData">
    <CTableRow>
    <CTableHeaderCell scope="row">#</CTableHeaderCell>
    <CTableDataCell>{{veri.deviceId}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceUID}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceName}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceIsActive}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceCreateTime}}</CTableDataCell>
      <CTableDataCell>{{veri.deviceUpdateTime}}</CTableDataCell>
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
        deviceid: null,
        userid: null,
        deviceuid: null,
        devicename: null,
        deviceisactive: false,
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
       




       
      
    
    
    

    
  },
  created: function(){
    this.$appAxios
        .get(`/Device`)
        .then(login_response => {
          if (login_response?.data?.length > 0) {
            this.tableData=login_response.data;
          }
           else {
            alert("Sistemde Sahip Olduğunuz Bir Cihaz Bulunmamakta... :(");
          }
        })
        .catch(e => console.log(e));
    }
  
}
</script>
