<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="9" :lg="7" :xl="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm>
                <h1>Create Connection</h1>
                <p class="text-medium-emphasis">Create new connection</p>

                



                Master Device Unique ID*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="connData.masterdeviceuid" type="text" placeholder="Master Device UID" class=" mb-0" />
                </CInputGroup>
                Slave Device Unique ID*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="connData.slavedeviceuid" type="text" placeholder="Slave Device UID" class=" mb-0" />
                </CInputGroup>
                Master Slave ID*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="connData.masterslaveid" type="text" placeholder="Master Slave Id" class=" mb-0" />
                </CInputGroup>
                Slave Slave ID*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                  <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="connData.slaveslaveid" type="text" placeholder="Slave Slave Id" class=" mb-0" />
                </CInputGroup>
                Master IO Name*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="connData.masterioname" type="text" placeholder="Master IO Name" class=" mb-0" />
                </CInputGroup>
                Slave IO Name*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="connData.slaveioname" type="text" placeholder="Slave IO Name" class=" mb-0" />
                </CInputGroup>
                Last Value*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="connData.lastvalue" type="text" placeholder="Last Value" class=" mb-0" />
                </CInputGroup>
                Description*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="connData.desccript" type="text" placeholder="Description" class=" mb-0" />
                </CInputGroup>
                
                <CCol>
                <button @click="connAdd" color="primary" class="px-4">Add Connection</button>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>


<script>
export default {
  name: 'ConnAdd',
  data() {
    return {
      connData: {
        
        masterdeviceuid: null,
        slavedeviceuid: null,
        masterslaveid: 1,
        slaveslaveid: 1,
        masterioname: null,
        slaveioname: null,
        lastvalue: null,
        desccript:null
      }
    };
  },

  methods: {
    connAdd(){
      //this.$appAxios
      
        this.$appAxios
      .post(`/IOScript`, {masterDeviceUID:this.connData.masterdeviceuid, slaveDeviceUID:this.connData.slavedeviceuid,
      masterSlaveId:this.connData.masterslaveid, slaveSlaveId:this.connData.slaveslaveid,masterIOName:this.connData.masterioname, 
      slaveIOName:this.connData.slaveioname, lastValue:this.connData.lastvalue,Description:this.connData.desccript})
      .then(login_response => {
          
           // alert(login_response.data);
           alert("IO Bağlantısı Tanımlandı...")
         
        })
        .catch(e => console.log(e));
        
      
      
      
      

    
    
    },
    
  }
}
</script>