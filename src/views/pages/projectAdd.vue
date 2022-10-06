<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="9" :lg="7" :xl="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm>
                <h1>Create Project</h1>
                <p class="text-medium-emphasis">Add new project</p>

                Project Name*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  
                  <input v-model="baglantiData.projectname" type="text" placeholder="Project Name" class=" mb-0" />
                  
                </CInputGroup>



                User Id*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="baglantiData.userid" type="text" placeholder="User ID" class=" mb-0" />
                </CInputGroup>
                Master Device Id*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="baglantiData.masterdeviceid" type="text" placeholder="Master Device ID" class=" mb-0" />
                </CInputGroup>
                Slave Device Id*
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <input v-model="baglantiData.slavedeviceid" type="text" placeholder="Slave Device ID" class="mb-0" />
                  
                </CInputGroup>
                
                
                
                
                <CCol>
                <button @click="baglantiAdd" color="primary" class="px-4">Add Project</button>
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
  name: 'ProjectAdd',
  data() {
    return {
      baglantiData: {
        projectname: null,
        userid: null,
        masterdeviceid: null,
        slavedeviceid: null
      }
    };
  },

  methods: {
    baglantiAdd(){
      
      

    this.$appAxios
    .post(`/Project`, {projectName:this.baglantiData.projectname, userId:this.baglantiData.userid,
    masterDeviceId:this.baglantiData.masterdeviceid, slaveDeviceId:this.baglantiData.slavedeviceid})
      
    .then(response => {
          
            //alert(login_response.data);
            alert("Cihaz Bağlantısı Kaydı Yapıldı...")
         
        })
        .catch(e => console.log(e));
        

      
      

    
    
    }
    
  }
}
</script>